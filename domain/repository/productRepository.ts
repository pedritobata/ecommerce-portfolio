import Product from "../model/product";
import { PaginatedList } from "../../shared/types/helpers";

export type ArgsGetProductsByPageStatus = {
  [status: string]: number;
};

export default interface ProductRepository {
  getHomePageTabProducts: (
    args?: ArgsGetProductsByPageStatus
  ) => Promise<PaginatedList<Product>[]>;
  getHomePageSuggestedProducts: () => Promise<PaginatedList<Product>>;
  // getByStatus: (statusIds: string[], limit?: number) => Promise<Product[]>;
}
