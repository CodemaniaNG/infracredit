import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    primary: "#3F7ABA",
    primary2: "#000A44",
    primary3: "#227CBF",
    secondary: "#1D6FA0",
    maintText: {
      100: "#272A3C",
      200: "#131628",
      300: "#1B1B1B",
      400: "",
      500: "",
      600: "",
      700: "",
      800: "",
      900: "",
    },
    subText: {
      100: "#9093A0",
      200: "#545764",
      300: "#7C7F8C",
      400: "#686B78",
      500: "#626262",
      600: "#A4A7B4",
      700: "",
      800: "",
      900: "",
    },
    bg: {
      100: "#F4F7FF",
      200: "#E5FFFF",
      300: "#F9F9F9",
      400: "#F6F6F6",
      500: "",
      600: "",
      700: "",
      800: "",
      900: "",
    },
    border: {
      100: "#CCCFDC",
      200: "#E0E3F0",
      300: "",
      400: "",
      500: "",
      600: "",
      700: "",
      800: "",
      900: "",
    },
    greens:{
      100: "#287750",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
