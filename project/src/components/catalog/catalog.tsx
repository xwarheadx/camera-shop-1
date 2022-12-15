import { useEffect } from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Cards from '../cards/cards';
import CatalogSort from '../catalog-sort/catalog-sort';
import CatalogFilter from '../catalog-filter/catalog-filter';
import Loader from '../loader/loader';
import Pagination from '../pagination/pagination';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getLoadedProductsStatus, getProducts } from '../../store/product-process/selectors';
import { fetchPromoAction } from '../../store/api-actions';

export default function Catalog(): JSX.Element {
  const isDataLoaded = useAppSelector(getLoadedProductsStatus);
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchPromoAction());
  },[dispatch]);


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
