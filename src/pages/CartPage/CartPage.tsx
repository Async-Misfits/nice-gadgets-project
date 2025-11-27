// src/pages/CartPage/CartPage.tsx
import React, { useMemo } from 'react';
import { useAppSelector } from '@/store/hooks';
import {
  selectCartItems,
  selectCartTotalCount,
  selectCartTotalPrice,
} from '../../store/selectors';
import { CartTemplate } from '@/components/Templates/CartPage/CartTemplate';
import { useProducts } from '@/hooks/useProducts';

type CartItemData = {
  itemId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  category: string;
};

export const CartPage: React.FC = () => {
  const { products, loading, error } = useProducts();

  const cartItems = useAppSelector(selectCartItems);
  const totalCount = useAppSelector(selectCartTotalCount);
  const totalPrice = useAppSelector(selectCartTotalPrice(products));

  const itemsForRender: CartItemData[] = useMemo(() => {
    if (!products.length || !cartItems.length) {
      return [];
    }

    return cartItems
      .map((item) => {
        const product = products.find((p) => p.itemId === item.itemId);

        if (!product) return null;

        return {
          itemId: product.itemId,
          title: product.name,
          image: product.image,
          price: product.price,
          category: product.category,
          quantity: item.quantity,
        };
      })
      .filter(Boolean) as CartItemData[];
  }, [cartItems, products]);

  if (error) {
    return <div style={{ padding: 24 }}>Error: {error}</div>;
  }

  return (
    <CartTemplate
      items={itemsForRender}
      totalCount={totalCount}
      totalPrice={totalPrice}
      isLoading={loading}
    />
  );
};
