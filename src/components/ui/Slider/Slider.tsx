import {
  useRef,
  forwardRef,
  type ReactNode,
  useImperativeHandle,
  Children,
} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import classNames from 'classnames';
import styles from './Slider.module.scss';
import 'swiper/css';

export type SliderProps = {
  /**
   * Slide content. Each child becomes a <SwiperSlide>.
   */
  children: ReactNode;

  /**
   * Number of slides visible at once.
   * Supports "auto" to dynamically size slides.
   *
   * @default 1
   */
  slidesPerView?: number | 'auto';

  /**
   * Space between slides, in pixels.
   *
   * @default 0
   */
  spaceBetween?: number;

  /**
   * Enables infinite slide looping.
   *
   * @default false
   */
  loop?: boolean;

  /**
   * Optional custom class for the slider wrapper.
   */
  className?: string;

  /**
   * Callback that receives the initialized Swiper instance.
   * Useful for connecting external controls (arrows, dots).
   */
  onSwiperInit?: (instance: SwiperType) => void;
};

/**
 * Slider component.
 *
 * A flexible Swiper wrapper with forwarded ref support.
 * Provides an easy way to connect external navigation controls
 * (arrows, dots) using `ref` or `onSwiperInit`.
 *
 * Features:
 * - Controlled navigation through forwarded Swiper ref
 * - Automatic height adjustment (`autoHeight`)
 * - Supports loop mode
 * - Supports dynamic slide content via React children
 *
 * @component
 *
 * @example
 * ```tsx
 * const sliderRef = useRef<SwiperType | null>(null);
 *
 * <Slider
 *   ref={sliderRef}
 *   slidesPerView={1}
 *   spaceBetween={16}
 *   loop
 *   onSwiperInit={(instance) => console.log("Swiper initialized:", instance)}
 * >
 *   <PromoSlide ... />
 *   <PromoSlide ... />
 *   <PromoSlide ... />
 * </Slider>
 * ```
 *
 * @forwardRef SwiperType
 */
export const Slider = forwardRef<SwiperType, SliderProps>(
  (
    {
      children,
      slidesPerView = 1,
      spaceBetween = 0,
      loop = false,
      className,
      onSwiperInit,
    },
    ref,
  ) => {
    const swiperRef = useRef<SwiperType | null>(null);

    useImperativeHandle(ref, () => swiperRef.current as SwiperType, []);

    return (
      <div className={classNames(styles.slider, className)}>
        <Swiper
          onSwiper={(instance) => {
            swiperRef.current = instance;
            onSwiperInit?.(instance);
          }}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          loop={loop}
          autoHeight
        >
          {Children.map(children, (child, index) => (
            <SwiperSlide
              key={index}
              className={styles.slide}
            >
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  },
);

Slider.displayName = 'Slider';
