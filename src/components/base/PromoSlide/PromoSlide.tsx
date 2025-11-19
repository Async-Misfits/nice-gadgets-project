import classNames from 'classnames';
import type { FC } from 'react';
import styles from './PromoSlide.module.scss';

type PromoSlideProps = {
  title: string;
  description?: string;
  buttonLabel: string;
  imageSrc: string;
  imageAlt?: string;
  onButtonClick?: () => void;
  className?: string;
};

export const PromoSlide: FC<PromoSlideProps> = ({
  title,
  description,
  buttonLabel,
  imageSrc,
  imageAlt,
  onButtonClick,
  className,
}) => {
  return (
    <section className={classNames(styles.slide, className)}>
      <div className={classNames(styles.content)}>
        <h2 className={classNames(styles.title)}>{title}</h2>

        {description && (
          <p className={classNames(styles.description)}>{description}</p>
        )}

        <button
          type="button"
          className={classNames(styles.button)}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </button>
      </div>
      <div className={classNames(styles.imageWrapper)}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className={classNames(styles.image)}
        />
      </div>
    </section>
  );
};
