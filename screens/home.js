import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Home = ({ route, navigation }) => {
  const email = route.params.email;
  const auth = getAuth();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out!");
        navigation.navigate("login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const MainHandler = () => {
    navigation.navigate("CoffeeOnboardingScreen");
  };

  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido {email}!</Text>
      <Text style={styles.subtitle}>Disfruta de nuestra experiencia!</Text>

      <TouchableOpacity style={styles.button} onPress={MainHandler}>
        <Text style={styles.buttonText}>Explorar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={logoutHandler}>
        <Text style={[styles.buttonText, styles.logoutText]}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffaf0",
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6b4e31",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#8a7f72",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#804000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#d9534f",
  },
  logoutText: {
    color: "#fff",
  },
});
