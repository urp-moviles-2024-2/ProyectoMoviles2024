import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import home from "./screens/home";
import login from "./screens/login";
import CategoriesScreen from "./screens/categorias";
import CoffeeOnboardingScreen from "./screens/MainCoffee";
import FavoritosScreen from "./screens/favoritos";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="home"
          component={home}
          options={{ headerLeft: () => null, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{ headerLeft: () => null, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="CoffeeOnboardingScreen"
          component={CoffeeOnboardingScreen}
          options={{ headerLeft: () => null, headerTitleAlign: "center" }}
        />
       <Stack.Screen
          name="FavoritosScreen"
          component={FavoritosScreen}
          options={{ headerLeft: () => null, headerTitleAlign: "center" }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}