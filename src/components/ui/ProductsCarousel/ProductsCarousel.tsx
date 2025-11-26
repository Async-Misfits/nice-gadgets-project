import { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import { Typography } from '../../base/Typography';
import ProductCard from '../../base/ProductCard/ProductCard';

import styles from './ProductsCarousel.module.scss';
import { Button } from '../../base/Button';
import { Icon } from '../../base/icons';
import { Grid } from '../../layout/Grid';
import type { Product } from '../../../types/Product';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectCartItems, selectFavoriteIds } from '../../../store/selectors';
import { addToCart } from '../../../store/cartSlice';
import { toggleFavorite } from '../../../store/favoritesSlice';
import { ProductCardSkeleton } from '../../base/ProductCard/ProductCardSkeleton';

type ProductsCarouselProps = {
  title: string;
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
};

export const ProductsCarousel = ({
  title,
  products,
  isLoading = false,
  skeletonCount = 4,
}: ProductsCarouselProps) => {
  const dispatch = useAppDispatch();
  const swiperRef = useRef<SwiperType | null>(null);
  const [showArrows, setShowArrows] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  const handleSwiperInit = (instance: SwiperType) => {
    swiperRef.current = instance;

    const updateOverflow = () => {
      const container = instance.el as HTMLElement | null;
      const parent = container?.parentElement;

      if (!container || !parent) {
        setShowArrows(false);
        return;
      }

      const canScroll = container.scrollWidth > parent.clientWidth + 1;
      setShowArrows(canScroll);
    };

    const updateEdges = () => {
      setIsAtStart(instance.isBeginning);
      setIsAtEnd(instance.isEnd);
    };

    updateOverflow();
    updateEdges();

    instance.on('resize', () => {
      updateOverflow();
      updateEdges();
    });

    instance.on('slidesLengthChange', () => {
      updateOverflow();
      updateEdges();
    });

    instance.on('slideChange', updateEdges);
  };

  const cartItems = useAppSelector(selectCartItems);
  const favoriteIds = useAppSelector(selectFavoriteIds);

  const isAdded = useCallback(
    (productId: string) => cartItems.some((item) => item.itemId === productId),
    [cartItems],
  );

  const isFavorite = useCallback(
    (productId: string) => favoriteIds.includes(productId),
    [favoriteIds],
  );

  const handleAddToCart = useCallback(
    (productId: string) => {
      dispatch(addToCart(productId));
    },
    [dispatch],
  );

  const handleToggleFavorite = useCallback(
    (productId: string) => {
      dispatch(toggleFavorite(productId));
    },
    [dispatch],
  );

  return (
    <Grid className={styles.grid}>
      <div className={styles.headerItem}>
        <div className={styles.header}>
          <Typography
            variant="h2"
            as="h2"
          >
            {title}
          </Typography>

          {!isLoading && showArrows && (
            <div className={styles.controls}>
              <Button
                onClick={handlePrev}
                variant="squareArrow"
                buttonState={isAtStart ? 'disabled' : 'default'}
              >
                <Icon name="chevron-left" />
              </Button>

              <Button
                onClick={handleNext}
                variant="squareArrow"
                buttonState={isAtEnd ? 'disabled' : 'default'}
              >
                <Icon name="chevron-right" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.sliderItem}>
        {isLoading ?
          <div className={styles.skeletonRow}>
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <div
                key={index}
                className={styles.slide}
              >
                <ProductCardSkeleton />
              </div>
            ))}
          </div>
        : <Swiper
            onSwiper={handleSwiperInit}
            slidesPerView="auto"
            spaceBetween={24}
          >
            {products.map((product) => (
              <SwiperSlide
                key={product.id}
                className={styles.slide}
              >
                <ProductCard
                  product={product}
                  isCatalog
                  toggleFavorite={handleToggleFavorite}
                  addToCart={handleAddToCart}
                  isAdded={isAdded(product.itemId)}
                  isFavorite={isFavorite(product.itemId)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </Grid>
  );
};
