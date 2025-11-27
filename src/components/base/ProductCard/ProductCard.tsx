import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import classNames from 'classnames';
import { Typography } from '../Typography';
import './ProductCard.scss';
import type { Product } from '../../../types/Product';
import { Link } from 'react-router';

interface ProductCardProps {
  product: Product;

  toggleFavorite: (productId: string) => void;
  addToCart: (productId: string) => void;

  isCatalog?: boolean;

  isAdded?: boolean;
  isFavorite?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,

  isCatalog = false,

  toggleFavorite,
  addToCart,

  isAdded = false,
  isFavorite = false,
}) => {
  const productLink = `/${product.category}/${product.itemId}`;
  return (
    <article className={classNames('card', { 'card--catalog': isCatalog })}>
      <div className="card__top">
        <Link
          to={productLink}
          className="card__link"
        >
          <img
            src={product.image}
            alt={product.name}
            className="card__image"
          />
        </Link>
      </div>
      <div className="card__title">
        <Link
          to={productLink}
          className="card__link"
        >
          <Typography variant="body">{product.name}</Typography>
        </Link>
      </div>
      <div className="card__prices">
        <div className="card__priceRegular">
          <Typography
            as="h3"
            variant="h3"
          >
            ${product.price}
          </Typography>
        </div>
        <div className="card__priceDiscount">
          <Typography
            as="h3"
            variant="h3"
          >
            ${product.fullPrice}
          </Typography>
        </div>
      </div>
      <div className="card__line"></div>
      <div className="card__descriptions">
        <div className="card__descript">
          <div className="card__descript--title">
            <Typography variant="small">Screen</Typography>
          </div>
          <div className="card__descript--value">
            <Typography
              variant="small"
              uppercase
            >
              {product.screen}
            </Typography>
          </div>
        </div>
        <div className="card__descript">
          <div className="card__descript--title">
            <Typography variant="small">
              {product.category === 'accessories' ? 'Size' : 'Capacity'}
            </Typography>
          </div>
          <div className="card__descript--value">
            <Typography
              variant="small"
              uppercase
            >
              {product.capacity}
            </Typography>
          </div>
        </div>
        <div className="card__descript">
          <div className="card__descript--title">
            <Typography variant="small">RAM</Typography>
          </div>
          <div className="card__descript--value">
            <Typography
              variant="small"
              uppercase
            >
              {product.ram}
            </Typography>
          </div>
        </div>
      </div>
      <div className="card__buttons">
        <Button
          disabled={isAdded}
          onClick={() => addToCart(product.itemId)}
          buttonState={isAdded ? 'selected' : 'default'}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </Button>
        <Button
          variant="iconWrapper"
          onClick={() => toggleFavorite(product.itemId)}
          buttonState={isFavorite ? 'selected' : 'default'}
        >
          <Icon name={isFavorite ? 'heart-filled' : 'heart'} />
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
