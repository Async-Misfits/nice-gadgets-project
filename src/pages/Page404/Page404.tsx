import { useNavigate } from 'react-router';
import { Button } from '../../components/base/Button';
import { Typography } from '../../components/base/Typography';
const BASE = import.meta.env.BASE_URL;

import styles from './Page404.module.scss';

export const Page404 = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Typography
          as="h1"
          variant="h1"
          className={styles.title}
        >
          Oops! Page not found
        </Typography>

        <Typography
          variant="body"
          className={styles.description}
        >
          The page you’re looking for doesn’t exist or has been moved.
        </Typography>

        <div className={styles.imageWrapper}>
          <div className={styles.imageBg}></div>
          <img
            src={`${BASE}/gadgets/img/page-not-found.png`}
            alt="404 cat"
            className={styles.image}
          />
        </div>

        <Button onClick={() => navigate('/')}>Go to homepage</Button>
      </div>
    </section>
  );
};
