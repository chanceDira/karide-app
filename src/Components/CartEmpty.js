import React from 'react'
import { Box, Center, Text } from 'native-base'
import Colors from '../color'
import { FontAwesome } from '@expo/vector-icons'
import Buttone from './Buttone'

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h='80%'>
        <Center w={200} h={200} bg={Colors.white} rounded='full'>
            <FontAwesome name='shopping-basket' size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
            Cart is empty
        </Text>
      </Center>
      <Buttone bg={Colors.black} color={Colors.white}>
        Start shopping
      </Buttone>
    </Box>
  )
}

export default CartEmpty