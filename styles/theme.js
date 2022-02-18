import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#e2e8f0', '#030311')(props),
      color: mode('black', 'white')(props)
    }
  })
}

//'#161c25'
// '#202023'
//#145088

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

  // Link: {
  //   baseStyle: props => ({
  //     color: mode('#3d7aed', '#ff63c3')(props),
  //     textUnderLineOffset: 3
  //   })
  // }
}

const fonts = {
  body: " 'Raleway', sans-serif ",
  heading: " 'Montserrat', sans-serif"
}

const colors = {
  glassTeal: '#88ccca',
  textPrimary: '#000',
  bgDark: '#161c25',
  bgLight: '#f9f9f9',
  bgSecondary: '#F9F9F9',
  blue2: '#0071db',
  blueLink: '#1280e7',
  boxLM: '#394c64',
  boxDM: '#1280e7',
  lightBlue: '#e6f7ff',
  border: '#d9d9d9',
  darkModePanel: '#3e3e4140',
  a: '#040609',
  b: '#020306',
  c: '#3540b6',
  d: '#46495b',
  e: '#788794'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
