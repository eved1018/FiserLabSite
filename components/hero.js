
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


// import { Parallax } from 'react-scroll-parallax';
  

const linkMap = {
    "/" : ["Fiser Lab","100vh"],
    "/publications" : ["","30vh"],
    "/links" : ["","30vh"],
    "/contact" : ["","30vh"],
    "/team" : ["","30vh"],
    "/programs" : ["","30vh"],
    
};


export default function Hero({path}) {
  
  var hVar = "25vh"
  var pathVar ="error"

  if (linkMap.hasOwnProperty(path)) {
    var hVar =linkMap[path][1];
    var pathVar = linkMap[path][0];
  }
  
 

    return (
      
    
      <Flex
        w={'full'}
        // h={'100vh'}
        h= {hVar}
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
    
      if {pathVar} == {"/"}  { 
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
            
           
            
              
            </Stack>
          }
        </VStack>
      </Flex>

    );
  } 

  
