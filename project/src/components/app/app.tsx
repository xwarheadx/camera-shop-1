import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import BasketPage from '../../pages/basket-page/basket-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.CATALOG}
          element={<CatalogPage/>}
        >
        </Route>
        <Route
          path={AppRoute.PRODUCT}
          element={<ProductPage/>}
        >
        </Route>
        <Route
          path={AppRoute.BASKET}
          element={<BasketPage/>}
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
