import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ReviewPostType, ReviewType } from '../types/review';
import { ProductType, PromoType } from '../types/product';
import { AppDispatch, State } from '../types/state';
import { APIRoute, PAGE_LIMIT } from '../consts';

export const fetchSimilarProductsAction = createAsyncThunk<ProductType[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchSimilarProducts',
  async (id: number, {extra: api}) => {
    const response = await api.get(`${APIRoute.Products}/${id}/similar`);
    return response.data as ProductType[];
  },
);

export const fetchProductAction = createAsyncThunk<ProductType, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchProduct',
  async (id, {extra: api}) => {
    const response = await api.get(`${APIRoute.Products}/${id}`);
    return response.data as ProductType;
  }
);
type ProductsActionType = {
  data: ProductType[];
  header: string;
}

export const fetchProductsAction = createAsyncThunk<ProductsActionType, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'product/fetchProducts',
  async (currentPage, {extra: api}) => {
    const response = await api.get(`${APIRoute.Products}?_limit=${PAGE_LIMIT}&_page=${currentPage}`);
    const data = response.data as ProductType[];
    const header = response.headers['x-total-count'];
    return {data, header} as ProductsActionType;
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

export const fetchReviewsAction = createAsyncThunk<ReviewType[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/fetchReviews',
  async (id, {extra: api}) => {
    const response = await api.get(`${APIRoute.Products}/${id}/reviews`);
    return response.data as ReviewType[];
  }
);

export const postReviewAction = createAsyncThunk<unknown, ReviewPostType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/postReview',
  async (reviewData, {extra: api}) => {
    const response = await api.post<ReviewPostType>(`${APIRoute.Reviews}`, reviewData);
    return response;
  }
);
