import { ChakraProvider } from '@chakra-ui/react';
import { Meta } from '../lib/meta';
import { customTheme } from '../lib/theme';
import { Header } from '../components/header';
import { Footer } from '../components/footer';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Meta title="FXd" />
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default MyApp;
