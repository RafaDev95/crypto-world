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

import { fetchNews, fetchTenCoins } from 'utils/fetchs'

import HomepageTemplate from 'templates/HomepageTemplate'

const Index = ({
  totalCryptocurrencies,
  totalMarkets,
  totalExchanges,
  totalMarketCap,
  total24hVolume,
  coins,
  newsJson
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
        newsJson={newsJson}
      />
    </>
  )
}

export default Index

export async function getStaticProps() {
  const coinsResponse = await fetchTenCoins(10)
  const coinsJson = await coinsResponse?.json()
  const coinsData = coinsJson?.data.stats

  const newsResponse = await fetchNews
  const newsJson = await newsResponse?.json()
  // const newsData = await newsJson?.data

  return {
    revalidate: 60 * 60 * 5,
    props: {
      newsJson,
      coins: coinsJson?.data.coins,
      totalCryptocurrencies: coinsData.totalCoins,
      totalMarkets: coinsData.totalMarkets,
      totalExchanges: coinsData.totalExchanges,
      totalMarketCap: coinsData.totalMarketCap,
      total24hVolume: coinsData.total24hVolume
    }
  }
}

// export async function getServerSideProps() {
//   const coinsResponse = await fetchCoins
//   const json = await coinsResponse.json()
//   const coinsData = json?.data.stats

//   return {
//     props: {
//       coins: json?.data.coins,
//       totalCryptocurrencies: coinsData.totalCoins,
//       totalMarkets: coinsData.totalMarkets,
//       totalExchanges: coinsData.totalExchanges,
//       totalMarketCap: coinsData.totalMarketCap,
//       total24hVolume: coinsData.total24hVolume
//     }
//   }
// }
