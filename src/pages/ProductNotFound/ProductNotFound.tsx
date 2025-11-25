import { useNavigate } from 'react-router';

import styles from './ProductNotFound.module.scss';
import { Button } from '../../components/base/Button';
import { Typography } from '../../components/base/Typography';

export const ProductNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Typography
          as="h2"
          variant="h2"
          className={styles.title}
        >
          Product not found
        </Typography>

        <Typography
          variant="body"
          className={styles.description}
        >
          We couldn’t find this item. It may have been removed or is no longer
          available.
        </Typography>

        <div className={styles.imageWrapper}>
          <div className={styles.imageBg}></div>
          <img
            src="/gadgets/img/product-not-found.png"
            alt="Product not found cat"
            className={styles.image}
          />
        </div>

        <Button onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </section>
  );
};
