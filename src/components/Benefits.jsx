import { Box, Text, Stack, Heading, SimpleGrid, Container } from '@chakra-ui/react';
import { GiCompass, GiDiamondHard, GiStairsGoal, GiPalmTree } from 'react-icons/gi';

const BenefitItem = ({ icon, title, description }) => {
  return (
    <Stack textAlign="center" p="4" alignItems="center">
      <Box as={icon} w={20} h={20} color="TextSecondary" mb="3" />
      <Heading as="h3" size="md" color="headingColor" mb="2">{title}</Heading>
      <Text fontSize="md" color="gray.600">{description}</Text>
    </Stack>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: GiCompass,
      title: 'Personalized Itineraries',
      description: 'Tailored travel plans to suit your interests and preferences.',
    },
    {
      icon: GiDiamondHard,
      title: 'Expert Guidance',
      description: 'Professional advice to help you find the best travel deals.',
    },
    {
      icon: GiStairsGoal,
      title: 'Convenient Service',
      description: 'A hassle-free booking experience with support at every step.',
    },
    {
      icon: GiPalmTree,
      title: 'Exclusive Access',
      description: 'Special deals and entry to attractions not always available to the public.',
    },
    // Add more benefits as required
  ];

  return (
    <Container maxW="container.xl" py="12">
      <Box textAlign="center" mb="10">
        <Heading as="h2" size="xl" color="headingColor" mb="4">
          Discover the unique benefits of planning your trip with us.
          </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Benefits;
