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
  Image,
} from '@chakra-ui/react';

export default function Subaru() {
  return (
    <>
      <Box width="100vw" background="black" color="brand.300">
        <Box
          backgroundImage="/subaru/background-subaru.jpeg"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Box backgroundColor="rgba(0,0,0,.5)" py="80px">
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
      </Box>
    </>
  );
}
