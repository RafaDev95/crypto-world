import CryptocurrenciesTemplate from 'templates/CryptocurrenciesTemplate'
import { fetchCoins } from 'utils/fetchs'

const cryptocurrencies = ({ coins }) => {
  return <CryptocurrenciesTemplate coins={coins} />
}

export default cryptocurrencies

export async function getServerSideProps() {
  const coinsResponse = await fetchCoins
  const json = await coinsResponse.json()

  return {
    props: {
      coins: json?.data.coins
    }
  }
}
