export default interface Product {
    id: string;
    name: string;
    description?: string;
    category: ProductCategory;
    status: ProductStatus;
    priceRange: number[];
    rating: number;
    stock: number;
    imagesUrls: string[];
    currency: string;
    isHot?: boolean;
    offPercentage?: number;
    isFavorite?: boolean; 
}

export interface ProductStatus { // featured, top rated, latest, best selling
    id: string;
    name: string;
    description?: string;
}

export interface ProductCategory {
    id: string;
    name: string;
    description?: string;
}