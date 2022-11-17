import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentPage } from '../../store/product-process/product-process';
import { getPage, getProductCount } from '../../store/product-process/selectors';
import { getPagesCount } from '../../utils';
import { memo, MouseEvent } from 'react';

function Pagination () {
  const productCount = useAppSelector(getProductCount);
  const currentPage = useAppSelector(getPage);
  const dispatch = useAppDispatch();
  const totalPages = getPagesCount(productCount);
  const pages = [];
  const handlePageLinkClick = (evt: MouseEvent<HTMLLIElement>) => {
    const selectedPage = evt.currentTarget.getAttribute('data-tag');
    dispatch(setCurrentPage(Number(selectedPage)));
  };
  const handleBackButtonClick = (evt: MouseEvent<HTMLLIElement>) => {
    const selectedPage = currentPage - 1;
    dispatch(setCurrentPage(Number(selectedPage)));
  };
  const handleNextButtonClick = (evt: MouseEvent<HTMLLIElement>) => {
    const selectedPage = currentPage + 1;
    dispatch(setCurrentPage(Number(selectedPage)));
  };

  for(let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={`${'pages'}-${i}`} data-tag={i} className="pagination__item" onClick={handlePageLinkClick}>
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
          ? <li className="pagination__item" onClick = {handleBackButtonClick}><Link className="pagination__link pagination__link--text" to={`${AppRoute.CATALOG}/page_${currentPage - 1}`}>Назад</Link></li>
          : ''}
        {pages}
        {currentPage !== totalPages
          ? <li className="pagination__item" onClick = {handleNextButtonClick}><Link className="pagination__link pagination__link--text" to={`${AppRoute.CATALOG}/page_${currentPage + 1}`}>Далее</Link></li>
          : ''}
      </ul>
    </div>
  );
}
export default memo(Pagination);
