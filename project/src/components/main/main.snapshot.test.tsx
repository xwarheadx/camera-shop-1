import { renderWithProviders } from '../../test/utils/render-with-redux';
import Main from './main';

test('Main renders correctly', () => {
  const { asFragment } = renderWithProviders(<Main/>);
  expect(asFragment()).toMatchSnapshot();
});
