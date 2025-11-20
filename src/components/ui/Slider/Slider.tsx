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
  children: ReactNode;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  loop?: boolean;
  className?: string;
  onSwiperInit?: (instance: SwiperType) => void;
};

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
