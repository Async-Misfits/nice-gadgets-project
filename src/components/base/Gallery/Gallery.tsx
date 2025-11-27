import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Gallery.scss';

export interface GalleryProps {
  images: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const handleThumbClick = (index: number) => {
    setActiveIndex(index);
  };

  const slidesPerView = images.length;

  return (
    <div className="gallery">
      <div className="gallery-main">
        <div className="gallery-main-inner">
          <img
            src={images[activeIndex]}
            alt={`Image ${activeIndex + 1}`}
            className="gallery-main-img"
          />
        </div>
      </div>

      <div className="gallery-thumbs">
        <Swiper
          spaceBetween={8}
          slidesPerView={slidesPerView}
          breakpoints={{
            640: {
              direction: 'vertical',
              slidesPerView: 'auto',
              spaceBetween: 8,
            },
            1200: {
              direction: 'vertical',
              slidesPerView: 'auto',
              spaceBetween: 16,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src + index}>
              <button
                type="button"
                className={
                  'gallery-thumb-btn' +
                  (index === activeIndex ? ' gallery-thumb-btn--active' : '')
                }
                onClick={() => handleThumbClick(index)}
              >
                <div className="gallery-thumb-wrapper">
                  <img
                    src={src}
                    alt={`Thumb ${index + 1}`}
                    className="gallery-thumb-img"
                  />
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
