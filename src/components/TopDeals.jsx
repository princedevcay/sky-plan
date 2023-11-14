import {
  Box,
  Badge,
  Image,
  Stack,
  Text,
  Button,
  Icon,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaClock, FaStar } from 'react-icons/fa';

const TopDealCard = ({ deal }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="sm" bg={useColorModeValue('white', 'gray.700')}>
      {deal.savings && <Badge borderRadius="full" px="2" colorScheme="green">Savings</Badge>}
      {deal.popular && <Badge borderRadius="full" px="2" colorScheme="blue" ml={1}>Popular</Badge>}
      <Image src={deal.imageUrl} alt={`Image of ${deal.title}`} />
      <Stack mt={2} align="center">
        <Stack direction="row" align="center">
          <Icon as={FaStar} color="yellow.400" />
          <Text>{deal.rating} Rating</Text>
        </Stack>
        <Text fontWeight="bold">{deal.title}</Text>
        <Stack direction="row" align="center">
          <Icon as={FaClock} />
          <Text>{deal.days} days</Text>
        </Stack>
        <Text fontSize="sm">{deal.description}</Text>
        <Stack direction="row" justify="center" align="center">
          <Text fontWeight="bold" fontSize="lg">From {deal.price}</Text>
          <Text as="s" color="gray.500">{deal.slashedPrice}</Text>
        </Stack>
        <Grid templateColumns="repeat(2, 1fr)" gap={2} w="full">
          <GridItem>
            <Button colorScheme="blue" variant="outline" w="full">Quick Quote</Button>
          </GridItem>
          <GridItem>
            <Button colorScheme="blue" w="full">View Tour</Button>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
};

const TopDeals = () => {
  const topDeals = [
    // Sample data, replace with real data
    {
      title: "Paris Weekender",
      imageUrl: "https://source.unsplash.com/random/200x200?paris",
      rating: 4.8,
      days: 7,
      description: "Experience the best of Paris in just one week.",
      price: "$999",
      slashedPrice: "$1299",
      savings: true,
      popular: true,
    },
    // ...more deals
  ];

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Top Deals</Text>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {topDeals.map((deal, index) => (
          <TopDealCard key={index} deal={deal} />
        ))}
      </Grid>
    </Box>
  );
};

export default TopDeals;
