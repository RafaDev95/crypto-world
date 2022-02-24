import { extendTheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('bgLight', 'bgDark')(props),
      color: mode('black', 'white')(props)
    },
    h3: {
      color: '#1280e7',
      fontSize: '1.8rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      fontWeight: 'bold'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        letterSpacing: '2px',
        fontSize: '1.2rem'
      }
    }
  },
  Container: {
    variants: {
      'page-container': {
        margin: 0,
        maxWidth: '100%',
        height: '100%',
        paddingTop: '1.5rem'
      }
    }
  }
}

const fonts = {
  body: " 'Raleway', sans-serif ",
  heading: " 'Montserrat', sans-serif"
}

const colors = {
  textSecondary: '#d4d3d3',
  bgDark: '#030311',
  bgLight: '#e2e8f0',
  blue1: '#0071db',
  boxLM: '#394c64',
  boxDM: '#1280e7',
  blueScheme: {
    500: '#044785',
    400: '#1280e7'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const breakpoints = createBreakpoints({
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '1800px'
})

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
  breakpoints
})

export default theme
