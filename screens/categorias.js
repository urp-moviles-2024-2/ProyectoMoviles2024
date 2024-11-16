import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWithFooter from '../components/ScreenWithFooter';
import Search from '../components/Buscador';

const products = [
  { id: '1', name: 'Café Espresso', price: '$3.00', imageUrl: 'assets/caffemocha.jpg' },
  { id: '2', name: 'Café Latte', price: '$4.50', imageUrl: 'assets/caffelate.jpg' },
  { id: '3', name: 'Café Americano', price: '$3.50', imageUrl: 'assets/caffeamericano.jpeg' },
  { id: '4', name: 'Cappuccino', price: '$4.00', imageUrl: 'assets/capuchino.jpg' },
  { id: '5', name: 'Macchiato', price: '$4.20', imageUrl: 'assets/Macchiato.jpg' },
  { id: '6', name: 'Ristretto', price: '$3.80', imageUrl: 'assets/ristretto.jpg' },
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

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text> 
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenWithFooter>
      <Search />
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        <Animated.View style={{ ...styles.animatedView, opacity: fadeAnim }}>
          <View style={styles.banner}>
            <Text style={styles.promoLabel}>Promo</Text>
            <Text style={styles.bannerText}>Encuentra los mejores cafés aquí</Text>
          </View>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.productList}
          />
        </Animated.View>
      </ScrollView>
    </ScreenWithFooter>
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
  scrollView: {
    flexGrow: 1,
    paddingBottom: 100,
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
