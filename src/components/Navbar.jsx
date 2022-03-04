import {
  Container,
  Text,
  Flex,
  Image,
  Stack,
  Link,
  useColorModeValue,
  Heading,
  IconButton,
  Slide,
  useDisclosure
} from '@chakra-ui/react'

import { useRouter } from 'next/router'

import { useEffect } from 'react'

import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen
} from 'react-icons/ai'

import NextLink from 'next/link'

import { AiOutlineMenuFold } from 'react-icons/ai'
import Overlay from './Overlay'

const Navbar = ({ activeMenu, setActiveMenu, screenSize }) => {
  const { isOpen, onToggle } = useDisclosure()
  const router = useRouter()

  const smallScreen = screenSize <= 900

  const toggleMenuButtonBg = useColorModeValue('boxLM', '#042747')
  const toggleMenuButtonBgHover = useColorModeValue('#283546', '#044785')

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

  useEffect(() => {
    const closeModal = e => {
      const targetClass = 'chakra-container css-ppjyx0'
      if (e.target.className === targetClass) {
        setActiveMenu(false)
      }
    }

    document.body.addEventListener('click', closeModal)

    return () => document.body.removeEventListener('click', closeModal)
  }, [activeMenu])

  return (
    <>
      <Container
        h="calc(100% - 120px)"
        w="350px"
        position={smallScreen ? 'absolute' : 'relative'}
        bg={smallScreen ? '#030311dc' : 'initial'}
        zIndex={20}
      >
        {activeMenu && smallScreen ? (
          <IconButton
            color="white"
            position={activeMenu ? 'absolute' : 'relative'}
            top={activeMenu ? '35px' : '-70px'}
            left={activeMenu ? '280px' : '0'}
            _focus={{}}
            zIndex={20}
            icon={<AiOutlineMenuFold size="30px" />}
            bg={toggleMenuButtonBg}
            _hover={{ bg: `${toggleMenuButtonBgHover}` }}
            onClick={() => setActiveMenu(!activeMenu)}
          />
        ) : null}
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
              src="/cryptologo.png"
              rounded="full"
              objectFit="cover"
            />
            <Heading marginLeft=".8rem" fontSize="1.3rem" color={toggleBgLink}>
              Crypto World
            </Heading>
          </Flex>
        </NextLink>
        <Stack mt="1.2rem" spacing="2rem">
          {navLinks.map(link => (
            <NextLink key={link.title} passHref href={link.link}>
              <Link
                onClick={() => smallScreen && setActiveMenu(false)}
                p=".5rem"
                rounded="md"
                display="flex"
                alignItems="center"
                bg={`${router.pathname === link.link ? toggleBgLink : 'none'}`}
                color={`${
                  router.pathname === link.link || smallScreen
                    ? 'white'
                    : 'none'
                }`}
                _focus={{ border: 'none' }}
              >
                {link.icon}
                {link.title}
              </Link>
            </NextLink>
          ))}
        </Stack>
      </Container>
      {activeMenu && smallScreen ? <Overlay /> : null}
    </>
  )
}

export default Navbar
