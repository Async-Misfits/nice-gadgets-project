import React from 'react';
import './ProductsInCart.scss';
import CartItem from '../CartItem/CartItem';
import { Button } from '../Button';
import { Grid } from '../../layout/Grid';
import { Typography } from '../Typography';
import { useAppDispatch } from '../../../store/hooks';
import {
  addToCart,
  removeFromCart,
  setQuantity,
} from '../../../store/cartSlice';

interface CartItemData {
  itemId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface ProductsInCartProps {
  items: CartItemData[];
  totalCount: number;
  totalPrice: number;
}

const ProductsInCart: React.FC<ProductsInCartProps> = ({
  items,
  totalCount,
  totalPrice,
}) => {
  const dispatch = useAppDispatch();

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
          <Button>Checkout</Button>
        </div>
      </div>
    </Grid>
  );
};

export default ProductsInCart;
