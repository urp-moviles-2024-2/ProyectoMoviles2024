import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { useCarrito } from "../context/CarritoContext"; // Importar el contexto
import ScreenWithFooter from "../components/ScreenWithFooter"; // Importar el componente Footer
import { Ionicons } from "@expo/vector-icons"; // Si deseas agregar un ícono al botón

const CarritoScreen = () => {
  const { carrito, setCarrito, eliminarProducto } = useCarrito(); // Obtener carrito, setCarrito y función para eliminar

  // Calcular el total del carrito
  const total = carrito.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);

  return (
    <ScreenWithFooter>
      <ScrollView contentContainerStyle={styles.carritoContainer}>
        {carrito.length === 0 ? (
          <Text style={styles.emptyText}>El carrito está vacío.</Text>
        ) : (
          carrito.map((producto) => (
            <View key={producto.id} style={styles.productContainer}>
              {/* Imagen del producto */}
              <Image source={{ uri: producto.imageUrl }} style={styles.productImage} />

              <Text style={styles.productName}>{producto.name}</Text>
              <Text style={styles.productPrice}>S/.{producto.price.toFixed(2)}</Text>

              {/* Mostrar la cantidad de ese producto */}
              <Text style={styles.productQuantity}>Cantidad: {producto.cantidad}</Text>

              {/* Eliminar producto */}
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => eliminarProducto(producto.id)} // Eliminar producto
              >
                <Text style={styles.removeButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      {/* Total del carrito */}
      {carrito.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: S/.{total.toFixed(2)}</Text>
        </View>
      )}

      {/* Botón Comprar en la parte inferior derecha */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Comprar</Text>
        <Ionicons name="cart" size={24} color="#fff" style={styles.buyButtonIcon} />
      </TouchableOpacity>
    </ScreenWithFooter>
  );
};

const styles = StyleSheet.create({
  carritoContainer: {
    padding: 20,
  },
  productContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "center",
  },
  productImage: {
    width: 100, // Ajusta el tamaño según tu preferencia
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
  productQuantity: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: "#F44336",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  totalContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // Estilos para el botón de "Comprar"
  buyButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#4CAF50", // Color verde para el botón de comprar
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
  },
  buyButtonIcon: {
    marginLeft: 5,
  },
});

export default CarritoScreen;
