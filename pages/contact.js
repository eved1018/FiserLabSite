import { Container, Box, Text, Link, Flex , VStack, Heading,AspectRatio} from "@chakra-ui/layout"
import Section from "../components/section"

  


const Contact = () => {

    return(
        <Container>
            <Section>
                {/* <Section>
                    <Heading paddingY="30">
                        Contact Us
                    </Heading>
                </Section> */}
            <Text fontWeight="bold"> Regular mail address:</Text>
            <Text>Andras Fiser, Ph.D., D.Sc.</Text>
            <Text>Professor</Text>
            <Text>Department of Systems and Computational Biology &amp;</Text> 
            <Text>Department of Biochemistry</Text> 
            <Text>Albert Einstein College of Medicine</Text>
            <Text>1300 Morris Park Avenue</Text>
            <Text>Bronx, NY 10461 USA</Text>
            <Text fontWeight="bold">phone:</Text>
            <Text> (718)678-1068 </Text>
            <Text fontWeight="bold">emial:</Text>
            <Text>e-mail: andras.fiser@einstein.yu.edu</Text>
        
            <Box paddingY="16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.91491721727!2d-73.84784458478687!3d40.85179177931703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f579adfc39fd%3A0xeb70b73a47960c8c!2sPrice%20center!5e0!3m2!1sen!2sus!4v1636301787018!5m2!1sen!2sus"
              width="600"
              height="450"
              frameBorder="50"
              style={{ border: "5" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            </Box>
                    
              


            </Section>
        </Container>

        

    )



}
 export default Contact



// We are located in the Price Center, 4th Floor, room 453
