import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Grid } from '../../layout/Grid';
import styles from './ProductsList.module.scss';
import type { Product } from '../../../types/Product';
interface ProductsListProps {
  products: Product[];

  toggleFavorite: () => void;
  addToCart: () => void;

  isAdded?: boolean;
  isFavorite?: boolean;
     
}

export const ProductsList: React.FC<ProductsListProps> = ({ 
  products,
  toggleFavorite,
  addToCart,
  isAdded = true,
  isFavorite = false,
 }) => {
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

            toggleFavorite={toggleFavorite}
            addToCart={addToCart}

            isAdded={isAdded}
            isFavorite={isFavorite}
          />
        </div>
      ))}
    </Grid>
  );
};
