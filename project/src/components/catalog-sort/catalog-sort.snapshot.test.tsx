import { renderWithProviders } from '../../test/utils/render-with-redux';
import CatalogSort from './catalog-sort';


test('Render CatalogSort', () => {
  const { asFragment } = renderWithProviders(<CatalogSort/>);
  expect(asFragment()).toMatchSnapshot();
});
