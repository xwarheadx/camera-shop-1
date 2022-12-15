import { screen } from '@testing-library/react';
import { productMock } from '../../test/test-mocks';
import { renderWithProviders } from '../../test/utils/render-with-redux';
import ProductCard from './product-card';
import { AppRoute } from '../../consts';

describe('ProductCard component', () => {
  test('renders content correctly', () => {
    renderWithProviders(<ProductCard product={productMock}/>,);
    setTimeout(()=>{
      expect(screen.getByTestId('link-test')).toHaveAttribute('href', `${AppRoute.PRODUCT}/${productMock.id}`);
      expect(screen.getByTestId('rating-test')).toHaveTextContent(`Рейтинг: ${productMock.rating}`);
      expect(screen.getByTestId('rates-total')).toHaveTextContent(`Всего оценок: ${productMock.reviewCount}`);
      expect(screen.getByTestId('price-test')).toHaveTextContent(`${productMock.price}`);
    },1000);

  });
});
