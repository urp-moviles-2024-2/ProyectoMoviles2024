import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarritoProvider } from './context/CarritoContext';  // Asegúrate de ajustar la ruta

import home from "./screens/home";
import login from "./screens/login";
import CategoriesScreen from "./screens/categorias";
import CoffeeOnboardingScreen from "./screens/MainCoffee";
import CarritoScreen from "./screens/Carrito";
import PersonScreen from "./screens/perfilusuario";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CarritoProvider>  {/* Envolvemos todo con el CarritoProvider */}
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
            name="CarritoScreen"
            component={CarritoScreen}
            options={{ headerLeft: () => null, headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="PersonScreen"
            component={PersonScreen}
            options={{ headerLeft: () => null, headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CarritoProvider>
  );
}
