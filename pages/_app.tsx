import '../styles/main.css'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}


// const MyApp = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />
// }

// export default MyApp;
