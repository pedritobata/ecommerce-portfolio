import Product from "@/domain/model/product";
import ProductRepository from "@/domain/repository/productRepository";
import { products } from "@/dummy/products";
import ProductAdapter from "./productAdapter";
import { PaginatedList } from '../../../shared/types/helpers';

export default class ProductRepositoryImpl implements ProductRepository {


    async getHomePageTabProducts(page?: number): Promise<PaginatedList<Product>>{
        return {} as unknown as PaginatedList<Product>//products.map(prod => ProductAdapter.toProduct(prod));
    }

    async getHomePageSuggestedProducts (): Promise<PaginatedList<Product>> {
        return [] as unknown as PaginatedList<Product>
    }
}