import { ChakraProvider } from "@chakra-ui/react";
import ErrorPage from 'next/error'
import App from 'next/app'
import Layout from '../components/layouts/main'
import theme  from '../lib/theme'
import Fonts from '../components/fonts' 
import { AnimatePresence } from "framer-motion";


function Website({ Component, pageProps,router }){
    
    return(
        <ChakraProvider theme={theme}>
            <Fonts />
            <AnimatePresence exitBeforeEnter initial={true}> 

                <Layout router={router}>
                        <Component  {...pageProps} key={router.route} />

                </Layout>
                </AnimatePresence>

                
        </ChakraProvider>
        )}
    export default Website 

    