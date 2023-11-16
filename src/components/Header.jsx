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
      bg="green"
      color="black"
      h={"80px"}
      shadow={"xl"}
    >
      {/* Logo Section - Always Visible */}
      <Box zIndex={5} flex={{ base: '1', md: '0 0 20%' }} justifyContent={{ base: 'flex-start', md: 'center' }}>
        <Image src="/logo.png" alt="Logo" w={{ base: '40%', md: '220px' }} borderRadius={10}  />
      </Box>

      {/* Navigation Menu - Visible on Desktop */}
      <Box flex={{ base: 'none', md: '0 0 60%' }} display={{ base: 'none', md: 'block' }} mb={3}>
        <NavBar />
      </Box>

      {/* Buttons Section - Visible on Desktop */}
      <Box flex={{ base: 'none', md: '0 0 20%' }} textAlign="right" display={{ base: 'none', md: 'block' }} mb={3}>
        <Button colorScheme='white' mr={5}>
          Sign In
        </Button>
        <Button color='white' variant={"outline"} mr={5}>
          Sign Up
        </Button>
      </Box>

      {/* Hamburger Menu Icon - Visible on Mobile */}
      <Box display={{ base: 'block', md: 'none' }} onClick={onToggle}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          color="white"
          mr={5}
        />
      </Box>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={isOpen} onClose={onToggle} />
    </Flex>
  );
};

export default Header;
