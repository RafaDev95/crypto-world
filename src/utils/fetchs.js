export const fetchNews = (category, count) =>
  fetch(
    `https://bing-news-search1.p.rapidapi.com/news/search?q=${category}+cryptocurrency&sortBy=date&count=${count}&setLang=eng&freshness=Day&textFormat=Raw&safeSearch=Off`,
    {
      method: 'GET',
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '22cc035b33mshdb6725419c68287p13a188jsnc3696352fb54'
      }
    }
  )

export const fetchCoins = limit =>
  fetch(
    `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=${limit}&offset=0`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '22cc035b33mshdb6725419c68287p13a188jsnc3696352fb54'
      }
    }
  )

export const fetchCoinById = uuid =>
  fetch(
    `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '22cc035b33mshdb6725419c68287p13a188jsnc3696352fb54'
      }
    }
  )

export const fetchCoinHistory = (uuid, timePeriod) =>
  fetch(
    `https://coinranking1.p.rapidapi.com/coin/${uuid}/history?timePeriod=${timePeriod}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '22cc035b33mshdb6725419c68287p13a188jsnc3696352fb54'
      }
    }
  )
