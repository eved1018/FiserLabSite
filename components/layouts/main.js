import { Box, Container, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Hero from "../hero"
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../section'
import { Footer } from "../footer";

const Main = ({ children, router }) => {
    return (
        <Box>
            {router.asPath.toString != "/404" &&
                <Box as='main' pb={8}>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <title>Fiser Lab - Homepage</title>

                    </Head>
                    <Navbar path={router.asPath} />
                    <motion.div key={router.route} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeIn", duration: 0.6 }}>

                        <Hero path={router.asPath} />
                    </motion.div>
                    <Container maxW="container.md" pt={14}>
                        {children}
                    </Container>
                </Box>}
            <Footer />

        </Box>


    )
}

export default Main

