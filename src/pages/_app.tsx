import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from "next/script";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ThemeProvider } from '@/context/ThemeContext';
// Component imports
import Navbar from '@/components/Navbar/Navbar'
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
  const handleCookieBannerInteraction = () => {
    return true;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider>
      <TagManagerScript />
      <main className={`${poppins.className} dark:bg-bgDarkBlue dark:text-white flex flex-col items-center `} >
        <TagManagerNoScript />
        <Navbar />
        <div className='pt-24 px-5 w-full max-w-[2000px]' >
          <Component {...pageProps} />
        </div>
        
        <CookieBanner linksActive={false} handleCookieBannerInteraction={handleCookieBannerInteraction} />
        <CookiePolicyModal />
        <Footer />
      </main>
      </ThemeProvider>
    </Web3ReactProvider>
  )
}
