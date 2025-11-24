import React from 'react';
import { Button } from '../Button/Button';
import styles from './Pagination.module.scss';
import { Icon } from '../icons';

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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

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
        {pages.map((page) => (
          <Button
            key={page}
            variant="square"
            onClick={() => onPageChange(page)}
            buttonState={currentPage === page ? 'selected' : 'default'}
          >
            {page}
          </Button>
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
