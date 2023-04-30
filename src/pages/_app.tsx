import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ThemeProvider } from '@/context/ThemeContext';
// Component imports
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'



// Font inports
import { Poppins, Roboto } from 'next/font/google'

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
      <main className={`${poppins.className} dark:bg-bgDarkBlue dark:text-white `} >
        <Navbar />
        <div className='pt-24 px-5' >
          <Component {...pageProps} />
        </div>

        <Footer />
      </main>
      </ThemeProvider>
    </Web3ReactProvider>
  )
}
