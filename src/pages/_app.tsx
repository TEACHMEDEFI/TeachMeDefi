import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
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
