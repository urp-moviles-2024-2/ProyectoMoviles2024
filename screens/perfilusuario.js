import React from "react";
import { View, StyleSheet } from "react-native";
import PersonDetails from "../components/detallepersona";

const PersonScreen = () => {
  const person = {
    fullName: "Juan Pérez García",
    email: "juan.perez@example.com",
    address: "Av. Siempre Viva 123, Lima, Perú",
  };

  return (
    <View style={styles.screen}>
      <PersonDetails person={person} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
});

export default PersonScreen;
