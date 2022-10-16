import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import ProductCard from '../product-card/product-card';
import CatalogSort from '../catalog-sort/catalog-sort';
import Pagination from '../pagination/pagination';
import CatalogFilter from '../catalog-filter/catalog-filter';

export default function Catalog() {
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
              <div className="cards catalog__cards">
                <ProductCard />
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
