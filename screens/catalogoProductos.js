import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const catalogoProductos = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Caffe Mocha',
      descripcion: 'Café, leche y chocolate',
      precio: 'S/.12',
      imagen: { uri: 'https://via.placeholder.com/150/FF6F61/FFFFFF?text=Caffe+Mocha' },
      rating: 4.8,
    },
    {
      id: 2,
      nombre: 'Flat White',
      descripcion: 'Espresso',
      precio: 'S/.15',
      imagen: { uri: 'https://via.placeholder.com/150/53CDE2/FFFFFF?text=Flat+White' },
      rating: 4.8,
    },
    {
      id: 3,
      nombre: 'Latte',
      descripcion: 'Espresso, leche al vapor y espuma',
      precio: 'S/.15',
      imagen: { uri: 'https://via.placeholder.com/150/80DDDB/FFFFFF?text=Latte' },
      rating: 4.5,
    },
    {
      id: 4,
      nombre: 'Americano',
      descripcion: 'Café clásico',
      precio: 'S/.10',
      imagen: { uri: 'https://via.placeholder.com/150/005792/FFFFFF?text=Americano' },
      rating: 4.7,
    },
    {
      id: 5,
      nombre: 'Macchiato',
      descripcion: 'Espresso con un toque de leche',
      precio: 'S/.14',
      imagen: { uri: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=Macchiato' },
      rating: 4.6,
    },
    {
      id: 6,
      nombre: 'Cappuccino',
      descripcion: 'Café con leche y espuma de leche',
      precio: 'S/.13',
      imagen: { uri: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Cappuccino' },
      rating: 4.7,
    },
    {
      id: 7,
      nombre: 'Ristretto',
      descripcion: 'Espresso concentrado',
      precio: 'S/.12',
      imagen: { uri: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Ristretto' },
      rating: 4.8,
    },
    {
      id: 8,
      nombre: 'Cortado',
      descripcion: 'Espresso con una pequeña cantidad de leche',
      precio: 'S/.12',
      imagen: { uri: 'https://via.placeholder.com/150/8B4513/FFFFFF?text=Cortado' },
      rating: 4.5,
    },
    {
      id: 9,
      nombre: 'Affogato',
      descripcion: 'Espresso con helado de vainilla',
      precio: 'S/.18',
      imagen: { uri: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Affogato' },
      rating: 4.9,
    },
    {
      id: 10,
      nombre: 'Irish Coffee',
      descripcion: 'Café con whisky y crema',
      precio: 'S/.20',
      imagen: { uri: 'https://via.placeholder.com/150/DAA520/FFFFFF?text=Irish+Coffee' },
      rating: 4.8,
    },
    {
      id: 11,
      nombre: 'Doppio',
      descripcion: 'Doble shot de espresso',
      precio: 'S/.14',
      imagen: { uri: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Doppio' },
      rating: 4.7,
    },
    {
      id: 12,
      nombre: 'Cold Brew',
      descripcion: 'Café infusionado en frío',
      precio: 'S/.15',
      imagen: { uri: 'https://via.placeholder.com/150/00CED1/FFFFFF?text=Cold+Brew' },
      rating: 4.6,
    },
    {
      id: 13,
      nombre: 'Iced Coffee',
      descripcion: 'Café servido frío con hielo',
      precio: 'S/.12',
      imagen: { uri: 'https://via.placeholder.com/150/4682B4/FFFFFF?text=Iced+Coffee' },
      rating: 4.5,
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Catálogo de Cafés</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {productos.map((producto) => (
            <View
              key={producto.id}
              style={{
                width: '48%',
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                marginBottom: 16,
                padding: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <Image
                source={producto.imagen}
                style={{ width: '100%', height: 100, borderRadius: 8, marginBottom: 8 }}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{producto.nombre}</Text>
              <Text style={{ fontSize: 14, color: '#777', marginBottom: 8 }}>{producto.descripcion}</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>{producto.precio}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF6F61',
                  paddingVertical: 8,
                  borderRadius: 4,
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Añadir al carrito</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default catalogoProductos;
