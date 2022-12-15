import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { APIRoute, BACKEND_URL, PAGE_LIMIT, REQUEST_TIMEOUT } from '../consts';
import { store } from '../store/store';
import { formMessage, toggleMessage } from '../store/utils-process/utils-process';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response) {
        store.dispatch(formMessage({
          status: 'error',
          title: 'Error!',
          message: error.message
        }));
        store.dispatch(toggleMessage());
      }

      throw error;
    }
  );
};
