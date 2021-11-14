
import { teamList } from './teamList';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    Wrap,
    WrapItem,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function TeamMember(Member) {

 

    return (
    
      <Center >
        <Box
          maxW={'260'} 
            // w={260} 
            // h={320}         
        //   bg={useColorModeValue('white', 'gray.900')}
        //   boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          m={6}
          textAlign={'center'}
        //   _hover={{transform: 'scale(1.25) translateZ(0)'}}
          >
          <Avatar
            size={'xl'}
            src={Member.thumbnail}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            
          />
          <Heading fontSize={'xl'} fontFamily={'body'}>
            {Member.name}
          </Heading>

        
        <Text color={useColorModeValue('gray.700', 'gray.400')}  fontSize="xs">
            {Member.position} {Member.email}
        </Text>
            
        
        </Box>
      </Center>
      
    );
  }
  