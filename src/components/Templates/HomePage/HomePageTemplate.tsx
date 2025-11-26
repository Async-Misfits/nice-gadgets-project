import type { FC } from 'react';
import styles from './HomePageTemplate.module.scss';
import { MainSlider } from '../../sections/HomePage/MainSlider/MainSlider';
import { ProductsCarousel } from '../../ui/ProductsCarousel/ProductsCarousel';
import { CategoriesSection } from '../../sections/HomePage/CategoriesSection/CategoriesSection';
import { Typography } from '../../base/Typography';
import { Grid } from '../../layout/Grid';
import type { Product } from '../../../types/Product';

type HomePageProps = {
  brandNewProducts: Product[];
  hotPriceProducts: Product[];
  categories: Array<{
    imageSrc: string;
    title: string;
    itemsCount: number;
    backgroundColor: string;
    link: string;
  }>;
  isLoading?: boolean;
};

export const HomePageTemplate: FC<HomePageProps> = ({
  brandNewProducts,
  hotPriceProducts,
  categories,
  isLoading = false,
}) => {
  return (
    <div className={styles.page}>
      <section className={styles.heroTopSpacing}>
        <Grid>
          <div className={styles.heroTitleWrapper}>
            <Typography
              as="h1"
              variant="h1"
            >
              Welcome to Nice Gadgets store!
            </Typography>
          </div>
        </Grid>
      </section>

      <section className={styles.heroTopSpacing}>
        <MainSlider />
      </section>

      <section className={styles.sectionSpacing}>
        <ProductsCarousel
          title="Brand new models"
          products={brandNewProducts}
          isLoading={isLoading}
        />
      </section>

      <section className={styles.sectionSpacing}>
        <CategoriesSection categories={categories} />
      </section>

      <section className={styles.sectionSpacing}>
        <ProductsCarousel
          title="Hot prices"
          products={hotPriceProducts}
          isLoading={isLoading}
        />
      </section>
    </div>
  );
};
