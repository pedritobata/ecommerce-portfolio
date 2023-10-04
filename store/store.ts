import { type PreloadedState, configureStore, combineReducers } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import cartSliceReducer from "./features/shop/cartSlice";
import homePageProductsTabReducer from "./features/product/homePageProductsTabSlice";


const rootReducer = combineReducers({
  cart: cartSliceReducer,
  homePageProductsTab: homePageProductsTabReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
