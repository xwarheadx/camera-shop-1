import { memo, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getProductCount } from '../../store/product-process/selectors';
import { getPage } from '../../store/utils-process/selectors';
import { pageSetter } from '../../store/utils-process/utils-process';
import { getPagesCount } from '../../utils';
import { AppRoute } from '../../consts';


function Pagination () {
  const productCount = useAppSelector(getProductCount);
  const currentPage = useAppSelector(getPage);
  const dispatch = useAppDispatch();
  const totalPages = getPagesCount(productCount);
  const pages = [];

  const handlePageLinkClick = (evt: MouseEvent<HTMLLIElement>) => {
    const selectedPage = evt.currentTarget.getAttribute('data-tag');
    dispatch(pageSetter(Number(selectedPage)));
  };
  const handleBackButtonClick = (evt: MouseEvent<HTMLLIElement>) => {
    const selectedPage = currentPage - 1;
    dispatch(pageSetter(Number(selectedPage)));
  };
  const handleNextButtonClick = (evt: MouseEvent<HTMLLIElement>) => {
    const selectedPage = currentPage + 1;
    dispatch(pageSetter(Number(selectedPage)));
  };

  for(let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={`${'pages'}-${i}`} data-tag={i} className="pagination__item" data-testid='pagination-item-test' onClick={handlePageLinkClick}>
        <Link className={
          (currentPage === i)
            ? 'pagination__link pagination__link--active'
            : 'pagination__link'
        } to={`${AppRoute.CATALOG}/page_${i}`}
        >{i}
        </Link>
      </li>
    );
  }
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {currentPage !== 1
          ? <li className="pagination__item" data-testid='pagination-item-previous-test' onClick = {handleBackButtonClick}><Link className="pagination__link pagination__link--text" to={`${AppRoute.CATALOG}/page_${currentPage - 1}`}>Назад</Link></li>
          : ''}
        {pages}
        {currentPage !== totalPages
          ? <li className="pagination__item" data-testid='pagination-item-next-test' onClick = {handleNextButtonClick}><Link className="pagination__link pagination__link--text" to={`${AppRoute.CATALOG}/page_${currentPage + 1}`}>Далее</Link></li>
          : ''}
      </ul>
    </div>
  );
}
export default memo(Pagination);
