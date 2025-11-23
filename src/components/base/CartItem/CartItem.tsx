import React from 'react';
import './CartItem.scss';
import { Typography } from '../Typography';
import { Icon } from '../icons';
import { Button } from '../Button';

/**
 * CartItem component
 *
 * @param {string} title - The title or name of the product displayed in the cart item.
 * @param {string} image - The source path (URL) for the product image.
 * @param {number} price - The price of the product displayed in the cart item.
 */

interface CartItemProps {
  title: string;
  image: string;
  price: number;
  initialQuantity: number;
  onQuantityChange: (title: string, newQuantity: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ 
  title, 
  image, 
  price, 
  initialQuantity: quantity, 
  onQuantityChange 
}) => {

  const handleIncrease = () => {
    onQuantityChange(title, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(title, quantity - 1);
    }
  };
  
  const isMinusDisabled = quantity === 1;

  // 💡 Використовуємо коректний шлях до зображення
  const srcImage = `/gadgets/${image}`; 

  return (
    <div className ='cartItem'>
        <div className = 'cartItem__descripton'>
          <div className ='cartItem__close'>
            <Icon name='x'/>
          </div>
          <div className ='cartItem__imagebox'>
            <img
              src={srcImage}
              alt={title}
              className='cartItem__image'
            />
          </div>
          <div className ='cartItem__title'>
            <Typography variant='body'>
              {title}
            </Typography>
          </div>
        </div>
        <div className='cartItem__values'>
          <div className='cartItem__buttons'>
            <Button 
              variant = 'squareArrow'
              onClick={handleDecrease}
              buttonState = {isMinusDisabled ? 'disabled' : 'default'}
              >
                <Icon name='minus'/>
            </Button>
            <span className='cartItem__quantity'>{quantity}</span> 
            <Button 
              variant = 'squareArrow'
              onClick={handleIncrease}
            >
                <Icon name='plus'/>
            </Button>
          </div>
          <div className='cartItem__price'>
            $ {price}
          </div>
        </div>
    </div>
  )
};

export default CartItem;