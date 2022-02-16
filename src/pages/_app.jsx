import { ChakraProvider, Flex } from '@chakra-ui/react'
import Navbar from 'components/Navbar'
import Head from 'next/head'
import theme from '../../styles/theme'

const Website = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-with, initial-scale = 1" />
        <title>Crypto World!</title>
      </Head>
      <Flex>
        <Navbar />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default Website
