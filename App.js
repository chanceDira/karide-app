
import { Box, NativeBaseProvider, Text } from 'native-base';
import HomeScreen from './src/Screens/HomeScreen'
import LoginScreen from './src/Screens/LoginScreen'
import RegistrationScreen from './src/Screens/RegistrationScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen'
import SingleProductScreen from './src/Screens/SingleProductScreen';
import CartScreen from './src/Screens/CartScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import ShippingScreen from './src/Screens/ShippingScreen';
import PaymentScreen from './src/Screens/PaymentScreen';

export default function App() {
  return (
    <NativeBaseProvider>
     <PaymentScreen />

  </NativeBaseProvider>

  );
}

// 0788392932
