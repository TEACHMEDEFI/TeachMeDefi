import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className} `} >
      <Navbar />
      <div className='pt-32 px-5' >
        <Component {...pageProps} />
      </div>

      <Footer />
    </main>
  )
}
