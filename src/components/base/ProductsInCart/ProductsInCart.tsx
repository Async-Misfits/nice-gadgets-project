
import React, { useMemo, useState } from 'react';
import './ProductsInCart.scss';
import CartItem from '../CartItem/CartItem';
import { Button } from '../Button';
import { Grid } from '../../layout/Grid';
import { Typography } from '../Typography';

interface CartItemData {
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface ProductsInCartProps {
  testArray: CartItemData[]; 
}

const ProductsInCart: React.FC<ProductsInCartProps> = ({ testArray }) => {
  
  const [cartItems, setCartItems] = useState<CartItemData[]>(testArray);

  const handleQuantityChange = (title: string, newQuantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.title === title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalMoney = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  return (
    <Grid className='products-in-cart'> 
      <div className='products-in-cart__wrapper'> 
        {cartItems.map(item => (
          <CartItem 
            key={item.title}
            title={item.title} 
            image={item.image} 
            price={item.price}
            initialQuantity={item.quantity}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className='products-in-cart__checkout'>
        <div className='products-in-cart__checkout-content'>
          <div className='products-in-cart__total'>
            <Typography variant='h2'>
              $ {totalMoney.toFixed(2)}
            </Typography>
            <Typography variant='body' className='products-in-cart__total-info'>
              Total for {totalItems} items
            </Typography>
          </div>
          <div className='products-in-cart__line'></div>
          <Button>Checkout</Button>
        </div>
      </div>
    </Grid>
  );
}

export default ProductsInCart;