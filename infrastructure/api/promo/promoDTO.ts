// TODO: update with real DTOs when backend is ready!!

export default interface PromoDTO {
  id: string;
  title: string;
  type: PromoType;
  is_generic: boolean;
  short_description: string;
  description?: string;
  banner_url: string;
  save_up_to?: number;
  start_price: number;
  off_percentage?: number;
  category?: ProductCategory;
}

export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
}

export interface PromoType {
  id: string;
  name: string; // primary, secondary, etc
}
