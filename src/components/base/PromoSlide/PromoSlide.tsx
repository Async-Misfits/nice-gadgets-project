import classNames from 'classnames';
import type { FC } from 'react';
import styles from './PromoSlide.module.scss';
import { Typography } from '../Typography';
import { Link } from 'react-router';

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
   * Route where the CTA link should navigate.
   * Example: "/phones" or "/accessories".
   */
  linkTo: string;

  /**
   * Source URL of the image shown on the right.
   */
  imageSrc: string;

  /**
   * Accessible text for the image.
   */
  imageAlt?: string;

  /**
   * Optional custom class for extending styles.
   */
  className?: string;
};

/**
 * PromoSlide component.
 *
 * A promotional slide used inside sliders or hero sections.
 * Displays a title, optional description, CTA link, and an image.
 *
 * Layout:
 * - Left side: text content (title, description, CTA)
 * - Right side: image
 */
export const PromoSlide: FC<PromoSlideProps> = ({
  title,
  description,
  buttonLabel,
  linkTo,
  imageSrc,
  imageAlt,
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

        <Link
          type="button"
          className={classNames(styles.button)}
          to={linkTo}
        >
          <Typography variant="button">{buttonLabel}</Typography>
        </Link>
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
