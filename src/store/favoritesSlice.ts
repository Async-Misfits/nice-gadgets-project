import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/**
 * Redux state shape for the list of favorite products.
 * Stores only product itemIds, not full product objects.
 */
export interface FavoritesState {
  /** Array of product itemIds marked as favorites. */
  itemIds: string[];
}

/**
 * Initial state for the favorites slice.
 */
export const favoritesInitialState: FavoritesState = {
  itemIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    /**
     * Toggles the favorite status for a product.
     * - If the product is already in favorites → it is removed.
     * - If not → it is added.
     *
     * @param state - Current favorites state
     * @param action - Product itemId to toggle
     */
    toggleFavorite(state, action: PayloadAction<string>) {
      const itemId = action.payload;

      if (state.itemIds.includes(itemId)) {
        state.itemIds = state.itemIds.filter((id) => id !== itemId);
      } else {
        state.itemIds.push(itemId);
      }
    },

    /**
     * Clears the entire favorites list.
     *
     * @param state - Current favorites state
     */
    clearFavorites(state) {
      state.itemIds = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
