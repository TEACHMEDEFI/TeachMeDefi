
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
    <div className='scroll-smooth' >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="TeachMeDefi teach me defi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TDM_logo.png" />
      </Head>

      <HeroSection />
      {/* OurService erstmal ausgeblendet, weil doppelt gemoppelt */}
      {/* <OurServices /> */}
      <LandingVideo />
      <CourseOverview />
      {/* Course videos Bilder = thumbnails von rustam jan und sohel  */}
      <Podcast />
      <Newsletter />
      <AboutUs />
      <FAQ />
      {/* FAQ kommen +50 Fragen Faq, ausklappbar machen? */}
      {/* Unter jedem Section title für Theroy und Praktisch, ein kleiner info text zu wie viel Zeitaufwand die Quest/section beansprucht */}
      {/* Quest container bekommt background und unten den Videos dann der mint buttong */}
      {/* Popup from Videos also into Section overview to each quest */}
      {/* Eth brand assets auf die landing page so wie im Eth section, als hintergrund */}
      
      {/* 
          - Our Services 1.TeachMe Section overview scroll to the sections futher down 2. Podcast with CTA 3. Newsletters with CTA
          - Landingpage Video
          - TeachMe Section => BTC Section ETH Section DOT Section
          - Podcast 
          - Newsletter
          - Our Team
          - FAQ
        */}
    </div>
  )
}
