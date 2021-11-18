import {Divider, Image, Box, Container, Heading, SimpleGrid , LinkOverlay,Text, LinkBox} from '@chakra-ui/react'
import Paragraph from "../components/paragraph"

// import Layout from '../components/layouts/article'
import Section from '../components/section'
// import {PubGridItem}  from '../components/grid-item'
import {publicationList} from '../components/publicationList'
// Make this all dynamic reading from google scholor or pubmed

const Publications = () =>{
   
   return (
    <Container>
      
            {publicationList && publicationList.length>0 && publicationList.map((paperList, index) => (
                
                <Section delay={index/10} key={index}>
                   <LinkBox cursor="pointer" >
                    <LinkOverlay href={paperList.link} target="_blank" _hover={{textDecoration: 'underline'}}>
                        <Heading as='h3' variant='section-title' > {paperList.title}</Heading>
                    </LinkOverlay>
                    </LinkBox>
                <Box > 
                    <Paragraph align="center">
                        {paperList.abstarct}
                    </Paragraph>
                    {paperList.thumbnail.length > 0 &&
                    <Image
                        boxShadow="dark-lg"
                        m='10'
                        src={paperList.thumbnail}
                        alt={paperList.title}
                        className="grid-item-thumbnail"
                        placeholder="blur"
                        loading="lazy"
                        align="center"
                    />}
                </Box>

                <Divider orientation="horizontal" />
                </Section>


                ))}
       
    </Container>
            
    )}

export default Publications



// const Publications = () =>{
//     return (
//  <Container> 
//      <Layout title="Programs">        
//          <Container>
//              <Heading as="h3" fontSize={20} mb={4}>
//                  Our Publications
//              </Heading>
 
//              <Section delay={0.1}>
//                  <SimpleGrid columns={[1]} gap={6}>
//                  <PubGridItem
//                      authors="Gil N, Shrestha R, Fiser A"
//                      title='Estimating the accuracy of pharmacophore-based detection of cognate receptor-ligand pairs in the immunoglobulin superfamily.'
//                      href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&amp;cmd=Retrieve&amp;dopt=AbstractPlus&amp;list_uids=33483991&amp;query_hl=1&amp;itool=pubmed_docsum"
//                  />
//                  <PubGridItem
//                      authors="Shrestha R, Fajardo JE, Fiser A"
//                      title='Residue-based pharmacophore approaches to study protein-protein interactions.'
//                      href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&amp;cmd=Retrieve&amp;dopt=AbstractPlus&amp;list_uids=33486430&amp;query_hl=1&amp;itool=pubmed_docsum"
//                  />
//                  </SimpleGrid>
//              </Section>
 
//              <Section delay={0.1}>
//                  <SimpleGrid columns={[1]} gap={6}>
//                  <PubGridItem
//                      authors="Sarkar A, Fiser A, Toms SA, Tapinos N"
//                      title='miRNA-mediated loss of m6A increases nascent translation in glioblastoma.'
//                      href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&cmd=Retrieve&dopt=AbstractPlus&list_uids=33684100&query_hl=1&itool=pubmed_docsum"
//                  />
//                  <PubGridItem
//                      authors="Grudman S, Fajardo JE, Fiser A."
//                      title='INTERCAAT: identifying interface residues between macromolecules.'
//                      href="https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btab596/6367763"
//                  />
//                  </SimpleGrid>
//              </Section>
 
//              <Section>
//              <LinkBox cursor="pointer">
//              <LinkOverlay href='https://pubmed.ncbi.nlm.nih.gov/?term=Andras+Fiser&sort=date' target="_blank">
//                  <Text mt={2} fontSize = {14} textDecoration='underline'>PubMed</Text>
//              </LinkOverlay>
//              </LinkBox>
//              </Section>
 
 
//          </Container>
//      </Layout>
//  </Container>
             
//      )}
 
//  export default Publications
 
 
 