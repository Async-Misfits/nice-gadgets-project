import { ProductPage } from '../../components/sections/ProductPage';
import rawProducts from '../../api/products.json';
import phones from '../../api/phones.json';
import tablets from '../../api/tablets.json';
import accessories from '../../api/accessories.json';
import type { ProductDetails } from '../../types/ProductDetails';
import { ProductsCarousel } from '../../components/ui/ProductsCarousel/ProductsCarousel';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs';
import type { Product } from '../../types/Product';
import { Grid } from '../../components/layout/Grid';
import styles from './itemPage.module.scss';
const BASE = import.meta.env.BASE_URL;

export const ItemPage = () => {
  const { itemId } = useParams();

  const products = (rawProducts as Product[]).map((p) => ({
    ...p,
    image: `${BASE}gadgets/${p.image}`,
  }));
  const product = products.find((p) => p.itemId === itemId);

  const fullProduct =
    phones.find((p) => p.id === itemId) ||
    tablets.find((p) => p.id === itemId) ||
    accessories.find((p) => p.id === itemId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Grid>
        <div className={styles.fullLineWrapper}>
          <Breadcrumbs showBack />
        </div>
      </Grid>
      <ProductPage product={fullProduct as ProductDetails} />

      <ProductsCarousel
        title="You may also like"
        products={products.slice(0, 10)}
      />
    </>
  );
};
