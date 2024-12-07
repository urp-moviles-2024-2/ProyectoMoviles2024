import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Search from '../components/Buscador';
import { Ionicons } from '@expo/vector-icons';

describe('Search Component', () => {
  it('renders correctly with location and icons', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<Search />);

    // Verifica que el texto de ubicación esté presente
    expect(getByText('Locación')).toBeTruthy();
    expect(getByText('Lima, PERU')).toBeTruthy();

    // Verifica que el campo de búsqueda esté presente
    expect(getByPlaceholderText('Buscar')).toBeTruthy();

    // Verifica que los íconos estén presentes
    expect(getByTestId('search-icon')).toBeTruthy();
    expect(getByTestId('options-icon')).toBeTruthy();
  });

  it('updates search text when typing', () => {
    const { getByPlaceholderText } = render(<Search />);
    const searchInput = getByPlaceholderText('Buscar');

    // Simula escribir en el campo de búsqueda
    fireEvent.changeText(searchInput, 'Helados');
    expect(searchInput.props.value).toBe('Helados');
  });

  it('calls handleSearch when search icon is pressed', () => {
    const consoleSpy = jest.spyOn(console, 'log'); // Espía en la consola
    const { getByTestId } = render(<Search />);

    // Simula presionar el ícono de búsqueda
    fireEvent.press(getByTestId('search-icon'));
    expect(consoleSpy).toHaveBeenCalledWith('Buscando: ');

    consoleSpy.mockRestore(); // Limpia el espía
  });

  it('calls handleSearch when submitting text input', () => {
    const consoleSpy = jest.spyOn(console, 'log'); // Espía en la consola
    const { getByPlaceholderText } = render(<Search />);
    const searchInput = getByPlaceholderText('Buscar');

    // Simula escribir y enviar texto en el campo de búsqueda
    fireEvent.changeText(searchInput, 'Pizza');
    fireEvent(searchInput, 'submitEditing'); // Simula el envío del texto

    expect(consoleSpy).toHaveBeenCalledWith('Buscando: Pizza');

    consoleSpy.mockRestore(); // Limpia el espía
  });
});