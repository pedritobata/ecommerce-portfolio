import Product from "@/domain/model/product";
import ProductDTO from "./productDTO";

export default class ProductAdapter {
  static toProduct(productDTO: ProductDTO): Product {
    try {
      const {
        category,
        currency,
        _id,
        images_urls,
        name,
        price_range,
        rating,
        status,
        stock,
        description,
        is_favorite,
        is_hot,
        off_percentage,
      } = productDTO;

      return {
        category,
        currency,
        id: _id,
        imagesUrls: images_urls,
        name,
        priceRange: price_range,
        rating,
        status,
        stock,
        description,
        isFavorite: is_favorite,
        isHot: is_hot,
        offPercentage: off_percentage,
      };
    } catch (err) {
      console.error(err);
      throw new Error("Could not transform DTO imto Product type");
    }
  }
}
