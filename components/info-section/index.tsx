import {
  Box,
  Text,
  Heading,
  HStack,
  Image,
} from '@chakra-ui/react';

export const InfoSelection = (props) => {
  return (
    <>
      <Box>
        <Box bg="brand.100" borderRadius="30px">
        <HStack>
          <Box width="50%" p="20px">
            <Image
              src={props.src}
              alt={props.alt}
              borderRadius="sm"
              boxShadow="dark-lg"
              border="2px"
              borderColor="white"
            />
          </Box>
          <Box>
            <Heading as="u" size="xl" mb={2}>
            {props.title}
            </Heading>
            <Text fontSize="25px">{props.text}</Text>
          </Box>
        </HStack>
        </Box>
      </Box>
    </>
  );
};
