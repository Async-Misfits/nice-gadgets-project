// useProducts.ts

import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import type { Product } from '../types/Product';
import { mapProductRow } from '../mappers/mapProduct';

export function useProducts(category?: Product['category']) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const load = async () => {
      try {
        setLoading(true);

        const rows = await fetchProducts();

        if (isCancelled) return;

        let mapped = rows.map(mapProductRow);

        if (category) {
          mapped = mapped.filter((p) => p.category === category);
        }

        setProducts(mapped);
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      isCancelled = true;
    };
  }, [category]);

  return { products, loading, error };
}
