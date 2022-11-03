import { Center, Text } from 'native-base'
import React from 'react'

export default function Message({ bg, color, children, size, bold }) {
  return (
    <Center bg={bg} p={4} rounded={4}>
        <Text color={color} fontSize={size} bold={bold}>
            {children}
        </Text>
    </Center>
  )
}