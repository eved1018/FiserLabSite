import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)  
    console.log(initialProps);
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
