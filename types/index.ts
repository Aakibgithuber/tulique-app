export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price?: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: ProductVariant;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  verified?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image?: string;
}

export interface FilterState {
  category: string | null;
  priceRange: [number, number];
  sortBy: 'newest' | 'price-low' | 'price-high' | 'popular';
  showBestSellers: boolean;
  showNewArrivals: boolean;
}
