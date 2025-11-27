import { ProductPage } from '@/components/Templates/ProductPage';
import { ProductsCarousel } from '@/components/ui/ProductsCarousel/ProductsCarousel';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { Grid } from '@/components/layout/Grid';
import styles from './itemPage.module.scss';
import { ProductNotFound } from '../ProductNotFound/ProductNotFound';
import { useProductPage } from '@/hooks/useProductPage';
import { ProductPageSkeleton } from '@/components/Templates/ProductPage';

export const ItemPage = () => {
  const { itemId } = useParams<{ itemId: string }>();

  const { product, details, related, loading, error } = useProductPage(itemId);

  if (error) {
    return (
      <Grid>
        <div className={styles.fullLineWrapper}>Error: {error}</div>
      </Grid>
    );
  }

  if (loading && !product && !details) {
    return (
      <>
        <Grid>
          <div className={styles.fullLineWrapper}>
            <Breadcrumbs showBack />
          </div>
        </Grid>

        <ProductPageSkeleton />

        <ProductsCarousel
          title="You may also like"
          products={[]}
          isLoading
          skeletonCount={4}
        />
      </>
    );
  }

  if (!product || !details) {
    return <ProductNotFound />;
  }

  return (
    <>
      <Grid>
        <div className={styles.fullLineWrapper}>
          <Breadcrumbs showBack />
        </div>
      </Grid>
      <ProductPage product={details} />

      <ProductsCarousel
        title="You may also like"
        products={related}
        isLoading={loading}
        skeletonCount={4}
      />
    </>
  );
};
