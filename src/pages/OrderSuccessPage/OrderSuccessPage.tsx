import { Grid } from '../../components/layout/Grid';
import { Typography } from '../../components/base/Typography';
import { Button } from '../../components/base/Button';
import styles from './OrderSuccessPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { clearCart } from '../../store/cartSlice';

export const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const [orderId] = useState(() => {
    const rand = () => Math.floor(1000 + Math.random() * 9000);
    return `${rand()}-${rand()}`;
  });

  return (
    <main className={styles.page}>
      <Grid>
        <div className={styles.container}>
          <Typography
            as="h1"
            variant="h1"
          >
            Thank you for your purchase!
          </Typography>

          <Typography
            variant="body"
            className={styles.info}
          >
            Your order has been successfully placed.
            <br />
            Our operator will contact you shortly to confirm the details.
            <br />
            <br />
            Order number: <strong>{orderId}</strong>
            <br />
          </Typography>

          <Button
            variant="primary"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </Grid>
    </main>
  );
};
