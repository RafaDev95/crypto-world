import {
  Container,
  Flex,
  Image,
  Stack,
  Link,
  useColorModeValue,
  Box
} from '@chakra-ui/react'

import { useRouter } from 'next/router'

import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen
} from 'react-icons/ai'

import NextLink from 'next/link'

const Navbar = () => {
  const router = useRouter()

  const toggleBgLink = useColorModeValue('#394c64', '#1280e7')

  return (
    <Container h="100vh" w="350px" m={0}>
      <Box position="fixed">
        <Flex p=".4rem" alignItems="center" w="100%">
          <Image boxSize="75px" alt="logo" src="/cryptologo.png" />
          <NextLink passHref href="/">
            <Link marginLeft=".8rem" fontSize="1.5rem" color={toggleBgLink}>
              Crypto World
            </Link>
          </NextLink>
        </Flex>
        <Stack mt="1.2rem">
          <NextLink passHref href="/">
            <Link
              p=".5rem"
              rounded="md"
              display="flex"
              alignItems="center"
              bg={router.pathname === '/' ? `${toggleBgLink}` : 'none'}
              color={router.pathname === '/' ? 'white' : null}
              _focus={{ border: 'none' }}
            >
              <AiOutlineHome size="1.6rem" style={{ marginRight: '.5rem' }} />{' '}
              Home
            </Link>
          </NextLink>
          <NextLink passHref href="/cryptocurrencies">
            <Link
              p=".5rem"
              rounded="md"
              display="flex"
              alignItems="center"
              bg={
                router.pathname === '/cryptocurrencies'
                  ? `${toggleBgLink}`
                  : 'none'
              }
              color={
                router.pathname === '/cryptocurrencies' ? ' white' : 'none'
              }
              _focus={{ border: 'none' }}
            >
              <AiOutlineFundProjectionScreen
                size="1.6rem"
                style={{ marginRight: '.5rem' }}
              />{' '}
              Cryptocurrencies
            </Link>
          </NextLink>
          <NextLink passHref href="/exchanges">
            <Link
              p=".5rem"
              rounded="md"
              display="flex"
              alignItems="center"
              bg={router.pathname === '/exchanges' ? `${toggleBgLink}` : 'none'}
              color={router.pathname === '/exchanges' ? ' white' : 'none'}
              _focus={{ border: 'none' }}
            >
              <AiOutlineMoneyCollect
                size="1.6rem"
                style={{ marginRight: '.5rem' }}
              />{' '}
              Exchanges
            </Link>
          </NextLink>
          <NextLink passHref href="/news">
            <Link
              p=".5rem"
              rounded="md"
              display="flex"
              alignItems="center"
              bg={router.pathname === '/news' ? `${toggleBgLink}` : 'none'}
              color={router.pathname === '/news' ? ' white' : 'none'}
              _focus={{ border: 'none' }}
            >
              <AiOutlineBulb size="1.6rem" style={{ marginRight: '.5rem' }} />{' '}
              News
            </Link>
          </NextLink>
        </Stack>
      </Box>
    </Container>
  )
}

export default Navbar
