import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg="white"
      m={"4"}
      mb={4}
      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }} // Adds a hover effect
    >
      <Image src={imageUrl} alt={title} boxSize="150px" width={"100%"} objectFit="cover" />
      <Box p="4">
        <Text fontWeight="bold" color="primary">{title}</Text>
      </Box>
    </Box>
  );
};

export default CategoryCard;
