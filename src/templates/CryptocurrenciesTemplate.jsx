import NextLink from 'next/link'

import { formatBigNumbers, formatPrice } from '../utils/format-price'

import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Avatar,
  Container,
  Box,
  useColorModeValue,
  Input,
  Flex
} from '@chakra-ui/react'

import { useState, useEffect } from 'react'

const CryptocurrenciesTemplate = ({ coins, home, homeCoins }) => {
  const toggleBg = useColorModeValue('boxLM', '#001e3b')
  const toggleBorder = useColorModeValue('black', 'boxDM')
  const togglePlaceholderText = useColorModeValue('black', 'white')

  const [searchCoin, setSearchCoin] = useState()
  const [cryptos, setCryptos] = useState(coins)

  const coinsForMapping = cryptos?.length === 0 ? coins : cryptos

  useEffect(() => {
    const filteredCoin = coins?.filter(coin =>
      coin.name.toLowerCase().includes(searchCoin?.toLowerCase())
    )
    setCryptos(filteredCoin)
  }, [coins, searchCoin])

  return (
    <Container variant="page-container" as="main" position="relative">
      {home ? null : (
        <Flex
          justifyContent="space-around"
          alignItems="center"
          flexDir={{ md: 'row', sm: 'column' }}
        >
          <Heading as="h1" variant="section-title" mb="3rem" pt="1.5rem">
            Crypto Currencies
          </Heading>
          <Input
            placeholder="Search coin..."
            _placeholder={{ color: `${togglePlaceholderText}` }}
            type="search"
            w="50%"
            mb={{ md: '0', sm: '1.5rem' }}
            borderColor={toggleBorder}
            focusBorderColor={toggleBorder}
            _hover={{ borderColor: 'none' }}
            onChange={e => setSearchCoin(e.target.value)}
          />
        </Flex>
      )}
      <SimpleGrid columns={{ xl: 4, lg: 3, md: 3, sm: 2 }} spacing="10px">
        {home
          ? homeCoins?.map(coin => (
              <NextLink key={coin.uuid} href={`/crypto/${coin?.uuid}`} passHref>
                <Box
                  bg={toggleBg}
                  h="200px"
                  rounded="md"
                  py="1rem"
                  cursor="pointer"
                  color="white"
                  boxShadow="md"
                  _hover={{
                    transform: 'scale(1.05)'
                  }}
                  transition="ease-in-out .2s"
                >
                  <Stack
                    isInline
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom="1px solid gray"
                    px={{ md: '2rem', sm: '.7rem' }}
                    pb=".5rem"
                  >
                    <Heading as="h1" fontSize={{ md: 'initial', sm: '.9rem' }}>
                      {`${coin?.rank}. ${coin?.name}`}
                    </Heading>
                    <Avatar src={coin.iconUrl} size="sm" />
                  </Stack>

                  <Stack
                    px={{ md: '2rem', sm: '.5rem' }}
                    pt="1rem"
                    fontSize={{ xl: '1.2rem', md: 'initial', sm: '.8rem' }}
                  >
                    <Text>Price: {formatPrice(coin.price)}</Text>

                    <Text>Market Cap: {formatBigNumbers(coin.marketCap)}</Text>

                    <Text>Daily Change: {formatBigNumbers(coin.change)}%</Text>
                  </Stack>
                </Box>
              </NextLink>
            ))
          : coinsForMapping?.map(coin => (
              <NextLink key={coin.uuid} href={`/crypto/${coin?.uuid}`} passHref>
                <Box
                  bg={toggleBg}
                  rounded="md"
                  py="1rem"
                  cursor="pointer"
                  color="white"
                  boxShadow="md"
                  _hover={{
                    transform: 'scale(1.05)'
                  }}
                  transition="ease-in-out .2s"
                >
                  <Stack
                    isInline
                    justifyContent="space-around"
                    alignItems="center"
                    borderBottom="1px solid gray"
                    pb=".5rem"
                  >
                    <Heading as="h1" fontSize=".9rem">
                      {`${coin?.rank}. ${coin?.name}`}
                    </Heading>
                    <Avatar src={coin.iconUrl} size="sm" />
                  </Stack>

                  <Stack
                    pl={{ md: '2rem', sm: '.5rem' }}
                    pt="1rem"
                    fontSize={{ md: 'initial', sm: '.8rem' }}
                  >
                    <Text pr=".2rem">Price: {formatPrice(coin.price)}</Text>

                    <Text>Market Cap: {formatBigNumbers(coin.marketCap)}</Text>

                    <Text>Daily Change: {formatBigNumbers(coin.change)}%</Text>
                  </Stack>
                </Box>
              </NextLink>
            ))}
      </SimpleGrid>
    </Container>
  )
}

export default CryptocurrenciesTemplate
