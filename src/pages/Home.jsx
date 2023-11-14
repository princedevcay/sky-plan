import { Box} from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import TopDeals from '../components/TopDeals';
import Footer from '../components/Footer';
import CategoriesSection from '../components/CategoriesSection';
import AdventuresComponent from '../components/AdventuresComponent'
import Benefits from '../components/Benefits';
import PopularDestinations from '../components/PopularDestinations';
import ContactUs from '../components/ContactUs';


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <SearchForm />
      <Box px={10} py={20}>
      <CategoriesSection />
      <AdventuresComponent />
      <Benefits />
      <PopularDestinations />
      <ContactUs />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
