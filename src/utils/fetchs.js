export const fetchNews = fetch(
  'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw',
  {
    method: 'GET',
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_RAPID_API_NEWS_KEY
    }
  }
)

export const fetchCoins = fetch(
  `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`,
  {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_RAPID_API_COIN_KEY
    }
  }
)

export const fetchTenCoins = limit =>
  fetch(
    `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=${limit}&offset=0`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_RAPID_API_COIN_KEY
      }
    }
  )
