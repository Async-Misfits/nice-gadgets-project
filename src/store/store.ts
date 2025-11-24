import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartInitialState } from './cartSlice';
import favoritesReducer, { favoritesInitialState } from './favoritesSlice';
import { loadState, saveState } from './localStorage';

const persisted = loadState();

/**
 * Preloaded state for Redux store.
 *
 * If localStorage contains persisted data, it is merged with fallback initial states
 * to ensure that every slice has a complete and valid state shape.
 */
const preloadedState =
  persisted ?
    {
      cart: persisted.cart ?? cartInitialState,
      favorites: persisted.favorites ?? favoritesInitialState,
    }
  : undefined;

/**
 * Main Redux store configuration.
 *
 * - Registers all reducers (cart, favorites)
 * - Provides support for preloaded state (persist)
 * - Exposes typed dispatch and state selectors
 */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  preloadedState,
});

/**
 * Subscribes to store updates and persists selected state slices into localStorage.
 * Runs on every state change.
 */
store.subscribe(() => {
  const state = store.getState();
  saveState({ cart: state.cart, favorites: state.favorites });
});

/**
 * Root Redux state type inferred from the store configuration.
 *
 * Can be used to strongly type:
 * - useSelector
 * - selectors
 * - thunks
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Dispatch type inferred from the store.
 *
 * Used for typing:
 * - useDispatch
 * - thunks
 * - async actions
 */
export type AppDispatch = typeof store.dispatch;
