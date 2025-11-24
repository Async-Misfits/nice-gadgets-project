// src/pages/FavoritesPage/FavoritesPage.tsx
import React from 'react';

import rawProducts from '../../api/products.json';
import { useAppSelector } from '../../store/hooks';
import { selectFavoriteProducts } from '../../store/selectors';
import { FavoritesTemplate } from '../../components/Templates/FavoritesPage/FavoritesTemplate';
import type { Product } from '../../types/Product';

export const FavoritesPage: React.FC = () => {
  const products = rawProducts as Product[];

  const favoriteProducts = useAppSelector(selectFavoriteProducts(products));

  return (
    <FavoritesTemplate
      products={favoriteProducts}
      totalCount={favoriteProducts.length}
    />
  );
};
