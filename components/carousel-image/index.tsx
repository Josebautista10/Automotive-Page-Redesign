import React, { useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import styled from '@emotion/styled';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const CarouselBox = styled(Box)`
  overflow: hidden;
  justify-content: center;
  position: relative;
  align-items: center;
  .embla__slide {
    flex: 0 0 100%; /* Slide covers 80% of the viewport */
    padding:0 20%;
    display:flex;
    align-items:center;
    justify-content: center;
    max-width="80vw"
    text-align: center;
  }
`;
const styles = {Button: {
    background:"brand.100", 
    _hover:{
    background:"brand.200" 
    },
    _active:{
      background:"red", 
    }
}}
// export default Headroom
export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <CarouselBox className="embla">
      <Box className="embla__viewport" ref={emblaRef}>
        <Box
          className="embla__container"
          display="flex"
          flexDirection="column"
          height="500px"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="embla__slide" textStyle="carouselText">
            We have been Subaru enthusiasts at AFR since our inception. Our team
            has been driving, servicing, and modifying Subarus for over 20
            years.
          </Box>
          <Box className="embla__slide" textStyle="carouselText">
            We are proud to offer a linked AWD DYNO for our Subaru customers.
            Linked rollers ensure all tires turn the same speed, minimizing risk
            to AWD components.
          </Box>
          <Box className="embla__slide" textStyle="carouselText">
            Years of experience allow us to work confidently and quickly, which
            means we do quality work while ensuring competitive pricing! We know
            what works.
          </Box>
          <Flex
            position="absolute"
            justifyContent="space-between"
            left="0"
            right="0"
            width="100vw"
            height="100%"
            display="flex"
            alignItems="center"
          >
            <Button variaint="outline" {...styles.Button} onClick={scrollPrev}>Prev</Button>
            <Button {...styles.Button} onClick={scrollNext}>Next</Button>
          </Flex>
        </Box>
      </Box>
    </CarouselBox>
  );
};
