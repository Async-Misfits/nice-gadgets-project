import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Grid } from '../../layout/Grid';
import styles from './ProductsList.module.scss';

export interface Product {
  id: string | number;
  title: string;
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  capacity: string;
  ram: string;
}

interface ProductsListProps {
  products: Product[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <div
          key={product.id}
          className={styles.cardItem}
        >
          <ProductCard
            title={product.title}
            priceRegular={product.priceRegular}
            priceDiscount={product.priceDiscount}
            screen={product.screen}
            capacity={product.capacity}
            ram={product.ram}
            isCatalog={true}
          />
        </div>
      ))}
    </Grid>
  );
};
