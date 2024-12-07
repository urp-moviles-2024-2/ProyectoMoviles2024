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
import { useCarrito } from "../context/CarritoContext"; // Importar el contexto

const VerificacionScreen = ({ navigation }) => {
  const { carrito, setCarrito } = useCarrito(); // Obtener carrito, setCarrito y función para eliminar

  // Calcular el total del carrito
  const total = carrito.reduce(
    (acc, producto) => acc + producto.price * producto.cantidad,
    0
  );

  const MainHandler = () => {
    navigation.navigate("MapsScreen");
  };

  return (
    <ScreenWithFooter>
      <View style={styles.screen}>
        <Text style={styles.title}>Infomacion de Compra</Text>
        <Text style={styles.text}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre del remitente"
          keyboardType="text"
        />
        <Text style={styles.text}>Correo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          keyboardType="email-address"
        />
        <Text style={styles.text}>Direccion:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa direccion de envio"
          keyboardType="text"
        />
        <Text style={styles.text}>Numero:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa numero de contacto"
          keyboardType="name-phone-pad"
        />
        <Text style={styles.text}>Realiza transaccion a la siguiente cuenta: 1218-2558-8520-9898</Text>
        <TextInput
          style={styles.input}
          placeholder="Numero de la operacion realizada"
          keyboardType="numeric"
        />
        <Text style={styles.text}>Total a pagar:</Text>
        {carrito.length > 0 && (
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}> S/.{total.toFixed(2)}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={MainHandler}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScreenWithFooter>
  );
};

export default VerificacionScreen;

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
