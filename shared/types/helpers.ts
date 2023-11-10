export interface PaginatedList<T> {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: T[];
}
