import {
  Box,
  Badge,
  Image,
  Stack,
  Text,
  Button,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaStar, FaRegStar, FaStarHalfAlt, FaCalendarAlt  } from 'react-icons/fa';

const mockTopDeals = [
    {
        title: "Adventurous New Zealand",
        imageUrl: "https://source.unsplash.com/random/200x200?newzealand",
        rating: 4.7,
        days: 14,
        location: "NZ",
        description: "Adventure in the rugged landscapes and enjoy NZ's finest.",
        price: "$2,999",
        slashedPrice: "$3,499",
        savings: true,
        popular: false,
      },
      {
        title: "Safari in Kenya",
        imageUrl: "https://source.unsplash.com/random/200x200?safari",
        rating: 4.9,
        days: 10,
        location: "Kenya",
        description: "Experience the thrill of the wild on a Kenyan safari.",
        price: "$4,600",
        slashedPrice: "$5,200",
        savings: true,
        popular: true,
      },
      {
        title: "Cultural Japan",
        imageUrl: "https://source.unsplash.com/random/200x200?japan",
        rating: 4.8,
        days: 12,
        location: "Japan",
        description: "Immerse yourself in the rich culture and history of Japan.",
        price: "$3,250",
        slashedPrice: "$3,750",
        savings: true,
        popular: true,
      },
      {
        title: "Italian Culinary Journey",
        imageUrl: "https://source.unsplash.com/random/200x200?italy",
        rating: 4.5,
        days: 8,
        location: "Italy",
        description: "Savor the tastes of Italy on this gourmet adventure.",
        price: "$2,700",
        slashedPrice: "$3,100",
        savings: false,
        popular: true,
      },
      {
        title: "Historic Greece",
        imageUrl: "https://source.unsplash.com/random/200x200?greece",
        rating: 4.6,
        days: 10,
        location: "Greece",
        description: "Walk the ancient streets where philosophers once roamed.",
        price: "$2,300",
        slashedPrice: "$2,800",
        savings: false,
        popular: false,
      },
];

const RatingStars = ({ rating }) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Icon as={FaStar} key={i} color="yellow.400" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<Icon as={FaStarHalfAlt} key={i} color="yellow.400" />);
    } else {
      stars.push(<Icon as={FaRegStar} key={i} color="yellow.400" />);
    }
  }
  return <Stack direction="row">{stars}</Stack>;
};

const TopDealCard = ({ deal }) => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="2xl" bg={cardBg}>
      <Box position="relative">
        <Image src={deal.imageUrl} alt={deal.title} objectFit="cover" width="100%" h={"150px"}/>
        <Box position="absolute" top="2" left="2" zIndex="1">
          {deal.savings && <Badge bgColor="headingColor" p={1} color="white">Savings</Badge>}
          {deal.popular && <Badge bgColor="headingColor" p={1} color={"white"} ml={2}>Popular</Badge>}
        </Box>
      </Box>
      <Stack p="4" align="center">
        <RatingStars rating={deal.rating} />
        <Text fontWeight="bold">{deal.title}</Text>
        <Stack direction="row" align="center">
          <Icon as={FaCalendarAlt} color={"green"} />
          <Text>{deal.days} days</Text>
          <Icon as={FaMapMarkerAlt} color={"green"} />
          <Text>{deal.location}</Text>
        </Stack>
        <Text noOfLines={2} textAlign="center">{deal.description}</Text>
        <Stack direction="row" justify="center" align="center">
        <Text fontWeight="bold" fontSize="sm">From</Text>
        <Text fontWeight="bold" fontSize="xl" color="red.500">{deal.price}</Text>
          {deal.slashedPrice && <Text as="s" color="gray.500">{deal.slashedPrice}</Text>}
        </Stack>
        <Grid templateColumns="repeat(2, 1fr)" gap={2} w="full">
          <GridItem>
            <Button colorScheme="green" variant="outline" w="full">Quick Quote</Button>
          </GridItem>
          <GridItem>
            <Button colorScheme="green" w="full">View Tour</Button>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
};

const TopDealsComponent = () => {
  return (
    <Box w="full" py="4" mb={10}>
      <Heading size="xl" color={"headingColor"} align="center" mb={6}>Your recently viewed and recommended trips</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={12}>
        {mockTopDeals.map((deal, index) => (
          <TopDealCard key={index} deal={deal} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TopDealsComponent;
