import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, FlatList } from "react-native";
import { useCarrito } from "../context/CarritoContext"; // Importar el contexto
import ScreenWithFooter from "../components/ScreenWithFooter"; // Importar el componente Footer
import { Ionicons } from "@expo/vector-icons"; // Si deseas agregar un ícono al botón

const CarritoScreen = () => {
  const { carrito, setCarrito, eliminarProducto } = useCarrito(); // Obtener carrito, setCarrito y función para eliminar

  // Calcular el total del carrito
  const total = carrito.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);

  // Función para renderizar los productos de manera horizontal
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <ScrollView horizontal={true} contentContainerStyle={styles.productDetails}>
        {/* Imagen del producto */}
        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>S/.{item.price.toFixed(2)}</Text>
          <Text style={styles.productQuantity}>Cantidad: {item.cantidad}</Text>

          {/* Eliminar producto */}
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => eliminarProducto(item.id)} // Eliminar producto
          >
            <Text style={styles.removeButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <ScreenWithFooter>
      {/* Cabecera */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Carrito de compras</Text>
      </View>

      <ScrollView contentContainerStyle={styles.carritoContainer}>
        {carrito.length === 0 ? (
          <Text style={styles.emptyText}>El carrito está vacío.</Text>
        ) : (
          carrito.map((producto) => (
            <View key={producto.id}>
              {renderItem({ item: producto })}
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
  header: {
    backgroundColor: "#3E2723", // Color café oscuro
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#fff", // Color blanco
    fontWeight: "bold",
  },
  carritoContainer: {
    padding: 20,
  },
  productContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "flex-start", // Alinea los productos a la izquierda
  },
  productDetails: {
    flexDirection: "row", // Alinea los elementos horizontalmente
    alignItems: "center", // Alinea verticalmente el contenido
    width: "100%", // Ocupa todo el ancho disponible
  },
  productImage: {
    width: 100, // Ajusta el tamaño de la imagen
    height: 100,
    borderRadius: 8,
    marginRight: 10, // Espacio entre la imagen y la información
  },
  productInfo: {
    flexDirection: "column", // Alinea el texto en columna, debajo de la imagen
    justifyContent: "center",
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
