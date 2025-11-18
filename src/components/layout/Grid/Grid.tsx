import type React from 'react';
import classNames from 'classnames';
import styles from './Grid.module.scss';

type Props = {
  /**
   * React nodes that will be placed inside the grid.
   */
  children: React.ReactNode;
  /**
   * Optional custom class to extend styling.
   */
  className?: string;
};

/**
 * Grid layout component.
 *
 * This component implements the design-system grid:
 * - Mobile (320–639px): 4 columns (fluid)
 * - Tablet (640–1199px): 12 columns (fluid)
 * - Desktop (1200px+): 24 columns, fixed 1200px width
 *
 * The grid controls layout only — to define how many columns
 * a child spans, use `grid-column` inside child styles.
 *
 * @component
 * @example
 * ```tsx
 * <Grid>
 *   <div style={{ gridColumn: 'span 4' }}>Block A</div>
 *   <div style={{ gridColumn: 'span 8' }}>Block B</div>
 * </Grid>
 * ```
 *
 * @example
 * Responsive child:
 * ```scss
 * .item {
 *   grid-column: span 4;
 *
 *   @media (min-width: 640px) {
 *     grid-column: span 6; // from 12 columns
 *   }
 *
 *   @media (min-width: 1200px) {
 *     grid-column: span 8; // from 24 columns
 *   }
 * }
 * ```
 */
export const Grid: React.FC<Props> = ({ children, className }) => {
  return <div className={classNames(styles.grid, className)}>{children}</div>;
};
