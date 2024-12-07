// components/PersonDetails.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Imgmapa = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Cuenta</Text>
      <View style={styles.profileContainer}>
        <Image source={{ uri: person.profilePicture }} style={styles.profileImage} />
      </View>
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
    backgroundColor: "#f9f9f9",
    padding: 70, // Aumentado el padding
    margin: 50, // Aumentado el margen
    borderRadius: 20, // Bordes más redondeados
    shadowColor: "#000",
    shadowOpacity: 0.3, // Mayor opacidad en la sombra
    shadowRadius: 10, // Sombra más amplia
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 40,// Título más grande
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4A90E2",
    textAlign: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30, // Mayor separación entre la foto y los detalles
  },
  profileImage: {
    width: 150, // Imagen más grande
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#4A90E2",
  },
  field: {
    marginBottom: 20, // Mayor espacio entre los campos
  },
  label: {
    fontSize: 30, // Etiquetas más grandes
    fontWeight: "600",
    color: "#444",
  },
  value: {
    fontSize: 30, // Valores más grandes
    color: "#111",
    fontWeight: "bold",
  },
});

export default Imgmapa;