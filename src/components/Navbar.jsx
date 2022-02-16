import { Container, Flex, Image, Stack, Link } from '@chakra-ui/react'

import { useRouter } from 'next/router'

import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen
} from 'react-icons/ai'

import NextLink from 'next/link'
import ThemeToggleButton from './ThemeToggleButton'

const Navbar = () => {
  const router = useRouter()

  return (
    <Container
      h="100vh"
      bg="#161c25"
      w="350px"
      color="white"
      m={0}
      boxShadow="md"
    >
      <Flex p="20px" alignItems="center" w="100%">
        <Image boxSize="75px" alt="logo" src="/cryptologo.png" />
        <NextLink passHref href="/">
          <Link marginLeft="15px" fontSize="1.8rem">
            Crypto World
          </Link>
        </NextLink>
      </Flex>
      <Stack>
        <NextLink passHref href="/">
          <Link
            p=".5rem"
            display="flex"
            alignItems="center"
            bg={router.pathname === '/' ? 'blue2' : 'none'}
            _focus={{ border: 'none' }}
          >
            <AiOutlineHome size="1.6rem" style={{ marginRight: '.5rem' }} />{' '}
            Home
          </Link>
        </NextLink>
        <NextLink passHref href="/cryptocurrencies">
          <Link
            p=".5rem"
            display="flex"
            alignItems="center"
            bg={router.pathname === '/cryptocurrencies' ? 'blue2' : 'none'}
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
            display="flex"
            alignItems="center"
            bg={router.pathname === '/exchanges' ? 'blue2' : 'none'}
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
            display="flex"
            alignItems="center"
            bg={router.pathname === '/news' ? 'blue2' : 'none'}
            _focus={{ border: 'none' }}
          >
            <AiOutlineBulb size="1.6rem" style={{ marginRight: '.5rem' }} />{' '}
            News
          </Link>
        </NextLink>

        <ThemeToggleButton />
      </Stack>
    </Container>
  )
}

export default Navbar
