import { Box, HStack, Input, Text } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'
import Colors from '../color'

function HomeSearch() {
  return (
    <HStack
        space={3}
        w='full'
        px={6}
        bg={Colors.main}
        py={4}
        alignItems='center'
        justifyContent='center'
        safeAreaTop
    >
        <Input 
            placeholder='BMW, Benz, etc...'
            w='85%'
            bg={Colors.white}
            variant='filled'
            type='search'
            h={12}
            borderWidth={0}
            _focus={{
                bg: Colors.white
            }}
        />
        <Pressable ml={3}>
            <FontAwesome5 name='shopping-basket' size={24} color={Colors.white} />
            <Box
                px={1}
                rounded='full'
                position='absolute'
                top={-13}
                left={2}
                bg={Colors.black}
                _text={{
                    color: Colors.white,
                    fontSize: '11px'
                }}
            >
                7
            </Box>
        </Pressable>
    </HStack>
  )
}

export default HomeSearch