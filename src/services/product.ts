import { prismaClient } from "../lib/db";

export interface CreateProductPayload {
  name: string;
  price: number;
  quantity: number;
}

class ProductService {
  public static createProduct(payload: CreateProductPayload) {
    const { name, price, quantity } = payload;

    return prismaClient.product.create({
      data: {
        name,
        price,
        quantity,
      },
    });
  }
}

export default ProductService;
