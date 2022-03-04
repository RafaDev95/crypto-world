import { Container } from '@chakra-ui/react'

const Overlay = () => {
  return (
    <Container
      h="calc(100% - 120px)"
      zIndex={19}
      position="absolute"
      right="0"
      w="calc(100% - 350px)"
      bg="#3c3c5a6e"
    />
  )
}

export default Overlay
