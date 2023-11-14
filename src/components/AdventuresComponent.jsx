import { Box, Image, Text, SimpleGrid, Heading, Container } from '@chakra-ui/react';

const AdventureCard = ({ adventure }) => {
  
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg="white"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image
        src={adventure.imageUrl}
        alt={adventure.type}
        objectFit="cover"
        width="full"
        height="200px"
      />
      <Box p="6">
        <Heading as="h3" size="lg" mb="2" color="primary.500">
          {adventure.type}
        </Heading>
        <Text fontSize="md" color="gray.600">
          {adventure.description}
        </Text>
      </Box>
    </Box>
  );
};

const AdventuresComponent = () => {
  const mockAdventures = [
    {
      type: 'Group Adventure',
      description: 'Join a group of like-minded travelers and explore the world together. Group adventures are perfect for making new friends and sharing the joy of discovery.',
      imageUrl: 'https://source.unsplash.com/featured/?grouptravel',
    },
    {
      type: 'Private Adventure',
      description: 'Enjoy the exclusivity of a private adventure tailored just for you. Experience the luxury of a trip that\'s designed to fit your preferences and pace.',
      imageUrl: 'https://source.unsplash.com/featured/?privatetravel',
    },
    {
      type: 'Personalized Adventure',
      description: 'Create your own itinerary with a personalized adventure. Pick your destinations, activities, and travel style for a unique and bespoke travel experience.',
      imageUrl: 'https://source.unsplash.com/featured/?personalizedtravel',
    },
  ];

  return (
    <Box bg="orange.100" borderRadius={10} py="12" mb={10}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb="10">
          <Heading as="h2" size="xl" color="primary.500" mb="4">
            Explore Our Adventures
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Discover a variety of adventure types that cater to all kinds of travelers. Whether you're looking for group camaraderie, private exploration, or a personalized journey, find the perfect adventure that awaits you.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {mockAdventures.map((adventure) => (
            <AdventureCard key={adventure.type} adventure={adventure} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AdventuresComponent;
