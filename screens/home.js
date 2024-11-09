import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { useNavigation } from "@react-navigation/native";

const home = ({ route, navigation }) => {
  const email = route.params.email;
  const auth = getAuth();
  //const navigation = useNavigation();

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

  const categoriesHandler = () => {
    navigation.navigate("CategoriesScreen");
  };

  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <Text>Welcome {email}</Text>

      <Button title="Logout" onPress={logoutHandler} />

      <Button title="Categories" onPress={categoriesHandler} />

    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});