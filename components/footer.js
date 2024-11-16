import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => console.log('Home pressed')}>
        <Ionicons name="home-outline" size={30} color="#ff7f50" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Search pressed')}>
        <Ionicons name="search-outline" size={30} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Cart pressed')}>
        <Ionicons name="cart-outline" size={30} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Profile pressed')}>
        <Ionicons name="person-outline" size={30} color="#333" />
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