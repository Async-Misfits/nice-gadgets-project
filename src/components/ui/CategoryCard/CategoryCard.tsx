import type { FC } from 'react';
import styles from './CategoryCard.module.scss';
import { Typography } from '../../base/Typography';

type CategoryCardProps = {
  imageSrc: string;
  title: string;
  itemsCount: number;
  backgroundColor: string;
};

export const CategoryCard: FC<CategoryCardProps> = ({
  imageSrc,
  title,
  itemsCount,
  backgroundColor,
}) => {
  return (
    <article className={styles.card}>
      <div
        className={styles.imageWrapper}
        style={{ backgroundColor }}
      >
        <img
          src={imageSrc}
          alt={title}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <Typography
          as="h4"
          variant="h4"
        >
          {title}
        </Typography>
        <Typography
          as="p"
          variant="body"
        >
          {itemsCount} models
        </Typography>
      </div>
    </article>
  );
};
