import { type QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import Product from "@/domain/model/product";
import { type ArgsGetProductsByPageStatus } from "@/domain/repository/productRepository";
import ProductUseCaseImpl, {
  ProductUseCase,
} from "@/domain/useCases/productUseCase";
import ProductRepositoryImpl from "@/infrastructure/api/product/productRepositoryImpl";
import GenericError from "@/shared/types/error";
import { type PaginatedList } from "@/shared/types/helpers";

const productUsecase: ProductUseCase = new ProductUseCaseImpl(
  new ProductRepositoryImpl()
);

export const apiSlice = createApi({
  reducerPath: "api",
  /* baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  }), */
  baseQuery: fakeBaseQuery<GenericError>(),
  endpoints: (builder) => ({
    getHomePageProductsByStatusAndPage: builder.query<
      PaginatedList<Product>[],
      ArgsGetProductsByPageStatus
    >({
      async queryFn(arg, queryApi, extraOptions, baseQuery) {
        const result = await productUsecase.getHomePageTabProducts(arg);
        console.log("result ==>", result);

        return { data: result } as unknown as QueryReturnValue<
          PaginatedList<Product>[],
          GenericError
        >;
      },
    }),
  }),
});

export const { useGetHomePageProductsByStatusAndPageQuery } = apiSlice;
