import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    headingColor: '#2B388E',
    primary: '#2B388E',   // Dark blue
    TextSecondary: '#F7921C', // Orange
    // Add other colors or shades if necessary
  },
  components: {
    Heading: {
      baseStyle: {
      },
    },
  },
  // Other theme settings...
});

export default customTheme;
