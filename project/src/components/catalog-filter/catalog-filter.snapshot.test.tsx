import { renderWithProviders } from '../../test/utils/render-with-redux';
import CatalogFilter from './catalog-filter';

test('Render CatalogFilter', () => {
  const { asFragment } = renderWithProviders(<CatalogFilter/>);
  expect(asFragment()).toMatchSnapshot();
});
