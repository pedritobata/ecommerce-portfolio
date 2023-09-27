import Product from "@/domain/model/product";
import ProductRepository from "@/domain/repository/productRepository";

export default class ProductRepositoryImpl implements ProductRepository {


    async getHomePageTabProducts(): Promise<Product[]>{
        
    }

    async getHomePageSuggestedProducts (): Promise<Product[]> {

    }
}