import { Box, Heading, ScrollView, Text } from 'native-base'
import React from 'react'
import Colors from '../color'
import OrderInfo from '../Components/OrderInfo'
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons"
import OrderItem from '../Components/OrderItem'
import OrderModel from '../Components/OrderModel'



function OrderScreen() {
  return (
    <Box bg={Colors.subRed} flex={1} safeArea pt={6}>
        <Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         
            <OrderInfo
              title="SHIPPING INFO"
              success
              subTitle="Shipping: Tanzania"
              text="Pay Method: PayPal"
              icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}
            />
            <OrderInfo
              title="DELIVER TO"
              subTitle="Address:"
              danger
              text="Arusha Tz, Ngaramtoni Crater, P.O BOX 1234"
              icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}
            />
          </ScrollView>
        </Box>
        {/* Order Item */}
        <Box px={6} flex={1} pb={3}>
          <Heading bold fontSize={15} isTruncated my={4}>PRODUCTS</Heading>
          <OrderItem />
          {/* Total */}
          <OrderModel />
        </Box>
    </Box>
  )
}

export default OrderScreen