import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import Catalog from '../catalog/catalog';
import Loader from '../loader/loader';
import Main from '../main/main';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import BasketPage from '../../pages/basket-page/basket-page';
import { AppRoute } from '../../consts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={AppRoute.MAIN} element={<Main/>}>
      <Route index element={<Navigate to={`${AppRoute.CATALOG}`}/>}/>
      <Route path={`${AppRoute.CATALOG}`} errorElement={<PageNotFound />} element={<CatalogPage/>} >
        <Route path=":page_id" element={<Catalog/>} errorElement={<PageNotFound />}/>
      </Route>
      <Route path={AppRoute.PRODUCT} element={<ProductPage/>}>
        <Route path =":id" element={<ProductPage/>}/>
      </Route>
      <Route path={AppRoute.BASKET} element={<BasketPage/>}/>
      <Route path={AppRoute.PAGE404} element={<PageNotFound/>}/>
    </Route>
  )
);

export default function App(): JSX.Element {
  return (
    <RouterProvider router={router}
      fallbackElement = {<Loader/>}
    /> );
}
