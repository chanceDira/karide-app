import { Box, Text } from 'native-base'
import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { SceneMap, TabBar } from 'react-native-tab-view'
import ProfileScreen from '../../Screens/ProfileScreen'
import Orders from './Orders'
import Profile from './Profile'

const renderScreen = SceneMap({
    first: Profile,
    second: Orders
})

const Tabs = () => {
    const layout = useWindowDimensions()
    const [index, setIndex] =  useState(0)
    const [routes] = useState([
        {
            key:'first', title: 'Profile'
        },
        {
            key:'second', title: 'Orders'
        }
    ])

    const renderTabsBar = (props) => (
        <TabBar />
    )

  return (
    <Box>
      <Text>Tabs</Text>
    </Box>
  )
}

export default Tabs