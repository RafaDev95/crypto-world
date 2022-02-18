import {
  Container,
  Text,
  Heading,
  SimpleGrid,
  Box,
  Stack,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Link
} from '@chakra-ui/react'

import CryptocurrenciesTemplate from 'templates/CryptocurrenciesTemplate'
import News from 'templates/News'

import NextLink from 'next/link'

import millify from 'millify'

const Index = ({
  totalCryptocurrencies,
  totalMarkets,
  totalExchanges,
  totalMarketCap,
  total24hVolume,
  coins
}) => {
  const cryptoInfos = [
    {
      title: 'Total Cryptocurrencies',
      amount: totalCryptocurrencies
    },
    {
      title: 'Total Market Cap',
      amount: totalMarketCap
    },
    {
      title: 'Total Markets',
      amount: totalMarkets
    },
    {
      title: 'Total Exchanges',
      amount: totalExchanges
    },
    {
      title: 'Total 24h Volume',
      amount: total24hVolume
    }
  ]
  return (
    <Container variant="page-container" as="main" pt={0}>
      <Box bg={useColorModeValue('#394c64', '#082036')} rounded="md">
        <Box p="1rem">
          <Heading as="h1" variant="section-title" color="white">
            Global Crypto Stats
          </Heading>
        </Box>
        <SimpleGrid
          columns={2}
          mt="1rem"
          h="30vh"
          spacing="10px"
          p="1rem"
          rounded="lg"
          alignItems="center"
          justifyContent="center"
        >
          {cryptoInfos.map(info => (
            <Box display="flex" flexDir="column" key={info.title}>
              <Text color="#b3b1b1" as="em">
                {info.title}
              </Text>
              <Text as="samp" fontSize="1.5rem" color="white">
                {millify(info.amount)}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box
        as="article"
        mt="2rem"
        display="flex"
        flexDir="column"
        justifyContent="space-around"
        rounded="md"
        minH="450px"
      >
        <Flex
          alignItems="center"
          as="section"
          justifyContent="space-between"
          mb="2rem"
        >
          <Heading variant="section-title" as="h1" fontSize="1.4rem">
            Top 10 Cryptocurrencies in the world
          </Heading>
          <NextLink href="/cryptocurrencies" passHref>
            <Link fontSize="1.4rem" color="blueLink">
              Read more
            </Link>
          </NextLink>
        </Flex>
        <CryptocurrenciesTemplate coins={coins} home noSearch />

        <Flex
          alignItems="center"
          as="section"
          justifyContent="space-between"
          mt="4rem"
        >
          <Heading variant="section-title" as="h1" fontSize="1.4rem">
            Latest Crypto News
          </Heading>
          <NextLink href="/cryptocurrencies" passHref>
            <Link fontSize="1.4rem" color="blueLink">
              Read more
            </Link>
          </NextLink>
        </Flex>
        <News />
      </Box>
    </Container>
  )
}

export default Index

export async function getServerSideProps() {
  const response = await fetch(
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '22cc035b33mshdb6725419c68287p13a188jsnc3696352fb54'
      }
    }
  )
  const json = await response.json()
  const coinsData = json?.data.stats

  return {
    props: {
      json,
      data: json?.data,
      coins: json?.data.coins,
      totalCryptocurrencies: coinsData.totalCoins,
      totalMarkets: coinsData.totalMarkets,
      totalExchanges: coinsData.totalExchanges,
      totalMarketCap: coinsData.totalMarketCap,
      total24hVolume: coinsData.total24hVolume
    }
  }
}
