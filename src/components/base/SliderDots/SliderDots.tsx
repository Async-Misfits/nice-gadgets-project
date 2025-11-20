import { useEffect, useState, type FC } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import styles from './SliderDots.module.scss';

type Props = {
  swiper: SwiperType | null;
};

export const SliderDots: FC<Props> = ({ swiper }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiper) return;

    const handleChange = () => {
      setActiveIndex(swiper.realIndex);
    };

    swiper.on('slideChange', handleChange);

    return () => {
      swiper.off('slideChange', handleChange);
    };
  }, [swiper]);

  const dotsCount = swiper ? swiper.slides.length : 0;

  const handleDotClick = (index: number) => {
    swiper?.slideToLoop(index);
  };

  return (
    <div className={styles.dots}>
      {Array.from({ length: dotsCount }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={index === activeIndex ? styles.dotActive : styles.dot}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
};
