
import ProductDTO from "@/infrastructure/api/product/productDTO";

export const products: ProductDTO[] = [
    {
        id: '0001',
        name: 'Porto Evolution Headset',
        description: '',
        category: {
            id: 1,
            name: 'electronics',
            // description: ''
          },
        status: {
            // featured, top rated, latest, best selling
            id: 1,
            name: 'featured',
            // description: ''
        },
        price_range: [49.00],
        rating: 0,
        stock: 10,
        images_urls: [''],
        currency: {
            id: 1,
            name: 'USD',
            // description: ''
        },
        is_hot: false,
        // off_percentage: number,
        is_favorite: false,
    }
];