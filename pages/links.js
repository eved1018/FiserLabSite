import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {linksList} from '../components/linkItems'

const Links  = () => {
    return(
        <Container> 
            {/* <Section>
                    <Heading paddingY="30">
                         Links
                    </Heading>
                </Section> */}


                



                    <Section delay={0.1}>
                        <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        
                        {linksList.map( (item, index) => (
                        <GridItem  key={index}
                            title={item.title}
                            description={item.description}
                            href={item.href} />
                            
                            ))}
                            
                        
                        </SimpleGrid>
                    </Section>
                    

                </Container>
            

    )}
export default Links
