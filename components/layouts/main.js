import {Box, Container, Flex} from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Hero from "../hero"
import { AnimatePresence, motion } from 'framer-motion'

// import { ParallaxProvider } from 'react-scroll-parallax';

const Main = ({children, router}) => {
    console.log(router.asPath.toString())
    return (
        <Box>
        {router.asPath.toString != "/404" &&
        <Box as='main' pb={8}> 
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />                
            <title>Fiser Lab - Homepage</title>

            </Head>
                <Navbar path={router.asPath} />
                
                <Hero path={router.asPath}/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>}
    </Box>

       
)}

export default Main 