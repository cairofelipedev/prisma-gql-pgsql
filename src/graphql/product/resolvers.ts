import ProductService , { CreateProductPayload } from "../../services/product";

const queries = {};

const mutations = {
  createProduct: async (_: any, payload: CreateProductPayload) => {
    const res = await ProductService.createProduct(payload);
    return true;
  },
};

export const resolvers = { queries, mutations };
