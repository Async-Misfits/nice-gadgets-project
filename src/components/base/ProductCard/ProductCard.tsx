import React from 'react';
import { Button } from '../Button';
import { Icon } from '../icons';
import classNames from 'classnames';
import { Typography } from '../Typography';
import './ProductCard.scss';
import type { Product } from '../../../types/Product';

interface ProductCardProps {
  product: Product;

  toggleFavorite: () => void;
  addToCart: () => void;

  isCatalog?: boolean;

  isAdded?: boolean;
  isFavorite?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,

  isCatalog = false,

  toggleFavorite,
  addToCart,

  isAdded = false,
  isFavorite = false,
}) => {

  return (
    <article className={classNames('card', { 'card--catalog': isCatalog })}>
      <div className='card__top'>
        <img
          src={product.image}
          alt={product.name}
          className='card__image'
        />
      </div>
      <div className='card__title'>
        <Typography variant='body'>{product.name}</Typography>       
      </div>
      <div className='card__prices'>
        <div className='card__priceRegular'><Typography as='h3' variant='h3'>${product.price}</Typography></div>
        <div className='card__priceDiscount'><Typography as='h3' variant='h3'>${product.fullPrice}</Typography></div>
      </div>
      <div className='card__line'></div>
      <div className='card__descriptions'>
        <div className='card__descript'>
          <div className='card__descript--title'><Typography variant='small'>Screen</Typography></div>
          <div className='card__descript--value'><Typography variant='small' uppercase>{product.screen}</Typography></div>
        </div>
        <div className='card__descript'>
          <div className='card__descript--title'>
            <Typography variant='small'>
              {product.category === 'accessories' ? 'Size' : 'Capacity'}
            </Typography>
          </div>
          <div className='card__descript--value'><Typography variant='small' uppercase>{product.capacity}</Typography></div>
        </div>
        <div className='card__descript'>
          <div className='card__descript--title'><Typography variant='small'>RAM</Typography></div>
          <div className='card__descript--value'><Typography variant='small' uppercase>{product.ram}</Typography></div>
        </div>        
      </div>
      <div className='card__buttons'>  
        <Button 
          onClick={addToCart} 
          buttonState={isAdded ? 'selected' : 'default'}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </Button>
        <Button
          variant='iconWrapper'
          onClick={toggleFavorite}
          buttonState={isFavorite ? 'selected' : 'default'}
        >
          <Icon name={isFavorite ? 'heart-filled' : 'heart'} />
        </Button>
      </div>
    </article>
  )
};


export default ProductCard;