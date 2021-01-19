import { AppProps } from 'next/app';

import Layout from '@components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // aditional props
  return (
    <Layout>
      <Component {...pageProps} title={'Next Card'} />
    </Layout>
  )
}

export default MyApp;