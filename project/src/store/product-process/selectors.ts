import { NameSpace } from '../../consts';
import { ProductType, PromoType } from '../../types/product';
import { State } from '../../types/state';

export const getLoadedProductsStatus = (state: State): boolean => state[NameSpace.Product].isProductDataLoaded;
export const getLoadedPromoStatus = (state: State): boolean => state[NameSpace.Product].isPromoDataLoaded;
export const getPromo = (state: State): PromoType => state[NameSpace.Product].promo;
export const getProducts = (state: State): ProductType[] => state[NameSpace.Product].products;
