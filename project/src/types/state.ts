import { store } from '../store/store';
import { MessageType } from './message';
import { ProductType, PromoType } from './product';
import { ReviewType } from './review';

export type ProductProcess = {
  isProductsDataLoaded: boolean;
  isProductDataLoaded: boolean;
  isPromoDataLoaded: boolean;
  productCount: number;
  currentPage: number;
  products: ProductType[];
  product: ProductType;
  promo: PromoType;
}

export type ReviewProcess = {
  isReviewsDataLoaded: boolean;
  reviews: ReviewType[];
  isReviewPosted: boolean;
};

export type UtilsProcess = {
  showMessage: boolean;
  showReview: boolean;
  showSuccess: boolean;
  message: MessageType;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
