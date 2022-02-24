import {
  Container,
  Flex,
  Image,
  Stack,
  Link,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'

import { useRouter } from 'next/router'

import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen
} from 'react-icons/ai'

import NextLink from 'next/link'

const Navbar = ({ activeMenu, setActiveMenu, screenSize }) => {
  const router = useRouter()

  const toggleBgLink = useColorModeValue('boxLM', 'boxDM')

  const navLinks = [
    {
      title: 'Home',
      icon: <AiOutlineHome size="1.6rem" style={{ marginRight: '.5rem' }} />,
      link: '/'
    },
    {
      title: 'Cryptocurrencies',
      icon: (
        <AiOutlineFundProjectionScreen
          size="1.6rem"
          style={{ marginRight: '.5rem' }}
        />
      ),
      link: '/cryptocurrencies'
    },

    {
      title: 'News',
      icon: <AiOutlineBulb size="1.6rem" style={{ marginRight: '.5rem' }} />,
      link: '/news'
    }
  ]

  const toggleLogo = useColorModeValue('/cryptologo.png', '/blacklogo.jpg')

  return (
    <Container h="100vh" w="350px" m={0} p={0}>
      <NextLink passHref href="/">
        <Flex
          p=".4rem"
          alignItems="center"
          w="100%"
          cursor="pointer"
          flexDir={{ xl: 'row', lg: 'row', md: 'column' }}
        >
          <Image
            boxSize="65px"
            alt="logo"
            src={toggleLogo}
            rounded="full"
            objectFit="cover"
          />
          <Heading marginLeft=".8rem" fontSize="1.3rem" color={toggleBgLink}>
            Crypto World
          </Heading>
        </Flex>
      </NextLink>
      <Stack mt="1.2rem">
        {navLinks.map(link => (
          <NextLink key={link.title} passHref href={link.link}>
            <Link
              onClick={() =>
                screenSize <= 800 ? setActiveMenu(!activeMenu) : {}
              }
              p=".5rem"
              rounded="md"
              display="flex"
              alignItems="center"
              bg={`${router.pathname === link.link ? toggleBgLink : 'none'}`}
              color={`${router.pathname === link.link ? 'white' : 'none'}`}
              _focus={{ border: 'none' }}
            >
              {link.icon}
              {link.title}
            </Link>
          </NextLink>
        ))}
      </Stack>
    </Container>
  )
}

export default Navbar
