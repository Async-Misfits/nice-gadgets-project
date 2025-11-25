import { Grid } from '../../../components/layout/Grid';
import styles from './ProductPage.module.scss';
import { useState } from 'react';
import { Typography } from '../../base/Typography';
import { Button } from '../../base/Button';
import { Divider } from '../../base/Divider/Divider';
import { Icon } from '../../base/icons';
import type { ProductDetails } from '../../../types/ProductDetails';
import { Gallery } from '../../base/Gallery/Gallery';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addToCart, removeFromCart } from '../../../store/cartSlice';
import { toggleFavorite } from '../../../store/favoritesSlice';

type ProductPageProps = {
  product: ProductDetails;
};

export const ProductPage = ({ product }: ProductPageProps) => {
  const [activeCapacity, setActiveCapacity] = useState(
    product.capacityAvailable?.[0] ?? '',
  );

  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useAppDispatch();

  const isInCart = useAppSelector((state) =>
    state.cart.items.some((i) => i.itemId === product.id),
  );

  const isFavorite = useAppSelector((state) =>
    state.favorites.itemIds.includes(product.id),
  );

  const handleCartClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product.id));
    }

    setIsSelected((prev) => !prev);
  };

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(product.id));
  };

  const specs = [
    { key: 'screen', label: 'Screen' },
    { key: 'resolution', label: 'Resolution' },
    { key: 'processor', label: 'Processor' },
    { key: 'ram', label: 'RAM' },
    { key: 'camera', label: 'Camera' },
    { key: 'zoom', label: 'Zoom' },
    { key: 'cell', label: 'Cell' },
  ];

  const smallSpecs = specs.slice(0, 4);

  return (
    <main className={styles.page}>
      <Grid>
        <Typography
          as="h1"
          variant="h1"
          className={styles.title}
        >
          {product.name}
        </Typography>
        <div className={styles.gallery}>
          <div className={styles.gallery}>
            <Gallery images={product.images} />
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.block}>
            <Typography
              variant="small"
              className={styles.label}
              uppercase
            >
              Available colors
            </Typography>

            <div className={styles.colors}>
              {product.colorsAvailable?.map((color) => {
                return (
                  <Button
                    key={color}
                    variant="circle"
                    fillColor={color}
                  />
                );
              })}
            </div>
            <Divider fullWidth={false} />
          </div>

          <div className={styles.block}>
            <Typography
              variant="small"
              className={styles.label}
              uppercase
            >
              Select capacity
            </Typography>

            <div className={styles.capacity}>
              {product.capacityAvailable?.map((c) => (
                <button
                  key={c}
                  className={`${styles.capBtn} ${
                    c === activeCapacity ? styles.activeCap : ''
                  }`}
                  onClick={() => setActiveCapacity(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <Divider fullWidth={false} />
          </div>

          <div className={styles.priceWrapper}>
            <Typography
              variant="h3"
              className={styles.priceCurrent}
            >
              ${product.priceDiscount}
            </Typography>

            <Typography
              variant="body"
              className={styles.priceOld}
            >
              ${product.priceRegular}
            </Typography>
          </div>

          <div className={styles.buttonWrapper}>
            <Button
              variant="primary"
              buttonState={isSelected ? 'selected' : 'default'}
              onClick={handleCartClick}
            >
              {isInCart ? 'Added to cart' : 'Add to cart'}
            </Button>
            <Button
              variant="iconWrapper"
              iconButton={
                <Icon
                  name={isFavorite ? 'heart-filled' : 'heart'}
                  onClick={handleFavoriteClick}
                />
              }
            />
          </div>

          <ul className={styles.smallSpecs}>
            {smallSpecs.map(({ key, label }) => {
              const value = product[key as keyof typeof product];

              if (!value) return null;

              return (
                <li
                  key={key}
                  className={styles.specItem}
                >
                  <Typography
                    variant="small"
                    as="span"
                    className={styles.label}
                  >
                    {label}
                  </Typography>

                  <Typography
                    variant="body"
                    as="span"
                  >
                    {Array.isArray(value) ? value.join(', ') : value}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.about}>
          <Typography
            as="h2"
            variant="h2"
          >
            About
          </Typography>

          <Divider fullWidth={false} />

          {product.description?.map((item, i) => (
            <div
              key={i}
              className={styles.aboutBlock}
            >
              <Typography
                as="h3"
                variant="h3"
              >
                {item.title}
              </Typography>

              {item.text.map((p, i) => (
                <Typography
                  key={i}
                  as="p"
                  variant="body"
                >
                  {p}
                </Typography>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.tech}>
          <Typography
            as="h2"
            variant="h2"
          >
            Tech specs
          </Typography>

          <Divider fullWidth={false} />

          <ul>
            {specs.map(({ key, label }) => {
              const value = product[key as keyof typeof product];

              if (!value) return null;

              return (
                <li
                  key={key}
                  className={styles.specItem}
                >
                  <Typography
                    variant="small"
                    as="span"
                    className={styles.label}
                  >
                    {label}
                  </Typography>

                  <Typography
                    variant="body"
                    as="span"
                  >
                    {Array.isArray(value) ? value.join(', ') : value}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </div>
      </Grid>
    </main>
  );
};
