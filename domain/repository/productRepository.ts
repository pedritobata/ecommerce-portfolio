
import Product from "../model/product";

export default interface ProductRepository {
    getHomePageTabProducts: () => Promise<Product[]>;
    getHomePageSuggestedProducts: () => Promise<Product[]>;
    // getByStatus: (statusIds: string[], limit?: number) => Promise<Product[]>;
}