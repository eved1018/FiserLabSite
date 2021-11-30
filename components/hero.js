
import { Box, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import { motion } from 'framer-motion'
import hero from "../images/hero.jpg"
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Section from './section'


const linkMap = {
  "/": ["Fiser Lab", "Structural and Computational Biology at the Einstein College of Medicine", "100vh"],
  "/publications": ["Publications", "", "30vh"],
  "/links": ["Links", "", "30vh"],
  "/contact": ["Contact Us", "", "30vh"],
  "/team": ["Our Team", "", "30vh"],
  "/programs": ["Our Programs", "", "30vh"],

};

export default function Hero({ path }) {


  var hVar = "25vh"
  var pathVar = "error"
  var subtext = "";

  if (linkMap.hasOwnProperty(path)) {
    var hVar = linkMap[path][2];
    var pathVar = linkMap[path][0];
    var subtext = linkMap[path][1];
  }
  return (

    <Flex
      w={'full'}
      // h={'100vh'}
      h={hVar}
      justifyContent="center"
      backgroundImage={"url('/images/hero.jpg')"}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear( blackAlpha.900, transparent)'} // make this less wonky 
        backgroundAttachment={"fixed"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}>


        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} textAlign={'center'}>

          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}

            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            {pathVar}

          </Text>
          <Text color={'white'}
            fontWeight={400}
            lineHeight={1.2}

            fontSize={useBreakpointValue({ base: 'l', md: 'xl' })}>
            {subtext}
          </Text>

        </Stack>

      </VStack>
    </Flex>

  );
}


