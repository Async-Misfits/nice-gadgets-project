import React, { useState, useMemo, useEffect } from 'react';
import { ProductsList } from '@/components/layout/ProductsList/ProductsList';
import { Dropdown } from '@/components/base/Dropdown/Dropdown';
import { Pagination } from '@/components/layout/Pagination/Pagination';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { Typography } from '@/components/base/Typography/Typography';
import { getSortedProducts, SortType } from './catalogHelper';
import styles from './CatalogPage.module.scss';
import { useProducts } from '@/hooks/useProducts';

const sortOptions = [
  { name: SortType.NEWEST, label: 'Newest' },
  { name: SortType.CHEAPEST, label: 'Cheapest' },
  { name: SortType.EXPENSIVE, label: 'Expensive' },
  { name: SortType.CAPACITY, label: 'Capacity' },
];

const perPageOptions = [
  { name: 12, label: '12' },
  { name: 24, label: '24' },
  { name: 36, label: '36' },
];

const categoryTitles: Record<string, string> = {
  phones: 'Mobile phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

interface Props {
  category: 'phones' | 'tablets' | 'accessories';
}

export const CatalogPage: React.FC<Props> = ({ category }) => {
  const { products, loading, error } = useProducts(category);

  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState<string>(SortType.NEWEST);
  const [itemsPerPage, setItemsPerPage] = useState<number | string>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const sortedProducts = useMemo(() => {
    return getSortedProducts(products, sortType);
  }, [sortType, products]);

  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase();

    if (!q.trim()) return sortedProducts;

    const isStrict = q.startsWith(' ') && q.endsWith(' ');
    const clean = q.trim();
    const words = clean.split(/\s+/);

    return sortedProducts.filter((p) => {
      const name = p.name.toLowerCase();
      const category = p.category.toLowerCase();
      const color = (p.color || '').toLowerCase();
      const capacity = p.capacity.toLowerCase();

      const modelNumber = name.match(/\d+/)?.[0] || '';
      const capacityNumber = capacity.replace(/\D+/g, '');

      return words.every((word) => {
        const isNumber = /^\d+$/.test(word);

        if (isStrict) {
          if (isNumber) {
            return modelNumber === word || capacityNumber === word;
          }
          return (
            name.split(/\s+/).includes(word) ||
            color === word ||
            category === word
          );
        }

        if (isNumber) {
          return modelNumber.includes(word) || capacityNumber.includes(word);
        }

        return (
          name.includes(word) || color.includes(word) || category.includes(word)
        );
      });
    });
  }, [search, sortedProducts]);

  const isAll = itemsPerPage === 'all';
  const limit = isAll ? filteredProducts.length : (itemsPerPage as number);

  const visibleProducts = useMemo(() => {
    const start = (currentPage - 1) * limit;
    const end = start + limit;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage, limit]);

  const handleSortChange = (value: string | number) => {
    setSortType(value as string);
    setCurrentPage(1);
  };

  const handlePerPageChange = (value: string | number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.catalogPage}>
      <div className={styles.container}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs />
        </div>

        <div className={styles.catalogHeader}>
          <Typography variant="h1">{categoryTitles[category]}</Typography>
          <br></br>
          <Typography
            variant="body"
            className={styles.modelsCount}
          >
            {loading ?
              'Loading...'
            : error ?
              'Error'
            : `${filteredProducts.length} models`}
          </Typography>
        </div>

        {error && (
          <div className={styles.error}>
            <Typography variant="body">Error: {error}</Typography>
          </div>
        )}

        <div className={styles.catalogControls}>
          <div className={styles.controlGroup}>
            <Typography
              variant="small"
              className={styles.label}
            >
              Sort by
            </Typography>
            <Dropdown
              options={sortOptions}
              placeholder="Sort by"
              value={sortType}
              onChange={handleSortChange}
              className={styles.dropdownSort}
            />
          </div>

          <div className={styles.controlGroup}>
            <Typography
              variant="small"
              className={styles.label}
            >
              Items on page
            </Typography>
            <Dropdown
              options={perPageOptions}
              placeholder="Items"
              value={itemsPerPage}
              onChange={handlePerPageChange}
              className={styles.dropdownPerPage}
            />
          </div>

          <div className={styles.controlGroup}>
            <input
              type="text"
              value={search}
              placeholder="I'm searching..."
              onChange={(e) => setSearch(e.target.value.trimStart())}
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.gridWrapper}>
          {error ?
            <Typography variant="body">Error: {error}</Typography>
          : <ProductsList
              products={visibleProducts}
              isLoading={loading}
            />
          }
        </div>

        {!isAll && !loading && (
          <div className={styles.paginationWrapper}>
            <Pagination
              total={filteredProducts.length}
              perPage={limit}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
