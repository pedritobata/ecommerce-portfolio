// TODO: update with real DTOs when backend is ready!!

export default interface ProductDTO {
  _id: string;
  name: string;
  description?: string;
  category: ProductCategory;
  status: ProductStatus;
  price_range: number[];
  rating: number;
  stock: number;
  images_urls: string[];
  currency: Currency;
  is_hot?: boolean;
  off_percentage?: number;
  is_favorite?: boolean;
}

export interface ProductStatus {
  // featured, top rated, latest, best selling
  id: number;
  name: string;
  description?: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  description?: string;
}

export interface Currency {
  id: number;
  name: string; // USD, PEN, etc
  description?: string;
}
