export const queries = `#graphql
    type Product {
      id: ID!
      name: String!
      price: Float!
    }

    type Query {
      products: [Product!]!
    }
`;