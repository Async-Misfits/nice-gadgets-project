import styles from './Divider.module.scss';

type Props = {
  fullWidth?: boolean;
};

export const Divider = ({ fullWidth = true }: Props) => {
  return <div className={fullWidth ? styles.dividerFull : styles.divider} />;
};
