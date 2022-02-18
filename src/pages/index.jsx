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

import { fetchCoins } from 'utils/fetchs'

import HomepageTemplate from 'templates/HomepageTemplate'

const Index = ({
  totalCryptocurrencies,
  totalMarkets,
  totalExchanges,
  totalMarketCap,
  total24hVolume,
  coins
}) => {
  return (
    <>
      <HomepageTemplate
        totalCryptocurrencies={totalCryptocurrencies}
        totalMarkets={totalMarkets}
        totalExchanges={totalExchanges}
        totalMarketCap={totalMarketCap}
        total24hVolume={total24hVolume}
        coins={coins}
      />
    </>
  )
}

export default Index

export async function getServerSideProps() {
  const coinsResponse = await fetchCoins
  const json = await coinsResponse.json()
  const coinsData = json?.data.stats

  return {
    props: {
      coins: json?.data.coins,
      totalCryptocurrencies: coinsData.totalCoins,
      totalMarkets: coinsData.totalMarkets,
      totalExchanges: coinsData.totalExchanges,
      totalMarketCap: coinsData.totalMarketCap,
      total24hVolume: coinsData.total24hVolume
    }
  }
}
