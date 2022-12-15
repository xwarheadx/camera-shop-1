import { useEffect, useState } from 'react';
import ProductCard from '../product-card/product-card';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchSimilarProductsAction } from '../../store/api-actions';
import { getLoadedProductsStatus, getSimilarProducts } from '../../store/product-process/selectors';
import { ProductType } from '../../types/product';

interface SimilarProps {
  camera: ProductType;
}

export default function Similar({camera}: SimilarProps): JSX.Element {
  const {id} = camera;
  const dispatch = useAppDispatch();
  const similarProducts = useAppSelector(getSimilarProducts);
  const isDataLoaded = useAppSelector(getLoadedProductsStatus);

  const [slice, setPrimary] = useState({
    start: 0,
    end: 3,
  });

  const products = similarProducts.slice(slice.start, slice.end);
  useEffect(()=>{
    if(id) {
      dispatch(fetchSimilarProductsAction(id));
    }
  },[dispatch, id]);

  const handleNextSlideButton = () => {
    setPrimary({start: slice.start + 3, end: slice.end + 3});
  };
  const handlePreviousSlideButton = () => {
    setPrimary({start: slice.start - 3, end: slice.end - 3});
  };


  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {isDataLoaded && products.map((product) => (
                <ProductCard key={product.id} isSimilar product = {product}/>
              ))}
            </div>
            <button data-testid="slider-controls--prev-test" className="slider-controls slider-controls--prev" onClick={handlePreviousSlideButton} type="button" aria-label="Предыдущий слайд" disabled={slice.start === 0}>
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
            <button data-testid="slider-controls--next-test" className="slider-controls slider-controls--next" onClick={handleNextSlideButton} type="button" aria-label="Следующий слайд" disabled={slice.end >= similarProducts.length}>
              <svg width="7" height="12" aria-hidden="true" >
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );}
