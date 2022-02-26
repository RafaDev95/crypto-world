import { fetchNews, fetchCoins } from 'utils/fetchs'

import HomepageTemplate from 'templates/HomepageTemplate'

const Index = props => {
  return (
    <>
      <HomepageTemplate
        {...props}
        // coins={coins}
        // newsInfos={newsInfos}
        // coinsData={coinsData}
      />
    </>
  )
}

export default Index

export async function getStaticProps() {
  const coinsResponse = await fetchCoins(10)
  const coinsJson = await coinsResponse?.json()
  const coinsData = coinsJson?.data.stats

  const newsResponse = await fetchNews()
  const newsInfos = await newsResponse?.json()

  return {
    revalidate: 60 * 60 * 5,
    props: {
      newsInfos,
      coinsData,
      coins: coinsJson?.data.coins
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
