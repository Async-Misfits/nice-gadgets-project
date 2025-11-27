import React from 'react';
import { Button } from '../Button/Button';
import styles from './Pagination.module.scss';
import { Icon } from '../Icon';

interface PaginationProps {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);

  if (totalPages <= 1) return null;

  const getPaginationItems = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      if (currentPage === 3) return [1, 2, 3, 4, '...', totalPages];
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      if (currentPage === totalPages - 2)
        return [
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  const pages = getPaginationItems();

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <Button
        variant="squareArrow"
        onClick={handlePrev}
        disabled={currentPage === 1}
        buttonState={currentPage === 1 ? 'disabled' : 'default'}
        iconButton={<Icon name="chevron-left"></Icon>}
      />

      <div className={styles.pagesList}>
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            {typeof page === 'number' ?
              <Button
                variant="square"
                onClick={() => onPageChange(page)}
                buttonState={currentPage === page ? 'selected' : 'default'}
              >
                {page}
              </Button>
            : <span className={styles.dots}>...</span>}
          </React.Fragment>
        ))}
      </div>

      <Button
        variant="squareArrow"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        buttonState={currentPage === totalPages ? 'disabled' : 'default'}
        iconButton={<Icon name="chevron-right"></Icon>}
      />
    </div>
  );
};
