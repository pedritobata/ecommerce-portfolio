import { PaginatedListResponseDTO } from "@/shared/types/dto";
import ProductDTO from "@/shared/types/productDTO";

export const DEFAULT_PRODUCTS_TAB_PER_PAGE_LIMIT = 3;
export const DEFAULT_PRODUCTS_PAGE = 1;

export const EMPTY_PAGINATED_PRODUCTS_LIST: PaginatedListResponseDTO<ProductDTO> =
  {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
  };
