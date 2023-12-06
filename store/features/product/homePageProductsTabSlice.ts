import {
  createSlice,
  createAsyncThunk,
  current,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import Product from "@/domain/model/product";
import ProductUseCaseImpl, {
  type ProductUseCase,
} from "@/domain/useCases/productUseCase";
import ProductRepositoryImpl from "@/infrastructure/api/product/productRepositoryImpl";
import GenericError from "@/shared/types/error";
import type { RootState } from "@/store/store";
import { PaginatedList } from "../../../shared/types/helpers";

const productUsecase: ProductUseCase = new ProductUseCaseImpl(
  new ProductRepositoryImpl()
);

// TODO: get rid of the whole file if the equivalent api slice was created!!

export const fetchProducts = createAsyncThunk<
  Promise<PaginatedList<Product>[] | string>,
  { page?: number } | undefined,
  {
    rejectValue: string;
  }
>("homePageProductsTab/fetchProducts", async (args, thunkApi) => {
  const result = {} //await productUsecase.getHomePageTabProducts(args?.page);
  if (result instanceof GenericError)
    return thunkApi.rejectWithValue(result.message) as unknown as string;

  return result;
});

// Normalize data
const homePageProductsAdapter = createEntityAdapter<Product>();

const homePageProductsTabSlice = createSlice({
  name: "homePageProductsTab",
  initialState: homePageProductsAdapter.getInitialState({
    status: "idle",
    error: "",
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        homePageProductsAdapter.setAll(
          state,
          action.payload as unknown as Product[]
        );
        state.status = "idle";
        // console.log("new state => ", current(state));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.status = "idle";
      });
  },
});

export default homePageProductsTabSlice.reducer;

export const {
  selectAll: selectAllHomePageProductsTab,
  selectById: selectByIdHomePageProductsTab,
  selectEntities: selectEntitiesHomePageProductsTab,
  selectIds: selectIdsHomePageProductsTab,
  selectTotal: selectTotalHomePageProductsTab,
} = homePageProductsAdapter.getSelectors<RootState>(
  (state) => state.homePageProductsTab
);
