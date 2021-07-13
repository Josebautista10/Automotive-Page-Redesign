import { Box, Image, HStack, Flex, Link } from "@chakra-ui/react";
export const Header = () => {
  return (
    <>
      <Box bgGradient="linear(to-t,  #000000 ,#53D8EF)">
      <Flex marginRight="310px" alignItems="center" justifyContent="space-between" bgGradient="linear(to-r, green.200, pink.500">
        <Box>
          <Image src="/images/afr-logo.png" width="150px" marginLeft="70px" />
        </Box>
        <HStack display={{base: "none", md: "block"}} justifyContent="center" spacing="60px" fontSize="2xl" fontWeight="bolder">
          <Link>Home</Link>
          <Link>Subaru</Link>
          <Link>Mitsubishi</Link>
          <Link>Tuning</Link>
          <Link>Shop</Link>
        </HStack>
      </Flex>
      </Box>
    </>
  );
};
