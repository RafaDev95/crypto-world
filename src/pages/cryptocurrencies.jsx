import CryptocurrenciesTemplate from 'templates/CryptocurrenciesTemplate'

const cryptocurrencies = ({ coins }) => {
  return <CryptocurrenciesTemplate coins={coins} />
}

export default cryptocurrencies

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
