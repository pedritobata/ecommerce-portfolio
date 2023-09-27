import GenericError from "@/shared/types/error";
import Product from "../model/product";
import ProductRepository from "../repository/productRepository";

export interface ProductUseCase {
  getHomePageTabProducts: () => Promise<Product[] | GenericError>;
  getHomePageSuggestedProducts: () => Promise<Product[] | GenericError>;
}

export default class ProductUseCaseImpl implements ProductUseCase {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async getHomePageTabProducts(): Promise<Product[] | GenericError> {
    try {
      const products = await this._productRepository.getHomePageTabProducts();
      if (!products || products.length === 0) {
        throw new Error("No products retrieved for tabs section from api");
      }

      return products;
    } catch (err) {
      console.error((err as Error).message || err);
      return new GenericError("Could not get products for tabs section");
    }
  }

  async getHomePageSuggestedProducts(): Promise<Product[] | GenericError> {
    try {
      const products = await this._productRepository.getHomePageSuggestedProducts();
      if (!products || products.length === 0) {
        throw new Error("No products retrieved for suggested section from api");
      }

      return products;
    } catch (err) {
      console.error((err as Error).message || err);
      return new GenericError("Could not get products for suggested section");
    }
  }
}
