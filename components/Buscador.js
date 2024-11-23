import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(`Buscando: ${searchText}`);
    // Aquí puedes añadir lógica adicional, como filtrar una lista o realizar una consulta.
  };

  return (
    <View style={styles.header}>
      <Text style={styles.locationText}>Locación</Text>
      <Text style={styles.location}>Lima, PERU</Text>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons testID="search-icon" name="search-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch} // Ejecuta búsqueda al presionar "Enter" en el teclado
        />
        <Ionicons testID="options-icon" name="options-outline" size={20} color="#ff7f50" />
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
  searchInput: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});
