import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Product from "@/domain/model/product";
import ProductUseCaseImpl, {
  ProductUseCase,
} from "@/domain/useCases/productUseCase";
import ProductRepositoryImpl from "@/infrastructure/api/product/productRepositoryImpl";
import GenericError from "@/shared/types/error";

type SliceState = {
  entities: Product[];
  status: string;
  error: string;
};

const initialState: SliceState = {
  entities: [],
  status: "idle",
  error: "",
};

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

const homePageProductsTabSlice = createSlice({
  name: "homePageProductsTab",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.entities = action.payload as unknown as Product[];
        state.status = "idle";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.status = "idle";
      });
  },
});

export default homePageProductsTabSlice.reducer;
