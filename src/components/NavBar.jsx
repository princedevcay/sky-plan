import { Flex, Box, Link, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <Flex alignItems="center" color={"white"}>
      <Box mx={3}>
        <Link href="/" color="white" textTransform="uppercase">Home</Link>
      </Box>
      <Box mx={3}>
        <Link href="/about" textTransform="uppercase">About</Link>
      </Box>
      
      {/* Sub-menu example */}
      <Menu> 
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} textTransform="uppercase" colorScheme={"white"} bgColor={"transparent"}>
          Services
        </MenuButton>
        <MenuList textTransform="uppercase" color={"black"}>
          <MenuItem textTransform="uppercase">Service 1</MenuItem>
          <MenuItem textTransform="uppercase">Service 2</MenuItem>
          <MenuItem textTransform="uppercase">Service 3</MenuItem>
        </MenuList>
      </Menu>

      {/* Other menu items */}
    </Flex>
  );
};

export default NavBar;
