import type { RootState } from './store';
import type { Product } from '../types/Product';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectFavoriteIds = (state: RootState) => state.favorites.itemIds;

export const selectCartTotalCount = (state: RootState) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);

export const selectCartTotalPrice =
  (products: Product[]) => (state: RootState) =>
    state.cart.items.reduce((sum, cartItem) => {
      const product = products.find((p) => p.itemId === cartItem.itemId);
      return product ? sum + product.price * cartItem.quantity : sum;
    }, 0);

export const selectFavoriteProducts =
  (products: Product[]) => (state: RootState) =>
    products.filter((p) => state.favorites.itemIds.includes(p.itemId));
