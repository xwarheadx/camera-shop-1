import axios from 'axios';
import { screen } from '@testing-library/react';
import { productsMock } from '../../test/test-mocks';
import { renderWithProviders } from '../../test/utils/render-with-redux';
import Catalog from './catalog';

describe('Catalog component', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValue({});
  });
  test('renders products after fetching data and state change', () => {
    renderWithProviders(<Catalog/>, {initialState: { PRODUCT: { products: productsMock, isProductsDataLoaded: true}}});
    setTimeout(() =>{const product = screen.queryAllByTestId('product-card-test');
      expect(product[0]).toBeInTheDocument();},1000);
  });
});
