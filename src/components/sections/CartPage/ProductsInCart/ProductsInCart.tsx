import React, { useState } from 'react';
import './ProductsInCart.scss';
import { CartItem } from '@/components/ui/CartItem';
import { Button } from '@/components/base/Button';
import { Grid } from '@/components/layout/Grid';
import { Typography } from '@/components/base/Typography';
import { useAppDispatch } from '@/store/hooks';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart, setQuantity } from '@/store/cartSlice';
import { Delivery } from '@/components/ui/Delivery/Delivery';

interface CartItemData {
  itemId: string;
  title: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
}

interface ProductsInCartProps {
  items: CartItemData[];
  totalCount: number;
  totalPrice: number;
}

export const ProductsInCart: React.FC<ProductsInCartProps> = ({
  items,
  totalCount,
  totalPrice,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isDeliverySelected, setIsDeliverySelected] = useState(false);

  const handleIncrease = (itemId: string) => {
    dispatch(addToCart(itemId));
  };

  const handleDecrease = (itemId: string, quantity: number) => {
    if (quantity <= 1) return;
    dispatch(setQuantity({ itemId, quantity: quantity - 1 }));
  };

  const handleRemove = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <Grid className="products-in-cart">
      <div className="products-in-cart__wrapper">
        {items.map((item) => (
          <CartItem
            key={item.title}
            itemId={item.itemId}
            title={item.title}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            category={item.category}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <div className="products-in-cart__checkout">
        <div className="products-in-cart__checkout-content">
          <div className="products-in-cart__total">
            <Typography variant="h2">$ {totalPrice.toFixed(2)}</Typography>
            <Typography
              variant="body"
              className="products-in-cart__total-info"
            >
              Total for {totalCount} items
            </Typography>
          </div>
          <div className="products-in-cart__line"></div>
          <Button
            onClick={() => navigate('/success')}
            disabled={!isDeliverySelected}
            buttonState={!isDeliverySelected ? 'selected' : 'default'}
          >
            Checkout
          </Button>
        </div>
        <Delivery
          onDeliveryMethodChange={(selectedId) =>
            setIsDeliverySelected(selectedId !== null)
          }
        />
      </div>
    </Grid>
  );
};
