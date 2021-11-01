import { extendTheme  } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// textDecorationColor: mode('f2fafb', '#36eee0')(props),

const styles = {
  global: props => ({
    body: {
      // bg: '#f0e7db',
      bg: mode('#EFEFEF', '#4c5270')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationThickness: 2,
        textDecorationColor: '#525252', // make this dynamic
        marginTop: 3,
        marginBottom: 6
      }
    }
  },
  Link: {
    baseStyle: props => ({
      // color: '#ff63c3',
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
}
}


const fonts = {
  heading: "'Fira Sans Condensed'"
}

const colors = {
  // Light theme colors:

  Cornflower: '#94c4e4', 
  CatalinaBlue:'#063c7b', 
  AquaSpring: '#f2fafb', 
  SteelBlue: '#4c7cad',  

  // Dark theme colors 



  // other colors   
  Sky:'#CAEBF2',
  Carbon: '#A9A9A9',
  Watermelon: '#FF3B3F',
  Nuetral: '#EFEFEF'
}

const config = {
  // initialColorMode: 'dark',
  useSystemColorMode: true
}


const theme = extendTheme({ config,styles, components, fonts, colors })
export default theme