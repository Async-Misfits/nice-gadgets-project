import classNames from 'classnames';
import type { FC } from 'react';
import styles from './PromoSlide.module.scss';
import { Typography } from '../Typography';

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
        <Typography
          variant="h3"
          as="h2"
        >
          {title}
        </Typography>

        {description && (
          <Typography
            variant="body"
            as="p"
            className="{color: var(--text-secondary)}"
          >
            {description}
          </Typography>
        )}

        <button
          type="button"
          className={classNames(styles.button)}
          onClick={onButtonClick}
        >
          <Typography variant="button">{buttonLabel}</Typography>
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
