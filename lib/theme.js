// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: "#0bc5ea",
    200: "#0d0d0d",
    300: "#f2f2f2",
  },
};

const fonts = {
  object: {
    heading: '"Roboto", sans-serif',
    body: '"Poppins", sans-serif',
    mono: "Menlo, monospace",
  },
};

export const customTheme = extendTheme({ colors, fonts });
