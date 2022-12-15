import { renderWithProviders } from '../../../test/utils/render-with-redux';
import ProductReviewSuccessModal from './product-review-success-modal';
import { fireEvent, screen } from '@testing-library/react';

const mockDispatch = jest.fn();
jest.mock('../../../hooks', () => ({
  useAppDispatch: () => mockDispatch
}));

describe('ProductReviewSuccessModal component', () => {
  test('X button works correctly', () => {
    renderWithProviders(<ProductReviewSuccessModal isSuccessActive/>, );
    const button = screen.getByTestId('cross-btn-test');
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
  test('Back to purchases button works correctly', () => {
    renderWithProviders(<ProductReviewSuccessModal isSuccessActive/>, );
    const button = screen.getByTestId('success-button-test');
    fireEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
  test('Escape works correctly', () => {
    renderWithProviders(<ProductReviewSuccessModal isSuccessActive/>, );
    fireEvent.keyDown(document, {key: 'Escape', code: 'Escape', charCode: 27});
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
