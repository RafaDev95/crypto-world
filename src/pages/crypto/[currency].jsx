import CryptoDetailsTemplate from 'templates/CryptoDetailsTemplate'
import { fetchCoins, fetchCoinById } from 'utils/fetchs'
import { useRouter } from 'next/router'

const CryptoDetails = ({ token }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <CryptoDetailsTemplate token={token} />
}

export default CryptoDetails

export async function getStaticPaths() {
  const coinsResponse = await fetchCoins(100)
  const json = await coinsResponse?.json()
  const coins = json?.data?.coins

  const paths = coins?.map(coin => {
    const currency = coin?.uuid

    return { params: { currency } }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const uuid = params?.currency
  const response = await fetch(
    `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '22cc035b33mshdb6725419c68287p13a188jsnc3696352fb54'
      }
    }
  )
  const coinJson = JSON.stringify(await response?.json())

  return {
    props: {
      token: coinJson
    }
  }
}

// const coinResponse = await fetchCoinById(params.currency)
// const coinJson = await coinResponse?.json()
// const coin = coinJson?.data.coin

// const teste = JSON.stringify(coinJson?.data)
