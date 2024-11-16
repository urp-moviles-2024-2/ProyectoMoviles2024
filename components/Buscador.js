import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.header}>
      <Text style={styles.locationText}>Locación</Text>
      <Text style={styles.location}>Lima, PERU</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#888" />
        <Text style={styles.searchText}>Buscar</Text>
        <Ionicons name="options-outline" size={20} color="#ff7f50" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});