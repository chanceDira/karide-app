import { Box, NativeBaseProvider, StatusBar, Text } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ShippingScreen from "./src/Screens/ShippingScreen";
import PaymentScreen from "./src/Screens/PaymentScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/Navigations/BottomNav";

const Stack = createNativeStackNavigator()

export default function App() {
  return (<NativeBaseProvider>
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Bottom" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>);
}

