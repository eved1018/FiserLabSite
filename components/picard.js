import { Container, Box, Image, Text, useColorModeValue, Flex, Stack, Heading } from '@chakra-ui/react'



const PiCard = ({ ...rest }) => {
  const PI = {
    name: "Fiser, Andras, PhD",
    position: "PI",
    email: "andras.fiser@einstein.yu.edu",
    thumbnail: "/Fiser_Andras.jpg",
    description: "Professor, Department of Systems & Computational Biology Professor, \nDepartment of Biochemistry"
  }

  return (


    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={2}
      mb={0}
      py={0}
      //   bg={useColorModeValue('white', 'gray.900')}
      // boxShadow={'2xl'}
      rounded={'lg'}
      {...rest}
    >

      <Box w={{ base: "80%", sm: "60%", md: "40%" }} mb={{ base: 3, md: 0 }} >
        <Image src={PI.thumbnail} size="100%" rounded="1rem" shadow="2xl" alt="picard" />
      </Box>

      <Stack
        spacing={4}
        w={{ base: "80%", md: "80%" }}
        align={["center", "center", "center", "center"]}
      >

        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "flex-start", "flex-start"]}
        >
          {PI.name}
        </Heading>
        <Text
          fontSize="md"
          mt={2}
          textAlign={["center", "center", "flex-start", "flex-start"]}
          //   textAlign="center"
          color="primary.800"
        >
          {PI.description}
        </Text>

        <Text
          fontSize="xs"
          mt={2}
          textAlign={["center", "center", "flex-start", "flex-start"]}
          //   textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          {PI.position}, {PI.email}
        </Text>

      </Stack>

    </Flex>
  )
}

export default PiCard