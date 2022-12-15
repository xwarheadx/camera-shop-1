import { renderWithProviders } from '../../test/utils/render-with-redux';
import IconsSvg from './icons-svg';

test('IconsSVG renders correctly', () => {
  const { asFragment } = renderWithProviders(<IconsSvg/>);
  expect(asFragment).toMatchSnapshot();
});
