import { Link } from 'react-router-dom';
import { PromoType } from '../../types/product';
import { AppRoute } from '../../consts';

type BannerProps = {
  promo: PromoType;
}

export default function Banner({promo}: BannerProps): JSX.Element {
  const {id, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = promo;

  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`../${previewImgWebp}, ../${previewImgWebp2x} 2x`}/>
        <img src={`../${previewImg}`} srcSet={`../${previewImg2x} 2x`} width="1280" height="280" alt="баннер"/>
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1" data-testid='banner-test-title'>{name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link className="btn" data-testid = 'banner-test-link' to={`${AppRoute.PRODUCT}/${id}`}>Подробнее</Link>
      </p>
    </div>
  );
}

