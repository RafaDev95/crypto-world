import {
  Menu,
  MenuList,
  MenuButton,
  Button,
  Link,
  useDisclosure
} from '@chakra-ui/react'

import { HiExternalLink } from 'react-icons/hi'

import NextLink from 'next/link'
const DropdownMenu = ({ menuIcon, coin }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const redditFilter = coin?.links.filter(link => link.type === 'reddit')
  const telegramFilter = coin?.links.filter(link => link.type === 'telegram')
  const bitcointalkFilter = coin?.links.filter(
    link => link.type === 'bitcointalk'
  )

  const communties = redditFilter
    ?.concat(telegramFilter)
    ?.concat(bitcointalkFilter)

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        leftIcon={menuIcon}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        as={Button}
        fontWeight="normal"
        size="sm"
        bg="boxDM"
        color="white"
        _focus={{}}
        _active={{ bg: '#044785' }}
      >
        Community
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg="#044785"
        mt="-.3rem"
        display="flex"
        flexDir="column"
        minW="120px"
        p={0}
      >
        {communties?.map((link, i) => (
          <NextLink key={i} passHref href={link.url}>
            <Link
              target="_blank"
              py=".3rem"
              pl=".5rem"
              display="flex"
              alignItems="center"
              fontSize=".9rem"
              textTransform="capitalize"
            >
              {link.type} {<HiExternalLink style={{ marginLeft: '.6rem' }} />}
            </Link>
          </NextLink>
        ))}
      </MenuList>
    </Menu>
  )
}

export default DropdownMenu
