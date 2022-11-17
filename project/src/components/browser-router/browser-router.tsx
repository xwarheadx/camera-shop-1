import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import BasketPage from '../../pages/basket-page/basket-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import ProductPage from '../../pages/product-page/product-page';
import Catalog from '../catalog/catalog';

const router = createBrowserRouter(
  [
    {
      path: AppRoute.MAIN,
      element: <Navigate replace to={`${AppRoute.CATALOG}${AppRoute.PAGES}`}/>
    },
    {
      path: AppRoute.CATALOG,
      element: <CatalogPage/>,
      children: [{
        path: `${AppRoute.CATALOG}${AppRoute.PAGES}`,
        element: <Catalog/>
      }]
    },
    {
      path: AppRoute.BASKET,
      element: <BasketPage/>
    },
    {
      path: AppRoute.PRODUCT,
      element: <ProductPage/>
    },
    {
      path: AppRoute.PAGE404,
      element: <PageNotFound/>
    },
  ]);

export default router;
