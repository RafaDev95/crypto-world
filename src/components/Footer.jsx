import {
  Flex,
  Container,
  Text,
  Stack,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import NextLink from 'next/link'

import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

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

  return (
    <Container maxW="100%" my="1rem">
      <Flex alignItems="center" justifyContent="center" p="1rem" h="90px">
        <NextLink passHref href="/">
          <Link
            fontSize="1.1rem"
            fontWeight="bold"
            _hover={{ textDecoration: 'none' }}
          >
            Crypto World
          </Link>
        </NextLink>
        <Stack isInline spacing="2rem" ml="1rem">
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
