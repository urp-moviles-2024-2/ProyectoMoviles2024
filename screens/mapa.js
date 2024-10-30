import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'


const mapa = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
    </View>
  )
}
 export default mapa

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: 400,
    height: 400
  }
 })