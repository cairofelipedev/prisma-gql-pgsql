import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Product } from "./product";
import { prismaClient } from "../lib/db";

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            type Product {
              id: ID!
              name: String!
              price: Float!
            }

            type Query {
              products: [Product!]!
            }

            type Mutation {
               ${User.mutations},
               ${Product.mutations}
            }
        `,
    resolvers: {
      Query: {
        products: async () => {
          return await prismaClient.product.findMany({
            select: {
              id: true,
              name: true,
              price: true,
            },
          });
        },
      },
      Mutation: {
        ...User.resolvers.mutations,
        ...Product.resolvers.mutations,
      },
    },
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;