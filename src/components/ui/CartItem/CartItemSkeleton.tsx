import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './CartItem.scss';

export const CartItemSkeleton: React.FC = () => {
  return (
    <div className="cartItem cartItem--skeleton">
      <div className="cartItem__descripton">
        <div className="cartItem__close">
          <Skeleton
            circle
            width={16}
            height={16}
          />
        </div>

        <div className="cartItem__imagebox">
          <Skeleton
            width={66}
            height={66}
            style={{ borderRadius: 12 }}
          />
        </div>

        <div className="cartItem__title">
          <Skeleton
            width="70%"
            height={20}
          />
        </div>
      </div>

      <div className="cartItem__values">
        <div className="cartItem__buttons">
          <Skeleton
            width={32}
            height={32}
            style={{ borderRadius: 8 }}
          />
          <span className="cartItem__quantity">
            <Skeleton
              width={24}
              height={24}
            />
          </span>
          <Skeleton
            width={32}
            height={32}
            style={{ borderRadius: 8 }}
          />
        </div>

        <div className="cartItem__price">
          <Skeleton
            width={80}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};
