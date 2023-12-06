import Product from "@/domain/model/product";
import ProductRepository, {
  ArgsGetProductsByPageStatus,
} from "@/domain/repository/productRepository";
import { products } from "@/dummy/products";
import ProductAdapter from "./productAdapter";
import { PaginatedList } from "../../../shared/types/helpers";
import { PaginatedListResponseDTO } from "@/shared/types/dto";
import ProductDTO from "@/shared/types/productDTO";
import { addParamsToUrl } from "@/utils/utils";

export default class ProductRepositoryImpl implements ProductRepository {
  async getHomePageTabProducts(
    args: ArgsGetProductsByPageStatus = {}
  ): Promise<PaginatedList<Product>[]> {
    const result = await fetch(
      addParamsToUrl(
        new URL(
          `${process.env.NEXT_PUBLIC_API_BASE_URL!}/home/products-tab-section`
        ),
        args
      )
    );
    const data =
      (await result.json()) as PaginatedListResponseDTO<ProductDTO>[];
    console.log("data => ", data);

    const adapter = new ProductAdapter();
    return data.map(adapter.toPaginatedList.bind(adapter));
  }

  async getHomePageSuggestedProducts(): Promise<PaginatedList<Product>> {
    return [] as unknown as PaginatedList<Product>;
  }
}
