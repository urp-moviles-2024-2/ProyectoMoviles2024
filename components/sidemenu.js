import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from "../screens/categorias";
import FavouritesScreen from "../screens/favoritos";
import HomeScreen from "../screens/home";
import CatalogoScreen from "../screens/catalogoProductos";
import MapaScreen from "../screens/mapa";

const Drawer = createDrawerNavigator();

const SiteMenu = () => {
  return(
    <Drawer.Navigator inicialRouteName="Comidas Favoritas">
        <Drawer.Screen name="Inicio" component={HomeScreen}/>
        <Drawer.Screen name="Categorias" component={CategoriesScreen}/>
        <Drawer.Screen name="Catalogo" component={CatalogoScreen}/>
        <Drawer.Screen name="Favoritas" component={FavouritesScreen}/>
        <Drawer.Screen name="Mapa" component={MapaScreen}/>
    </Drawer.Navigator>
  );
};

export default SiteMenu;

const styles = StyleSheet.create({

});

