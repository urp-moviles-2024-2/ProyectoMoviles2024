import React from "react";
import { View, StyleSheet } from "react-native";
import PersonDetails from "../components/detallepersona";

const PersonScreen = () => {
  const person = {
    fullName: "Jorge Angeles",
    email: "jordan@gmail.com",
    address: "Av. San Juan, Lima, Perú",
    profilePicture:{ uri: 'assets/caffemocha.jpg' },
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
