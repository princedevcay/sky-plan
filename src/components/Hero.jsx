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
      name: 'Kakum National Park',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Kakum.jpg',
      description: 'A rainforest conservation area with a famous canopy walkway offering spectacular views of the flora and fauna.'
    },
    {
      name: 'Mole National Park',
      imageUrl: 'https://images.unsplash.com/photo-1543838215-403d7bf6e149?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Ghana’s largest wildlife park, where you can spot elephants, buffaloes, and numerous bird species.'
    },
    {
      name: 'Aqua Safari Resort',
      imageUrl: 'https://aquasafariresort.com/wp-content/uploads/2023/06/DJI_0051-Edit.webp',
      description: 'Ghana’s largest wildlife park, where you can spot elephants, buffaloes, and numerous bird species.'
    },
    // ... any other destinations
  ];
  
  return (
    <Box position="relative" w="full" h="550px" overflow="hidden">
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <Box key={index} position="relative" h="500px">
            <Image
              src={destination.imageUrl}
              alt={destination.name}
              fit="cover"
              w="full"
              h={"500px"}
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
