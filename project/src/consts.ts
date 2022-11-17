export enum AppRoute {
    MAIN = '/',
    CATALOG = '/catalog',
    PRODUCT = '/cameras/:id',
    BASKET = '/basket',
    PAGES = '/:page_id',
    PAGE404 = '*'
  }

export enum NameSpace {
  Product = 'PRODUCT',
  Review = 'REVIEW',
  Utils = 'UTILS',
  }

export enum APIRoute {
    Products = '/cameras',
    Promo = '/promo',
    Reviews='/reviews',
  }

export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy';
export const REQUEST_TIMEOUT = 5000;
export const PAGE_LIMIT = 9;
