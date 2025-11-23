import type { FC } from 'react';
import { HomePage as HomePageTemplate } from '../../components/Templates/HomePage/HomePage';
import rawProducts from '../../api/products.json';
import type { Product } from '../../types/Product';
const BASE = import.meta.env.BASE_URL;

const products = (rawProducts as Product[]).map((p) => ({
  ...p,
  image: `${BASE}gadgets/${p.image}`,
}));

const brandNewProducts: Product[] = [...products]
  .sort((a, b) => b.year - a.year)
  .slice(0, 10);
const hotPriceProducts: Product[] = [...products]
  .sort((a, b) => {
    const discountA = a.fullPrice - a.price;
    const discountB = b.fullPrice - b.price;
    return discountB - discountA;
  })
  .slice(0, 10);

const categoriesMock = [
  {
    imageSrc: `${BASE}images/category-phones.png`,
    title: 'Mobile phones',
    itemsCount: products.filter((p) => p.category === 'phones').length,
    backgroundColor: '#6D6474',
    link: '/phones',
  },
  {
    imageSrc: `${BASE}images/category-tablets.png`,
    title: 'Tablets',
    itemsCount: products.filter((p) => p.category === 'tablets').length,
    backgroundColor: '#8D8D92',
    link: '/tablets',
  },
  {
    imageSrc: `${BASE}images/category-accessories.png`,
    title: 'Accessories',
    itemsCount: products.filter((p) => p.category === 'accessories').length,
    backgroundColor: '#973D5F',
    link: '/accessories',
  },
];

export const HomePage: FC = () => {
  return (
    <HomePageTemplate
      brandNewProducts={brandNewProducts}
      hotPriceProducts={hotPriceProducts}
      categories={categoriesMock}
    />
  );
};
