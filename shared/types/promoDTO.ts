// TODO: update with real DTOs when backend is ready!!

export default interface PromoDTO {
  id: string;
  title: string;
  type: PromoTypeDTO;
  is_generic: boolean;
  short_description: string;
  description?: string;
  banner_url: string;
  save_up_to?: number;
  start_price: number;
  off_percentage?: number;
  category?: ProductCategoryDTO;
}

export interface ProductCategoryDTO {
  id: number;
  name: string;
  description?: string;
}

export interface PromoTypeDTO {
  id: string;
  name: string; // primary, secondary, etc
}
