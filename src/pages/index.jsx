import {
  Container,
  Text,
  Heading,
  SimpleGrid,
  Box,
  Stack,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue
} from '@chakra-ui/react'

const Index = () => {
  return (
    <Container m={0} maxW="container.lg" h="100%" pt="1.5rem">
      <Box mt=".5rem">
        <Heading
          as="h1"
          textDecoration="underline"
          letterSpacing="2px"
          fontSize="1.2rem"
        >
          Global Crypto Stats
        </Heading>
      </Box>

      <Stack
        mt="3rem"
        h="75vh"
        spacing="5rem"
        p=".5rem"
        rounded="lg"
        bg={useColorModeValue('#e7e7e753', '#030c1aa4')}
        border={`5px solid ${useColorModeValue('#394c64', '#145088')}`}
        // border="5px solid #394c64"
      >
        <Flex maxW="50%" justifyContent="space-around">
          <Box display="flex" flexDir="column">
            <Text as="em">Total Cryptocurrencies</Text>
            <Text as="samp" fontSize="1.5rem">
              5
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}

{
  /* <Table variant="simple">
<Thead>
  <Tr>
    <Th>Total Cryptocurrencies</Th>
    <Th>Total Market Cap</Th>
    <Th>Total Markets</Th>
    <Th>Total Exchanges</Th>
    <Th>Total 24h Volume</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr>
    <Td>5</Td>
    <Td>5</Td>
    <Td>5</Td>
    <Td>5</Td>
    <Td>5</Td>
  </Tr>
</Tbody>
</Table> */
}
export default Index
