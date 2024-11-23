import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Footer from '../components/footer';


describe('Footer Component', () => {
  it('renders all icons correctly', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('icon-home')).toBeTruthy()
    expect(getByTestId('icon-search')).toBeTruthy();
    expect(getByTestId('icon-cart')).toBeTruthy();
    expect(getByTestId('icon-profile')).toBeTruthy();
  });

  it('triggers the correct actions on icon press', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const { getByTestId } = render(<Footer />);

    fireEvent.press(getByTestId('icon-home'));
    expect(consoleLogSpy).toHaveBeenCalledWith('Home pressed');

    fireEvent.press(getByTestId('icon-search'));
    expect(consoleLogSpy).toHaveBeenCalledWith('Search pressed');

    fireEvent.press(getByTestId('icon-cart'));
    expect(consoleLogSpy).toHaveBeenCalledWith('Cart pressed');

    fireEvent.press(getByTestId('icon-profile'));
    expect(consoleLogSpy).toHaveBeenCalledWith('Profile pressed');

    consoleLogSpy.mockRestore();
  });
});
