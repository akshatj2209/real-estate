import {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components'
import '../styles/globals.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #191919;
    font-family: DM Sans;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    black: '#191919',
    white: '#ffffff',
    grey2: '#a1a1a1',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
