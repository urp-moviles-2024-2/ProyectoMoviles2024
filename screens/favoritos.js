import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favourites Screen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});