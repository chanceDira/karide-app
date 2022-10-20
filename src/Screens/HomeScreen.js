import { Box } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../color'
import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subRed}> 
       <HomeSearch />
       <HomeProducts />
    </Box>
  )
}

export default HomeScreen