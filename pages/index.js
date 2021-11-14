// import { Container , Box, Heading} from "@chakra-ui/react"
import Section from "../components/section"
// import WithBackgroundImage from "../components/hero"
import Paragraph from "../components/paragraph"
import Layout from '../components/layouts/article'
import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon,
    useColorModeValue
  } from '@chakra-ui/react'



// TODO Fix padding on a/l text
// TOOD Fix dark mode text coloring, *make titles pop and paragraphs not!
// TOOD Section breaks that make sense 

const Page =()=> {
    return(
        
        <Layout> 

        <Container> 
    
           

            <Box  display={{md:'flex'}} >
            <Box flexGrow={1}>
                <Heading as='h2' variant='page-title'> 
                    Fiser Lab 
                </Heading>
                <p>
                <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
                    Focused on Protein Stucture / Genomics / Receptor-Ligand Interaction
                </p>
            </Box>
            </Box>
                <Section delay={0.1}>
                    <Heading as='h3' variant='section-title'> Molecular basis of receptor-ligand recognition in the Immunological Synapse</Heading>
                    <Paragraph>
                    Our long-term goal is to understand the principles underlying molecular recognition and selectivity at the immunological synapse. This includes both the identification of novel cognate receptor ligand intercations and to use the gained knowledge to realize surgically defined mutants with altered affinities and selectivities, which can act as biologic drugs 
                    </Paragraph>

                </Section>
                <Section delay={0.2}>
                    <Heading as='h3' variant='section-title'> Molecular basis of receptor-ligand recognition in the Immunological Synapse</Heading>
                    <Paragraph>
                    Our long-term goal is to understand the principles underlying molecular recognition and selectivity at the immunological synapse. This includes both the identification of novel cognate receptor ligand intercations and to use the gained knowledge to realize surgically defined mutants with altered affinities and selectivities, which can act as biologic drugs 
                    </Paragraph>

                </Section>
                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title'> Molecular basis of receptor-ligand recognition in the Immunological Synapse</Heading>
                    <Paragraph>
                    Our long-term goal is to understand the principles underlying molecular recognition and selectivity at the immunological synapse. This includes both the identification of novel cognate receptor ligand intercations and to use the gained knowledge to realize surgically defined mutants with altered affinities and selectivities, which can act as biologic drugs 
                    </Paragraph>

                </Section>
    
        </Container>
        </Layout>
                    
)}
export default Page
