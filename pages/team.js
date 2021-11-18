import { Container,Heading, SimpleGrid, Box, Grid,GridItem,Text,Link,Wrap,WrapItem } from '@chakra-ui/react'
import {teamList} from '../components/teamList'
import PiCard from '../components/picard'
import TeamMember from '../components/teamMember'
import Section from "../components/section"
 
const Team = () => {
    

    return(
       <Container>
           {/* <Section>
                    <Heading >
                        Our Team
                    </Heading>
                </Section> */}
            <Section delay={0.1}>
                <PiCard></PiCard>
            </Section>
           
            <Text 
            fontWeight="extrabold"
            color="primary.800"
            
            > 

                Lab Members
            </Text>

            <SimpleGrid columns={[2, null, 2]} spacing="20px" >
                
                    {teamList.map( (item, index) => (
                        <Section delay={(0.2)} key={index}>
                        <GridItem>
                        <TeamMember className={'teammember'} {...teamList[index]}/> 
                        </GridItem>
                       </Section>
                    ))}
            </SimpleGrid>
        </Container>

    )
}

export default Team

 
    