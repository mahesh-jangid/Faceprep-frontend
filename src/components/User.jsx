import React from "react";
import {
  Box,
  Container,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  Flex,
  Image,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
const User = ({
  user: {
    name: { title, first, last },
    email,
    picture: { large },
  },
}) => {
  return (
    <Box p={[2, 4, 6, 3]} borderBottom={"1px solid #b5bab5"}>
      <Flex justifyContent={"space-between"}>
        <HStack align={"top"}>
          <VStack align={"start"}>
            <Text fontWeight={600}>
              {title} {first} {last}
            </Text>
            <Text color={"gray.600"} display={{ base: "none", md: "flex" }}>
              {email}
            </Text>
          </VStack>
        </HStack>
        <Spacer />
        <Flex alignItems={"center"}>
          <Image
            borderRadius="full"
            boxSize={{ base: "35px", md: "50px", lg: "60px" }}
            src={large}
            alt="alt"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default User;
