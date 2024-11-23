import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const CoffeeOnboardingScreen = ({navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1498804103079-a6351b050096' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>¡Enamórate del café en una dicha deliciosa!</Text>
        <Text style={styles.subtitle}>
          Bienvenido a nuestro acogedor rincón del café, donde cada taza es un deleite para ti.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CategoriesScreen')}
        >
          <Text style={styles.buttonText}>Empezar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#D2691E',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CoffeeOnboardingScreen;