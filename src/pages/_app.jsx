import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '../../styles/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-with, initial-scale = 1" />
        <title>Cloth Shop</title>
      </Head>
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default Website
