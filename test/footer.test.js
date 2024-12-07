import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Footer from '../components/footer';
import { NavigationContainer } from '@react-navigation/native';


jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('Footer Component', () => {
  it('renders all icons', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    expect(getByTestId('icon-home')).toBeTruthy();
    expect(getByTestId('icon-search')).toBeTruthy();
    expect(getByTestId('icon-cart')).toBeTruthy();
    expect(getByTestId('icon-profile')).toBeTruthy();
  });

  it('navigates to CoffeeOnboardingScreen when home icon is pressed', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
      navigate: mockNavigate,
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('icon-home'));
    expect(mockNavigate).toHaveBeenCalledWith('CoffeeOnboardingScreen');
  });

  it('navigates to CategoriesScreen when search icon is pressed', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
      navigate: mockNavigate,
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('icon-search'));
    expect(mockNavigate).toHaveBeenCalledWith('CategoriesScreen');
  });

  it('navigates to CarritoScreen when cart icon is pressed', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
      navigate: mockNavigate,
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('icon-cart'));
    expect(mockNavigate).toHaveBeenCalledWith('CarritoScreen');
  });

  it('navigates to PersonScreen when profile icon is pressed', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
      navigate: mockNavigate,
    });

    const { getByTestId } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('icon-profile'));
    expect(mockNavigate).toHaveBeenCalledWith('PersonScreen');
  });
});

