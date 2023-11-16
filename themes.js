import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    headingColor: '#2B388E',  // Dark blue
    primary: '#2B388E',       // Dark blue
    textSecondary: '#F7921C', // Orange
    ecoGreen: '#4C9A2A',      // Green for eco-friendly vibe
    earthBrown: '#7B5E57',    // Earthy brown, represents sustainability
    skyBlue: '#71C9CE',       // Sky blue, often associated with clean air and water
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
