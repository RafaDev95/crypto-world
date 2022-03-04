import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'

import theme from '../../styles/theme'

import Fonts from 'components/Fonts'
import NextNProgress from 'nextjs-progressbar'
import Layout from 'components/Layout'

const Website = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NextNProgress
        color="#1280e7"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Head>
        <meta name="viewport" content="width=device-with, initial-scale = 1" />
        <title>Crypto World!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
