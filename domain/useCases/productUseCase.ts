import GenericError from "@/shared/types/error";
import Product from "../model/product";
import ProductRepository from "../repository/productRepository";
import { PaginatedList } from '../../shared/types/helpers';

export interface ProductUseCase {
  getHomePageTabProducts: (page?: number) => Promise<PaginatedList<Product>  | GenericError>;
  getHomePageSuggestedProducts: () => Promise<PaginatedList<Product>  | GenericError>;
}

export default class ProductUseCaseImpl implements ProductUseCase {
  private _productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async getHomePageTabProducts(page?: number): Promise<PaginatedList<Product> | GenericError> {
    try {
      const result = await this._productRepository.getHomePageTabProducts(page);
      console.log('data =>', result);
      if (!result.data || result.data.length === 0) {
        throw new Error("No products retrieved for tabs section from api");
      }

      return result;
    } catch (err) {
      console.error((err as Error).message || err);
      return new GenericError("Could not get products for tabs section");
    }
  }

  async getHomePageSuggestedProducts(): Promise<PaginatedList<Product> | GenericError> {
    try {
      const result = await this._productRepository.getHomePageSuggestedProducts();
      if (!result.data || result.data.length === 0) {
        throw new Error("No products retrieved for suggested section from api");
      }

      return result;
    } catch (err) {
      console.error((err as Error).message || err);
      return new GenericError("Could not get products for suggested section");
    }
  }
}
