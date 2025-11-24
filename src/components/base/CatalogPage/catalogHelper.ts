import type { Product } from '../../../types/Product';

export const SortType = {
  NEWEST: 'age',
  CHEAPEST: 'price',
  EXPENSIVE: 'priceDesc',
  CAPACITY: 'capacity',
} as const;

export type SortTypeEnum = (typeof SortType)[keyof typeof SortType];

const getCapacityValue = (capacity: string): number => {
  const normalized = capacity.toLowerCase();
  const value = parseFloat(normalized);

  if (normalized.includes('tb')) {
    return value * 1024;
  }

  return value;
};

export const getSortedProducts = (
  products: Product[],
  sortType: string | SortTypeEnum,
): Product[] => {
  const preparedProducts = [...products];

  switch (sortType) {
    // case SortType.ALPHABETICALLY:
    //   return preparedProducts.sort((a, b) => a.name.localeCompare(b.name));

    case SortType.CHEAPEST:
      return preparedProducts.sort((a, b) => a.price - b.price);

    case SortType.EXPENSIVE:
      return preparedProducts.sort((a, b) => b.price - a.price);

    case SortType.CAPACITY:
      return preparedProducts.sort((a, b) => {
        return getCapacityValue(b.capacity) - getCapacityValue(a.capacity);
      });

    case SortType.NEWEST:
    default:
      return preparedProducts.sort((a, b) => b.year - a.year);
  }
};
