import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from "next/script";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ThemeProvider } from '@/context/ThemeContext';
// Component imports
import Navbar from '@/components/Navbar/Navbar'
import { SupportButton } from '@/components/Buttons/SupportButton';
import Footer from '@/components/Footer/Footer'
import { TagManagerScript, TagManagerNoScript } from '@/components/TagManager/TagManager'

import CookieBanner from '@/components/Modals/CookieBanner';
import CookiePolicyModal from '@/components/Modals/CookiePolicy';


// Font inports
import { Poppins, Roboto } from 'next/font/google'
// import {wat} from "next/font/local"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
  variable: "--font-poppins"
})

const roboto = Roboto({
  weight: ["300", "500", "700"],
  subsets: ['latin'],
  variable: "--font-roboto"
})

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  return library
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>

      <Head>
        <title>Dein Einstieg in Kryptowährungen | TEACHMEDEFI</title>
        <meta name="description" content="TEACHMEDEFI teach me defi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tmd-head-rainbow.svg" />



        <meta property="og:title" content="Dein Einstieg in Kryptowährungen | TEACHMEDEFI" />
        <meta property="og:description" content="Krypto leicht gemacht" />
        {/* <meta property="og:image" content=" HIER KOMMT URL VOM BILD " /> */}
        <meta property="og:url" content="https://teachmedefi.de" />
        <meta property="og:type" content="website" />


      </Head>

      <ThemeProvider>
        <div className='dark:bg-bgDarkBlue dark:text-white'>

          <TagManagerScript />
          <main className={`${poppins.className} dark:bg-bgDarkBlue dark:text-white flex flex-col items-center relative`} >
            <TagManagerNoScript />
            <Navbar />
            <div className='pt-24 px-5 w-full max-w-[1600px]' >
              <Component {...pageProps} />
            </div>

            <CookieBanner fromCookiePolicyNoobsie={false} />
            <CookiePolicyModal />
            <SupportButton />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Web3ReactProvider>
  )
}
