/* eslint-disable react/no-unescaped-entities */
import { Input, Box, Heading, Button, Flex } from "@chakra-ui/react";

const SearchDeals = () => {
  return (
    <Box p="4" bg="gray.100" justifyContent={"center"}>
      <Flex justifyContent="center" mb="4">
        {/* Search Bar */}
        <Input
          placeholder="Search for tours"
          w="40%"
          mr="2"
        />
        <Button colorScheme="blue">Search</Button>
      </Flex>

      {/* Deals Section */}
      <Box>
        <Heading as="h3" size="lg" mb="2">
          Today's Best Travel Deals
        </Heading>
        {/* Here you can map through your deals data and display them */}
        {/* This is just a placeholder */}
        <Button colorScheme="teal" mb="2">View Deal 1</Button>
        <Button colorScheme="teal" mb="2">View Deal 2</Button>
        <Button colorScheme="teal">View Deal 3</Button>
      </Box>
    </Box>
  );
};

export default SearchDeals;
