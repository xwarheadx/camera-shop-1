import { renderWithProviders } from '../../test/utils/render-with-redux';
import Rating from './rating';

test('Render Rating', () => {
  const id = 7;
  const rating = 7;
  const { asFragment } = renderWithProviders(<Rating id={id} rating={rating} ariaHiddenState/>);
  expect(asFragment()).toMatchSnapshot();
});
