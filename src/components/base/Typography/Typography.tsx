import classNames from 'classnames';
import styles from './Typography.module.scss';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'button'
  | 'body'
  | 'small';

type TypographyOwnProps<T extends ElementType = 'span'> = {
  as?: T;
  variant: TypographyVariant;
  className?: string;
  children?: ReactNode;
  uppercase?: boolean;
};

export type TypographyProps<E extends ElementType = 'span'> =
  TypographyOwnProps<E> &
    Omit<ComponentPropsWithoutRef<E>, keyof TypographyOwnProps>;

/**
 * Universal Typography component.
 *
 * Provides text styles defined in the design system such as headings,
 * body text, button labels, small text, and uppercase variants.
 * Allows rendering the text as any HTML tag using the `as` prop.
 *
 * ---
 * 🔧 Props:
 * - `variant` — visual text style (h1, h2, h3, h4, button, body, small, uppercase)
 * - `as` — HTML element to render (`span`, `h1`, `p`, `button`, etc.)
 * - `uppercase` — forces text transformation to uppercase
 * - `className` — adds a custom class name
 * - All additional props (e.g. `id`, `onClick`, `title`, etc.) are forwarded
 *   to the rendered HTML element.
 *
 * ---
 * 📌 Examples:
 *
 * 1. Heading
 * ```tsx
 * <Typography as="h1" variant="h1">
 *   Welcome to the store
 * </Typography>
 * ```
 *
 * 2. Body text
 * ```tsx
 * <Typography variant="body">
 *   This is a description of the product.
 * </Typography>
 * ```
 *
 * 3. Button label text
 * ```tsx
 * <Typography as="span" variant="button">
 *   Add to cart
 * </Typography>
 * ```
 *
 * 4. Small uppercase badge
 * ```tsx
 * <Typography variant="small" uppercase>
 *   New
 * </Typography>
 * ```
 *
 * 5. Rendering a paragraph with custom classes
 * ```tsx
 * <Typography as="p" variant="body" className="error">
 *   Something went wrong.
 * </Typography>
 * ```
 *
 */
export const Typography = <T extends ElementType = 'span'>(
  props: TypographyProps<T>,
) => {
  const { as, variant, className, children, uppercase, ...restProps } = props;
  const Component = as || 'span';

  return (
    <Component
      className={classNames(
        styles[variant],
        { [styles.uppercase]: uppercase },
        className,
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};
