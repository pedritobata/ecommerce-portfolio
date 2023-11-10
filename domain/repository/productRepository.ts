
import Product from "../model/product";
import { PaginatedList } from '../../shared/types/helpers';

export default interface ProductRepository {
    getHomePageTabProducts: (page?: number) => Promise<PaginatedList<Product>>;
    getHomePageSuggestedProducts: () => Promise<PaginatedList<Product>>;
    // getByStatus: (statusIds: string[], limit?: number) => Promise<Product[]>;
}