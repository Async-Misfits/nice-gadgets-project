import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface FavoritesState {
  itemIds: string[];
}

export const favoritesInitialState: FavoritesState = {
  itemIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const itemId = action.payload;

      if (state.itemIds.includes(itemId)) {
        state.itemIds = state.itemIds.filter((id) => id !== itemId);
      } else {
        state.itemIds.push(itemId);
      }
    },

    clearFavorites(state) {
      state.itemIds = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
