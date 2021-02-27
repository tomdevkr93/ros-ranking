import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from '../utils/GlobalStyles'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rose Of Sharon Ranking</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,viewport-fit=cover,user-scalable=no"
        />
        <meta name="description" content="Rose Of Sharon Ranking" />
        <meta name="author" content="devho813 <devho813@gmail.com>" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {GlobalStyles}
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default App
