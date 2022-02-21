import {
  Container,
  Text,
  Heading,
  SimpleGrid,
  Box,
  Flex,
  useColorModeValue,
  Link
} from '@chakra-ui/react'

import CryptocurrenciesTemplate from 'templates/CryptocurrenciesTemplate'
import NewsTemplate from 'templates/NewsTemplate'

import NextLink from 'next/link'

import millify from 'millify'

const HomepageTemplate = ({
  totalCryptocurrencies,
  totalMarkets,
  totalExchanges,
  totalMarketCap,
  total24hVolume,
  coins,
  newsInfos
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
      <Box bg={useColorModeValue('boxLM', '#082036')} rounded="md">
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
              <Text
                as="samp"
                fontSize="1.5rem"
                color="white"
                w="fit-content"
                _after={{
                  content: '""',
                  display: 'block',
                  width: '150px',
                  height: '2px',
                  background: 'white'
                }}
              >
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
        <CryptocurrenciesTemplate homeCoins={coins} home />

        <Flex
          alignItems="center"
          as="section"
          justifyContent="space-between"
          mt="4rem"
        >
          <Heading variant="section-title" as="h1" fontSize="1.4rem">
            Latest Crypto News
          </Heading>
          <NextLink href="/news" passHref>
            <Link fontSize="1.4rem" color="blueLink">
              Read more
            </Link>
          </NextLink>
        </Flex>
        <NewsTemplate newsInfos={newsInfos} home />
      </Box>
    </Container>
  )
}

export default HomepageTemplate
