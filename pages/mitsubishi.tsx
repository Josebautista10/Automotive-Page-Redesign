import {
  Box,
  VStack,
  StackDivider,
} from '@chakra-ui/react';
import { EmblaCarousel } from '../components/carousel-image';
import { InfoSelection } from '../components/info-section';

export default function Mitsubishi() {
  return (
    <>
      <Box width="100vw" background="black" color="brand.300" height="100%">
        <Box
          backgroundImage="http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2020/04/06033718/stefan-kotze-speedhunters-evo-x-233-1200x800.jpg"
          backgroundPosition="bottom"
          backgroundRepeat="no-repeat"
          backgroundSize="cover" 
          
        >
          <EmblaCarousel></EmblaCarousel>
        </Box>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          p="10px 40px"
        >
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-5/275/555275/wSkrtqJm/20d97e785d96474487537c7b60f719d2"
            alt="car"
            title="Subaru Maintenance"
            text="Warranty approved Subaru maintenance, including Service A,
                  Service B, Service C, and Service D. We use OEM or improved
                  components and fluids. We drive Subarus daily and take care of
                  your Subaru as if it was our own."
          />
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-30417488/images/5abffa7dbb915fNB6MXp/IMG_9345.JPG"
            alt="car"
            title="Subaru Repair"
            text="We have the specialized service tools to perform the tasks
            required to repair your Subaru properly. Whether servicing
            your cam gears, rebuilding cylinder heads, or assembling a
            short block, we are able to do it with confidence."
          />
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-5/275/555275/wSkrtqJm/a2aff339bc9b4973bfa8d48931bebac3"
            alt="car"
            title="Subaru Tuning"
            text=" We are experienced tuning Subarus. We offer some excellent
            package options for all years of Subarus. -COBB ProTuning, Inc
            Flex and Speed Density -Link Engine Management -Flex Fuel
            Packages -Open Source Tuning, and More..."
          />
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-30417488/images/f68b7a7193b447849387ccf9acee6a71/IMG_5988.JPG"
            alt="car"
            title="JDM Subarus"
            text="We have access to NEW parts for JDM Subarus as well as used
            parts availability. Experience in diagnostics and familiarity
            with cars where diagnostic information is not readily
            available is key for working on and maintaining your JDM
            vehicle, from the twin-turbo B4 to twin scroll Version 8 STI."
          />

          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-30417488/images/8fef3e61b68046f0a801187544a0c849/43046155_314132819380769_7930962889764652494_n(1).jpg"
            alt="car"
            title="Josh's 530whp, Stock Block, Prodrive STI."
            text="AFR built and tuned 530whp Stock Block STI. Josh's STI is an
            AFR refreshed long block with built heads and a stock location
            turbo. It was built to keep a factory appearance. Link ECU,
            Flex Fuel, 27psi, and two seasons on the stock engine!"
          />
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-5/275/555275/wSkrtqJm/effa0d87e61d4de4a9480032f83981be"
            alt="car"
            title="Subaru Performance"
            text="From bolt-ons to full builds. We know what it takes to
                  increase the performance of your Subaru. We have tuned and
                  modified hundreds of Subarus. Our owner daily drives a 10
                  second Subaru making over 600whp! We do engine building,
                  custom fabrication, and tuning in house."
          />
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-30417488/images/59e6c9914490bJFtvwTW/460-x-220-engine-timing-belt.jpg"
            alt="car"
            title="Subaru Parts"
            text="We stock a large variety of Subaru OEM parts! We try to stock
            all required gaskets, seals, o-rings, and filters for any
            required service or repair. We also stock a wide assortment of
            upgraded parts for service item upgrades such as clutches and
            fuel pumps."
          />
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-5/275/555275/wSkrtqJm/f4acc4834432471a8f41b69202b8359a"
            alt="car"
            title="Subaru Diagnostics"
            text='We have specialized and Subaru Specific diagnostic equipment.
            This allows us to more confidently diagnose drivability and
            emissions based concerns as well as tune and implement
            aftermarket "problem solving" solutions which other shops
            cannot.'
          />
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-30417488/images/59e4e9ff5a284Bu54Hzo/Cobb-Authorized-Dealer.png"
            alt="car"
            title="Subaru Performance Parts"
            text="We can source any performance parts for your Subaru! Many of
            them are available on our Online Store (link at top of page).
            -COBB Tuning, Roger Clark Motorsport, Outfront Motorsports,
            Tomioka Racing, Extreme Turbo Systems, Link Engine Management,
            and More!"
          />
          <InfoSelection
            src="https://afrautoworks.com/x/cdn/?https://storage.googleapis.com/production-websitebuilder-v1-0-5/275/555275/wSkrtqJm/2f1aae866e6f401c9e337eead968bec6"
            alt="car"
            title="10 Second WRX"
            text='This daily driven Impreza makes over 600whp thanks to Link
            Engine Management and a custom AFR built turbo setup. This car
            drove to Castrol from Red Deer, ran a 10 second pass and
            multiple low 11s and then drove home! It was also awarded
            "Best in Show Subaru" at Driven Edmonton 2020.'
          />
        </VStack>
      </Box>
    </>
  );
}
