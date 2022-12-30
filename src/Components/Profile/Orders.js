import React from 'react'
import { Box, Button, HStack, ScrollView, Text } from 'native-base'
import Colors from '../../color'
import { Pressable } from 'react-native'

const Orders = () => {
  return (
    <Box h='full' bg={Colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack 
            space={4} 
            justifyContent="space-between" 
            alignItems="center" 
            bg={Colors.deepGray} 
            py={5} 
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              23524534536346566
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button px={7} py={1.5} rounded={50} bg={Colors.main} _text={{
              color: Colors.white
            }}
            _pressed={{
              bg: Colors.main
            }}
            >
              $702
            </Button>
          </HStack>
        </Pressable>
        {/* Not paid */}
        <Pressable>
          <HStack 
            space={4} 
            justifyContent="space-between" 
            alignItems="center" 
            py={5} 
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              23524534536346566
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Jan 12 2021
            </Text>
            <Button px={7} py={1.5} rounded={50} bg={Colors.black} _text={{
              color: Colors.white
            }}
            _pressed={{
              bg: Colors.black
            }}
            >
              $57
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}

export default Orders