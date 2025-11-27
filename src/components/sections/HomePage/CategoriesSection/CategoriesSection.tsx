import type { FC } from 'react';
import styles from './CategoriesSection.module.scss';
import { Typography } from '@/components/base/Typography';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { Grid } from '@/components/layout/Grid';
import { Link } from 'react-router';

type Category = {
  imageSrc: string;
  title: string;
  itemsCount: number;
  backgroundColor: string;
  link?: string;
};

type CategoriesSectionProps = {
  title?: string;
  categories: Category[];
};

export const CategoriesSection: FC<CategoriesSectionProps> = ({
  title = 'Shop by category',
  categories,
}) => {
  return (
    <section className={styles.section}>
      <Grid className={styles.grid}>
        <div className={styles.headerItem}>
          <Typography
            as="h2"
            variant="h2"
          >
            {title}
          </Typography>
        </div>

        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.link || '/'}
            className={styles.item}
          >
            <CategoryCard {...category} />
          </Link>
        ))}
      </Grid>
    </section>
  );
};
