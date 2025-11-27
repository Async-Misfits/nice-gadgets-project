import type React from 'react';
import { ProductsInCart } from '@/components/sections/CartPage/ProductsInCart';
import { Typography } from '@/components/base/Typography';
import { Grid } from '../../layout/Grid';
import { Breadcrumbs } from '../../ui/Breadcrumbs/Breadcrumbs';
import styles from './CartTemplate.module.scss';
import { ProductsInCartSkeleton } from '../../sections/CartPage/ProductsInCart';

type CartItemData = {
  itemId: string;
  title: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
};

type Props = {
  items: CartItemData[];
  totalCount: number;
  totalPrice: number;
  isLoading?: boolean;
};

export const CartTemplate: React.FC<Props> = ({
  items,
  totalCount,
  totalPrice,
  isLoading = false,
}) => {
  const isEmpty = !isLoading && totalCount === 0;

  return (
    <main className={styles.page}>
      {/* Breadcrumbs */}
      <section className={styles.heroTopSpacing}>
        <Grid>
          <div className={styles.lineWrapper}>
            <Breadcrumbs showBack />
          </div>
        </Grid>
      </section>

      {/* Title */}
      <section className={styles.heroTopSpacing}>
        <Grid>
          <div className={styles.lineWrapper}>
            <Typography
              as="h1"
              variant="h1"
            >
              Cart
            </Typography>
          </div>
        </Grid>
      </section>

      {/* Content */}
      <section className={styles.sectionSpacing}>
        {isLoading ?
          <ProductsInCartSkeleton />
        : isEmpty ?
          <Grid>
            <div className={styles.listWrapper}>
              <Typography
                variant="body"
                className={styles.emptyText}
              >
                No items in cart
              </Typography>
            </div>
          </Grid>
        : <ProductsInCart
            items={items}
            totalCount={totalCount}
            totalPrice={totalPrice}
          />
        }
      </section>
    </main>
  );
};
