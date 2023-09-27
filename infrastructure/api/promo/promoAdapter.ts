import Promo from "@/domain/model/promo";
import PromoDTO from "./promoDTO";

export default class PromoAdapter {
  static toPromo(promoDTO: PromoDTO): Promo {
    try {
      const {
        id,
        banner_url,
        is_generic,
        short_description,
        start_price,
        title,
        type,
        category,
        description,
        off_percentage,
        save_up_to,
      } = promoDTO;

      return {
        id,
        bannerUrl: banner_url,
        isGeneric: is_generic,
        shortDescription: short_description,
        startPrice: start_price,
        title,
        type,
        category,
        description,
        offPercentage: off_percentage,
        saveUpTo: save_up_to,
      };
    } catch (err) {
      console.error(err);
      throw new Error("Failed to transform DTO into Promo type");
    }
  }
}
