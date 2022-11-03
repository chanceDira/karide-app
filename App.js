
import { Box, NativeBaseProvider, Text } from 'native-base';
import HomeScreen from './src/Screens/HomeScreen'
import LoginScreen from './src/Screens/LoginScreen'
import RegistrationScreen from './src/Screens/RegistrationScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen'
import SingleProductScreen from './src/Screens/SingleProductScreen';

export default function App() {
  return (
    <NativeBaseProvider>
     <SingleProductScreen />

  </NativeBaseProvider>

  );
}


