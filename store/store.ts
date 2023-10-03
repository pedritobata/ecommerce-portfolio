import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './features/shop/cartSlice';
import homePageProductsTabReducer from './features/product/homePageProductsTabSlice';

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        homePageProductsTab: homePageProductsTabReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

