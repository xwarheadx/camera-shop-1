import { useEffect } from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Cards from '../cards/cards';
import Pagination from '../pagination/pagination';
import CatalogSort from '../catalog-sort/catalog-sort';
import CatalogFilter from '../catalog-filter/catalog-filter';
import Loader from '../loader/loader';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { fetchProductsAction } from '../../store/api-actions';
import { getLoadedProductsStatus, getPage, getProducts } from '../../store/product-process/selectors';

export default function Catalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const isDataLoaded = useAppSelector(getLoadedProductsStatus);
  const currentPage = useAppSelector(getPage);
  const products = useAppSelector(getProducts);

  useEffect(()=>{
    dispatch(fetchProductsAction());
  },[currentPage, dispatch]);

  return (
    <div className="page-content">
      <Breadcrumbs />
      <section className='catalog'>
        <div className="container">
          <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
          <div className="page-content__columns">
            <CatalogFilter />
            <div className="catalog__content">
              <CatalogSort />
              {isDataLoaded
                ? <Cards products={products} />
                : <Loader/>}
              {isDataLoaded
                ? <Pagination/>
                : ''}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
