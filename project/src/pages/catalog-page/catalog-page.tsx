import { useEffect, useLayoutEffect } from 'react';
import { AppRoute } from '../../consts';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';
import IconsSvg from '../../components/icons-svg/icons-svg';
import Message from '../../components/ui/message';
import { getNumeric, getPagesCount } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentPage } from '../../store/product-process/product-process';
import { getLoadedPromoStatus, getPage, getProductCount, getPromo } from '../../store/product-process/selectors';
import { getMessageContent, getMessageVisibilityStatus } from '../../store/utils-process/selectors';
import { toggleMessage } from '../../store/utils-process/utils-process';

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

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        dispatch(toggleMessage());
      }, 3000);
    }
    if(location.pathname === `${AppRoute.CATALOG}${AppRoute.PAGES}`) {
      navigate(`${AppRoute.CATALOG}/page_1`);
    }
    if(getNumeric(location.pathname) !== currentPage) {
      dispatch(setCurrentPage(getNumeric(location.pathname)));
    }
  },[isVisible, location, navigate, dispatch, currentPage]);
  useLayoutEffect(()=>{
    if((productCount !== 0 && currentPage > totalPages) || isNaN(currentPage)) {
      navigate(`/${AppRoute.PAGE404}`);
    }
  },[currentPage, navigate, productCount, totalPages]);

  return (
    <>
      <IconsSvg/>
      <div className="wrapper">

        <Header/>

        <main>
          {bannerLoaded
            ? <Banner promo={bannerData}/>
            : ''}
          {isVisible && <Message props={message}/>}
          <Outlet />
        </main>

        <Footer/>

      </div>
    </>
  );
}
