import React, { useCallback } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { Grid } from '@/components/layout/Grid';
import styles from './ProductsList.module.scss';
import type { Product } from '@/types/Product';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectCartItems, selectFavoriteIds } from '@/store/selectors';
import { addToCart } from '@/store/cartSlice';
import { toggleFavorite } from '@/store/favoritesSlice';
import { ProductCardSkeleton } from '@/components/ui/ProductCard';
interface ProductsListProps {
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export const ProductsList: React.FC<ProductsListProps> = ({
  products,
  isLoading = false,
  skeletonCount = 8,
}) => {
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

  const handleAddToCart = useCallback(
    (productId: string) => {
      dispatch(addToCart(productId));
    },
    [dispatch],
  );

  const handleToggleFavorite = useCallback(
    (productId: string) => {
      dispatch(toggleFavorite(productId));
    },
    [dispatch],
  );

  return (
    <Grid>
      {isLoading ?
        Array.from({ length: skeletonCount }).map((_, index) => (
          <div
            key={index}
            className={styles.cardItem}
          >
            <ProductCardSkeleton />
          </div>
        ))
      : products.map((product) => (
          <div
            key={product.id}
            className={styles.cardItem}
          >
            <ProductCard
              product={product}
              isCatalog
              toggleFavorite={handleToggleFavorite}
              addToCart={handleAddToCart}
              isAdded={isAdded(product.itemId)}
              isFavorite={isFavorite(product.itemId)}
            />
          </div>
        ))
      }
    </Grid>
  );
};
