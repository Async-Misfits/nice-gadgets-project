import { ProductPage } from '../../components/sections/ProductPage';
import products from '../../api/products.json';
import phones from '../../api/phones.json';
import tablets from '../../api/tablets.json';
import accessories from '../../api/accessories.json';
import { Header } from '../../components/layout/Header/Header';
import { Footer } from '../../components/layout/Footer/Footer';
import type { ProductDetails } from '../../types/ProductDetails';
import { ProductsCarousel } from '../../components/ui/ProductsCarousel/ProductsCarousel';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs';

export const ItemPage = () => {
  const { itemId } = useParams();

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
      <Header />
      <Breadcrumbs showBack />
      <ProductPage product={fullProduct as ProductDetails} />

      <ProductsCarousel
        title="You may also like"
        products={products.slice(0, 10)}
      />

      <Footer />
    </>
  );
};
