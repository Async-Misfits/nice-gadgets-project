// src/components/base/ProductCard/ProductCardSkeleton.tsx
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import classNames from 'classnames';
import './ProductCard.scss';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <article className={classNames('card', 'card--catalog', 'card--skeleton')}>
      <div className="card__top">
        <Skeleton
          height="100%"
          width="100%"
          style={{ borderRadius: 0 }}
        />
      </div>

      <div className="card__title">
        <Skeleton
          width="80%"
          height={20}
        />
      </div>

      <div className="card__prices">
        <div className="card__priceRegular">
          <Skeleton
            width={60}
            height={24}
          />
        </div>
        <div className="card__priceDiscount">
          <Skeleton
            width={60}
            height={24}
          />
        </div>
      </div>

      <div className="card__line" />

      <div className="card__descriptions">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="card__descript"
          >
            <div className="card__descript--title">
              <Skeleton
                width={60}
                height={16}
              />
            </div>
            <div className="card__descript--value">
              <Skeleton
                width={50}
                height={16}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="card__buttons">
        <Skeleton
          height={40}
          width="100%"
        />
      </div>
    </article>
  );
};
