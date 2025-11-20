import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import { Slider } from '../../base/Slider';
import { Typography } from '../../base/Typography';

import styles from './ProductsCarousel.module.scss';
import ProductCard from '../../base/ProductCard/ProductCard';

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
            <button
              type="button"
              className={styles.arrow}
              onClick={handlePrev}
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              type="button"
              className={styles.arrow}
              onClick={handleNext}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Слайдер */}
      <Slider
        ref={swiperRef}
        slidesPerView="auto"
        spaceBetween={24}
        centeredSlides
        centeredSlidesBounds
        watchOverflow
        onSwiperInit={(instance) => {
          swiperRef.current = instance;

          const update = () => {
            setShowArrows(!instance.isLocked);
          };

          update();
          instance.on('resize', update);
          instance.on('slidesLengthChange', update);
        }}
      >
        {products.map((product) => (
          <div
            key={product}
            className={styles.slideInner}
          >
            <ProductCard
              title={product}
              priceRegular={200}
              priceDiscount={200}
              screen="test"
              capacity="200"
              ram="200"
              isCatalog
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
