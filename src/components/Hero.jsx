import Slider from 'react-slick';
import {
  Box,
  Center,
  Stack,
  Heading,
  Text,
  Image
} from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: true,
  };

  // Replace these with your actual image URLs and destination details
  const destinations = [
    {
      name: 'Paris, France',
      imageUrl: 'https://source.unsplash.com/featured/?paris',
      description: 'Explore the City of Light with its iconic landmarks and romantic vibes.'
    },
    {
      name: 'Great Barrier Reef, Australia',
      imageUrl: 'https://source.unsplash.com/featured/?greatbarrierreef',
      description: 'Dive into the world’s largest coral reef system.'
    },
    // ... more destinations
  ];

  return (
    <Box position="relative" w="full" h="350px" overflow="hidden">
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <Box key={index} position="relative" h="350px">
            <Image
              src={destination.imageUrl}
              alt={destination.name}
              fit="cover"
              w="full"
              h="full"
            />
            <Center position="absolute" top="0" right="0" bottom="0" left="0" p={1}>
              <Stack textAlign="center" color="white" maxW="lg" spacing={4}>
                <Heading fontSize={{ base: '2xl', md: '4xl' }}>{destination.name}</Heading>
                <Text fontSize={{ base: 'md', md: 'xl' }}>{destination.description}</Text>
              </Stack>
            </Center>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Hero;
