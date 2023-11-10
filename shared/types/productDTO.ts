// TODO: update with real DTOs when backend is ready!!

export default interface ProductDTO {
  _id: string;
  name: string;
  description?: string;
  category: ProductCategoryDTO;
  status: ProductStatusDTO;
  price_range: number[];
  rating: number;
  stock: number;
  images_urls: string[];
  currency: CurrencyDTO;
  is_hot?: boolean;
  off_percentage?: number;
  is_favorite?: boolean;
}

export interface ProductStatusDTO {
  // featured, top rated, latest, best selling
  id: number;
  name: string;
  description?: string;
}

export interface ProductCategoryDTO {
  id: number;
  name: string;
  description?: string;
}

export interface CurrencyDTO {
  id: number;
  name: string; // USD, PEN, etc
  description?: string;
}
