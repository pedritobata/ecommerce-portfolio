import { ProductCategory } from "./product";

export default interface Promo {
  id: string;
  title: string;
  type: PromoType;
  isGeneric: boolean;
  shortDescription: string;
  description?: string;
  bannerUrl: string;
  saveUpTo?: number;
  startPrice: number;
  offPercentage?: number;
  category?: ProductCategory;
}

export interface PromoType {
  id: string;
  name: string; // primary, secondary, etc
}
