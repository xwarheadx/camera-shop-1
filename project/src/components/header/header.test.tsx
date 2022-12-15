import { renderWithProviders } from '../../test/utils/render-with-redux';
import { screen } from '@testing-library/react';
import Header from './header';
import { AppRoute } from '../../consts';

describe('Header component', () => {
  test('renders links correctly', () => {
    renderWithProviders(<Header/>,);
    const catalogLink = screen.getByText('Каталог');
    expect(catalogLink).toHaveAttribute('href', `${AppRoute.CATALOG}`);
  });
});
