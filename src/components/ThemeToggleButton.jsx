import { AnimatePresence, motion } from 'framer-motion'
import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const { colorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          onClick={toggleColorMode}
          aria-label="Toggle Theme"
          size="sm"
          fontSize="1.2rem"
          bg={useColorModeValue('#7792b3', '#042747')}
          variant="none"
        >
          {colorMode === 'dark' ? '🌜' : '🌞'}
        </Button>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
