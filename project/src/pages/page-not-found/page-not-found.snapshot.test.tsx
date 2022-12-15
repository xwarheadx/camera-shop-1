import { renderWithProviders } from '../../test/utils/render-with-redux';
import PageNotFound from './page-not-found';

test('Page-Not-Found renders correctly', () => {
  const { asFragment } = renderWithProviders(<PageNotFound/>);
  expect(asFragment).toMatchSnapshot();
});
