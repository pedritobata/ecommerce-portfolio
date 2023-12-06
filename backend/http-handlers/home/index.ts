import type { NextApiRequest, NextApiResponse } from "next";
import { PaginatedListResponseDTO } from "@/shared/types/dto";
import ProductDTO, { ProductStatus } from "@/shared/types/productDTO";
import {
  DEFAULT_PRODUCTS_PAGE,
  EMPTY_PAGINATED_PRODUCTS_LIST,
} from "@/backend/shared/constants";
import { GenericResponseError } from "@/backend/shared/types/error";
import { getHomePageTabProductsByStatus } from "@/backend/db/products";
import { HOME_PAGE_TABS_PRODUCTS_STATUS } from "@/backend/shared/businessRules";

export const homePageProductsTabSectionHandler = async (
  query: Partial<{ [key: string]: string | string[] }>
) => {
  //const query = req.query;
  const pagesMap = HOME_PAGE_TABS_PRODUCTS_STATUS.reduce<
    Partial<{ [key in ProductStatus]: number }>
  >((acc, status) => {
    acc[status] = DEFAULT_PRODUCTS_PAGE;
    return acc;
  }, {});

  const queryStatusses = Object.getOwnPropertyNames(query);
  queryStatusses.forEach((status) => {
    const page =
      query[status] && /\d+/i.test(query[status] as string)
        ? parseInt(query[status] as string)
        : DEFAULT_PRODUCTS_PAGE;
    if (pagesMap[status as ProductStatus]) {
      pagesMap[status as ProductStatus] = page;
    }
  });

  const productsResultPromises: Promise<
    PaginatedListResponseDTO<ProductDTO>
  >[] = Object.keys(pagesMap).map((status) =>
    getHomePageTabProductsByStatus(pagesMap[status as ProductStatus]!, status)
  );

  const productsResult = await Promise.allSettled(productsResultPromises);

  return productsResult.map((prods) =>
    prods.status === "fulfilled" ? prods.value : EMPTY_PAGINATED_PRODUCTS_LIST
  );
  /* res
      .status(200)
      .json(
        productsResult.map((prods) =>
          prods.status === "fulfilled"
            ? prods.value
            : EMPTY_PAGINATED_PRODUCTS_LIST
        )
      ); */
};
