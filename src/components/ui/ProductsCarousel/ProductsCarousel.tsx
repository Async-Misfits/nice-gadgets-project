import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import { Typography } from '../../base/Typography';
import ProductCard from '../../base/ProductCard/ProductCard';

import styles from './ProductsCarousel.module.scss';
import { Button } from '../../base/Button';
import { Icon } from '../../base/icons';
import { Grid } from '../../layout/Grid';

type ProductsCarouselProps = {
  title: string;

  products: string[];
};

export const ProductsCarousel = ({
  title,
  products,
}: ProductsCarouselProps) => {
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

          {showArrows && (
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
        <Swiper
          onSwiper={handleSwiperInit}
          slidesPerView="auto"
          spaceBetween={24}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product}
              className={styles.slide}
            >
              <ProductCard
                title={product}
                priceRegular={200}
                priceDiscount={200}
                screen="TEST"
                capacity="200"
                ram="200"
                isCatalog
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Grid>
  );
};
