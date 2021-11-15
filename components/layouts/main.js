import {Box, Container} from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Hero from "../hero"
import { AnimatePresence, motion } from 'framer-motion'

// import { ParallaxProvider } from 'react-scroll-parallax';

const Main = ({children, router}) => {
    return (
        <Box as='main' pb={8}> 
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />                
            <title>Fiser Lab - Homepage</title>

            </Head>
                <Navbar path={router.asPath} />
                <AnimatePresence exitBeforeEnter >
                        <Hero path={router.asPath}/>
                </AnimatePresence>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
       
)}

export default Main 