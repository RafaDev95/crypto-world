import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '22cc035b33mshdb6725419c68287p13a188jsnc3696352fb54'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = url => ({ url, headers: apiHeaders })

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
})

export const { useGetCryptosQuery } = api
