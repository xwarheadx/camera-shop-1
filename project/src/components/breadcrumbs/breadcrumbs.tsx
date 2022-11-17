import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { ProductType } from '../../types/product';

interface BreadcrumbsProps {
  camera?: ProductType;
}

export default function Breadcrumbs({camera}: BreadcrumbsProps): JSX.Element {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.CATALOG}>Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          {camera
            ?
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to={AppRoute.CATALOG}>Каталог
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </Link>
            </li>
            : <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span></li>}
          {camera
            ? <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">{camera.name}</span></li>
            : ''}
        </ul>
      </div>
    </div>
  );
}

