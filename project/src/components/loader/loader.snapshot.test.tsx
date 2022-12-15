import { renderWithProviders } from '../../test/utils/render-with-redux';
import Loader from './loader';

test('Loader renders correctly', () => {
  const { asFragment } = renderWithProviders(<Loader/>);
  expect(asFragment()).toMatchSnapshot();
});
