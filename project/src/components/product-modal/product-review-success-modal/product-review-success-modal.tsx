import { useEventListener } from '../../../hooks/use-event-listener';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { toggleSuccess } from '../../../store/utils-process/utils-process';

type ProductReviewSuccessModalProps = {
  isSuccessActive: boolean;
}

export default function ProductReviewSuccessModal ({isSuccessActive}: ProductReviewSuccessModalProps): JSX.Element {

  const dispatch = useAppDispatch();
  const handleReturnToPurchacesButtonClick = () => {
    dispatch(toggleSuccess());
  };

  useEventListener({isSuccessActive});

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <button data-testid='success-button-test' className="btn btn--purple modal__btn modal__btn--fit-width" id="success-button" type="button" onClick={handleReturnToPurchacesButtonClick} autoFocus>Вернуться к покупкам
          </button>
        </div>
        <button data-testid='cross-btn-test' className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleReturnToPurchacesButtonClick} onBlur={()=>{document.getElementById('success-button')?.focus();}}>
          <svg width="10" height="10" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </button>
      </div>
    </div>

  );
}
