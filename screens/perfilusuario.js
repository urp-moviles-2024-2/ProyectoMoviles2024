import React from "react";
import { View, StyleSheet } from "react-native";
import PersonDetails from "../components/detallepersona";
import ScreenWithFooter from '../components/ScreenWithFooter';

const PersonScreen = () => {
  const person = {
    fullName: "Jorge Angeles",
    email: "jordan@gmail.com",
    address: "Av. San Juan, Lima, Perú",
  };

  return (
    <ScreenWithFooter>
    <View style={styles.screen}>
      <PersonDetails person={person} />
    </View>
    </ScreenWithFooter>
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