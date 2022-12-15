import { useEffect, useLayoutEffect, useState } from 'react';
import { AppRoute } from '../../consts';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Banner from '../../components/banner/banner';
import Message from '../../components/ui/message';
import { getNumeric, getPagesCount } from '../../utils';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchProductsAction } from '../../store/api-actions';
import { getProductCount } from '../../store/product-process/selectors';
import { getLoadedPromoStatus, getPromo } from '../../store/complementary-process/selectors';
import { getMessageContent, getMessageVisibilityStatus, getPage } from '../../store/utils-process/selectors';
import { toggleMessage, pageSetter } from '../../store/utils-process/utils-process';

export default function CatalogPage(): JSX.Element {
  const navigate = useNavigate();
  const message = useAppSelector(getMessageContent);
  const isVisible = useAppSelector(getMessageVisibilityStatus);
  const bannerData = useAppSelector(getPromo);
  const bannerLoaded = useAppSelector(getLoadedPromoStatus);
  const currentPage = useAppSelector(getPage);
  const location = useLocation();
  const productCount = useAppSelector(getProductCount);
  const totalPages = getPagesCount(productCount);
  const dispatch = useAppDispatch();
  const [initialLoad, setInitialLoad] = useState(true);

  useLayoutEffect(()=>{
    if((productCount !== 0 && currentPage > totalPages) || !location.pathname.includes('/page_')) {
      navigate(`${AppRoute.PAGE404}`);
    }
    if(location.pathname === (`${AppRoute.CATALOG}`)) {
      navigate(`${AppRoute.CATALOG}/page_1`);
      dispatch(pageSetter(1));
    }
  },[currentPage, dispatch, navigate, productCount, totalPages, location.pathname]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        dispatch(toggleMessage());
      }, 3000);
    }
  },[isVisible, dispatch]);

  useEffect(()=>{
    if(getNumeric(location.pathname) !== currentPage) {
      dispatch(pageSetter(getNumeric(location.pathname)));
    }
  },[currentPage, dispatch, location]);

  useEffect(()=>{
    if(!initialLoad) {
      dispatch(fetchProductsAction(currentPage));
    }
  },[dispatch, currentPage, initialLoad]);

  useEffect(()=>{
    setInitialLoad(false);
  },[]);

  return (
    <main>
      {bannerLoaded
        ? <Banner promo={bannerData}/>
        : ''}
      {isVisible && <Message props={message}/>}
      <div className="page-content">
        <Outlet />
      </div>
    </main>

  );
}
