import { PAGE_LIMIT } from './consts';
import { reviewDataType } from '../src/types/review';

export function getPagesCount(cameraCount: number): number {
  return Math.ceil(cameraCount / PAGE_LIMIT);
}

export function getNumeric(page: string) {
  return Number(page.replace( /^\D+/g, ''));
}

export function seperatePrice(priceValue: number) {
  let returnedPrice = String(priceValue);
  if (returnedPrice.length > 3) {
    returnedPrice = `${returnedPrice.slice(0,2)} ${returnedPrice.slice(2)}`;
  }
  return returnedPrice;
}

export function validateInput(target: (EventTarget & HTMLInputElement) | (EventTarget & HTMLTextAreaElement)) {
  if (target.parentElement?.parentElement && target.name === 'rating' && (Number(target.value) > 0)) {
    if (!target.parentElement.parentElement.parentElement?.className.includes('is-valid')) {
      target.parentElement.parentElement.parentElement?.classList.add('is-valid');
      target.parentElement.parentElement.parentElement?.classList.remove('is-invalid');
    }
  }

  if (target.parentElement?.parentElement && target.name !== 'review' && typeof(target.value) === 'string') {
    if (!target.parentElement.parentElement.className.includes('is-valid') && target.value.length > 0) {
      target.parentElement.parentElement.className += ' is-valid';
      target.parentElement.parentElement.classList.remove('is-invalid');
    }
  }

  if (target.parentElement?.parentElement && typeof(target.value) === 'string'){
    if(target.value.length === 0) {
      target.parentElement.parentElement.className += ' is-invalid';
      target.parentElement.parentElement.classList.remove('is-valid');
    }
  }

  if (target.parentElement?.parentElement && typeof(target.value) === 'string') {
    if (!target.parentElement.parentElement.className.includes('is-valid') && target.value.length >= 5) {
      target.parentElement.parentElement.className += ' is-valid';
      target.parentElement.parentElement.classList.remove('is-invalid');
    }
  }

  if (target.parentElement?.parentElement && target.name === 'review' && target.value.length < 5) {
    if (!target.parentElement.parentElement.className.includes('is-invalid')) {
      target.parentElement.parentElement.className += ' is-invalid';
      target.parentElement.parentElement.classList.remove('is-valid');
    }
  }

}
export function validateForm(data: reviewDataType) {
  let validationStatus = true;
  Object.entries(data).forEach(([key, value]) =>{
    if (key !== 'review') {
      if(value === '') {
        const failedInput = document.querySelector(`input[name=${key}]`);
        validateInput(failedInput as HTMLInputElement);
        validationStatus = false;
      }
    }
    if(key === 'review') {
      if(String(value).length < 5) {
        const failedInput = document.querySelector(`textarea[name=${key}]`);
        validateInput(failedInput as HTMLInputElement);
      }
    }
    if(key === 'rating') {
      if(value < 1) {
        const failedInput = document.querySelector(`input[name=${key}]`);
        if(failedInput && failedInput.parentElement?.parentElement){
          failedInput.parentElement.parentElement.parentElement?.classList.add('is-invalid');
        }
        validationStatus = false;
      }
    }
  });
  return validationStatus;
}


