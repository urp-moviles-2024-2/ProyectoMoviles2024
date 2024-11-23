// components/PersonDetails.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PersonDetails = ({ person }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Persona</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Nombres y Apellidos:</Text>
        <Text style={styles.value}>{person.fullName}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Correo Electrónico:</Text>
        <Text style={styles.value}>{person.email}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Dirección:</Text>
        <Text style={styles.value}>{person.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  field: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 16,
    color: "#000",
  },
});

export default PersonDetails;
