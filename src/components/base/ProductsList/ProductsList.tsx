import React, { useCallback } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Grid } from '../../layout/Grid';
import styles from './ProductsList.module.scss';
import type { Product } from '../../../types/Product';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectCartItems, selectFavoriteIds } from '../../../store/selectors';
import { addToCart } from '../../../store/cartSlice';
import { toggleFavorite } from '../../../store/favoritesSlice';
interface ProductsListProps {
  products: Product[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(selectCartItems);
  const favoriteIds = useAppSelector(selectFavoriteIds);

  const isAdded = useCallback(
    (productId: string) => cartItems.some((item) => item.itemId === productId),
    [cartItems],
  );

  const isFavorite = useCallback(
    (productId: string) => favoriteIds.includes(productId),
    [favoriteIds],
  );

  // додати в кошик
  const handleAddToCart = useCallback(
    (productId: string) => {
      // якщо у вас action називається інакше — заміни тут
      dispatch(addToCart(productId));
      // або dispatch(cartActions.addItem(product));
    },
    [dispatch],
  );

  // тогл фаворита
  const handleToggleFavorite = useCallback(
    (productId: string) => {
      // якщо у вас action називається інакше — заміни тут
      dispatch(toggleFavorite(productId));
      // або dispatch(favoritesActions.toggle(productId));
    },
    [dispatch],
  );

  return (
    <Grid>
      {products.map((product) => (
        <div
          key={product.id}
          className={styles.cardItem}
        >
          <ProductCard
            product={product}
            isCatalog={true}
            toggleFavorite={handleToggleFavorite}
            addToCart={handleAddToCart}
            isAdded={isAdded(product.itemId)}
            isFavorite={isFavorite(product.itemId)}
          />
        </div>
      ))}
    </Grid>
  );
};
