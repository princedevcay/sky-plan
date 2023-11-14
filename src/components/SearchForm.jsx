// SearchForm.jsx
import React, { useState } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Icon,
  Stack,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const bgColor = useColorModeValue('white', 'gray.700');

  return (
    <Center
      position="relative"
      bottom={{ base: '50px', md: '35px' }} // Adjust this value as needed
      w="full"
      zIndex={2} // Ensure this is above the hero slider z-index
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        bg={bgColor}
        borderRadius="md"
        boxShadow="xl"
        p={4}
        width={{ base: "auto", md: "90%", lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaMapMarkerAlt} color="gray.500" />
          </InputLeftElement>
          <Input type="text" placeholder="Where to?" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaCalendarAlt} color="gray.500" />
          </InputLeftElement>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<Input />}
            dateFormat="     MMMM d, yyyy"
          />
        </InputGroup>
        <Button colorScheme="red" px="8">
          Search
        </Button>
      </Stack>
    </Center>
  );
};

export default SearchForm;
