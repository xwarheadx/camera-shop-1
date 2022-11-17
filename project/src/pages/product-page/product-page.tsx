import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Similar from '../../components/similar/similar';
import ProductReviewModal from '../../components/product-modal/product-review-modal/product-review-modal';
import ProductReviewSuccessModal from '../../components/product-modal/product-review-success-modal/product-review-success-modal';
import ReviewsList from '../../components/reviews-list/reviews-list';
import SelectedProduct from '../../components/selected-product/selected-product';
import UpButton from '../../components/up-button/up-button';
import IconsSvg from '../../components/icons-svg/icons-svg';
import Message from '../../components/ui/message';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProductAction } from '../../store/api-actions';
import { getLoadedProductStatus, getProduct } from '../../store/product-process/selectors';
import { getMessageContent, getMessageVisibilityStatus, getModalSuccessVisibilityStatus, getModalVisibilityStatus } from '../../store/utils-process/selectors';
import { toggleMessage } from '../../store/utils-process/utils-process';

export default function ProductPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const {id} = params;
  const product = useAppSelector(getProduct);
  const isProductLoaded = useSelector(getLoadedProductStatus);
  const message = useAppSelector(getMessageContent);
  const isVisible = useAppSelector(getMessageVisibilityStatus);
  const isReviewActive = useAppSelector(getModalVisibilityStatus);
  const isSuccessActive = useAppSelector(getModalSuccessVisibilityStatus);

  useEffect(()=>{
    if (isVisible) {
      setTimeout(() => {
        dispatch(toggleMessage());
      }, 3000);
    }
  },[isVisible, dispatch]);

  useEffect(() => {
    dispatch(fetchProductAction(Number(id)));
  },[dispatch, id]);

  return(
    <>
      <IconsSvg />
      <div className="wrapper">
        <Header/>
        <main {...isReviewActive
          ? { style:{paddingRight:' 15px'}}
          : ''}
        >
          <div className="page-content">
            <Breadcrumbs camera={product}/>
            {isVisible && <Message props={message}/>}
            {(isProductLoaded) && <SelectedProduct camera={product}/>}
            <Similar camera={product}/>
            <ReviewsList id={Number(id)}/>
          </div>
        </main>
        <UpButton/>
        {isReviewActive
          ? <ProductReviewModal isActive={isReviewActive} id={Number(id)}/>
          : ''}
        {isSuccessActive
          ? <ProductReviewSuccessModal isActive={isSuccessActive}/>
          : ''}
        <Footer/>
      </div>
    </>
  );
}
