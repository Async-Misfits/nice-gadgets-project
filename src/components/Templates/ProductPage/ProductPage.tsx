import { Grid } from '@/components/layout/Grid';
import styles from './ProductPage.module.scss';
import { Typography } from '@/components/base/Typography';
import { Button } from '@/components/base/Button';
import { Divider } from '@/components/base/Divider';
import { Icon } from '@/components/base/Icon';
import type { ProductDetails } from '@/types/ProductDetails';
import { Gallery } from '@/components/base/Gallery';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, removeFromCart } from '@/store/cartSlice';
import { toggleFavorite } from '@/store/favoritesSlice';
import { useNavigate } from 'react-router-dom';

type ProductPageProps = {
  product: ProductDetails;
};

const colorMap: Record<string, string> = {
  'spacegray': '#575757',
  'space gray': '#575757',
  'midnightgreen': '#004953',
  'pacificblue': '#1a3d5b',
  'starlight': '#f8f7f2',
  'gold': '#f6d9d5',
  'blue': '#48AEE6',
  'yellow': '#fdea8c',
  'green': '#a8da61',
  'purple': '#B8AFE6',
  'graphite': '#5c5c5c',
  'sierra blue': '#69ABCE',
  'sierrablue': '#69ABCE',
  'spaceblack': '#4b4845',
  'rose gold': '#f7d0cb',
  'sky blue': '#87CEEB',
  'midnight': '#343b43',

  'Black': 'black',
  'White': 'white',
  'Red': 'red',
};

export const ProductPage = ({ product }: ProductPageProps) => {
  const navigate = useNavigate();

  const handleCapacityChange = (capacity: string) => {
    const normalizedColor = product.color.toLowerCase().replace(/\s+/g, '-');
    const normalizedCapacity = capacity.toLowerCase().replace(/\s+/g, '-');

    const newId = `${product.namespaceId}-${normalizedCapacity}-${normalizedColor}`;

    navigate(`/${product.category}/${newId}`);
  };

  const handleColorChange = (color: string) => {
    const normalizedColor = color.toLowerCase().replace(/\s+/g, '-');

    const newId = `${product.namespaceId}-${product.capacity.toLowerCase()}-${normalizedColor}`;

    navigate(`/${product.category}/${newId}`);
  };

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
                    fillColor={colorMap[color.trim().toLowerCase()] ?? color}
                    onClick={() => handleColorChange(color)}
                    buttonState={
                      color === product.color ? 'selected' : 'default'
                    }
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
              {product.category === 'accessories' ?
                'Select size'
              : 'Select capacity'}
            </Typography>

            <div className={styles.capacity}>
              {product.capacityAvailable?.map((c) => (
                <button
                  key={c}
                  className={`${styles.capBtn} ${
                    c === product.capacity ? styles.activeCap : ''
                  }`}
                  onClick={() => handleCapacityChange(c)}
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
              onClick={handleCartClick}
              disabled={isInCart}
              buttonState={isInCart ? 'selected' : 'default'}
            >
              {isInCart ? 'Added to cart' : 'Add to cart'}
            </Button>
            <Button
              variant="iconWrapper"
              onClick={handleFavoriteClick}
              iconButton={<Icon name={isFavorite ? 'heart-filled' : 'heart'} />}
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
