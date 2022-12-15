import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils/render-with-redux';
import Breadcrumbs from './breadcrumbs';
import { AppRoute } from '../../consts';

describe('Breadcrumbs component', () => {
  test('renders links correctly when on mainpage', ()=> {
    renderWithProviders(<Breadcrumbs/>, {route: AppRoute.CATALOG});
    const catalogLink = screen.getByText('Каталог');
    const mainpageLink = screen.getByText('Главная');
    const crumbItem = screen.queryByTestId('breadcrumbs__item-test');
    expect(catalogLink).toBeInTheDocument();
    expect(mainpageLink).toBeInTheDocument();
    expect(crumbItem).not.toBeInTheDocument();
  });
  test('renders links correctly when on productpage', ()=> {
    renderWithProviders(<Breadcrumbs />, {route: `${AppRoute.CATALOG}${AppRoute.PRODUCT}/18`});
    const catalogLink = screen.getByText('Каталог');
    const mainpageLink = screen.getByText('Главная');
    const crumbItem = screen.queryByTestId('breadcrumbs__item-test');
    expect(catalogLink).toBeInTheDocument();
    expect(mainpageLink).toBeInTheDocument();
    expect(crumbItem).toBeInTheDocument();
    expect(crumbItem).toHaveTextContent('Look Identify');
  });
});
