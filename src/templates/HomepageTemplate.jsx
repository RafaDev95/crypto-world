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

import { formatBigNumbers } from 'utils/format-price'

import CryptocurrenciesTemplate from 'templates/CryptocurrenciesTemplate'
import NewsTemplate from 'templates/NewsTemplate'

import NextLink from 'next/link'

const HomepageTemplate = ({ coins, newsInfos, coinsData }) => {
  const cryptoInfos = [
    {
      title: 'Total Cryptocurrencies',
      amount: coinsData?.totalCoins
    },
    {
      title: 'Total Market Cap',
      amount: coinsData?.totalMarketCap
    },
    {
      title: 'Total Markets',
      amount: coinsData?.totalMarkets
    },
    {
      title: 'Total Exchanges',
      amount: coinsData?.totalExchanges
    },
    {
      title: 'Total 24h Volume',
      amount: coinsData?.total24hVolume
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
              <Text
                color="#b3b1b1"
                as="em"
                fontSize={{ md: 'initial', sm: '.9rem' }}
              >
                {info.title}
              </Text>
              <Text
                as="samp"
                fontSize={{ md: '1.5rem', sm: '1.2rem' }}
                color="white"
                w="fit-content"
                // borderBottom="1px white solid"
                // _after={{
                //   content: '""',
                //   display: 'block',
                //   width: '105%',
                //   height: '2px',
                //   background: 'white'
                // }}
              >
                {formatBigNumbers(info.amount)}
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
          <Heading
            variant="section-title"
            as="h1"
            fontSize={{ md: '1.4rem', sm: '1rem' }}
          >
            Top 10 Cryptocurrencies in the world
          </Heading>
          <NextLink href="/cryptocurrencies" passHref>
            <Link fontSize={{ md: '1.4rem', sm: '1rem' }} color="blueLink">
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
          <Heading
            variant="section-title"
            as="h1"
            fontSize={{ md: '1.4rem', sm: '1rem' }}
          >
            Latest Crypto News
          </Heading>
          <NextLink href="/news" passHref>
            <Link fontSize={{ md: '1.4rem', sm: '1rem' }} color="blueLink">
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
