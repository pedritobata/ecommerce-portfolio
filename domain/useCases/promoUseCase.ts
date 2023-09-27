import GenericError from "@/shared/types/error";
import Promo from "../model/promo";
import PromoRepository from "../repository/promoRepository";

export interface PromoUseCase {
  getGenericPromos: () => Promise<Promo[] | GenericError>;
}

export default class PromoUseCaseImpl implements PromoUseCase {
  private _promoRepository: PromoRepository;

  constructor(promoRepository: PromoRepository) {
    this._promoRepository = promoRepository;
  }

  async getGenericPromos(): Promise<Promo[] | GenericError> {
    let genericPromos;
    try {
      genericPromos = await this._promoRepository.getGeneric();
    } catch (err) {
      console.error((err as Error).message || err);
      return new GenericError("Could not get generic promos.");
    }

    return genericPromos;
  }
}
