import Head from 'next/head'

import { ChakraProvider, Flex, Container, Box } from '@chakra-ui/react'

import theme from '../../styles/theme'

import Fonts from 'components/Fonts'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import ThemeToggleButton from 'components/ThemeToggleButton'
import NextNProgress from 'nextjs-progressbar'

const Website = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Head>
        <meta name="viewport" content="width=device-with, initial-scale = 1" />
        <title>Crypto World!</title>
      </Head>
      <Container maxW="1700px" display="flex" position="relative">
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
          <NextNProgress
            color="#1280e7"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
            showOnShallow={true}
          />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </Container>
    </ChakraProvider>
  )
}

export default Website
