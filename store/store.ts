import {
  type PreloadedState,
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import cartSliceReducer from "./features/shop/cartSlice";
import homePageProductsTabReducer from "./features/product/homePageProductsTabSlice";
import { apiSlice } from "./features/api/apiSlice";

const rootReducer = combineReducers({
  cart: cartSliceReducer,
  homePageProductsTab: homePageProductsTabReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
