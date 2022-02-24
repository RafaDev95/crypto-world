import CryptocurrenciesTemplate from 'templates/CryptocurrenciesTemplate'
import { fetchCoins } from 'utils/fetchs'

const cryptocurrencies = ({ coins }) => {
  return <CryptocurrenciesTemplate coins={coins} />
}

export default cryptocurrencies

export async function getStaticProps() {
  const coinsResponse = await fetchCoins(100)
  const json = await coinsResponse?.json()

  return {
    revalidate: 60 * 60 * 5,
    props: {
      coins: json?.data.coins
    }
  }
}

// export async function getServerSideProps() {
//   const coinsResponse = await fetchCoins(100)
// const json = await coinsResponse?.json()

//   return {
//     props: {
//       coins: json?.data.coins
//     }
//   }
// }
