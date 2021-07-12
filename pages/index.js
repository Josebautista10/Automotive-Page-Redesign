import { Header } from '../components/header';
import { Box, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { Service } from '../components/service';

export default function Home() {
  return (
    <>
      <Box
        width="100vw"
        background="brand.100"
        color="brand.300"
      >
        <Header></Header>
        <Box
          backgroundImage="/images/afr-image.webp"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Box backgroundColor="rgba(0,0,0,.6)" py="80px">
            <Heading textAlign="center" paddingTop="50px" size="3xl">
              Welcome to AFR Autoworks
            </Heading>
            <Text align="center" paddingTop="50px" fontSize="4xl">
              Where performance and repair work are customer centered
            </Text>
            <Text align="center" paddingTop="50px" fontSize="3xl">
              Come in the shop so we can show you our phenomenal “Done once done
              right” work
            </Text>
          </Box>
        </Box>
        <SimpleGrid
          spacing="10px"
          columns={{ base: 1, md: 2, lg: 4 }}
          padding="30px"
        >
          <Service name="Premium parts" img="/images/premium-parts-afr.webp" />
          <Service
            name="Performance/Tuning"
            img="/images/performance-tuning-afr.webp"
          />
          <Service name="Service" img="/images/oil-afr.webp" />
          <Service name="Electrical" img="/images/electrical.jpeg" />
        </SimpleGrid>
        <Box bgGradient="linear(to-b, #53D8EF, #000000)">
          <Text
            bgClip="text"
            bgGradient="linear(to-br, #000000, #FFFFFF)"
            fontSize="48px"
            marginLeft="400px"
            marginBottom="10px"
            fontWeight="bolder"
          >
            ABOUT US
          </Text>
          <Flex padding="50px">
            <Box maxWidth="50%">
              <Text fontSize="25px" fontWeight="semibold" marginBottom="20px">
                Looking for a local shop you can entrust your vehicle to? We
                started AFR Autoworks in order to provide the best service at a
                fair price. Our technicians are knowledgable, we are well
                equipped, and can tackle the simplest repair to the most
                technical of challenges.
              </Text>
              <Text fontSize="25px" fontWeight="semibold">
                We Service all makes and models, modified or stock, wether
                you're after a simple oil change and inspection or you're after
                some Performance upgrades and Dyno tuning we have you covered!
              </Text>
            </Box>
            <Box>images</Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
