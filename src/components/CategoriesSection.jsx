import { SimpleGrid } from '@chakra-ui/react';
import CategoryCard from './CategoryCard';

// Mock data for categories
const mockCategories = [
    {
      title: 'Hiking & Trekking',
      imageUrl: 'https://source.unsplash.com/featured/?hiking',
    },
    {
      title: 'Sailing',
      imageUrl: 'https://source.unsplash.com/featured/?sailing',
    },
    {
      title: 'Safari',
      imageUrl: 'https://source.unsplash.com/featured/?safari',
    },
    {
      title: 'Food & Culinary',
      imageUrl: 'https://source.unsplash.com/featured/?food',
    },
    {
      title: 'Bicycle Tours',
      imageUrl: 'https://source.unsplash.com/featured/?bicycle',
    },
    {
      title: 'City Sightseeing',
      imageUrl: 'https://source.unsplash.com/featured/?cityscape',
    },
    {
      title: 'Beach Holidays',
      imageUrl: 'https://source.unsplash.com/featured/?beach',
    },
    {
      title: 'Mountain Climbing',
      imageUrl: 'https://source.unsplash.com/featured/?mountain',
    },
    {
      title: 'Cultural Expeditions',
      imageUrl: 'https://source.unsplash.com/featured/?culture',
    },
    {
      title: 'Wildlife Photography',
      imageUrl: 'https://source.unsplash.com/featured/?wildlife',
    },
    {
      title: 'Snowboarding & Skiing',
      imageUrl: 'https://source.unsplash.com/featured/?snowboarding',
    },
    {
      title: 'Desert Adventures',
      imageUrl: 'https://source.unsplash.com/featured/?desert',
    },
    // ...add more categories as needed
  ];
    

const CategoriesSection = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="4" mb={10}>
      {mockCategories.map((category) => (
        <CategoryCard key={category.title} title={category.title} imageUrl={category.imageUrl} />
      ))}
    </SimpleGrid>
  );
};

export default CategoriesSection;
