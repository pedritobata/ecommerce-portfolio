import { PaginatedListResponseDTO } from "./dto";
import { PaginatedList } from "./helpers";

export abstract class AdapterDTO<T, U> {
  abstract toModel(t: T): U;
  toPaginatedList(paginatedDTO: PaginatedListResponseDTO<T>): PaginatedList<U> {
    console.log('this', this);
    const { page, per_page, total, total_pages, data } = paginatedDTO;
    return {
      page,
      perPage: per_page,
      total,
      totalPages: total_pages,
      data: data.map((item) => this.toModel(item)),
    };
  }
}
