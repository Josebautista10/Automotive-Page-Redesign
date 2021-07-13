import { Box, Image, Heading } from '@chakra-ui/react';

export const Service = ({ name, img}) => {
  return (
    <Box>
      <Box rounded="lg"height="200px" backgroundSize="cover" backgroundImage={`url(${img})`} />
      <Heading fontSize="30px">{name}</Heading>
    </Box>
  );
};
