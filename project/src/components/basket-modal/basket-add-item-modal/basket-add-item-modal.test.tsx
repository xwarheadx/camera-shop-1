import { renderWithProviders } from '../../../test/utils/render-with-redux';
import { fireEvent, screen } from '@testing-library/react';
import BasketAddItemModal from './basket-add-item-modal';

const mockDispatch = jest.fn();
jest.mock('../../../hooks/useAppDispatch', () => ({
  useAppDispatch: () => mockDispatch
}));

describe('BasketAddItemModal component', () => {
  test('X button works correctly', () => {
    renderWithProviders(<BasketAddItemModal/>, );
    const button = screen.getByTestId('cross-btn-test');
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
  test('Back button works correctly', () => {
    renderWithProviders(<BasketAddItemModal/>, );
    const button = screen.getByTestId('cart-button-test');
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
  test('Escape key works correctly', () => {
    renderWithProviders(<BasketAddItemModal />, );
    fireEvent.keyDown(document, {key: 'Escape', code: 'Escape', charCode: 27});
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
