import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from '../utils/GlobalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GlobalStyles}
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default App
