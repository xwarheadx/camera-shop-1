import { renderWithProviders } from '../../test/utils/render-with-redux';
import * as Hooks from '../../hooks/use-app-selector';
import { productMock } from '../../test/test-mocks';
import { AppRoute } from '../../consts';
import CatalogPage from './catalog-page';
import * as router from 'react-router';

const navigate = jest.fn();
jest.mock('../../hooks/useAppSelector');
const spySelect = jest.spyOn(Hooks, 'useAppSelector');
const mockDispatch = jest.fn();
jest.mock('../../hooks/useAppDispatch', () => ({
  useAppDispatch: () => mockDispatch
}));


describe('Catalog-page component', () => {
  beforeEach(() => {
    spySelect.mockReturnValue([productMock]);
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });
  test('Navigate triggers on incorrect page url', () => {
    renderWithProviders(<CatalogPage />, { route: `${AppRoute.PRODUCT}/page_404` });
  });
  setTimeout(()=>{
    expect(navigate).toBeCalled();
  },1000);
});
