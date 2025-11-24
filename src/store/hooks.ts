import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import type { AppDispatch, RootState } from './store';

/**
 * Typed version of React-Redux `useDispatch`.
 *
 * Ensures that all dispatched actions are correctly typed
 * according to the application's `AppDispatch` type.
 *
 * @example
 * const dispatch = useAppDispatch();
 * dispatch(addToCart("item-id"));
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed version of React-Redux `useSelector`.
 *
 * Provides full TypeScript support for selecting values
 * from the Redux store based on the application's `RootState` type.
 *
 * @example
 * const items = useAppSelector(state => state.cart.items);
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
