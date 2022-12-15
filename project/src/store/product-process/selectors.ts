import { ProductType } from '../../types/product';
import { State } from '../../types/state';
import { NameSpace } from '../../consts';

export const getLoadedProductsStatus = (state: State): boolean => state[NameSpace.Product].isProductsDataLoaded;
export const getLoadedProductStatus = (state: State): boolean => state[NameSpace.Product].isProductDataLoaded;
export const getProducts = (state: State): ProductType[] => state[NameSpace.Product].products;
export const getSimilarProducts = (state: State): ProductType[] => state[NameSpace.Product].similarProducts;
export const getProduct = (state: State): ProductType => state[NameSpace.Product].product;
export const getPage = (state: State): number => state[NameSpace.Product].currentPage;
export const getProductCount = (state: State): number => state[NameSpace.Product].productCount;
