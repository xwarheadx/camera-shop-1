import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import { ProductType } from '../../types/product';
import { seperatePrice } from '../../utils';
import { AppRoute } from '../../consts';

type ProductCardProps = {
  product: ProductType;
  isSimilar? : boolean;
}
export default function ProductCard({product, isSimilar}: ProductCardProps): JSX.Element {
  const {rating, reviewCount, name, price, id, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = product;

  return (
    <div data-testid='product-card-test' className={isSimilar
      ? 'product-card is-active'
      : 'product-card'}
    >
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`../${previewImgWebp}, ../${previewImgWebp2x} 2x`}/>
          <img src={`../${previewImg}`} srcSet={`../${previewImg2x} 2x`} width="280" height="240" alt={name}/>
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <Rating id={id} rating={rating} ariaHiddenState={false}/>
          <p data-testid='rating-test' className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count"><span data-testid='rates-total' className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p data-testid='price-test'className="product-card__price"><span className="visually-hidden">Цена:</span>{seperatePrice(price)} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link data-testid='link-test' to={`${AppRoute.PRODUCT}/${id}`} className="btn btn--transparent">Подробнее
        </Link>
      </div>
    </div>
  );
}
