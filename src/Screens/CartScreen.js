import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subRed}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>

      {/* If cart is empty */}
      {/* <CartEmpty /> */}

      {/* Cart Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}  
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: Colors.main
              }}
            >
              $560
            </Button>
          </HStack>
        </Center>
        {/* Checkout */}
        <Center px={5}>
              <Buttone bg={Colors.black} color={Colors.white} mt={10}>
                Checkout
              </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
