import Product from "@/domain/model/product";
import ProductRepository from "@/domain/repository/productRepository";
import { products } from "@/dummy/products";
import ProductAdapter from "./productAdapter";

export default class ProductRepositoryImpl implements ProductRepository {


    async getHomePageTabProducts(): Promise<Product[]>{
        return products.map(prod => ProductAdapter.toProduct(prod));
    }

    async getHomePageSuggestedProducts (): Promise<Product[]> {
        return [];
    }
}