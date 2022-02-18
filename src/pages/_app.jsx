import { ChakraProvider, Flex, Container } from '@chakra-ui/react'
import Fonts from 'components/Fonts'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Head from 'next/head'
import theme from '../../styles/theme'

const Website = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Head>
        <meta name="viewport" content="width=device-with, initial-scale = 1" />
        <title>Crypto World!</title>
      </Head>
      <Container maxW="container.xl" p={0} m={0} display="flex">
        <Navbar />
        <Flex flexDir="column" justifyContent="space-between" w="100%">
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default Website
