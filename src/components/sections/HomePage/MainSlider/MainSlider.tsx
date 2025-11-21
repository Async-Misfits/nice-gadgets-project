import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Slider } from '../../../base/Slider/Slider';
import { PromoSlide } from '../../../base/PromoSlide/PromoSlide';
import { Grid } from '../../../layout/Grid';
import styles from './MainSlider.module.scss';
import { Icon } from '../../../base/icons';
import { SliderDots } from '../../../base/SliderDots/SliderDots';

export const MainSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <Grid>
      <button
        type="button"
        className={styles.arrowLeft}
        onClick={handlePrev}
      >
        <Icon name="chevron-left" />
      </button>
      <div className={styles.sliderCell}>
        <Slider
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={16}
          loop
          onSwiperInit={setSwiper}
        >
          <PromoSlide
            title="Now available in our store! 👌"
            description="Be the first!"
            buttonLabel="Order now"
            imageSrc="/gadgets/img/banner-accessories.png"
            imageAlt="iPhone 14 Pro in deep purple"
            onButtonClick={() => {
              console.log('Order now clicked');
            }}
          />
          <PromoSlide
            title="Now available in our store! 👌"
            description="Be the first!"
            buttonLabel="Order now"
            imageSrc="/gadgets/img/banner-phones.png"
            imageAlt="iPhone 14 Pro in deep purple"
            onButtonClick={() => {
              console.log('Order now clicked');
            }}
          />
          <PromoSlide
            title="Now available in our store! 👌"
            description="Be the first!"
            buttonLabel="Order now"
            imageSrc="/gadgets/img/banner-tablets.png"
            imageAlt="iPhone 14 Pro in deep purple"
            onButtonClick={() => {
              console.log('Order now clicked');
            }}
          />
        </Slider>
        <SliderDots swiper={swiper} />
      </div>
      <button
        type="button"
        className={styles.arrowRight}
        onClick={handleNext}
      >
        <Icon name="chevron-right" />
      </button>
    </Grid>
  );
};
