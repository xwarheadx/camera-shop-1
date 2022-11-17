import { ProductType } from '../../types/product';
import { useState } from 'react';
import setRating from '../../set-rating';

type SelectedProductProps = {
  camera: ProductType;
}

export default function SelectedProduct({camera}: SelectedProductProps): JSX.Element {
  const {name, id, rating, price, reviewCount, level, type, category, vendorCode, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = camera;
  const [toggle, setTabsToggle] = useState(true);

  const handleTabsClick = () => {
    setTabsToggle((current) => !current);
  };
  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source type="image/webp" srcSet={`../${previewImgWebp}, ../${previewImgWebp2x} 2x`}/>
              <img src={`../${previewImg}`} srcSet={`../${previewImg2x} 2x`} width="560" height="480" alt="Ретрокамера Das Auge IV"/>
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{name}</h1>
            <div className="rate product__rate">
              {setRating(id, rating, true)}
              <p className="visually-hidden">Рейтинг: {rating}</p>
              <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
            </div>
            <p className="product__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
            <button className="btn btn--purple" type="button">
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
            <div className="tabs product__tabs">
              <div className="tabs__controls product__tabs-controls">
                <button onClick={handleTabsClick} className={toggle
                  ? 'tabs__control'
                  : 'tabs__control is-active'} type="button"
                >Характеристики
                </button>
                <button onClick={handleTabsClick} className={toggle
                  ? 'tabs__control is-active'
                  : 'tabs__control'} type="button"
                >Описание
                </button>
              </div>
              <div className="tabs__content">
                <div className={toggle
                  ? 'tabs__element'
                  : 'tabs__element is-active'}
                >
                  <ul className="product__tabs-list">
                    <li className="item-list"><span className="item-list__title">Артикул:</span>
                      <p className="item-list__text">{vendorCode}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Категория:</span>
                      <p className="item-list__text">{category}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                      <p className="item-list__text">{type}</p>
                    </li>
                    <li className="item-list"><span className="item-list__title">Уровень:</span>
                      <p className="item-list__text">{level}</p>
                    </li>
                  </ul>
                </div>
                <div className={toggle
                  ? 'tabs__element is-active'
                  : 'tabs__element'}
                >
                  <div className="product__tabs-text">
                    <p>Немецкий концерн BRW разработал видеокамеру Das Auge IV в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор пользуется популярностью среди коллекционеров и&nbsp;яростных почитателей старинной техники.</p>
                    <p>Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь к&nbsp;наградам всех престижных кинофестивалей.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
