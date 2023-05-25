import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import PlaceOrderScreen from '../Screens/PlaceOrderScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import ShippingScreen from '../Screens/ShippingScreen'
import SingleProductScreen from '../Screens/SingleProductScreen'

const Stack = createNativeStackNavigator()

export default function StackNav() {
  return (
    <Stack.Navigator 
    initialRouteName="Home" 
    screenOptions={{
      headerShown: false,
    }}
  >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Single" component={SingleProductScreen} />
        <Stack.Screen name="Shipping" component={ShippingScreen} />
        <Stack.Screen name="Checkout" component={PaymentScreen} />
        <Stack.Screen name="Placeorder" component={PlaceOrderScreen} />
  </Stack.Navigator>
  )
}