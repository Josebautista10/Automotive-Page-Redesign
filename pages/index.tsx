import { Header } from '../components/header';
import { Service } from '../components/service';
import { CarouselImage } from '../components/carousel-image';
import { SignUpButton } from '../components/Signup';
import { TiSocialInstagram } from 'react-icons/Ti';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  FormLabel,
  Input,
  FormHelperText,
  FormControl,
  UnorderedList,
  ListItem,
  Button,
  Link,
  Flex,
  Image
} from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <>
      <Box width="100vw" background="brand.100" color="brand.300">
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
          bgGradient="linear(to-t, #53D8EF, #000000)"
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
        <Flex bgGradient="linear(to-b, #53D8EF, #000000)" flexDirection={{base:"column", lg:"row"}}>
          <Box>
            <Text
              align="center"
              bgClip="text"
              bgGradient="linear(to-br, #000000, #FFFFFF)"
              fontSize="48px"

              fontWeight="bolder"
            >
              ABOUT US
            </Text>
            <Text
              fontSize="25px"
              fontWeight="semibold"
              marginBottom="20px"
              align="center"
            >
              Looking for a local shop you can entrust your vehicle to? We
              started AFR Autoworks in order to provide the best service at a
              fair price. Our technicians are knowledgable, we are well
              equipped, and can tackle the simplest repair to the most technical
              of challenges.
            </Text>
            <Text fontSize="25px" fontWeight="semibold" align="center">
              We Service all makes and models, modified or stock, wether you're
              after a simple oil change and inspection or you're after some
              Performance upgrades and Dyno tuning we have you covered!
            </Text>
          </Box>

            <Image minWidth="50%" src="/about-us/white-skyline.jpeg" alt="white-skyline" />
        </Flex>
        <Flex flexDirection={{base:"column", lg:"row"}} bgGradient="linear(to-t, #53D8EF, #000000)">
          <Box>
            <Text
              align="center"
              bgClip="text"
              bgGradient="linear(to-br, #000000, #FFFFFF)"
              fontSize="40px"
              fontWeight="bolder"
              marginBottom="35px"
            >
              AFR Autoworks
            </Text>
            <Text
              fontSize="25px"
              fontWeight="semibold"
              marginBottom="20px"
              align="center"
            >
              Love Your Car. Do What Others Don't to get Results That Others
              Won't.
            </Text>
          </Box>
          <Box align="center">
            <Box>
              <Text
                align="center"
                bgClip="text"
                bgGradient="linear(to-br, #000000, #FFFFFF)"
                fontSize="48px"
                fontWeight="bolder"
              >
                Never Miss a Newsletter
              </Text>
              <FormControl id="email" is="required">
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="afr@email.com" />
                <Box align="center" marginTop="20px" width="">
                  <SignUpButton></SignUpButton>
                </Box>
                <FormHelperText align="center" fontWeight="bolder">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
            </Box>
          </Box>
        </Flex>
        <Flex flexDirection={{base:"column", lg:"row"}} bgGradient="linear(to-b, #53D8EF, #000000)">
          <Box >
            <Text
              align="center"
              bgClip="text"
              bgGradient="linear(to-br, #000000, #FFFFFF)"
              fontSize="36px"
              fontWeight="bolder"
            >
              Business Hours
            </Text>
            <UnorderedList
              align="center"
              fontSize="25px"
              fontWeight="semibold"
              styleType="none"
              marginBottom="20px"
              width="100%"
            >
              <ListItem>Monday 8:30am–12pm, 1–5pm</ListItem>
              <ListItem>Tuesday 8:30am–12pm, 1–5pm</ListItem>
              <ListItem>Wednesday 8:30am–12pm, 1–5pm</ListItem>
              <ListItem>Thursday 8:30am–12pm, 1–5pm</ListItem>
              <ListItem> Friday 8:30am–12pm, 1–5pm</ListItem>
            </UnorderedList>
          </Box>
          <Box >
            <Text
              align="center"
              marginBottom="5%"
              bgClip="text"
              bgGradient="linear(to-br, #000000, #FFFFFF)"
              fontSize="36px"
              fontWeight="bolder"
            >
              Contact US
            </Text>
            <Text
              fontSize="25px"
              fontWeight="semibold"
              marginBottom="20px"
              align="center"
            >
              (403)-392-1278 sales@afrautoworks.com
            </Text>
          </Box>
          <Box>
            <Text
              align="center"
              bgClip="text"
              bgGradient="linear(to-br, #000000, #FFFFFF)"
              fontSize="36px"
              fontWeight="bolder"
              marginLeft="10px"
            >
              Take a look at some of our work
            </Text>
            <Box align="center">
              <Link
                href="https://www.instagram.com/afrautoworks/?hl=en"
                isExternal
              >
                <TiSocialInstagram
                  size="60px"
                  onClick={() => console.log('icon')}
                />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
