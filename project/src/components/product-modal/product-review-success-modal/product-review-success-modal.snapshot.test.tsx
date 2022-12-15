import { renderWithProviders } from '../../../test/utils/render-with-redux';
import ProductReviewSuccessModal from './product-review-success-modal';

test('Render ProductReviewSuccessModal', () => {
  const { asFragment } = renderWithProviders(<ProductReviewSuccessModal isSuccessActive/>);
  expect(asFragment()).toMatchSnapshot();
});
