import { renderWithProviders } from '../../test/utils/render-with-redux';
import BasketPage from './basket-page';

test('Basket renders correctly', () => {
  const { asFragment } = renderWithProviders(<BasketPage/>);
  expect(asFragment).toMatchSnapshot();
});
