import { productsMock } from '../../test/test-mocks';
import { renderWithProviders } from '../../test/utils/render-with-redux';
import Cards from './cards';

test('Render Cards', () => {
  const { asFragment } = renderWithProviders(<Cards products={productsMock}/>);
  expect(asFragment()).toMatchSnapshot();
});
