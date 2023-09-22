import Promo from "@/domain/model/promo";
import PromoRepository from "@/domain/repository/promoRepository";

export default class PromoRepositoryImpl implements PromoRepository {


    async getGeneric (): Promise<Promo[]> {
        return [];
    };
}