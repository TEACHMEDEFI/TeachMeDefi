
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
      <OurServices />
      <LandingVideo />
      <CourseOverview />
      <Podcast />
      <Newsletter />
      <AboutUs />
      <FAQ />
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
