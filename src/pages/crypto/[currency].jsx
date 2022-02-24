import CryptoDetailsTemplate from 'templates/CryptoDetailsTemplate'
import { fetchCoins, fetchCoinById } from 'utils/fetchs'
import { useRouter } from 'next/router'

const CryptoDetails = ({ coin }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <CryptoDetailsTemplate coin={coin} />
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
  const coinResponse = await fetchCoinById(params.currency)
  const coinJson = await coinResponse?.json()
  const coin = coinJson?.data.coin

  return {
    props: {
      coin: coin && coin
    }
  }
}
