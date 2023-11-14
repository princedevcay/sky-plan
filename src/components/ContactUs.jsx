import { Box, Flex, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <Box bg="" color="black" p={10} mt={10}>
      <Flex wrap="wrap" mx="-2" alignItems="center" justifyContent="center">
        {/* Contact Text */}
        <Box p={2} flex={[1, 1, 1 / 2]}>
          <Heading size="lg" mb={4} color={"headingColor"}>Contact Skyplan Travel Consult</Heading>
          <Text fontSize="lg" mb={4}>
            Interested in our tour packages and traveling services? Get in touch with us today to plan your next adventure.
          </Text>
          <Text fontSize="md">
            Fill out the form or contact us via email at info@skylinetravelconsult.com.
          </Text>
        </Box>

        {/* Contact Form */}
        <Box p={2} flex={[1, 1, 1 / 2]}>
          <FormControl id="contact-form" as="form">
            <FormLabel>Name</FormLabel>
            <Input type="text" mb={3} placeholder="Your Name" />

            <FormLabel>Email</FormLabel>
            <Input type="email" mb={3} placeholder="Your Email" />

            <FormLabel>Message</FormLabel>
            <Textarea mb={3} placeholder="Your Message" />

            <Button colorScheme="red" type="submit">Send Message</Button>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactUs;
