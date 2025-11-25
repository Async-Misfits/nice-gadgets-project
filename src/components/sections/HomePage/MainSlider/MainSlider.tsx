import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Slider } from '../../../base/Slider/Slider';
import { PromoSlide } from '../../../base/PromoSlide/PromoSlide';
import { Grid } from '../../../layout/Grid';
import styles from './MainSlider.module.scss';
import { Icon } from '../../../base/icons';
import { SliderDots } from '../../../base/SliderDots/SliderDots';
import { Button } from '../../../base/Button';
const BASE = import.meta.env.BASE_URL;

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
      <Button
        variant="squareArrow"
        className={styles.arrowLeft}
        onClick={handlePrev}
      >
        <Icon name="chevron-left" />
      </Button>
      <div className={styles.sliderCell}>
        <Slider
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={16}
          loop
          onSwiperInit={setSwiper}
        >
          <PromoSlide
            title="Accessories that complete your iPhone"
            description="MagSafe chargers, stylish cases, and more — all perfectly compatible."
            buttonLabel="Shop accessories"
            linkTo="/accessories"
            imageSrc={`${BASE}images/banner-accessories.png`}
            imageAlt="iPhone cases and MagSafe accessories"
          />
          <PromoSlide
            title="All your favorite iPhones in one place"
            description="Pick your color, pick your storage — get a 12-month warranty and fast delivery."
            buttonLabel="Browse phones"
            linkTo="/phones"
            imageSrc={`${BASE}images/banner-phones.png`}
            imageAlt="Different iPhone models in multiple colors"
          />
          <PromoSlide
            title="Tablets for work, study, and fun"
            description="From compact mini to powerful Pro — find the iPad that fits your lifestyle."
            buttonLabel="Browse tablets"
            linkTo="/tablets"
            imageSrc={`${BASE}images/banner-tablets.png`}
            imageAlt="Lineup of different iPad models"
          />
        </Slider>
        <SliderDots swiper={swiper} />
      </div>
      <Button
        variant="squareArrow"
        className={styles.arrowRight}
        onClick={handleNext}
      >
        <Icon name="chevron-right" />
      </Button>
    </Grid>
  );
};
