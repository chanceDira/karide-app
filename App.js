
import { Box, NativeBaseProvider, Text } from 'native-base';
import HomeScreen from './src/Screens/HomeScreen'
import LoginScreen from './src/Screens/LoginScreen'
import RegistrationScreen from './src/Screens/RegistrationScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen'

export default function App() {
  return (
    <NativeBaseProvider>
     <HomeScreen />

  </NativeBaseProvider>

  );
}


