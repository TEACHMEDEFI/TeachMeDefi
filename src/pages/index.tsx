
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
      {/* <FAQ /> */}
      <div className='py-24'></div> {/* solange FAQ auscommentiert, drinlassen */}


      {/* cookigs model zindex in dot section */}


{/* e-paper link  */}
{/* faq data fehlt */}

{/* 
     Styling allgemeint
     claim nft modal schöner mit Jan
     QuestClaimModalEth mit Jan
     QuestClaimModalDot mit Jan
     Time for Quest
     Toastmesages 

     quest Questsection rainbow font und section weg und Quests
     quest titelt so wie oben theroie
      Zeiten in italic
      denzentralisierung die vorteile falshc typo
      Du hast noch fragen groß? groß schreiben und dann in klein was da jetzt steht coachin

      in VideoWithTranscript com on video finsih set Show nextButton to true
      */}

    </div>
  )
}
