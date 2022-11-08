import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../consts';
import { ProductType, PromoType } from '../types/product';
import { AppDispatch, State } from '../types/state';

export const fetchProductAction = createAsyncThunk<ProductType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchProducts',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<ProductType[]>(APIRoute.Cameras);
    return data;
  },
);
export const fetchPromoAction = createAsyncThunk<PromoType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PromoType>(APIRoute.Promo);
    return data;
  },
);
