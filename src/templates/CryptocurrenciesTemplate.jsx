import millify from 'millify'
import NextLink from 'next/link'

import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Avatar,
  Container,
  Box,
  useColorModeValue,
  Input
} from '@chakra-ui/react'

import { useState, useEffect } from 'react'

const CryptocurrenciesTemplate = ({ coins, home, noSearch }) => {
  const toggleBg = useColorModeValue('boxLM', '#073968')
  const toggleBorder = useColorModeValue('black', '#1280e7')
  const togglePlaceholderText = useColorModeValue('black', 'white')

  const [searchCoin, setSearchCoin] = useState()
  const [cryptos, setCryptos] = useState(coins)

  const coinsForMapping = cryptos.length === 0 ? coins : cryptos

  const topTenCoins = coins.slice(0, 10)

  console.log(topTenCoins)

  useEffect(() => {
    const filteredCoin = coins?.filter(coin =>
      coin.name.toLowerCase().includes(searchCoin?.toLowerCase())
    )
    setCryptos(filteredCoin)
  }, [coins, searchCoin])

  return (
    <Container variant="page-container" as="main" position="relative">
      {home ? null : (
        <>
          <Input
            placeholder="Search coin..."
            _placeholder={{ color: `${togglePlaceholderText}` }}
            type="search"
            w="400px"
            borderColor={toggleBorder}
            focusBorderColor={toggleBorder}
            _hover={{ borderColor: 'none' }}
            position="absolute"
            right="20px"
            top="60px"
            onChange={e => setSearchCoin(e.target.value)}
          />
          <Heading as="h1" variant="section-title" mb="3rem" pt="1.5rem">
            Crypto Currencies
          </Heading>
        </>
      )}

      <SimpleGrid columns={4} spacing="10px">
        {home
          ? topTenCoins?.map(coin => (
              <NextLink key={coin.uid} href={`/crypto/${coin?.uid}`} passHref>
                <Box
                  bg={toggleBg}
                  rounded="md"
                  py="1rem"
                  cursor="pointer"
                  color="white"
                  border={`1px solid ${toggleBorder}`}
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

                  <Stack pl="2rem" pt="1rem">
                    <Text display="flex">
                      Price: <Text ml=".5rem"> {millify(coin.price)}</Text>
                    </Text>
                    <Text display="flex">
                      Market Cap:{' '}
                      <Text ml=".5rem"> {millify(coin.marketCap)}</Text>
                    </Text>
                    <Text display="flex">
                      Daily Change:{' '}
                      <Text ml=".5rem"> {millify(coin.change)}</Text>%
                    </Text>
                  </Stack>
                </Box>
              </NextLink>
            ))
          : coinsForMapping?.map(coin => (
              <NextLink key={coin.uid} href={`/crypto/${coin?.uid}`} passHref>
                <Box
                  bg={toggleBg}
                  rounded="md"
                  py="1rem"
                  cursor="pointer"
                  color="white"
                  border={`1px solid ${toggleBorder}`}
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

                  <Stack pl="2rem" pt="1rem">
                    <Text display="flex">
                      Price: <Text ml=".5rem"> {millify(coin.price)}</Text>
                    </Text>
                    <Text display="flex">
                      Market Cap:{' '}
                      <Text ml=".5rem"> {millify(coin.marketCap)}</Text>
                    </Text>
                    <Text display="flex">
                      Daily Change:{' '}
                      <Text ml=".5rem"> {millify(coin.change)}</Text>%
                    </Text>
                  </Stack>
                </Box>
              </NextLink>
            ))}
      </SimpleGrid>
    </Container>
  )
}

export default CryptocurrenciesTemplate
