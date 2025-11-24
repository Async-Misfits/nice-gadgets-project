import type { RootState } from './store';
import type { Product } from '../types/Product';

/**
 * Selects all cart items from the Redux store.
 *
 * @param state - Global Redux state
 * @returns Array of cart items with itemId and quantity
 *
 * @example
 * const items = useAppSelector(selectCartItems);
 */
export const selectCartItems = (state: RootState) => state.cart.items;

/**
 * Selects all favorite product IDs from the Redux store.
 *
 * @param state - Global Redux state
 * @returns Array of itemIds marked as favorites
 *
 * @example
 * const favorites = useAppSelector(selectFavoriteIds);
 */
export const selectFavoriteIds = (state: RootState) => state.favorites.itemIds;

/**
 * Calculates the total number of products in the cart
 * (sum of all quantities).
 *
 * @param state - Global Redux state
 * @returns Total count of items in the cart
 *
 * @example
 * const count = useAppSelector(selectCartTotalCount);
 */
export const selectCartTotalCount = (state: RootState) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);

/**
 * Creates a selector that calculates the total price of the cart.
 * The selector requires the list of products to match itemId with price.
 *
 * @param products - Array of available products with price information
 * @returns A memoizable selector that accepts Redux state
 *
 * @example
 * const totalPrice = useAppSelector(selectCartTotalPrice(products));
 */
export const selectCartTotalPrice =
  (products: Product[]) => (state: RootState) =>
    state.cart.items.reduce((sum, cartItem) => {
      const product = products.find((p) => p.itemId === cartItem.itemId);
      return product ? sum + product.price * cartItem.quantity : sum;
    }, 0);

/**
 * Creates a selector that returns full product objects
 * for all items marked as favorites.
 *
 * @param products - Array of all available products
 * @returns A selector that returns detailed favorite products
 *
 * @example
 * const favorites = useAppSelector(selectFavoriteProducts(products));
 */
export const selectFavoriteProducts =
  (products: Product[]) => (state: RootState) =>
    products.filter((p) => state.favorites.itemIds.includes(p.itemId));
