import { Grid } from '@/components/layout/Grid';
import { Typography } from '@/components/base/Typography';
import { Divider } from '@/components/base/Divider/Divider';
import styles from './RightsPage.module.scss';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs';

export const RightsPage = () => {
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
          Rights & Policies
        </Typography>

        <section className={styles.section}>
          <Typography
            as="h2"
            variant="h2"
          >
            Terms of Service
          </Typography>
          <Divider fullWidth={false} />
          <Typography
            variant="body"
            className={styles.text}
          >
            Using the Nice Gadgets website means that you agree to follow our
            basic rules:
            <br />• You must provide accurate information when placing an order.
            <br />• You agree not to use the website for fraudulent or harmful
            activity.
            <br />• Product availability and prices may change without prior
            notice.
            <br />• We reserve the right to update these terms at any time.
          </Typography>
        </section>

        <section className={styles.section}>
          <Typography
            as="h2"
            variant="h2"
          >
            User Rights
          </Typography>
          <Divider fullWidth={false} />
          <Typography
            variant="body"
            className={styles.text}
          >
            Every customer has the right to:
            <br />• Receive complete and accurate product information.
            <br />• Return or exchange items according to our Return Policy.
            <br />• Request deletion or correction of personal data.
            <br />• Contact support if any issue occurs.
          </Typography>
        </section>

        <section className={styles.section}>
          <Typography
            as="h2"
            variant="h2"
          >
            Privacy Policy
          </Typography>
          <Divider fullWidth={false} />
          <Typography
            variant="body"
            className={styles.text}
          >
            We are committed to protecting your personal information. We collect
            only the data required to:
            <br />• Process your orders
            <br />• Deliver goods
            <br />• Provide support
            <br />• Improve your experience on the website
            <br />
            <br />
            We do not sell or share your data with third parties, except
            services required to complete your order.
          </Typography>
        </section>

        <section className={styles.section}>
          <Typography
            as="h2"
            variant="h2"
          >
            Data Collection
          </Typography>
          <Divider fullWidth={false} />
          <Typography
            variant="body"
            className={styles.text}
          >
            We may collect the following data:
            <br />• Name and contact details
            <br />• Delivery information
            <br />• Order history
            <br />• Website usage analytics (cookies)
          </Typography>
        </section>

        <section className={styles.section}>
          <Typography
            as="h2"
            variant="h2"
          >
            Return & Refund Policy
          </Typography>
          <Divider fullWidth={false} />
          <Typography
            variant="body"
            className={styles.text}
          >
            You may return or exchange products if:
            <br />• The item has manufacturing defects
            <br />• You received an incorrect or damaged item
            <br />• The request is made within 14 days
            <br />
            <br />
            Products must be in original condition with all accessories
            included.
          </Typography>
        </section>

        <section className={styles.section}>
          <Typography
            as="h2"
            variant="h2"
          >
            Limitation of Liability
          </Typography>
          <Divider fullWidth={false} />
          <Typography
            variant="body"
            className={styles.text}
          >
            Nice Gadgets is not responsible for:
            <br />• Damage caused by misuse of products
            <br />• Delays by delivery services
            <br />• Losses caused by third-party failures
          </Typography>
        </section>

        <section className={styles.section}>
          <Typography
            as="h2"
            variant="h2"
          >
            Contact Information
          </Typography>
          <Divider fullWidth={false} />
          <Typography
            variant="body"
            className={styles.text}
          >
            If you have questions about your rights or our policies:
            <br />
            Email:{' '}
            <a href="mailto:support@nicegadgets.com">support@nicegadgets.com</a>
            <br />
            Phone: <a href="tel:+380445370222">+380 (44) 537-02-22</a>
          </Typography>
        </section>
      </Grid>
    </main>
  );
};
