import React, { useState } from 'react';
import './CartItem.scss';
import { Typography } from '../Typography';
import { Icon } from '../icons';
import { Button } from '../Button';

/**
 * CartItem component
 *
 * @param {string} title - The title or name of the product displayed in the cart item.
 * @param {string} image - The source path (URL) for the product image.
 */

interface CartItemProps {
  title: string;
  image: string;
};

const CartItem: React.FC<CartItemProps> = ({title, image}) => {

  //useState для демонстраціі роботи кнопок "+" і "-"
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };


  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  

  const isMinusDisabled = quantity === 1;

  return (
    <div className ='cartItem'>
        <div className = 'cartItem__descripton'>
          <div className ='cartItem__close'>
            <Icon name='x'/>
          </div>
          <div className ='cartItem__imagebox'>
            <img
              src={image}
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
            $ 799
          </div>
        </div>

    </div>
  )
};

export default CartItem;