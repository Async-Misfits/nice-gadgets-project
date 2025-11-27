import { Typography } from '@/components/base/Typography';
import { Grid } from '@/components/layout/Grid';
import styles from './ContactsPage.module.scss';
import { Button } from '@/components/base/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs';

export const ContactsPage = () => {
  return (
    <main className={styles.page}>
      <Grid>
        <div className={styles.fullLineWrapper}>
          <Breadcrumbs showBack />
        </div>
        <Typography
          as="h1"
          variant="h1"
          className={styles.title}
        >
          Contacts
        </Typography>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardText}>
              <Typography
                as="h3"
                variant="h3"
              >
                Help Center
              </Typography>

              <Typography
                variant="body"
                className={styles.text}
              >
                Get answers to the most common questions about payment,
                delivery, warranty, and our services.
              </Typography>

              <Button variant="primary">Go to</Button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardText}>
              <Typography
                as="h3"
                variant="h3"
              >
                Support Chat
              </Typography>

              <Typography variant="body">Working hours:</Typography>

              <div className={styles.workHours}>
                <Typography
                  variant="body"
                  className={styles.day}
                >
                  Mon–Fri
                </Typography>
                <Typography
                  variant="body"
                  className={styles.time}
                >
                  8:00–20:00
                </Typography>
              </div>

              <div className={styles.workHours}>
                <Typography
                  variant="body"
                  className={styles.day}
                >
                  Sat–Sun
                </Typography>
                <Typography
                  variant="body"
                  className={styles.time}
                >
                  9:00–18:00
                </Typography>
              </div>
              <a href="mailto:support@nicegadgets.com">
                <Button variant="primary">Write</Button>
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardText}>
              <Typography
                as="h3"
                variant="h3"
              >
                Call Center
              </Typography>

              <Typography variant="body">Working hours:</Typography>

              <div className={styles.workHours}>
                <Typography
                  variant="body"
                  className={styles.day}
                >
                  Mon–Sat
                </Typography>
                <Typography
                  variant="body"
                  className={styles.time}
                >
                  8:00–20:00
                </Typography>
              </div>

              <div className={styles.workHours}>
                <Typography
                  variant="body"
                  className={styles.day}
                >
                  Sun
                </Typography>
                <Typography
                  variant="body"
                  className={styles.time}
                >
                  9:00–19:00
                </Typography>
              </div>

              <Typography variant="small">
                <a
                  className={styles.phone}
                  href="tel:+380445370222"
                >
                  (044) 537-02-22
                </a>
              </Typography>

              <a href="tel:+380445370222">
                <Button variant="primary">Call</Button>
              </a>
            </div>
          </div>
        </div>
      </Grid>
    </main>
  );
};
