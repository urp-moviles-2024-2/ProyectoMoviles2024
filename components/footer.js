import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation(); // Obtener el objeto de navegación

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => console.log('Home pressed')}>
        <Ionicons name="home-outline" size={30} color="#ff7f50" testID="icon-home" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Search pressed')}>
        <Ionicons name="search-outline" size={30} color="#333" testID="icon-search" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CarritoScreen')}>
        <Ionicons name="cart-outline" size={30} color="#333" testID="icon-cart" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PersonScreen')}>
        <Ionicons name="person-outline" size={30} color="#333" testID="icon-profile" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
});
