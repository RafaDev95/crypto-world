import Head from 'next/head'

import {
  ChakraProvider,
  Flex,
  Container,
  Box,
  IconButton
} from '@chakra-ui/react'

import { GiHamburgerMenu } from 'react-icons/gi'

import { useState, useEffect } from 'react'

import theme from '../../styles/theme'

import Fonts from 'components/Fonts'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import ThemeToggleButton from 'components/ThemeToggleButton'
import NextNProgress from 'nextjs-progressbar'

const Website = ({ Component, pageProps }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

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

        {activeMenu && (
          <Navbar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            screenSize={screenSize}
          />
        )}
        <Flex
          flexDir="column"
          justifyContent="space-between"
          w="100%"
          mt="7rem"
        >
          {screenSize <= 800 ? (
            <IconButton
              position={activeMenu ? 'fixed' : 'relative'}
              top={activeMenu ? '15px' : '-70px'}
              left={activeMenu ? '140px' : '0'}
              _focus={{}}
              zIndex={20}
              icon={<GiHamburgerMenu />}
              bg="boxDM"
              _hover={{ bg: '#044785' }}
              w="40px"
              onClick={() => setActiveMenu(!activeMenu)}
            />
          ) : null}
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
