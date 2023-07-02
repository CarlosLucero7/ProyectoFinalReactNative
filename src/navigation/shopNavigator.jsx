import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from '../screens//categoryScreen'
import VehicleScreen from '../screens/vehicleScreen'
import DetailScreen from '../screens/detailScreen'
import colors from '../constants/colors'

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle:{
          backgroundColor: colors.color1,
        },
        headerTintColor: colors.color3,
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }
      }>
        <Stack.Screen name='Inicio' component={CategoryScreen}/>
        <Stack.Screen name='Vehiculos' component={VehicleScreen} options={({route})=>({
          title: route.params.name
        })}/>
        <Stack.Screen name='Detalles' component={DetailScreen} options={({route})=>({
          title: route.params.name
        })}/>
      </Stack.Navigator>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({
})