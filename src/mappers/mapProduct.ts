import type { Product } from '../types/Product';
import type { ProductDetails } from '../types/ProductDetails';
import type {
  ProductDetailsRow,
  ProductRow,
  ProductWithDetailsRow,
} from '../types/supabase';

export const mapProductRow = (row: ProductRow): Product => ({
  id: row.id,
  category: row.category,
  itemId: row.item_id,
  name: row.name,
  fullPrice: row.full_price,
  price: row.price,
  screen: row.screen ?? '',
  capacity: row.capacity ?? '',
  color: row.color ?? '',
  ram: row.ram ?? '',
  year: row.year ?? 0,
  image: row.image ?? '',
});

export const mapProductDetailsRow = (
  row: ProductDetailsRow,
): ProductDetails => ({
  id: row.id,
  category: row.category,
  namespaceId: row.namespace_id,
  name: row.name,
  capacityAvailable: row.capacity_available,
  capacity: row.capacity,
  priceRegular: row.price_regular,
  priceDiscount: row.price_discount,
  colorsAvailable: row.colors_available,
  color: row.color,
  images: row.images,
  description: row.description as ProductDetails['description'],
  screen: row.screen ?? '',
  resolution: row.resolution ?? '',
  processor: row.processor ?? '',
  ram: row.ram ?? '',
  camera: row.camera ?? '',
  zoom: row.zoom ?? '',
  cell: row.cell ?? [],
});

export const mapProductWithDetails = (
  row: ProductWithDetailsRow,
): { product: Product; details: ProductDetails | null } => ({
  product: mapProductRow(row),
  details:
    row.product_details ? mapProductDetailsRow(row.product_details) : null,
});
