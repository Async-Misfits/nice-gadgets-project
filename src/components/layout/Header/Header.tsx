import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { Typography } from '../../base/Typography';
// import { Button } from '../../../base/Button';
import { Icon } from '../../base/icons/Icon';
import styles from './Header.module.scss';
import Logo from '../../../../public/icons/Logo.svg?react';
import { MobileMenu } from '../MobileMenu/MobileMenu';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Phones', href: '/phones' },
  { label: 'Tablets', href: '/tablets' },
  { label: 'Accessories', href: '/accessories' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <NavLink
          to="/"
          className={styles.logo}
        >
          <Logo />
        </NavLink>

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
            >
              <Typography
                variant="button"
                uppercase
              >
                {item.label}
              </Typography>
            </NavLink>
          ))}
        </nav>

        {/* <div className={styles.actions}>
          <div className={styles.desktopActions}>
            <div className={styles.actionButton}>
              <Button
                variant='square'
                className={styles.iconBtnOverride}
                iconButton={<Icon name="heart" size={16} />}
              >
                
              </Button>
            </div>
            
            <div className={styles.actionButton}>
              <Button
                type="button"
                className={styles.iconBtnOverride} 
              >
                <Icon name="mail" size={16} badgeCount={2} />
              </Button>
            </div>
          </div>

          <div className={styles.mobileActions}>
            <div className={styles.actionButton}>
              <Button
                type="button"
                className={styles.iconBtnOverride}
              >
                <Icon name="menu" size={16} />
              </Button>
            </div>
          </div>
        </div> */}

        <div className={styles.actions}>
          {/* Desktop Actions */}
          <div className={styles.desktopActions}>
            <div className={styles.actionButton}>
              <Link to="/favorites">
                <button
                  type="button"
                  className={styles.iconButton}
                >
                  <Icon
                    name="heart"
                    size={16}
                  />
                </button>
              </Link>
            </div>

            <div className={styles.actionButton}>
              <Link to="/cart">
                <button
                  type="button"
                  className={styles.iconButton}
                >
                  <Icon
                    name="mail"
                    size={16}
                    badgeCount={2}
                  />
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.mobileActions}>
            <div className={styles.actionButton}>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setIsMenuOpen(true)}
              >
                <Icon
                  name="menu"
                  size={16}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};
