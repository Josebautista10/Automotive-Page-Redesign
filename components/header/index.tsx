import { Box, Image, Flex, Link, Spacer } from '@chakra-ui/react';
import React from 'react';
import { MobileMenu } from '../mobile-menu';
import { SiSubaru, SiMitsubishi } from 'react-icons/Si';
import { BiHomeAlt } from 'react-icons/bi';
import { MdTune } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';

export const Header = () => {
  return (
    <>
      <Box bgGradient="linear(to-t,  #000000 ,#53D8EF)">
        <Flex
          // marginRight="310px"889
          alignItems="center"
          justifyContent="space-between"
          bgGradient="linear(to-r, green.200, pink.500"
        >
          <Box>
            <Image src="/images/afr-logo.png" width="150px" marginLeft="70px" />
          </Box>
          <Box display={{ base: 'block', lg: 'none' }}>
            <MobileMenu></MobileMenu>
          </Box>
          <Flex
            display={{ base: 'none', lg: 'contents' }}
            justifyContent="space-evenly"
            color="white"
          >
            <Spacer />
            <Link href="/">
              <BiHomeAlt size="40px" />
            </Link>
            <Spacer />

            <Link href="/subaru">
              <SiSubaru size="40px" />
            </Link>
            <Spacer />

            <Link href="/mitsubishi">
              <SiMitsubishi size="40px" />
            </Link>
            <Spacer />

            <Link href="/tuning">
              <MdTune size="40px" />
            </Link>
            <Spacer />

            <Link href="/shop">
              <AiOutlineShop size="40px" />
            </Link>
            <Spacer />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
