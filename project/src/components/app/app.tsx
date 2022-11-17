import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { store } from '../../store/store';
import { fetchPromoAction } from '../../store/api-actions';
import router from '../browser-router/browser-router';
import Loader from '../loader/loader';

let isInitial = true;

export default function App(): JSX.Element {
  useEffect(()=> {
    if(isInitial){
      store.dispatch(fetchPromoAction());
      isInitial = false;
    }
  },[]);
  return (
    <RouterProvider router={router}
      fallbackElement = {<Loader/>}
    /> );
}
