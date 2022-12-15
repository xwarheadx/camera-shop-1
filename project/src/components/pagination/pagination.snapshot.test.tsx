import { renderWithProviders } from '../../test/utils/render-with-redux';
import Pagination from './pagination';

test('Render PaginationList', () => {
  const { asFragment } = renderWithProviders(<Pagination/>);
  expect(asFragment()).toMatchSnapshot();
});
