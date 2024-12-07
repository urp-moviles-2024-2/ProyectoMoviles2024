import React from "react";
import ScreenWithFooter from "../components/ScreenWithFooter";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";


const VentaexitosaScreen = ({ navigation }) => {
  const MainHandler = () => {
    navigation.navigate("CategoriesScreen");
  };
  return(
    <ScreenWithFooter>
      <View style={styles.screen}>
        <Text style={styles.title}>Compra Exitosa</Text>
        <Text style={styles.text}>Gracias por tu compra</Text>
        <Text style={styles.text}>Tu pedido llegara en 45 minutos habiles</Text>
        <TouchableOpacity style={styles.button} onPress={MainHandler}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScreenWithFooter>
  );
};

export default VentaexitosaScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
    textAlign: "left",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
  },
  screen: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  mapa: {
    width: 400,
    height: 350,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ff5733",
    alignSelf: "center",
  },
  infoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    width: "90%",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#ff5733",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});