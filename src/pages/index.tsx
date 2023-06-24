
import Head from 'next/head';
import HeroSection from '@/components/LandingPageSections/HeroSection';
import OurServices from '@/components/LandingPageSections/OurServices';
import LandingVideo from '@/components/LandingPageSections/LandingVideo';
import CourseOverview from '@/components/LandingPageSections/CourseOverview';
import Podcast from '@/components/LandingPageSections/Podcast';
import Newsletter from '@/components/LandingPageSections/Newsletter';
import FAQ from '@/components/LandingPageSections/FAQ';
import AboutUs from '@/components/LandingPageSections/AboutUs';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='scroll-smooth relative' >
      <Head>
        <title>TeachMeDefi</title>
        <meta name="description" content="TeachMeDefi teach me defi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TDM_logo.png" />
      </Head>

      <HeroSection />
      <LandingVideo />
      <OurServices />
      <CourseOverview />
      <Podcast />
      <Newsletter />
      <AboutUs />
      <FAQ />


      {/* RESPONSIVE MACHEN  */}
      {/* LINKS (href) FEHLEN: FOOTER, NEWSLETTER, PODCAST, SUBSCRIBE ... */}



      {/* Bild für unsere Service Component  */}
      {/* Zeitaufwand zu den Quest titles */}
      {/* DOT Theory teil fehlt */}
      {/* DOT quests important links fehlen */}


      {/* icons in würfel ändern, nft mail and podcast und epaper box noch erstellen */}
      
      {/* target=_blank funkt net bei nav podcasts */}
      {/* Insta, Tiktok und Podcast icon zu hero text CTA */}
      {/* cookigs model zindex in dogt section */}
      {/* cookie mehr infomation automatisch schließen */}
      {/* mint nft popup styling  */}
      {/* nft claim spinner fix bug */}
      {/* cookies button weniger auffällig fabe wie podcast box */}
      {/* cookies tab/btn responsive, on mobile just a cookie? more to the left and smaller */}


     

    </div>
  )
}
