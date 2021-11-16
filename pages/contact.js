import { Container, Box, Text, Link, Flex , VStack, Heading,AspectRatio,Icon} from "@chakra-ui/layout"
import Section from "../components/section"

  


const Contact = () => {

    return(
        <Container>
         
         <Flex>
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
            
            <Box>
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
          <path
            fill={'currentColor'}
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box>
                    
              


        </Section>
        </Flex>

        </Container>

        

    )



}
 export default Contact



// We are located in the Price Center, 4th Floor, room 453
