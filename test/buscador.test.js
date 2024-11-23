import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Search from '../components/Buscador';
import { Ionicons } from '@expo/vector-icons';

describe('Search Component', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<Search />);

    // Verifica los textos de locación
    expect(getByText('Locación')).toBeTruthy();
    expect(getByText('Lima, PERU')).toBeTruthy();

    // Verifica los íconos
    const searchIcon = getByTestId('search-icon'); // Agrega un testID para el ícono
    const optionsIcon = getByTestId('options-icon'); // Agrega un testID para el ícono
    expect(searchIcon).toBeTruthy();
    expect(optionsIcon).toBeTruthy();

    // Verifica el texto "Buscar"
    expect(getByText('Buscar')).toBeTruthy();
  });
});