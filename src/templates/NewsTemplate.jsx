import { useState, useEffect } from 'react'

import {
  Select,
  Text,
  Heading,
  Avatar,
  SimpleGrid,
  Container,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Image,
  Link,
  Spinner
} from '@chakra-ui/react'
import NextLink from 'next/link'

import moment from 'moment'

const defaultImage = '/crypto-news.jpg'

import { fetchNews } from 'utils/fetchs'

const NewsTemplate = ({ home, coins }) => {
  const toggleBg = useColorModeValue('boxLM', '#001e3b')
  const toggleBorder = useColorModeValue('black', 'boxDM')
  const [category, setCategory] = useState('cryptocurrencies')
  const [data, setData] = useState()

  const count = home ? 4 : 25

  useEffect(() => {
    fetchNews(category, count)
      .then(response => response.json())
      .then(response => setData(response))
  }, [category])

  const newsInfos = data?.value

  if (!data) {
    return (
      <Flex h="100%" justifyContent="center" alignItems="center">
        <Spinner color="boxDM" size="xl" thickness="4px" emptyColor="white" />
      </Flex>
    )
  }

  return (
    <Container variant="page-container" as="main" position="relative">
      <Heading as="h1" variant="section-title" mb="3rem" pt="1.5rem">
        News
      </Heading>
      {!home && (
        <Select
          w="200px"
          borderColor={toggleBorder}
          focusBorderColor={toggleBorder}
          _hover={{ borderColor: 'none' }}
          position="absolute"
          right="20px"
          top="60px"
          placeholder="Select a Crypto"
          onChange={e => setCategory(e.target.value)}
        >
          <option value="cryptocurrencies">All currencies</option>
          {coins.map(coin => (
            <option value={coin.name} key={coin.uuid}>
              {coin.name}
            </option>
          ))}
        </Select>
      )}

      <SimpleGrid columns={{ xl: 3, lg: 2, md: 1 }} spacing="10px">
        {newsInfos?.map((news, i) => (
          <NextLink href={`${news.url}`} passHref key={i}>
            <Link
              target="_blank"
              _hover={{
                transform: 'scale(.94)'
              }}
              transition="ease-in-out .2s"
            >
              <Box
                bg={toggleBg}
                rounded="md"
                px="1rem"
                py=".5rem"
                cursor="pointer"
                color="white"
                h={{ xl: '370px', md: '300px' }}
                boxShadow="md"
                transition="ease-in-out .2s"
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  h={{ xl: '150px', md: '80px' }}
                >
                  <Heading
                    as="h1"
                    fontWeight="normal"
                    fontSize={{ xl: '1.2rem', lg: '1rem' }}
                    wordBreak="break-all"
                    lineHeight="1.4"
                    textDecor="underline"
                    w="70%"
                  >
                    {news.name}
                  </Heading>
                  <Image
                    maxW="150px"
                    maxH="150px"
                    pt="1.5rem"
                    pl=".8rem"
                    src={news.image?.thumbnail?.contentUrl || defaultImage}
                    alt="Article Image"
                    fit
                    loading="lazy"
                  />
                </Flex>
                <Flex
                  flexDir="column"
                  mt={{ xl: '1.5rem', md: '2.3rem' }}
                  justifyContent="space-between"
                >
                  <Text
                    mb=".8rem"
                    fontSize=".9rem"
                    color="textSecondary"
                    h="90px"
                  >
                    {news.description.length >= 150
                      ? `${news.description.substring(0, 150)} ...`
                      : news.description}
                  </Text>
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  mt="1.2rem"
                >
                  <Stack isInline alignItems="center" spacing={2}>
                    <Avatar
                      size="sm"
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        defaultImage
                      }
                      alt="News provider image"
                    />
                    <Text fontSize=".8rem">
                      {news.provider[0]?.name.length >= 15
                        ? `${news.provider[0]?.name.substring(0, 15)}...`
                        : news.provider[0]?.name}
                    </Text>
                  </Stack>
                  <Text as="small" w="130px">
                    {moment(news.datePublished).startOf('ss').fromNow()}
                  </Text>
                </Flex>
              </Box>
            </Link>
          </NextLink>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default NewsTemplate
