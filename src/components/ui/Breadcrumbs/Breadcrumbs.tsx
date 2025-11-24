import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { Icon } from '../../base/icons';
import { Typography } from '../../base/Typography';

type BreadcrumbsProps = {
  showBack?: boolean;
};

/**
 * Breadcrumbs component responsible for rendering the navigation path
 * based on the current URL. It supports an optional "Back" button that
 * navigates to the previous route level.
 *
 * The component:
 * - Automatically parses the current URL (via react-router's useLocation)
 * - Builds a chain of clickable breadcrumb links
 * - Displays the last segment as "current" (non-clickable)
 * - Optionally shows a "Back" button using the `showBack` prop
 *
 * @example
 * // Basic usage without back button (default)
 * <Breadcrumbs />
 *
 * @example
 * // With back button
 * <Breadcrumbs showBack />
 */
export const Breadcrumbs = ({ showBack = false }: BreadcrumbsProps) => {
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter(Boolean); // remove empty segments

  const crumbs = pathParts.map((part, index) => {
    const pathTo = '/' + pathParts.slice(0, index + 1).join('/');

    // Capitalize & replace hyphens
    const label = part
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return { label, pathTo };
  });

  return (
    <nav className={styles.breadcrumbs}>
      <div className={styles.chain}>
        <Link
          to="/"
          className={styles.link}
        >
          <Icon
            name="home"
            className={styles.icon}
          />
        </Link>

        {crumbs.map((c, i) => (
          <span
            key={c.pathTo}
            className={styles.item}
          >
            <Icon
              name="chevron-right"
              className={styles.separator}
            />
            {i === crumbs.length - 1 ?
              <span className={styles.current}>
                <Typography variant="small">{c.label}</Typography>
              </span>
            : <Link
                to={c.pathTo}
                className={styles.link}
              >
                <Typography variant="small">{c.label}</Typography>
              </Link>
            }
          </span>
        ))}
      </div>
      {showBack && (
        <Link
          to=".."
          className={styles.backLink}
        >
          <Icon name="chevron-left" />
          <Typography variant="small">Back</Typography>
        </Link>
      )}
    </nav>
  );
};
