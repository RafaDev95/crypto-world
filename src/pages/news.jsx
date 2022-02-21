import { fetchNews, fetchCoins } from 'utils/fetchs'
import NewsTemplate from 'templates/NewsTemplate'

const News = ({ newsInfos, coins }) => {
  return <NewsTemplate newsInfos={newsInfos} coins={coins} />
}

export default News

export async function getServerSideProps() {
  // const newsResponse = await fetchNews()
  // const newsInfos = await newsResponse?.json()

  const coinsResponse = await fetchCoins(100)
  const coinsJson = await coinsResponse?.json()

  return {
    props: {
      coins: coinsJson?.data.coins
      // newsInfos
    }
  }
}
