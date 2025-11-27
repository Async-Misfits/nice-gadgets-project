import React, { useState, useMemo, useEffect } from 'react';
import { ProductsList } from '../ProductsList/ProductsList';
import type { Product } from '../../../types/Product';
import Dropdown from '../Dropdown/Dropdown';
import { Pagination } from '../Pagination/Pagination';
import { Breadcrumbs } from '../../ui/Breadcrumbs/Breadcrumbs';
import { Typography } from '../Typography/Typography';
import { getSortedProducts, SortType } from './catalogHelper';
import styles from './CatalogPage.module.scss';
import productsJson from '../../../api/products.json';

const sortOptions = [
  { name: SortType.NEWEST, label: 'Newest' },
  { name: SortType.CHEAPEST, label: 'Cheapest' },
  { name: SortType.EXPENSIVE, label: 'Expensive' },
  { name: SortType.CAPACITY, label: 'Capacity' },
];

const perPageOptions = [
  { name: 8, label: '8' },
  { name: 16, label: '16' },
  { name: 32, label: '32' },
];

const categoryTitles: Record<string, string> = {
  phones: 'Mobile phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

interface Props {
  category: 'phones' | 'tablets' | 'accessories';
}

const BASE = import.meta.env.BASE_URL;

export const CatalogPage: React.FC<Props> = ({ category }) => {
  const productsData = useMemo(() => {
    return (productsJson as unknown as Product[])
      .filter((product) => product.category === category)
      .map((p) => ({
        ...p,
        image: `${BASE}gadgets/${p.image}`,
      }));
  }, [category]);

  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState<string>(SortType.NEWEST);
  const [itemsPerPage, setItemsPerPage] = useState<number | string>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const sortedProducts = useMemo(() => {
    return getSortedProducts(productsData, sortType);
  }, [sortType, productsData]);

  const filteredProducts = useMemo(() => {
    const words = search.toLowerCase().split(' ').filter(Boolean);

    return sortedProducts.filter((p) =>
      words.every(
        (w) =>
          p.name.toLowerCase().includes(w) ||
          p.capacity.toLowerCase().includes(w) ||
          p.category.toLowerCase().includes(w) ||
          p.color?.toLowerCase().includes(w),
      ),
    );
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
            {filteredProducts.length} models
          </Typography>
        </div>

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
          <ProductsList products={visibleProducts} />
        </div>

        {!isAll && (
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
