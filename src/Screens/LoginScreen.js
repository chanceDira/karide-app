import { Box, Button, Heading, Image, Input, VStack } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import Colors from "../color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

function LoginScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>Welcom Back !! </Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={24} color={Colors.main} />
            }
            variant="underlined"
            placeholder="**********"
            w="70%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => navigation.navigate('Bottom')}
        >
          Login
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate('Register')}>
          <Text color={Colors.deepestGray} size="sm">
            Don't have an account ? SIGN UP 
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
