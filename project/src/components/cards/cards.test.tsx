import { productsMock } from '../../test/test-mocks';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils/render-with-redux';
import Cards from './cards';

describe('Cards component', () => {
  test('renders correct title', () => {
    renderWithProviders(<Cards products={productsMock}/>);
    const productCards = screen.getAllByTestId('product-card-test');
    expect(productCards).toHaveLength(4);
  });
});
