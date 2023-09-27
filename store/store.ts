import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './features/shop/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

