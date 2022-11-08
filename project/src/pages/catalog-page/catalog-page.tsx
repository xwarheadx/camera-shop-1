import { useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import Banner from '../../components/banner/banner';
import IconsSvg from '../../components/icons-svg/icons-svg';
import Message from '../../components/ui/message';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { getLoadedPromoStatus, getPromo } from '../../store/product-process/selectors';
import { getMessageContent, getMessageVisibilityStatus } from '../../store/ui-process/selectors';
import { toggleMessage } from '../../store/ui-process/ui-process';

export default function CatalogPage(): JSX.Element {
  const message = useAppSelector(getMessageContent);
  const isVisible = useAppSelector(getMessageVisibilityStatus);
  const bannerData = useAppSelector(getPromo);
  const bannerLoaded = useAppSelector(getLoadedPromoStatus);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        store.dispatch(toggleMessage());
      }, 3000);
    }
  },[isVisible]);

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
          <Catalog />
        </main>

        <Footer/>

      </div>
    </>
  );
}
