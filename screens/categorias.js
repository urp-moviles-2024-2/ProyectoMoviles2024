import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const products = [
  { id: '1', name: 'Café Espresso', price: '$3.00', imageUrl: 'assets/caffemocha.jpg' },
  { id: '2', name: 'Café Latte', price: '$4.50', imageUrl: 'assets/caffelate.jpg' },
  { id: '3', name: 'Café Americano', price: '$3.50', imageUrl: 'assets/caffeamericano.jpeg' },
  { id: '4', name: 'Cappuccino', price: '$4.00', imageUrl: 'assets/capuchino.jpg' },
  { id: '5', name: 'Mocha', price: '$5.00', imageUrl: 'https://example.com/mocha.jpg' },
  { id: '6', name: 'Café con Leche', price: '$3.75', imageUrl: 'https://example.com/con-leche.jpg' },
];


const CategoriesScreen = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const categories = [
    'Todos', 'Macchiato', 'Latte', 'Americano', 'Espresso', 
    'Cappuccino', 'Mocha', 'Ristretto', 'Cortado', 'Affogato', 
    'Irish Coffee', 'Doppio', 'Flat White', 'Cold Brew', 'Iced Coffee'
  ];

  const renderItem = ({ item }) => (
   <View style={styles.productContainer}>
      {/* Imagen del producto */}
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />

      {/* Nombre y precio del producto */}
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>

      {/* Botón con símbolo "+" */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.locationText}>Locacion</Text>
        <Text style={styles.location}>Lima, PERU</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#888" />
          <Text style={styles.searchText}>Buscar</Text>
          <Ionicons name="options-outline" size={20} color="#ff7f50" />
        </View>
      </View>

      <Animated.View style={{ ...styles.animatedView, opacity: fadeAnim }}>
        <View style={styles.banner}>
          <Text style={styles.promoLabel}>Promo</Text>
          <Text style={styles.bannerText}>Encuentra los mejores cafés aqui</Text>
        </View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.container}
        />

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </Animated.View>

      <View style={styles.footer}>
        <Ionicons name="home-outline" size={30} color="#ff7f50" />
        <Ionicons name="search-outline" size={30} color="#333" />
        <Ionicons name="cart-outline" size={30} color="#333" />
        <Ionicons name="person-outline" size={30} color="#333" />
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#333',
  },
  locationText: {
    color: '#b0b0b0',
    fontSize: 12,
  },
  location: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  searchText: {
    color: '#888',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  animatedView: {
    paddingHorizontal: 20,
  },
  banner: {
    backgroundColor: '#ff7f50',
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
    alignItems: 'center',
  },
  promoLabel: {
    color: '#fff',
    backgroundColor: '#ff4f50',
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    top: -10,
    left: -10,
  },
  bannerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  categoryButton: {
    backgroundColor: '#ffdab9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  categoryText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  addButton: {
    marginTop: 8,
    backgroundColor: '#2196F3',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
