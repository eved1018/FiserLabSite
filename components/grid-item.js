import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, description }) => (
  <Box boxShadow="dark-lg" p="6" rounded="md" w="100%" textAlign="center" border="1px" borderColor={useColorModeValue('#A9A9A9', 'gray.800')} _hover={{background: useColorModeValue('#A9A9A9', 'gray.800')}} >
    <LinkBox cursor="pointer"   >
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} textDecoration='underline'>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14} mt={2} mb={2}>{children} 
        {description}
      </Text>
    </LinkBox>
  </Box>
)

// export const PubGridItem = ({ children, href, title, authors, year,  }) => (
//   <Text>
    
//   </Text>
// )
export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)