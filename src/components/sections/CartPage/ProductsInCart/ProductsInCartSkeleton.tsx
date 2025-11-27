import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './ProductsInCart.scss';
import { Grid } from '@/components/layout/Grid';
import { CartItemSkeleton } from '@/components/ui/CartItem';

type ProductsInCartSkeletonProps = {
  rows?: number;
};

export const ProductsInCartSkeleton: React.FC<ProductsInCartSkeletonProps> = ({
  rows = 3,
}) => {
  return (
    <Grid className="products-in-cart">
      <div className="products-in-cart__wrapper">
        {Array.from({ length: rows }).map((_, index) => (
          <CartItemSkeleton key={index} />
        ))}
      </div>

      <div className="products-in-cart__checkout">
        <div className="products-in-cart__checkout-content">
          <div className="products-in-cart__total">
            <Skeleton
              width={140}
              height={28}
            />
            <Skeleton
              width={120}
              height={18}
            />
          </div>

          <div className="products-in-cart__line" />

          <Skeleton
            width="100%"
            height={40}
            style={{ borderRadius: 8 }}
          />
        </div>
      </div>
    </Grid>
  );
};
