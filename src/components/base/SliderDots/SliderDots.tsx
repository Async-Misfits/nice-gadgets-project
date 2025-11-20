import { useEffect, useState, type FC } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import styles from './SliderDots.module.scss';

type Props = {
  /**
   * Swiper instance passed from the parent Slider component.
   * If null, dots will not be displayed.
   */
  swiper: SwiperType | null;
};

/**
 * SliderDots component.
 *
 * A fully custom pagination control for the Slider component.
 * Renders a horizontal list of dots and updates the active state
 * when the Swiper instance changes slides.
 *
 * Features:
 * - Subscribes to Swiper's `slideChange` event
 * - Highlights the current slide dot
 * - Allows clicking a dot to navigate to that slide (`slideToLoop`)
 * - Compatible with loop mode
 *
 * @component
 *
 * @example
 * ```tsx
 * <SliderDots swiper={swiperInstance} />
 * ```
 */
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
