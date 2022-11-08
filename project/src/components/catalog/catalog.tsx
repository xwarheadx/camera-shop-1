import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Cards from '../cards/cards';
import Pagination from '../pagination/pagination';
import CatalogSort from '../catalog-sort/catalog-sort';
import CatalogFilter from '../catalog-filter/catalog-filter';
import Loader from '../loader/loader';
import { useAppSelector } from '../../hooks/index';
import { getLoadedProductsStatus, getProducts } from '../../store/product-process/selectors';

export default function Catalog(): JSX.Element {
  const isDataLoaded = useAppSelector(getLoadedProductsStatus);
  const products = useAppSelector(getProducts);
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
