import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // можна 'smooth', якщо хочеш анімацію
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};
