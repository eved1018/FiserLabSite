
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
import AnimatedText from './AnimatedText'

// import { Parallax } from 'react-scroll-parallax';
  

const linkMap = {
    "/" : [[{type: "heading1", text: "Fiser Lab"},{type:"heading2",text:"Structural and Computational Biology at the Einstein College of Medicine"}],"100vh" ],
    "/publications" : ["Publications","","30vh"],
    "/links" : ["Links","","30vh"],
    "/contact" : ["Contact Us","", "30vh"],
    "/team" : ["Our Team","","30vh"],
    "/programs" : ["Our Programs", "", "30vh"],
    
};




export default function Hero({path}) {
  
  var hVar = "25vh"
  var pathVar =[{type: "heading1", text: "error"}]

  if (linkMap.hasOwnProperty(path)) {
    var hVar =linkMap[path][2];
    var pathVar = linkMap[path][0];
    // var subtext = linkMap[path][1];
  }
  // Placeholder text data, as if from API
  // const placeholderText = [
  //   { type: "heading1", text: "Framer Motion" },
  //   {
  //     type: "heading2",
  //     text: "Animating responsive text!"
  //   }
  // ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

 
 
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
    
      {/* if {pathVar} == {"/"}  {  */}
          {/* <Stack maxW={'2xl'} align={'flex-start'} spacing={6} textAlign={'center'} >
                            
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
                </Text> */}
                <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {pathVar.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
      
    </motion.div>
            
           
            
              
            {/* </Stack> */}
          {/* } */}
        </VStack>
      </Flex>

    );
  } 

  
