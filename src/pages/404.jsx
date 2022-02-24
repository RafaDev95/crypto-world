import { Image, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

import { AiOutlineHome } from 'react-icons/ai'

const Page404 = () => {
  const toggleBtnBG = useColorModeValue('boxLM', 'boxDM')
  const toggleBtnBGHover = useColorModeValue('#27313d', '#044785')
  return (
    <Flex flexDir="column" alignItems="center">
      <Image
        mb="2rem"
        alt="404 image "
        maxW="700px"
        maxH="700px"
        src="/404.svg"
      />
      <Text alignItems="center" display="flex">
        Oops... This page does not exist. Click here to go back home!{' '}
        <NextLink passHref href="/">
          <Link
            ml=".8rem"
            p=".5rem"
            display="flex"
            alignItems="center"
            fontSize=".9rem"
            bg={toggleBtnBG}
            color="white"
            _hover={{ bg: `${toggleBtnBGHover}` }}
            rounded="md"
          >
            Home{<AiOutlineHome style={{ marginLeft: '.6rem' }} />}
          </Link>
        </NextLink>
      </Text>
    </Flex>
  )
}

export default Page404
