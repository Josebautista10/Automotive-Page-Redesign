import { TiSocialInstagram } from 'react-icons/Ti';
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
export const Footer = () => {
  return (
    <>
      <SimpleGrid
        flexDirection={{ base: 'column', lg: 'row' }}
        bgGradient="linear(to-b, #53D8EF, #000000)"
        columns={{base:1, md:3}}
        padding="20px"
      >
        <Box>
          <Text
            align="left"
            bgClip="text"
            color="white"
            fontSize="36px"
            fontWeight="bolder"
          >
            Business Hours
          </Text>
          <UnorderedList
            align="left"
            fontSize="20px"
            fontWeight="semibold"
            styleType="none"
            margin="0"
            marginBottom="20px"
            width="100%"
            color="white"

          >
            <ListItem>Monday 8:30am–12pm, 1–5pm</ListItem>
            <ListItem>Tuesday 8:30am–12pm, 1–5pm</ListItem>
            <ListItem>Wednesday 8:30am–12pm, 1–5pm</ListItem>
            <ListItem>Thursday 8:30am–12pm, 1–5pm</ListItem>
            <ListItem> Friday 8:30am–12pm, 1–5pm</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text
            align="left"
            marginBottom="5%"
            bgClip="text"
            color="white"
            fontSize="36px"
            fontWeight="bolder"
          >
            Contact US
          </Text>
          <Text
            fontSize="25px"
            fontWeight="semibold"
            marginBottom="20px"
            align="left"
            maxWidth="90%"
            color="white"
          >
            (403)-392-1278 sales@afrautoworks.com
          </Text>
        </Box>
        <Box>
          <Text
            align="left"
            bgClip="text"
            color="white"
            fontSize="36px"
            fontWeight="bolder"
            marginLeft="10px"
          >
            Follow us
          </Text>
          <Box align="left">
            <Link
              href="https://www.instagram.com/afrautoworks/?hl=en"
              isExternal
            >
              <TiSocialInstagram
                size="60px"
                onClick={() => console.log('icon')}
                color="white"
              />
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};
