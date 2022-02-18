import {
  Box,
  Flex,
  Container,
  Text,
  Heading,
  Stack,
  IconButton,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import NextLink from 'next/link'

import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
// https://twitter.com/RafaDev95
// https://github.com/RafaDev95
// https://www.linkedin.com/in/rafael-santos-830250215/

const socials = [
  { title: 'Github', link: 'https://github.com/RafaDev95', icon: <BsGithub /> },
  {
    title: 'Twitter',
    link: 'https://twitter.com/RafaDev95',
    icon: <BsTwitter />
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rafael-santos-830250215/',
    icon: <BsLinkedin />
  }
]

const Footer = () => {
  const toggleBg = useColorModeValue('black', 'white')
  const toggleColor = useColorModeValue('white', 'black')
  // bg={useColorModeValue('#e2e8f0', '#161c25')}

  return (
    <Container
      maxW="100%"
      my="1rem"
      // borderTop={`1px solid ${useColorModeValue('black', 'white')}`}
    >
      <Flex alignItems="center" justifyContent="space-around" p="1rem" h="90px">
        <NextLink passHref href="/">
          <Link
            fontSize="1.1rem"
            fontWeight="bold"
            _hover={{ textDecoration: 'none' }}
          >
            Crypto World
          </Link>
        </NextLink>
        <Stack isInline spacing={10}>
          {socials.map(social => (
            <NextLink key={social.title} passHref href={social.link}>
              <Link
                target="_blank"
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="120px"
                p=".4rem"
                rounded="md"
                fontSize="1rem"
                border={`1px solid ${toggleBg}`}
                _hover={{
                  bg: `${toggleBg}`,
                  color: `${toggleColor}`
                }}
              >
                {social.icon} <Text ml=".7rem">{social.title}</Text>
              </Link>
            </NextLink>
          ))}
        </Stack>
      </Flex>
    </Container>
  )
}

export default Footer
