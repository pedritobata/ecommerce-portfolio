import GenericError from "@/shared/types/error";
import Promo from "../model/promo";

export default interface PromoRepository {
    getGeneric: () => Promise<Promo[]>;
}