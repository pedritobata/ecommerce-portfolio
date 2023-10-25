import {
  createSlice,
  createAsyncThunk,
  current,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import Product from "@/domain/model/product";
import ProductUseCaseImpl, {
  ProductUseCase,
} from "@/domain/useCases/productUseCase";
import ProductRepositoryImpl from "@/infrastructure/api/product/productRepositoryImpl";
import GenericError from "@/shared/types/error";

const productUsecase: ProductUseCase = new ProductUseCaseImpl(
  new ProductRepositoryImpl()
);

export const fetchProducts = createAsyncThunk<
  Promise<Product[] | string>,
  void,
  {
    rejectValue: string;
  }
>("homePageProductsTab/fetchProducts", async (_, thunkApi) => {
  const products = await productUsecase.getHomePageTabProducts();
  if (products instanceof GenericError)
    return thunkApi.rejectWithValue(products.message) as unknown as string;

  return products;
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
        console.log("new state => ", current(state));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.status = "idle";
      });
  },
});

export default homePageProductsTabSlice.reducer;
