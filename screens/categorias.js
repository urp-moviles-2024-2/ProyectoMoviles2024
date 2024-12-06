import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenWithFooter from "../components/ScreenWithFooter"; // Importa el footer
import Search from "../components/Buscador"; // Importa la barra de búsqueda
import { useCarrito } from "../context/CarritoContext"; // Importa el contexto de carrito

// Lista de productos
const products = [
  { id: "1", name: "Café Espresso", price: 3.0, imageUrl: "assets/caffemocha.jpg" },
  { id: "2", name: "Café Latte", price: 4.5, imageUrl: "assets/caffelate.jpg" },
  { id: "3", name: "Café Americano", price: 3.5, imageUrl: "assets/caffeamericano.jpeg" },
  { id: "4", name: "Cappuccino", price: 4.0, imageUrl: "assets/capuchino.jpg" },
];

const CategoriesScreen = () => {
  const { agregarAlCarrito } = useCarrito(); // Obtiene la función de agregar al carrito desde el contexto

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>S/.{item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => agregarAlCarrito(item)} // Llama a la función para agregar al carrito
      >
        <Ionicons name="cart-outline" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenWithFooter>
      {/* Barra de búsqueda */}
      <Search />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />
      </ScrollView>
    </ScreenWithFooter>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    marginTop: 5,
    fontSize: 14,
    color: "#888",
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#2196F3",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  productList: {
    justifyContent: "space-around",
  },
});

export default CategoriesScreen;