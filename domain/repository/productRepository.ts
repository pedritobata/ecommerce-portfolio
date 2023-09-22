import Product, { ProductStatus } from "../model/product";

export default interface ProductRepository {
    getByStatus: (status: ProductStatus[], limit?: number) => Promise<Product[]>;
}