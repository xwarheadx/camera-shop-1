import { renderWithProviders } from '../../../test/utils/render-with-redux';
import BasketAddItemModal from './basket-add-item-modal';

test('Render BasketAddItemModal', () => {
  const { asFragment } = renderWithProviders(<BasketAddItemModal/>);
  expect(asFragment()).toMatchSnapshot();
});
