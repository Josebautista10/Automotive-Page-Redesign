import { Box, Image, Flex, Link, Tooltip, Icon } from '@chakra-ui/react';
import React from 'react';
import { MobileMenu } from '../mobile-menu';
import { SiSubaru, SiMitsubishi } from 'react-icons/si';
import { BiHomeAlt } from 'react-icons/bi';
import { MdTune } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';

export const Header = () => {
  return (
    <>
      <Box bgGradient="linear(to-t,  #000000 ,#53D8EF)" paddingRight="40px">
        <Flex
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
            <Tooltip label="Home" aria-label="A tooltip">
              <Link href="/">
                < Icon _hover={{ color: 'brand.100'}} as={BiHomeAlt} boxSize="40px" />
              </Link>
            </Tooltip>

            <Tooltip label="Subaru" aria-label="A tooltip">
              <Link href="/subaru">
                < Icon _hover={{ color: 'brand.100'}} as={SiSubaru} boxSize="40px"/>
              </Link>
            </Tooltip>

            <Tooltip label="Mitsubishi" aria-label="A tooltip">
              <Link href="/mitsubishi">
                < Icon _hover={{ color: 'brand.100'}} as={SiMitsubishi} boxSize="40px"/>
              </Link>
            </Tooltip>

            <Tooltip label="Tuning" aria-label="A tooltip">
              <Link href="/tuning">
                <Icon _hover={{ color: 'brand.100'}} as={MdTune} boxSize="40px"/>
              </Link>
            </Tooltip>

            <Tooltip label="Shop" aria-label="A tooltip">
              <Link href="/shop">
                <Icon _hover={{ color: 'brand.100'}} as={AiOutlineShop} boxSize="40px"/>
              </Link>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
