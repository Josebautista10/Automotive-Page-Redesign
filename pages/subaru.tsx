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
import { EmblaCarousel } from '../components/carousel-image';

export default function Subaru() {
  return (
    <>
      <Box width="100vw" background="black" color="brand.300" >
        <Box
          backgroundImage="/subaru/background-subaru.jpeg"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          
        >
          <EmblaCarousel ></EmblaCarousel>
        </Box>
      </Box>
    </>
  );
}
