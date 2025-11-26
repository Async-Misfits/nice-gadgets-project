import { useEffect, useState } from 'react';
import type { Product } from '../types/Product';
import type { ProductDetails } from '../types/ProductDetails';
import { supabase } from '../utils/supabaseClient';
import type { ProductRow, ProductWithDetailsRow } from '../types/supabase';
import { mapProductRow, mapProductWithDetails } from '../mappers/mapProduct';

type ProductPageState = {
  loading: boolean;
  error: string | null;
  product: Product | null;
  details: ProductDetails | null;
  related: Product[];
};

export const useProductPage = (itemId?: string) => {
  const [state, setState] = useState<ProductPageState>({
    loading: true,
    error: null,
    product: null,
    details: null,
    related: [],
  });

  useEffect(() => {
    if (!itemId) {
      setState((prev) => ({ ...prev, loading: false }));
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const { data, error } = await supabase
          .from('products')
          .select(
            `
            *,
            product_details (*)
          `,
          )
          .eq('item_id', itemId)
          .maybeSingle<ProductWithDetailsRow>();

        if (error) throw error;

        if (!data) {
          if (!cancelled) {
            setState({
              loading: false,
              error: null,
              product: null,
              details: null,
              related: [],
            });
          }
          return;
        }

        const { product, details } = mapProductWithDetails(data);

        const { data: relatedRaw, error: relatedError } = await supabase
          .from('products')
          .select('*')
          .eq('category', data.category)
          .neq('item_id', itemId)
          .limit(10)
          .returns<ProductRow[]>();

        if (relatedError) throw relatedError;

        const related = (relatedRaw ?? []).map(mapProductRow);

        if (!cancelled) {
          setState({
            loading: false,
            error: null,
            product,
            details,
            related,
          });
        }
      } catch (e) {
        if (!cancelled) {
          setState((prev) => ({
            ...prev,
            loading: false,
            error: e instanceof Error ? e.message : 'Unknown error',
          }));
        }
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, [itemId]);

  return state;
};
