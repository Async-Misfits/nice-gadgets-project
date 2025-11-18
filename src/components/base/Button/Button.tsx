import type { ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

/**
 *  UI Kit Button component
 *
 * @param {ButtonProps} props
 * @param {ButtonVariant} [props.variant='primary'] - Visual button style.
 * @param {ButtonState} [props.buttonState='default'] - Visual state of the button.
 * @param {ReactNode} [props.children] - Button content (ignored for `circle`).
 * @param {ReactNode} [props.icon] - Icon element for non-circle variants.
 * @param {string} [props.fillColor] - Inner fill color for `circle` variant.
 */

export type ButtonVariant =
  | 'square'
  | 'squareArrow'
  | 'primary'
  | 'secondary'
  | 'icon'
  | 'circle'
  | 'inline';

type ButtonState = 'default' | 'hover' | 'selected' | 'disabled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  buttonState?: ButtonState;
  children?: ReactNode;
  icon?: ReactNode;
  fillColor?: string;
}

export const Button = ({
  variant = 'primary',
  buttonState = 'default',
  children,
  type = 'button',
  icon,
  fillColor,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={buttonState === 'disabled'}
      className={classNames(
        styles.button,
        styles[variant],
        styles[buttonState],
      )}
      {...rest}
    >
      {variant === 'circle' && (
        <span
          className={styles.circleInner}
          style={{ backgroundColor: fillColor }}
        />
      )}

      {icon && variant !== 'circle' && (
        <span className={styles.icon}>{icon}</span>
      )}

      {variant !== 'circle' && children}
    </button>
  );
};
