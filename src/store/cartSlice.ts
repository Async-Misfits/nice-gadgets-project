import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/**
 * One record in the shopping cart.
 * Represents a specific product and the quantity selected by the user.
 */
export type CartItem = {
  /** Unique product identifier (itemId from product catalog). */
  itemId: string;

  /** Number of units of this product in the cart. */
  quantity: number;
};

/**
 * Redux state shape for the shopping cart.
 */
export interface CartState {
  /** List of all products currently added to the cart. */
  items: CartItem[];
}

/**
 * Initial state for the shopping cart.
 */
export const cartInitialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    /**
     * Adds one unit of the given product to the cart.
     * If the product already exists, increases its quantity by 1.
     *
     * @param state - Current cart state
     * @param action - The product itemId to add
     */
    addToCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existing = state.items.find((i) => i.itemId === itemId);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ itemId, quantity: 1 });
      }
    },

    /**
     * Completely removes a product from the cart.
     *
     * @param state - Current cart state
     * @param action - The product itemId to remove
     */
    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      state.items = state.items.filter((i) => i.itemId !== itemId);
    },

    /**
     * Sets a new quantity for the given product.
     * - If quantity becomes <= 0, the product is removed.
     *
     * @param state - Current cart state
     * @param action - Object containing { itemId, quantity }
     */
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

    /**
     * Removes all products from the cart.
     *
     * @param state - Current cart state
     */
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, setQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
