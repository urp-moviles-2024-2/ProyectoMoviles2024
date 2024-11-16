import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Footer from '../components/footer';

describe('Footer Component', () => {
  it('should render all icons correctly', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('icon-home')).toBeTruthy();
    expect(getByTestId('icon-search')).toBeTruthy();
    expect(getByTestId('icon-cart')).toBeTruthy();
    expect(getByTestId('icon-profile')).toBeTruthy();
  });

  it('should trigger the correct log messages when icons are pressed', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { getByTestId } = render(<Footer />);

    fireEvent.press(getByTestId('icon-home'));
    expect(consoleSpy).toHaveBeenCalledWith('Home pressed');

    fireEvent.press(getByTestId('icon-search'));
    expect(consoleSpy).toHaveBeenCalledWith('Search pressed');

    fireEvent.press(getByTestId('icon-cart'));
    expect(consoleSpy).toHaveBeenCalledWith('Cart pressed');

    fireEvent.press(getByTestId('icon-profile'));
    expect(consoleSpy).toHaveBeenCalledWith('Profile pressed');

    consoleSpy.mockRestore();
  });
});