import { renderWithProviders } from '../../../test/utils/render-with-redux';
import BasketPaymentSuccessModal from './basket-payment-success-modal';

test('Render BasketPaymentSuccessModal', () => {
  const { asFragment } = renderWithProviders(<BasketPaymentSuccessModal/>);
  expect(asFragment()).toMatchSnapshot();
});
