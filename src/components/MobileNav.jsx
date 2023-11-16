import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Link
} from '@chakra-ui/react';

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <VStack spacing={4}>
            <Link href="/" textTransform="uppercase">Home</Link>
            <Link href="/about" textTransform="uppercase">About</Link>
            <Link href="/services" textTransform="uppercase">Services</Link>
            <Button colorScheme="green" w="100%">
              Sign In
            </Button>
            <Button variant="outline" colorScheme="green" w="100%">
              Sign Up
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
