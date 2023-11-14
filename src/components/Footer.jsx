// FooterComponent.js
import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  Text,
  Link,
  Icon,
  Stack,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box bg={bgColor} color={textColor} py="5">
      <Container maxW="container.xl">
        <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={10}>
          {/* Support Contact Info */}
          <GridItem>
            <Heading as="h4" size="md" mb="2">Support</Heading>
            <List>
              <ListItem><Text>+(233) 123 456 789</Text></ListItem>
              <ListItem><Text>info@skyplantravelconsult.com</Text></ListItem>

              {/* ... other items */}
            </List>
          </GridItem>

          {/* Follow Us */}
          <GridItem>
            <Heading as="h4" size="md" mb="2">Follow Us</Heading>
            <Stack direction="row" spacing="4">
              <Icon as={FaFacebook} w={6} h={6} />
              <Icon as={FaTwitter} w={6} h={6} />
              <Icon as={FaInstagram} w={6} h={6} />
              <Icon as={FaYoutube} w={6} h={6} />
              {/* ... other icons */}
            </Stack>
          </GridItem>

          {/* Payment Options */}
          <GridItem>
            <Heading as="h4" size="md" mb="2">Payment Options</Heading>
            <Stack direction="row" spacing="4">
              <Icon as={FaCcVisa} w={8} h={8} />
              <Icon as={FaCcMastercard} w={8} h={8} />
              <Icon as={FaCcAmex} w={8} h={8} />
              {/* ... other payment icons */}
            </Stack>
          </GridItem>

          {/* Legal Links */}
          <GridItem>
            <Heading as="h4" size="md" mb="2">Menu</Heading>
            <List>
              <ListItem><Link href="#">Legal Notice</Link></ListItem>
              <ListItem><Link href="#">Privacy Policy</Link></ListItem>
              <ListItem><Link href="#">Cookies</Link></ListItem>
              <ListItem><Link href="#">Terms & Conditions</Link></ListItem>
            </List>
          </GridItem>
        </Grid>

        <Divider my="5" />

        {/* Copyright Info */}
        <Text textAlign="center" fontSize="sm">
          © {currentYear} Skyplantravelconsult. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
