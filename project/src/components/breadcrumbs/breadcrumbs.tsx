import { Link, useLocation } from 'react-router-dom';
import { AppRoute, BreadcrumbsSpecs } from '../../consts';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getProduct } from '../../store/product-process/selectors';

export default function Breadcrumbs(): JSX.Element {

  const product = useAppSelector(getProduct);
  const { pathname } = useLocation();
  const pathsArray = [] as string[];
  const paths = pathname.split('/');
  paths.forEach((slice: string) => pathsArray.push(slice.replace('', '/')));

  const getCrumbs = (pathsArr: string[]) => {
    const crumbsArray = [] as string[];
    pathsArr.forEach((path) => {
      const crumb = Object.keys(BreadcrumbsSpecs).find((crumbie) => BreadcrumbsSpecs[crumbie as keyof typeof BreadcrumbsSpecs].path === `${path}`);
      if (crumb) {
        crumbsArray.push(crumb);
      }
      if(path.includes('cameras')) {
        crumbsArray.push('product');
      }
    });
    return crumbsArray;
  };

  const newPath = getCrumbs(pathsArray);
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {newPath.map((path, i) => {
            const lastCrumb = newPath.length === i + 1;
            const properties = BreadcrumbsSpecs[path as keyof typeof BreadcrumbsSpecs];
            if (path === 'product') {
              return (
                <li key={`${path}-${i + 1}`} className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">{product.name}</span>
                </li>
              );
            }
            return (
              <li key={`${path}-${i + 1}`} className="breadcrumbs__item">
                {lastCrumb
                  ? <span className="breadcrumbs__link breadcrumbs__link--active">{properties.title}</span>
                  :
                  <Link className="breadcrumbs__link" to={path === 'Cameras'
                    ? AppRoute.CATALOG
                    : properties.path}
                  >{properties.title}
                    <svg width="5" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"></use>
                    </svg>
                  </Link>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
