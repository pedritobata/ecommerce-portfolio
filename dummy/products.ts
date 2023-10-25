
import ProductDTO from "@/infrastructure/api/product/productDTO";

export const products: ProductDTO[] = [
    {
        _id: '0001',
        name: 'Samsung Android cell phone',
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
        price_range: [49],
        rating: 0,
        stock: 10,
        images_urls: ['https://www.portotheme.com/wordpress/porto/shop14/wp-content/uploads/sites/64/2018/04/shop14_product10.jpg'],
        currency: {
            id: 1,
            name: 'USD',
            // description: ''
        },
        is_hot: false,
        // off_percentage: number,
        is_favorite: false,
    },
    {
        _id: '0002',
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
        price_range: [99, 109],
        rating: 2,
        stock: 23,
        images_urls: ['https://www.portotheme.com/wordpress/porto/shop14/wp-content/uploads/sites/64/2019/11/shop14_product4.jpg',
    'https://www.portotheme.com/wordpress/porto/shop14/wp-content/uploads/sites/64/2019/11/shop14_product3.jpg'],
        currency: {
            id: 1,
            name: 'USD',
            // description: ''
        },
        is_hot: true,
        // off_percentage: number,
        is_favorite: false,
    },
    {
        _id: '0003',
        name: 'Casio Wireless Headset',
        description: '',
        category: {
            id: 1,
            name: 'electronics',
            // description: ''
          },
        status: {
            // featured, top rated, latest, best selling
            id: 1,
            name: 'latest',
            // description: ''
        },
        price_range: [101, 108],
        rating: 4,
        stock: 12,
        images_urls: ['https://www.portotheme.com/wordpress/porto/shop14/wp-content/uploads/sites/64/2018/04/shop14_product12.jpg',
    'https://www.portotheme.com/wordpress/porto/shop14/wp-content/uploads/sites/64/2018/04/shop14_product7.jpg'],
        currency: {
            id: 1,
            name: 'USD',
            // description: ''
        },
        is_hot: true,
        off_percentage: 13,
        is_favorite: false,
    },
];