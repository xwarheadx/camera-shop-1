import { renderWithProviders } from '../../../test/utils/render-with-redux';
import BasketRemoveItemModal from './basket-remove-item-modal';

test('Render BasketRemoveItemModal', () => {
  const { asFragment } = renderWithProviders(<BasketRemoveItemModal/>);
  expect(asFragment()).toMatchSnapshot();
});
