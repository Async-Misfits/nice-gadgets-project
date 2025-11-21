import type { FC } from 'react';
import styles from './HomePage.module.scss';
import { MainSlider } from '../../sections/HomePage/MainSlider/MainSlider';
import { ProductsCarousel } from '../../ui/ProductsCarousel/ProductsCarousel';
import { CategoriesSection } from '../../sections/HomePage/CategoriesSection/CategoriesSection';
import { Typography } from '../../base/Typography';
import { Grid } from '../../layout/Grid';

type HomePageProps = {
  brandNewProducts: string[];
  hotPriceProducts: string[];
  categories: Array<{
    imageSrc: string;
    title: string;
    itemsCount: number;
    backgroundColor: string;
    link: string;
  }>;
};

export const HomePage: FC<HomePageProps> = ({
  brandNewProducts,
  hotPriceProducts,
  categories,
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
        />
      </section>

      <section className={styles.sectionSpacing}>
        <CategoriesSection categories={categories} />
      </section>

      <section className={styles.sectionSpacing}>
        <ProductsCarousel
          title="Hot prices"
          products={hotPriceProducts}
        />
      </section>
    </div>
  );
};
