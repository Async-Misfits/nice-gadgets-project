import { Grid } from '../Grid/Grid';
import { Typography } from '../../base/Typography/Typography';
import { Button } from '../../base/Button/Button';
import styles from './Footer.module.scss';
import { Icon } from '../../base/icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <Grid>
        <div className={styles.topBar}>
          <div className={styles.topContent}>
            <Icon
              name="logo"
              width={89}
              height={32}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <ul className={styles.links}>
              <li>
                <a
                  href="https://github.com/Async-Misfits/nice-gadgets-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    variant="body"
                    uppercase
                  >
                    GitHub
                  </Typography>
                </a>
              </li>
              <li>
                <a href="/contacts">
                  <Typography
                    variant="body"
                    uppercase
                  >
                    Contacts
                  </Typography>
                </a>
              </li>
              <li>
                <a href="/rights">
                  <Typography
                    variant="body"
                    uppercase
                  >
                    Rights
                  </Typography>
                </a>
              </li>
            </ul>

            <div className={styles.backToTop}>
              <Button
                variant="inline"
                onClick={scrollToTop}
              >
                Back to top
              </Button>

              <Button
                variant="square"
                iconButton={
                  <Icon
                    name="chevron-up"
                    size={36}
                  />
                }
                onClick={scrollToTop}
              />
            </div>
          </div>
        </div>
      </Grid>
    </footer>
  );
};
