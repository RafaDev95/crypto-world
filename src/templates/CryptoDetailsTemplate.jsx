import HTMLReactParser from 'html-react-parser'
import NextLink from 'next/link'
import millify from 'millify'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  Text,
  Heading,
  Flex,
  Container,
  Box,
  Select,
  Stack,
  Avatar,
  Spinner,
  Link,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'

import formatPrice from '../utils/format-price'

import { fetchCoinHistory } from 'utils/fetchs'

import {
  HiUserGroup,
  HiOutlineCode,
  HiExternalLink,
  HiChevronUp,
  HiChevronDown,
  HiOutlineCurrencyDollar
} from 'react-icons/hi'
import {
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineFundProjectionScreen,
  AiOutlineMoneyCollect,
  AiOutlineCheck,
  AiOutlineStop,
  AiOutlineExclamationCircle
} from 'react-icons/ai'
import DropdownMenu from 'components/DropdownMenu'
import LineChart from 'components/LineChart'

const CryptoDetailsTemplate = ({ token }) => {
  const router = useRouter()
  const toggleTextColor = useColorModeValue('black', 'textSecondary')
  const toggleBgColor = useColorModeValue('boxLM', '#02021f')
  const toggleBorder = useColorModeValue('black', 'boxDM')

  const timeStamps = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

  const [timePeriod, setTimePeriod] = useState('30d')
  const [coinId, setCoinId] = useState(router.query.currency)
  const [coinHistory, setCoinHistory] = useState()

  useEffect(() => {
    fetchCoinHistory(coinId, timePeriod)
      .then(response => response.json())
      .then(response => setCoinHistory(response))
  }, [timePeriod])

  if (!token) {
    return (
      <Flex h="100%" justifyContent="center" alignItems="center">
        <Spinner color="boxDM" size="xl" thickness="4px" emptyColor="white" />
      </Flex>
    )
  }

  const parseToken = JSON.parse(token)

  const coin = parseToken?.data?.coin

  const volume = coin?.['24hVolume']

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${
        parseToken?.data?.coin?.price &&
        formatPrice(parseToken?.data?.coin?.price)
      }`,
      icon: <HiOutlineCurrencyDollar />
    },
    {
      title: 'Rank',
      value: parseToken?.data?.coin?.rank,
      icon: <AiOutlineNumber />
    },
    {
      title: '24h Volume',
      value: `$ ${volume && formatPrice(volume)}`,
      icon: <AiOutlineThunderbolt />
    },
    {
      title: 'Market Cap',
      value: `$ ${
        parseToken?.data?.coin?.marketCap &&
        formatPrice(parseToken?.data?.coin?.marketCap)
      }`,
      icon: <HiOutlineCurrencyDollar />
    },
    {
      title: 'All-time-high',
      value: `$ ${formatPrice(parseToken?.data?.coin?.allTimeHigh.price)}`,
      icon: <AiOutlineTrophy />
    },
    {
      title: 'Number Of Markets',
      value: parseToken?.data?.coin?.numberOfMarkets,
      icon: <AiOutlineFundProjectionScreen />
    },
    {
      title: 'Number Of Exchanges',
      value: parseToken?.data?.coin?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />
    },
    {
      title: 'Aprroved Supply',
      value: parseToken?.data?.coin?.supply?.confirmed ? (
        <AiOutlineCheck />
      ) : (
        <AiOutlineStop />
      ),
      icon: <AiOutlineExclamationCircle />
    },
    {
      title: 'Total Supply',
      value: 5,
      // parseToken?.data?.coin?.supply?.total === null
      //   ? 'Not avaliable'
      //   : `$ ${formatPrice(parseToken?.data?.coin?.supply?.total)}`,
      icon: <AiOutlineExclamationCircle />
    },
    {
      title: 'Circulating Supply',
      value: `$ ${
        parseToken?.data?.coin?.supply?.circulating &&
        formatPrice(parseToken?.data?.coin?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamationCircle />
    }
  ]

  const sourceCodeUrl = coin?.links?.filter(link => link.type === 'github')

  return (
    <Container variant="page-container">
      <SimpleGrid columns={2}>
        <Stack spacing={4} maxW="400px" minH="300px" mb="2rem">
          <Flex alignItems="center">
            <Avatar src={coin?.iconUrl} size="sm" mr=".7rem" />
            <Heading as="h1" display="flex" alignItems="center">
              {coin?.name}
              <Text
                bg="boxDM"
                ml="1rem"
                rounded="md"
                p=".2rem"
                fontSize="1.3rem"
                color="white"
              >
                {coin?.symbol}
              </Text>
            </Heading>
          </Flex>
          <Text>
            {coin?.name} live price in US Dollar (USD). View value statics,
            market cap and supply
          </Text>
          <Text color="white" w="fit-content" bg="boxDM" rounded="md" p=".2rem">
            Rank #{coin?.rank}
          </Text>

          <Flex w="370px" justifyContent="space-between">
            <DropdownMenu menuIcon={<HiUserGroup />} coin={coin} />

            <NextLink passHref href={coin?.websiteUrl}>
              <Link
                target="_blank"
                py=".3rem"
                px=".5rem"
                display="flex"
                alignItems="center"
                fontSize=".9rem"
                bg="boxDM"
                color="white"
                _hover={{ bg: '#044785' }}
                rounded="md"
              >
                Website {<HiExternalLink style={{ marginLeft: '.6rem' }} />}
              </Link>
            </NextLink>
            <NextLink
              passHref
              href={`${sourceCodeUrl[0] ? sourceCodeUrl[0].url : '/'}`}
            >
              <Link
                target="_blank"
                py=".3rem"
                px=".5rem"
                display="flex"
                alignItems="center"
                fontSize=".9rem"
                bg="boxDM"
                color="white"
                _hover={{ bg: '#044785' }}
                rounded="md"
              >
                Source Code {<HiOutlineCode style={{ marginLeft: '.6rem' }} />}
              </Link>
            </NextLink>
          </Flex>
        </Stack>

        <Stack>
          <Flex flexDir="column" w="100%" alignItems="end" pr="1rem">
            <Text fontSize=".9rem">
              {coin?.name} Price ({coin?.symbol})
            </Text>
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="end"
            >
              <Text mr="1rem" fontSize="1.8rem">
                {formatPrice(coin?.price)}{' '}
              </Text>
              <Text
                as="span"
                bg={coin?.change >= 0 ? '#16C784' : 'red'}
                py=".2rem"
                rounded="md"
                display="flex"
                alignItems="center"
                w="80px"
                justifyContent="space-evenly"
              >
                {coin?.change >= 0 ? <HiChevronUp /> : <HiChevronDown />}
                {Number(coin?.change).toFixed(2)}%{' '}
              </Text>
            </Box>
            <Text color={toggleTextColor}>
              {Number(coin?.btcPrice).toFixed(2)} BTC
            </Text>
          </Flex>
        </Stack>
      </SimpleGrid>

      <SimpleGrid
        columns={{ xl: 4, lg: 3, md: 2 }}
        spacing="2rem"
        rounded="lg"
        bg={toggleBgColor}
        color="white"
        pl="4.6rem"
        py="2rem"
      >
        {stats.map(({ icon, title, value }) => (
          <Flex
            key={title}
            alignItems="center"
            flexDir="column"
            justifyContent="center"
            minW="190px"
            maxW="250px"
            pb=".2rem"
            borderBottom="1px solid white"
          >
            <Flex alignItems="center">
              <Text mr=".2rem">{icon}</Text>
              <Text>{title}</Text>
            </Flex>
            <Text>{value}</Text>
          </Flex>
        ))}
      </SimpleGrid>
      <Select
        mb="1rem"
        mt="2rem"
        w="200px"
        borderColor={toggleBorder}
        focusBorderColor={toggleBorder}
        _hover={{ borderColor: 'none' }}
        onChange={e => setTimePeriod(e.target.value)}
      >
        {timeStamps.map((time, i) => (
          <option value={time} key={i}>
            {time}
          </option>
        ))}
      </Select>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(coin?.price)}
        coinName={coin?.name}
      />
      <Box textAlign="center">
        <Heading color="blue1" py="1rem">
          What is {coin?.name}
        </Heading>
        {HTMLReactParser(coin?.description)}
      </Box>
    </Container>
  )
}

export default CryptoDetailsTemplate
