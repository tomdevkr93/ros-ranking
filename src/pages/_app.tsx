import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from '../utils/GlobalStyles'
import Head from 'next/head'
import Layout from '../components/common/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rose Of Sharon Ranking</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,viewport-fit=cover,user-scalable=no"
        />
        <meta name="description" content="Rose Of Sharon Member Ranking" />
        <meta name="author" content="devho813 <devho813@gmail.com>" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* openGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rose Of Sharon Ranking" />
        <meta property="og:description" content="Rose Of Sharon Member Ranking" />
        <meta property="og:image" content="/favicon/favicon-180.png" />
        <meta property="og:url" content="https://ros-ranking.vercel.app" />

        {/* twitter */}
        <meta name="twitter:title" content="Rose Of Sharon Ranking" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Rose Of Sharon Member Ranking" />
        <meta name="twitter:domain" content="https://ros-ranking.vercel.app" />
        <meta name="twitter:image" content="/favicon/favicon-180.png" />

        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon-precomposed" href="/favicon/favicon-152.png" />
        <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/favicon/favicon-180.png" />
      </Head>
      {GlobalStyles}
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}

export default App
