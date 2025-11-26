export type Category = 'phones' | 'tablets' | 'accessories';

export interface ProductRow {
  id: number;
  category: Category;
  item_id: string;
  name: string;
  full_price: number;
  price: number;
  screen: string | null;
  capacity: string | null;
  color: string | null;
  ram: string | null;
  year: number | null;
  image: string | null;
}

export interface ProductDetailsRow {
  id: string;
  category: Category;
  namespace_id: string;
  name: string;
  capacity_available: string[];
  capacity: string;
  price_regular: number;
  price_discount: number;
  colors_available: string[];
  color: string;
  images: string[];
  description: unknown;
  screen: string | null;
  resolution: string | null;
  processor: string | null;
  ram: string | null;
  camera: string | null;
  zoom: string | null;
  cell: string[] | null;
}

export type ProductWithDetailsRow = ProductRow & {
  product_details: ProductDetailsRow | null;
};
