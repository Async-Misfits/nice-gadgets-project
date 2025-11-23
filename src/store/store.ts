import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartInitialState } from './cartSlice';
import favoritesReducer, { favoritesInitialState } from './favoritesSlice';
import { loadState, saveState } from './localStorage';

const persisted = loadState();

const preloadedState =
  persisted ?
    {
      cart: persisted.cart ?? cartInitialState,
      favorites: persisted.favorites ?? favoritesInitialState,
    }
  : undefined;

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveState({ cart: state.cart, favorites: state.favorites });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
