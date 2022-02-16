import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f9f9f9', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderLineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
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
  heading: " 'M PLUS ROUNDED 1c' "
}

const colors = {
  glassTeal: '#88ccca',
  textPrimary: '#000',
  bgPrimary: '#fff',
  bgSecondary: '#F9F9F9',
  blue2: '#0071db',
  lightBlue: '#e6f7ff',
  border: '#d9d9d9',
  darkModePanel: '#3e3e4140'
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
