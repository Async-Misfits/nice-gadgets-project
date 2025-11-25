import React from 'react';
import './CartItem.scss';
import { Typography } from '../Typography';
import { Icon } from '../icons';
import { Button } from '../Button';
import { Link } from 'react-router';

/**
 * CartItem component
 *
 * @param {string} title - The title or name of the product displayed in the cart item.
 * @param {string} image - The source path (URL) for the product image.
 * @param {number} price - The price of the product displayed in the cart item.
 */

interface CartItemProps {
  itemId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  category: string;

  onIncrease: (itemId: string) => void;
  onDecrease: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  itemId,
  title,
  image,
  price,
  quantity,
  category,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const isMinusDisabled = quantity === 1;

  const productLink = `/${category}/${itemId}`;

  return (
    <div className="cartItem">
      <div className="cartItem__descripton">
        <Button
          variant="iconWrapper"
          className="cartItem__close"
          onClick={() => onRemove(itemId)}
        >
          <Icon name="x" />
        </Button>
        <div className="cartItem__imagebox">
          <Link
            to={productLink}
            className="cartItem__link"
          >
            <img
              src={image}
              alt={title}
              className="cartItem__image"
            />
          </Link>
        </div>
        <div className="cartItem__title">
          <Link
            to={productLink}
            className="cartItem__link"
          >
            <Typography variant="body">{title}</Typography>
          </Link>
        </div>
      </div>
      <div className="cartItem__values">
        <div className="cartItem__buttons">
          <Button
            variant="squareArrow"
            onClick={() => onDecrease(itemId, quantity)}
            buttonState={isMinusDisabled ? 'disabled' : 'default'}
          >
            <Icon name="minus" />
          </Button>
          <span className="cartItem__quantity">{quantity}</span>
          <Button
            variant="squareArrow"
            onClick={() => onIncrease(itemId)}
          >
            <Icon name="plus" />
          </Button>
        </div>
        <div className="cartItem__price">$ {price}</div>
      </div>
    </div>
  );
};

export default CartItem;
