// ServicesComponent.js
import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Icon,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaShuttleVan,
  FaCar,
  FaPassport,
  FaBriefcase,
  FaUserFriends,
  FaBullhorn,
  FaLaptopCode,
  FaUmbrellaBeach,
  // ... other icons
} from 'react-icons/fa';

const ServiceBox = ({ icon, title, description, bg, colSpan, rowSpan }) => {
  return (
    <GridItem colSpan={colSpan} rowSpan={rowSpan} bg={bg} p={6} display="flex" flexDirection="column" justifyContent="center" alignItems="center" boxShadow="xl" borderRadius="lg">
      <Icon as={icon} w={10} h={10} color="white" mb={4} />
      <Heading as="h4" size="md" color="white" mb={2}>{title}</Heading>
      <Text color="white" fontSize="sm" align={"center"}>{description}</Text>
    </GridItem>
  );
};

const Services = () => {
  const bgPrimary = useColorModeValue('blue.500', 'blue.200');
  const bgSecondary = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box py={12} mb={-150} >
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
         <ServiceBox icon={FaBriefcase} title="Travel Management" description="Comprehensive management services for all your travel arrangements." bg="blue.500" colSpan={1} rowSpan={2} />
         <ServiceBox icon={FaShuttleVan} title="Airport Shuttle" description="Convenient airport transport." bg={bgPrimary} colSpan={1} rowSpan={2} />
         <ServiceBox icon={FaUserFriends} title="24/7 Customer Service" description="Always here to help you." bg={bgPrimary} colSpan={1} rowSpan={1} />
         <ServiceBox icon={FaPassport} title="Passport Services" description="Hassle-free assistance with all passport needs." bg={bgPrimary} colSpan={1} rowSpan={1} />
         <ServiceBox icon={FaUmbrellaBeach} title="Leisure Services" description="Tailored leisure activities to make your vacation memorable and exciting." bg={bgPrimary} colSpan={1} rowSpan={1} />
         <ServiceBox icon={FaUserFriends} title="Passenger Assistance" description="Helping you every step of the journey." bg={bgPrimary} colSpan={1} rowSpan={1} />
         <ServiceBox icon={FaUmbrellaBeach} title="Leisure Services" description="Tailored leisure activities to make your vacation memorable and exciting." bg={bgPrimary} colSpan={1} rowSpan={1} />
         <ServiceBox icon={FaUserFriends} title="Passenger Assistance" description="Helping you every step of the journey." bg={bgPrimary} colSpan={1} rowSpan={1} />
        
        </Grid>
    </Box>
  );
};

export default Services;
