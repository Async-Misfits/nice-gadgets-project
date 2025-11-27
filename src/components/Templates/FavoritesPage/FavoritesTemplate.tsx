// src/pages/FavoritesPage/FavoritesTemplate.tsx
import React from 'react';

import styles from './FavoritesTemplate.module.scss';
import type { Product } from '../../../types/Product';
import { Grid } from '../../layout/Grid';
import { Breadcrumbs } from '../../ui/Breadcrumbs/Breadcrumbs';
import { Typography } from '../../base/Typography';
import { ProductsList } from '../../base/ProductsList/ProductsList';

type Props = {
  products: Product[];
  totalCount: number;
  isLoading: boolean;
};

export const FavoritesTemplate: React.FC<Props> = ({
  products,
  totalCount,
  isLoading = false,
}) => {
  const isEmpty = totalCount === 0;

  return (
    <main className={styles.page}>
      <section className={styles.heroTopSpacing}>
        <Grid>
          <div className={styles.fullLineWrapper}>
            <Breadcrumbs showBack />
          </div>
        </Grid>
      </section>

      <section className={styles.heroTopSpacing}>
        <Grid>
          <div className={styles.fullLineWrapper}>
            <Typography
              as="h1"
              variant="h1"
            >
              Favorites
            </Typography>
          </div>

          <div className={styles.countWrapper}>
            <Typography
              variant="body"
              className={styles.count}
            >
              {totalCount} items
            </Typography>
          </div>
        </Grid>
      </section>

      <section className={styles.sectionSpacing}>
        <Grid>
          <div className={styles.listWrapper}>
            {isEmpty ?
              <Typography
                variant="body"
                className={styles.emptyText}
              >
                {isLoading ? 'Loading...' : 'No favorites yet'}
              </Typography>
            : <ProductsList products={products} />}
          </div>
        </Grid>
      </section>
    </main>
  );
};
