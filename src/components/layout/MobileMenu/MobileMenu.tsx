import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../base/icons/Icon';
import Logo from '../../../../public/icons/Logo.svg?react';
import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Phones', href: '/phones' },
  { label: 'Tablets', href: '/tablets' },
  { label: 'Accessories', href: '/accessories' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <aside className={classNames(styles.menu, { [styles.isOpen]: isOpen })}>
      <div className={styles.header}>
        <NavLink
          to="/"
          className={styles.logoLink}
          onClick={onClose}
        >
          <Logo />
        </NavLink>

        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          <Icon
            name="x"
            size={16}
          />
        </button>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              classNames(styles.navLink, {
                [styles.isActive]: isActive,
              })
            }
            onClick={onClose}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <footer className={styles.footer}>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            classNames(styles.footerButton, { [styles.isActive]: isActive })
          }
          onClick={onClose}
        >
          <Icon
            name="heart"
            size={16}
            badgeCount={2}
          />
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            classNames(styles.footerButton, { [styles.isActive]: isActive })
          }
          onClick={onClose}
        >
          <Icon
            name="mail"
            size={16}
          />
        </NavLink>
      </footer>
    </aside>
  );
};
