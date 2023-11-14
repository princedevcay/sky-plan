import { Box, Grid, GridItem, Heading, Text, Image, Button } from '@chakra-ui/react';

const PopularDestinationsComponent = () => {
    const destinations = [
        { name: 'Paris, France', imageUrl: 'https://source.unsplash.com/featured/?paris' },
        { name: 'Great Barrier Reef, Australia', imageUrl: 'https://source.unsplash.com/featured/?greatbarrierreef' },
        { name: 'Grand Canyon, USA', imageUrl: 'https://source.unsplash.com/featured/?grandcanyon' },
        { name: 'Machu Picchu, Peru', imageUrl: 'https://source.unsplash.com/featured/?machupicchu' },
        { name: 'Santorini, Greece', imageUrl: 'https://source.unsplash.com/featured/?santorini' },
        { name: 'Mount Fuji, Japan', imageUrl: 'https://source.unsplash.com/featured/?mountfuji' },
        { name: 'Banff National Park, Canada', imageUrl: 'https://source.unsplash.com/featured/?banffnationalpark' },
        { name: 'Maui, Hawaii', imageUrl: 'https://source.unsplash.com/featured/?maui' }, 
      ];
      

  return (
    <Box p={4}>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 2fr' }} gap={6}>
        <GridItem pt={5}>
          <Heading mb={4} color={"headingColor"}>Explore Popular Destinations</Heading>
          <Text fontSize="lg" mb={4}>
            Discover some of the most sought-after destinations around the world. Experience the beauty and culture of these iconic locations.
          </Text>
          <Button variant={"outline"} colorScheme="blue">Explore Deals</Button>
        </GridItem>
        <GridItem>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {destinations.map((destination, index) => (
              <Box key={index} textAlign="center">
                <Image
                  boxSize="120px"
                  objectFit="cover"
                  src={destination.imageUrl}
                  alt={destination.name}
                  m="auto"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color={"headingColor"} mt={2}>{destination.name}</Text>
              </Box>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PopularDestinationsComponent;
