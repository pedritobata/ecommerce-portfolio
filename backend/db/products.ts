import { products as productsDummy } from "@/dummy/products";
import { PaginatedListResponseDTO } from "@/shared/types/dto";
import ProductDTO, { ProductStatus } from "@/shared/types/productDTO";
import { DEFAULT_PRODUCTS_TAB_PER_PAGE_LIMIT } from "../shared/constants";

export const getHomePageTabProductsByStatus = async (
  page: number,
  prodStatus: string
): Promise<PaginatedListResponseDTO<ProductDTO>> => {
  const filteredProds = productsDummy
    .slice()
    .filter((prod) => prod.status.name === prodStatus);
  const totalPages = filteredProds.length / DEFAULT_PRODUCTS_TAB_PER_PAGE_LIMIT;
  const startIdx = (page - 1) * DEFAULT_PRODUCTS_TAB_PER_PAGE_LIMIT;
  const endIdx = startIdx + DEFAULT_PRODUCTS_TAB_PER_PAGE_LIMIT;
  const products: ProductDTO[] = filteredProds.slice(startIdx, endIdx);

  return {
    page,
    per_page: DEFAULT_PRODUCTS_TAB_PER_PAGE_LIMIT,
    total: productsDummy.length,
    total_pages: Math.ceil(totalPages),
    data: products,
  };
};
