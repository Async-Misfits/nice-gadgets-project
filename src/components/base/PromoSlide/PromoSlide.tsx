import classNames from 'classnames';
import type { FC } from 'react';
import styles from './PromoSlide.module.scss';
import { Typography } from '../Typography';

type PromoSlideProps = {
  /**
   * Main heading text shown on the left side.
   */
  title: string;

  /**
   * Optional secondary text shown under the title.
   */
  description?: string;

  /**
   * Text displayed inside the CTA button.
   */
  buttonLabel: string;

  /**
   * Source URL of the image shown on the right.
   */
  imageSrc: string;

  /**
   * Accessible text for the image.
   */
  imageAlt?: string;

  /**
   * Optional callback fired when the CTA button is clicked.
   */
  onButtonClick?: () => void;

  /**
   * Optional custom class for extending styles.
   */
  className?: string;
};

/**
 * PromoSlide component.
 *
 * A promotional slide used inside sliders or hero sections.
 * Displays a title, optional description, CTA button, and an image.
 *
 * Layout:
 * - Left side: text content (title, description, CTA button)
 * - Right side: image
 *
 * Typically used inside a custom Slider component.
 *
 * @component
 * @example
 * <PromoSlide
 *   title="Now available in our store! 👌"
 *   description="Be the first!"
 *   buttonLabel="Order now"
 *   imageSrc="/gadgets/img/banner-accessories.png"
 *   imageAlt="Accessories promo"
 *   onButtonClick={() => console.log("Clicked")}
 * />
 */
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
