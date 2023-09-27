import { CartItem } from "@/domain/model/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  entities: CartItem[];
  status: string | null;
};

const initialState: SliceState = {
  entities: [],
  status: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.entities.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.entities = state.entities.filter(
        (item) => item.product.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
