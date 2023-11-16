// FooterComponent.jsx
import React from 'react';
import {
  Box,
  Grid,
  VStack,
  Text,
  Icon,
  HStack,
  Link,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue('green.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box bg={bgColor} color={textColor} py="5">
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={10}
          textAlign={{ base: 'left', md: 'left' }} // Center text for base, align left for md and up
        >
          <VStack spacing={2}>
            <Text fontWeight="bold">Support</Text>
            <Text>+233 123 456 789</Text>
            <Text>info@skyplanttravelconsult.com</Text>
          </VStack>

          <VStack spacing={2}>
            <Text fontWeight="bold">Follow Us</Text>
            <HStack justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Icon as={FaFacebook} w={5} h={5} />
              <Icon as={FaTwitter} w={5} h={5} />
              <Icon as={FaInstagram} w={5} h={5} />
              <Icon as={FaYoutube} w={5} h={5} />
            </HStack>
          </VStack>

          <VStack spacing={2}>
            <Text fontWeight="bold">Payment Options</Text>
            <HStack justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Icon as={FaCcVisa} w={5} h={5} />
              <Icon as={FaCcMastercard} w={5} h={5} />
              <Icon as={FaCcAmex} w={5} h={5} />
            </HStack>
          </VStack>

          <VStack spacing={2}>
            <Text fontWeight="bold">Menu</Text>
            <Link>Legal Notice</Link>
            <Link>Privacy Policy</Link>
            <Link>Cookies</Link>
            <Link>Terms & Conditions</Link>
          </VStack>
        </Grid>
        <Text pt="5" textAlign="center" fontSize="sm">
          © {currentYear} SkyPlant Travel Consults. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
