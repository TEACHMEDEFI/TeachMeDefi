
import Head from 'next/head';
import HeroSection from '@/components/LandingPageSections/HeroSection';
import OurServices from '@/components/LandingPageSections/OurServices';
import LandingVideo from '@/components/LandingPageSections/LandingVideo';
import CourseOverview from '@/components/LandingPageSections/CourseOverview';
import Podcast from '@/components/LandingPageSections/Podcast';
import Newsletter from '@/components/LandingPageSections/Newsletter';
import FAQ from '@/components/LandingPageSections/FAQ';
import AboutUs from '@/components/LandingPageSections/AboutUs';

export default function Home() {
  return (
    <div className='scroll-smooth relative' >
      <Head>
        <title>TeachMeDefi</title>
        <meta name="description" content="TeachMeDefi teach me defi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TDM_logo.png" />

        

        <meta property="og:title" content="TEACHMEDEFI" />
        <meta property="og:description" content="Krypto leicht gemacht" />
        {/* <meta property="og:image" content=" HIER KOMMT URL VOM BILD " /> */}
        <meta property="og:url" content="https://teachmedefi.de" />
        <meta property="og:type" content="website" />


      </Head>

      <HeroSection />
      <LandingVideo />
      <OurServices />
      <CourseOverview />
      <Podcast />
      <Newsletter />
      <AboutUs />
      {/* <FAQ /> */}
      <div className='py-24'></div> {/* solange FAQ auscommentiert, drinlassen */}

{/* faq data fehlt */}

    </div>
  )
}
