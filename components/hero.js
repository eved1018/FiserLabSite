
import { Box, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import hero from "../images/hero.jpg"
import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';


// import { Parallax } from 'react-scroll-parallax';
  

const map = {
    "/" : ["Fiser Lab","100vh"],
    "/publications" : ["","40vh"],
    "/links" : ["","40vh"],
    "/contact" : ["","40vh"],
    "/team" : ["","40vh"],
    "/programs" : ["","40vh"],
};


export default function Hero({path}) {


    return (

      <Flex
        w={'full'}
        // h={'100vh'}
        h= {map[path][1]}
        justifyContent="center"
        backgroundImage={"url('/images/hero.jpg')"}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        
        >

        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear( blackAlpha.800, transparent)'}
          backgroundAttachment={ "fixed"}
        backgroundPosition= {"center"}
        backgroundRepeat= {"no-repeat"}>

     if map[path][0] == {"/"}  { 
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6} >
                            
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
           
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Fiser Lab   
                
            </Text>
            <Text color={'white'}
              fontWeight={400}
              lineHeight={1.2}
           
              fontSize={useBreakpointValue({ base: 'l', md: 'xl' })}>
                    Structural and Computational Biology at the Einstein College of Medicine
                </Text>
            
           
            
              
            </Stack>}
        </VStack>
      </Flex>

    );
  }
  
