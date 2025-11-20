import React from 'react';
import { Button } from '../Button';
import { Icon } from '../icons';
import classNames from 'classnames';
import { Typography } from '../Typography';
import './ProductCard.scss';

/**
 * ProductCard component
 *
 * @param {string} title - The name of the product (e.g., "Apple iPhone Xs 64GB Silver").
 * @param {number} priceRegular - The regular/full price of the product.
 * @param {number} priceDiscount - The promotional or discounted price (displayed prominently).
 * @param {string} screen - The screen size and type (e.g., "5.8” OLED").
 * @param {string} capacity - The internal storage capacity (e.g., "64 GB").
 * @param {string} ram - The Random Access Memory (RAM) capacity (e.g., "4 GB").
 * @param {boolean} [isCatalog=false] - If true, applies the 'card--catalog' CSS modifier 
 * to switch the card to a flexible width, optimized for Grid-based catalog views.
 */

interface ProductCardProps {
  title: string;
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  capacity: string;
  ram: string;
  isCatalog?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  priceRegular,
  priceDiscount,
  screen,
  capacity,
  ram,
  isCatalog = false,
}) => {

  return (
    <article className={classNames('card', { 'card--catalog': isCatalog })}>
      <div className='card__top'>
        <img
          src='../../../../public/gadgets/img/phones/apple-iphone-12/purple/00.webp'
          alt='Apple iPhone Xs 64GB Silver (iMT9G2FS/A)'
          className='card__image'
        />
      </div>
      <div className='card__title'>
        <Typography variant='body'>{title}</Typography>       
      </div>
      <div className='card__prices'>
        <div className='card__priceRegular'><Typography as="h3" variant="h3">${priceRegular}</Typography></div>
        <div className='card__priceDiscount'><Typography as="h3" variant="h3">${priceDiscount}</Typography></div>
      </div>
      <div className='card__line'></div>
      <div className='card__descriptions'>
        <div className='card__descript'>
          <div className='card__descript--title'><Typography variant="small">Screen</Typography></div>
          <div className='card__descript--value'><Typography variant="small" uppercase>{screen}</Typography></div>
        </div>
        <div className='card__descript'>
          <div className='card__descript--title'><Typography variant="small">Capacity</Typography></div>
          <div className='card__descript--value'><Typography variant="small" uppercase>{capacity}</Typography></div>
        </div>
        <div className='card__descript'>
          <div className='card__descript--title'><Typography variant="small">RAM</Typography></div>
          <div className='card__descript--value'><Typography variant="small" uppercase>{ram}</Typography></div>
        </div>        
      </div>
      <div className='card__buttons'>  
        <Button>Add to cart</Button>
        <Button variant = 'icon'><Icon name='heart'/></Button>
      </div>
    </article>
  )
};


export default ProductCard;