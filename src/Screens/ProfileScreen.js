import { Center, Heading, Image, Text } from 'native-base'
import React from 'react'
import Colors from '../color'
import Tabs from '../Components/Profile/Tabs'

function ProfileScreen() {
  return (
    <>
        <Center bg={Colors.main} pt={10} pb={6}>
          <Image 
            alt='profile'
            w={24}
            h={24}
            rounded={50}
            source={{ uri: 'https://cdn.pixabay.com/photo/2022/10/31/10/18/red-deer-7559423_960_720.jpg' }} 
          />
          <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}> 
            Chance Dira
          </Heading>
          <Text italic fontSize={10} color={Colors.white}>
            Joined Jan 13 2019
          </Text>
        </Center>
        {/* Tabs */}
        <Tabs />
    </>
  )
}

export default ProfileScreen