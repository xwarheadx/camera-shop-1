import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Similar from '../../components/similar/similar';
import ProductReviewModal from '../../components/product-modal/product-review-modal/product-review-modal';
import ProductReviewSuccessModal from '../../components/product-modal/product-review-success-modal/product-review-success-modal';
import ReviewsList from '../../components/reviews-list/reviews-list';
import SelectedProduct from '../../components/selected-product/selected-product';
import UpButton from '../../components/up-button/up-button';
import Message from '../../components/ui/message';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchProductAction } from '../../store/api-actions';
import { getLoadedProductStatus, getProduct } from '../../store/product-process/selectors';
import { getMessageContent, getMessageVisibilityStatus, getModalCartVisibilityStatus, getModalSuccessVisibilityStatus, getModalVisibilityStatus } from '../../store/utils-process/selectors';
import { toggleMessage } from '../../store/utils-process/utils-process';
import BasketAddItemModal from '../../components/basket-modal/basket-add-item-modal/basket-add-item-modal';

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
  const isCartActive = useAppSelector(getModalCartVisibilityStatus);

  useEffect(() => {
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
      <main {...isReviewActive || isSuccessActive
        ? { style:{paddingRight: '17px'}}
        : ''}
      >
        <div className="page-content">
          <Breadcrumbs/>
          {isVisible && <Message props={message}/>}
          {(isProductLoaded) && <SelectedProduct camera={product}/>}
          <Similar camera={product}/>
          <ReviewsList id={Number(id)}/>
        </div>
      </main>
      <UpButton/>
      {isCartActive
        ? <BasketAddItemModal isAddToCartActive={isCartActive}/>
        : ''}
      {isReviewActive
        ? <ProductReviewModal isReviewActive={isReviewActive} id={Number(id)}/>
        : ''}
      {isSuccessActive
        ? <ProductReviewSuccessModal isSuccessActive={isSuccessActive}/>
        : ''}
    </>
  );
}
