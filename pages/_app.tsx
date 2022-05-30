import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/layout'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Miguel Correa's site" />
        <title>Miguel Correa</title>
      </Head>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
