import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  itemId: string;
  quantity: number;
};

export interface CartState {
  items: CartItem[];
}

export const cartInitialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existing = state.items.find((i) => i.itemId === itemId);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ itemId, quantity: 1 });
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      state.items = state.items.filter((i) => i.itemId !== itemId);
    },

    setQuantity(
      state,
      action: PayloadAction<{ itemId: string; quantity: number }>,
    ) {
      const { itemId, quantity } = action.payload;
      const existing = state.items.find((i) => i.itemId === itemId);

      if (!existing) return;

      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.itemId !== itemId);
      } else {
        existing.quantity = quantity;
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, setQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
