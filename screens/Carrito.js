import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWithFooter from '../components/ScreenWithFooter';

const CarritoScreen = () => {
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: 'Caffe Expresso',
      descripcion: 'Café puro y agua',
      precio: 12,
      imagen: { uri: 'assets/caffemocha.jpg' },
      cantidad: 1,
    },
    {
      id: 2,
      nombre: 'Capuccino',
      descripcion: 'Café con leche',
      precio: 10,
      imagen: { uri: 'assets/capuchino.jpg' },
      cantidad: 2,
    },
  ]);

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const incrementarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id ? { ...producto, cantidad: producto.cantidad + 1 } : producto
      )
    );
  };

  const decrementarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id && producto.cantidad > 1
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      )
    );
  };

  const total = carrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);

  return (
    <ScreenWithFooter>
    <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      
    <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Carrito de Compras</Text>
        <View>
          {carrito.map((producto) => (
            <View
              key={producto.id}
              style={{
                flexDirection: 'row',
                marginBottom: 16,
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
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
                style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{producto.nombre}</Text>
                <Text style={{ fontSize: 14, color: '#777' }}>{producto.descripcion}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>S/.{producto.precio}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => decrementarCantidad(producto.id)}
                  >
                    <Ionicons name="remove-circle-outline" size={24} color="#FF6F61" />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16 }}>{producto.cantidad}</Text>
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => incrementarCantidad(producto.id)}
                  >
                    <Ionicons name="add-circle-outline" size={24} color="#FF6F61" />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => eliminarProducto(producto.id)}>
                <Ionicons name="trash-outline" size={24} color="#FF6F61" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>
          Total: S/.{total.toFixed(2)}
        </Text>
      </View>
      
    </ScrollView>
    </ScreenWithFooter>
  );
};

export default CarritoScreen;
