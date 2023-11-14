import React from 'react';
import { Flex, Box, IconButton, Button, Image, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavBar from './NavBar';
import MobileNav from './MobileNav';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="header"
      align="center"
      justify={{ base: 'space-between', md: 'space-around' }}
      wrap="wrap"
      padding="1rem"
      bg="white"
      color="black"
    >
      {/* Logo Section - Always Visible */}
      <Box flex={{ base: '1', md: '0 0 20%' }} justifyContent={{ base: 'flex-start', md: 'center' }}>
        <Image src="/logo.png" alt="Logo" w={{ base: '40%', md: '60%' }} />
      </Box>

      {/* Navigation Menu - Visible on Desktop */}
      <Box flex={{ base: 'none', md: '0 0 60%' }} display={{ base: 'none', md: 'block' }}>
        <NavBar />
      </Box>

      {/* Buttons Section - Visible on Desktop */}
      <Box flex={{ base: 'none', md: '0 0 20%' }} textAlign="right" display={{ base: 'none', md: 'block' }}>
        <Button colorScheme='red' mr={4}>
          Sign In
        </Button>
        <Button colorScheme='red' variant={"outline"}>
          Sign Up
        </Button>
      </Box>

      {/* Hamburger Menu Icon - Visible on Mobile */}
      <Box display={{ base: 'block', md: 'none' }} onClick={onToggle}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
        />
      </Box>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={isOpen} onClose={onToggle} />
    </Flex>
  );
};

export default Header;
