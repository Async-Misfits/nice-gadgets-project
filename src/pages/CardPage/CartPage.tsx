// src/pages/CartPage/CartPage.tsx
import React, { useMemo } from 'react';

import productsFromServer from '../../api/products.json';
import { useAppSelector } from '../../store/hooks';
import {
  selectCartItems,
  selectCartTotalCount,
  selectCartTotalPrice,
} from '../../store/selectors';
import type { Product } from '../../types/Product';
import { CartTemplate } from '../../components/Templates/CartPage/CartTemplate';
const BASE = import.meta.env.BASE_URL;

type CartItemData = {
  itemId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export const CartPage: React.FC = () => {
  const products = (productsFromServer as Product[]).map((p) => ({
    ...p,
    image: `${BASE}gadgets/${p.image}`,
  }));

  const cartItems = useAppSelector(selectCartItems);
  const totalCount = useAppSelector(selectCartTotalCount);
  const totalPrice = useAppSelector(selectCartTotalPrice(products));

  const itemsForRender: CartItemData[] = useMemo(() => {
    return cartItems
      .map((item) => {
        const product = products.find((p) => p.itemId === item.itemId);

        if (!product) return null;

        return {
          itemId: product.itemId,
          title: product.name,
          image: product.image,
          price: product.price,
          quantity: item.quantity,
        };
      })
      .filter(Boolean) as CartItemData[];
  }, [cartItems, products]);

  return (
    <CartTemplate
      items={itemsForRender}
      totalCount={totalCount}
      totalPrice={totalPrice}
    />
  );
};
