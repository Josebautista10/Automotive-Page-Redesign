import { ChakraProvider } from "@chakra-ui/react";
import { Meta } from "../lib/meta";
import { customTheme } from "../lib/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Meta title='FXd' />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
