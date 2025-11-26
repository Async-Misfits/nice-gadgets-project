// src/pages/FavoritesPage/FavoritesPage.tsx
import React from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectFavoriteProducts } from '../../store/selectors';
import { FavoritesTemplate } from '../../components/Templates/FavoritesPage/FavoritesTemplate';
import { useProducts } from '../../hooks/useProducts';

export const FavoritesPage: React.FC = () => {
  const { products } = useProducts();
  const favoriteProducts = useAppSelector(selectFavoriteProducts(products));

  return (
    <FavoritesTemplate
      products={favoriteProducts}
      totalCount={favoriteProducts.length}
    />
  );
};
