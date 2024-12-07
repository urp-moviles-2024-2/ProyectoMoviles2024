import React from 'react';
import { render } from '@testing-library/react-native';
import Imgmapa from '../components/imgmapa'; 

describe('Imgmapa Component', () => {
  it('renders correctly with basic person data', () => {
    const mockPerson = { fullName: 'Juan Pérez' };
    const { getByText } = render(<Imgmapa person={mockPerson} />);

    // Verifica que el título se renderiza
    expect(getByText('Detalles de la Cuenta')).toBeTruthy();

    // Verifica que el nombre se muestra correctamente
    expect(getByText('Nombres y Apellidos:')).toBeTruthy();
    expect(getByText(mockPerson.fullName)).toBeTruthy();
  });
});