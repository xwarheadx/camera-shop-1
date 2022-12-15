import { renderWithProviders } from '../../../test/utils/render-with-redux';
import ProductReviewModal from './product-review-modal';

test('Render ProductReviewModal', () => {
  const id = 21;
  const { asFragment } = renderWithProviders(<ProductReviewModal id={id}/>);
  expect(asFragment()).toMatchSnapshot();
});
