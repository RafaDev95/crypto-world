import Head from 'next/head'

import { ChakraProvider, Flex, Container, Box } from '@chakra-ui/react'

import theme from '../../styles/theme'

import Fonts from 'components/Fonts'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import ThemeToggleButton from 'components/ThemeToggleButton'

import store from '../store/store'
import { Provider } from 'react-redux'

const Website = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Fonts />
        <Head>
          <meta
            name="viewport"
            content="width=device-with, initial-scale = 1"
          />
          <title>Crypto World!</title>
        </Head>
        <Container maxW="1500px" display="flex" position="relative">
          <Box position="absolute" right="40px" top="40px">
            <ThemeToggleButton />
          </Box>

          <Navbar />
          <Flex
            flexDir="column"
            justifyContent="space-between"
            w="100%"
            mt="7rem"
          >
            <Component {...pageProps} />
            <Footer />
          </Flex>
        </Container>
      </Provider>
    </ChakraProvider>
  )
}

export default Website
