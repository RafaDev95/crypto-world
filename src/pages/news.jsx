import { fetchCoins } from 'utils/fetchs'
import NewsTemplate from 'templates/NewsTemplate'

const News = ({ coins }) => {
  return <NewsTemplate coins={coins} />
}

export default News

export async function getServerSideProps() {
  const coinsResponse = await fetchCoins(100)
  const coinsJson = await coinsResponse?.json()

  return {
    props: {
      coins: coinsJson?.data.coins
    }
  }
}
