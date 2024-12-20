import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWithFooter from "../components/ScreenWithFooter";
import { createDrawerNavigator } from "@react-navigation/drawer";

const MapaScreen = ({navigation}) => {

  const MainHandler = () => {
    navigation.navigate("VentaexitosaScreen");
    };

  return (
    <ScreenWithFooter>
      <View style={styles.screen}>
        <Text style={styles.title}>Mapa de Entrega</Text>
        <Image source={require("../assets/mapaXX.jpg")} style={styles.mapa} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Dirección: Calle Falsa 123</Text>
          <Text style={styles.infoText}>Ciudad: Springfield</Text>
          <Text style={styles.infoText}>Código Postal: 12345</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={MainHandler}>
          <Text style={styles.buttonText}>Confirmar Entrega</Text>
        </TouchableOpacity>
      </View>
    </ScreenWithFooter>
  );
};
export default MapaScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  mapa: {
    width: 400,
    height: 350,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ff5733",
    alignSelf: 'center',
  },
  infoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    width: '90%',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#ff5733',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
