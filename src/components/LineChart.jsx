import { Text, Heading, Flex, Stack, Spinner } from '@chakra-ui/react'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

import { HiChevronUp, HiChevronDown } from 'react-icons/hi'

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = []
  const coinTimestamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price)
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    )
  }

  if (!coinHistory) {
    return (
      <Flex
        h="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Text mb="1rem">Loading Chart...</Text>
        <Spinner color="boxDM" size="xl" thickness="4px" emptyColor="white" />
      </Flex>
    )
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize="1.3rem">{coinName} Price Chart</Heading>
        <Stack isInline alignItems="center">
          <Heading fontSize="1rem">
            Current {coinName} Price: $ {currentPrice}
          </Heading>
          <Text
            as="span"
            bg={coinHistory?.data?.change >= 0 ? '#16C784' : 'red'}
            py=".2rem"
            rounded="md"
            display="flex"
            alignItems="center"
            w="80px"
            justifyContent="space-evenly"
          >
            {coinHistory?.data?.change >= 0 ? (
              <HiChevronUp />
            ) : (
              <HiChevronDown />
            )}
            {Number(coinHistory?.data?.change).toFixed(2)}%{' '}
          </Text>
        </Stack>
      </Flex>
      <Flex maxW={{ xl: '100%', lg: '960px' }}>
        <Line data={data} options={options} />
      </Flex>
    </>
  )
}

export default LineChart
