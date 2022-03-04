import {
  Flex,
  Container,
  Box,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import Navbar from './Navbar'
import Footer from './Footer'
import ThemeToggleButton from './ThemeToggleButton'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

import { useState, useEffect } from 'react'

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <Container
      maxW="1700px"
      display="flex"
      position="relative"
      overflowX="hidden"
      p={0}
    >
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
      <Flex flexDir="column" justifyContent="space-between" w="100%" mt="7rem">
        <IconButton
          opacity={activeMenu ? 0 : 1}
          position="absolute"
          top="40px"
          left="30px"
          _focus={{}}
          zIndex={20}
          color="white"
          icon={<AiOutlineMenuUnfold size="30px" />}
          bg={useColorModeValue('boxLM', '#042747')}
          _hover={{ bg: `${useColorModeValue('#283546', '#044785')}` }}
          onClick={() => setActiveMenu(!activeMenu)}
        />
        {children}
        <Footer />
      </Flex>
    </Container>
  )
}

export default Layout
