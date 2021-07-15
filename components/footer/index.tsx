import { TiSocialInstagram } from 'react-icons/Ti';
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
export const Footer = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        bgGradient="linear(to-b, #53D8EF, #000000)"
      >
        <Box>
          <Text
            align="center"
            bgClip="text"
            color="white"
            fontSize="36px"
            fontWeight="bolder"
          >
            Business Hours
          </Text>
          <UnorderedList
            align="center"
            fontSize="20px"
            fontWeight="semibold"
            styleType="none"
            marginBottom="20px"
            // marginLeft="5%"
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
            align="center"
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
            marginLeft="5%"
            align="center"
            maxWidth="90%"
          >
            (403)-392-1278 sales@afrautoworks.com
          </Text>
        </Box>
        <Box>
          <Text
            align="center"
            bgClip="text"
            color="white"
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
                color="white"
              />
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
