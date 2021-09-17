import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Container } from '../components/Layout/Container'
import { Header } from '../components/Layout/Header'
import { Main } from '../components/Layout/Main'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo app | Frontend Mentor</title>
        <link rel="shortcut icon" type="image/png" href="favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <meta property="og:type" content="website"/>
          <meta property="og:site_name" content={SITE_NAME}/>
          <meta property="og:title" content={SITE_TITLE}/>
          <meta property="og:description" content={SITE_DESCRIPTION}/>
          <meta property="og:image" content={SITE_IMAGE}/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content={SITE_NAME}/>
          <meta name="twitter:title" content={SITE_TITLE}/>
          <meta name="twitter:description" content={SITE_DESCRIPTION}/>
          <meta property="twitter:image" content={SITE_IMAGE}/> */}
      </Head>

      <Container>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </Container>
    </>
  )
}

export default MyApp
