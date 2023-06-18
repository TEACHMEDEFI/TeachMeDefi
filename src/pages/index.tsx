
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
      <LandingVideo />
      <OurServices />
      <CourseOverview />
      {/* Course videos Bilder = thumbnails von rustam jan und sohel  */}
      <Podcast />
      <Newsletter />
      <AboutUs />
      <FAQ />
      {/* video, more than just learning our services, improve yourself (section overview), our member experience (über uns) */}
      {/* FAQ kommen +50 Fragen Faq, ausklappbar machen? */}
      {/* Popup from Videos also into Section overview to each quest */}


      {/* RESPONSIVE MACHEN  */}
      {/* LINKS (href) FEHLEN: FOOTER, NEWSLETTER, PODCAST, SUBSCRIBE ... */}


      {/* Bild für SectionOverview */}
      {/* Bild für unsere Service Component  */}
      {/* Eth brand assets auf die landing page so wie im Eth section, als hintergrund */}
      {/* Zeitaufwand zu den Quest titles */}
      {/* DOT Theory teil fehlt */}
      {/* DOT quests important links fehlen */}
      {/* In LessonBurgerMenu: scrollable machen  */}



    </div>
  )
}
