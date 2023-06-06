import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Buttone from "./Buttone";
import Message from "./Notifications/Message";
import Rating from "./Rating";

export default function Review() {
  const [ratings, setRatings] = useState("");

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* If there is no review */}
      <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        size={10}
        children={`NO REVIEW`}
      />
      {/* Review */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Dira
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Dec 13 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={`Lorem Ipsum is simply dummy text of the printing and typesetting`}
        />
      </Box>
      {/* WRITE REVIEW */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS CAR
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subRed}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subRed,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This car is good ..."
              borderWidth={0}
              bg={Colors.subRed}
              py={2}
              _focus={{
                bg: Colors.subRed,
              }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            Submit
          </Buttone>
          {/* If not login */}
          <Message
            color={Colors.white}
            bg={Colors.black}
            children={`Please 'Login' to review this cart`}
          />
        </VStack>
      </Box>
    </Box>
  );
}
