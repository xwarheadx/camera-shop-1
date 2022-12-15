export enum AppRoute {
    MAIN = '/',
    CATALOG = '/catalog',
    PRODUCT = '/cameras',
    BASKET = '/basket',
    PAGES = '/:page_id',
    PAGE404 = '*'
  }

export enum NameSpace {
  Product = 'PRODUCT',
  Review = 'REVIEW',
  Utils = 'UTILS',
  Complementary = 'COMPLEMENTARY',
  }

export enum APIRoute {
    Products = '/cameras',
    Promo = '/promo',
    Reviews='/reviews',
  }

export const BreadcrumbsSpecs = {
  Root: {
    title: 'Главная',
    path: AppRoute.MAIN,
  },
  Catalog: {
    title: 'Каталог',
    path: AppRoute.CATALOG,
  },
  Cameras: {
    title: 'Каталог',
    path: AppRoute.PRODUCT,
  },
  Basket: {
    title: 'Корзина',
    path: AppRoute.BASKET
  },
};

export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy';
export const REQUEST_TIMEOUT = 5000;
export const PAGE_LIMIT = 9;
export const RATING_STARS_COUNT = 5;
