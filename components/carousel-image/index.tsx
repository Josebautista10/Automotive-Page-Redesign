import React, { useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className ="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            We have been Subaru enthusiasts at AFR since our inception. Our team
            has been driving, servicing, and modifying Subarus for over 20
            years.
          </div>
          <div className="embla__slide">
            {' '}
            We are proud to offer a linked AWD DYNO for our Subaru customers.
            Linked rollers ensure all tires turn the same speed, minimizing risk
            to AWD components.
          </div>
          <div className="embla__slide">
            Years of experience allow us to work confidently and quickly, which
            means we do quality work while ensuring competitive pricing! We know
            what works.
          </div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};
