import type { CartState } from './cartSlice';
import type { FavoritesState } from './favoritesSlice';

const CART_KEY = 'cart';
const FAV_KEY = 'favorites';

type PersistedState = {
  cart?: CartState;
  favorites?: FavoritesState;
};

export function loadState(): PersistedState | undefined {
  try {
    const cart = localStorage.getItem(CART_KEY);
    const favorites = localStorage.getItem(FAV_KEY);

    return {
      cart: cart ? (JSON.parse(cart) as CartState) : undefined,
      favorites:
        favorites ? (JSON.parse(favorites) as FavoritesState) : undefined,
    };
  } catch {
    return undefined;
  }
}

export function saveState(state: {
  cart: CartState;
  favorites: FavoritesState;
}) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
    localStorage.setItem(FAV_KEY, JSON.stringify(state.favorites));
  } catch {
    // ignore
  }
}
