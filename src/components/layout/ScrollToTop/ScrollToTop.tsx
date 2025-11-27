import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
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
      behavior: 'instant',
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};
