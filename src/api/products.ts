// src/api/products.ts

import type { ProductDetailsRow, ProductRow } from '../types/supabase';
import { supabase } from '../utils/supabaseClient';

export type ProductWithDetails = ProductRow & {
  product_details: ProductDetailsRow | null;
};

export async function fetchProducts(): Promise<ProductWithDetails[]> {
  const { data, error } = await supabase.from('products').select(`
      *,
      product_details (*)
    `);

  if (error) {
    console.error('fetchProducts error', error);
    throw error;
  }

  return (data ?? []) as ProductWithDetails[];
}

export async function fetchProductByItemId(
  itemId: string,
): Promise<ProductWithDetails | null> {
  const { data, error } = await supabase
    .from('products')
    .select(
      `
      *,
      product_details (*)
    `,
    )
    .eq('item_id', itemId)
    .maybeSingle();

  if (error) {
    console.error('fetchProductByItemId error', error);
    throw error;
  }

  return data;
}
