import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import { Typography } from '../../base/Typography';
import ProductCard from '../../base/ProductCard/ProductCard';

import styles from './ProductsCarousel.module.scss';
import { Button } from '../../base/Button';
import { Icon } from '../../base/icons';

type ProductsCarouselProps = {
  /**
   * Назва секції ("Brand new models")
   */
  title: string;

  /**
   * Масив товарів, які треба показати
   */
  products: string[];
};

export const ProductsCarousel = ({
  title,
  products,
}: ProductsCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [showArrows, setShowArrows] = useState(false);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  const handleSwiperInit = (instance: SwiperType) => {
    swiperRef.current = instance;

    const updateArrowsVisibility = () => {
      const container = instance.el as HTMLElement | null; // сам Swiper
      const parent = container?.parentElement; // наша обгортка

      if (!container || !parent) {
        setShowArrows(false);
        return;
      }

      // Якщо контейнер ширший за видиму обгортку → є що скролити
      const canScroll = container.scrollWidth > parent.clientWidth + 1;
      setShowArrows(canScroll);
    };

    updateArrowsVisibility();
    instance.on('resize', updateArrowsVisibility);
    instance.on('slidesLengthChange', updateArrowsVisibility);
  };

  return (
    <section className={styles.section}>
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
            >
              <Icon name="chevron-left" />
            </Button>

            <Button
              onClick={handleNext}
              variant="squareArrow"
            >
              <Icon name="chevron-right" />
            </Button>
          </div>
        )}
      </div>

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
    </section>
  );
};
