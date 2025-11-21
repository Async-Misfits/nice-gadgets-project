import type { Category } from './Product';

export interface ProductDescriptionBlock {
  title: string;
  text: string[];
}

export interface ProductDetails {
  id: string; // в деталях це строка типу "apple-iphone-14-256gb-yellow"
  category: Category;
  namespaceId: string;
  name: string;

  capacityAvailable: string[];
  capacity: string;

  priceRegular: number;
  priceDiscount: number;

  colorsAvailable: string[];
  color: string;

  images: string[];
  description: ProductDescriptionBlock[];

  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
