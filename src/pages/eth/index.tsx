
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ethQuests } from '@/data/eth';
import { ethTheory } from '@/data/eth/ethTheory';
import { generalLessons } from '@/data/generalLessons';
import LessonsList from '@/components/LessonsList/LessonsList';
import LessonsListNew from '@/components/LessonsList/LessonsListNew';
import { switchNetworkIfNeeded } from '../api/ethereum-api'
import ReactPlayer from "react-player"
import { PrimaryButton } from "@/components/Buttons/Buttons";
import StickyHelpButton from '@/components/Buttons/StickyHelpButton'


export default function Index() {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  useEffect(() => {
    switchNetworkIfNeeded()
    setShowPlayer(true)
  }, [])



  return (
    <div className='flex flex-col  w-full justify-center items-center relative mb-32 max-sm:px-5'>
      <section className='h-[90vh] w-full flex flex-col lg:flex-row justify-center items-center max-w-7xl max-lg:mb-24' >
        <div className=' my-14 md:my-32 lg:my-0 lg:w-2/4 space-y-5' >
          <h1 className='xl:text-5xl text-4xl font-bold' >
            Willkommen bei <span
              className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'
            >
              Ethereum!
            </span>
          </h1>
          {/* <h2 className='text-xl font-bold' >Hier erfährst du alles über die zweitgrößte <br /> Kryptowährung der Welt.</h2> */}
          <h2 className='xl:text-lg text-sm pb-1 lg:pb-10 backdrop-blur-lg rounded-3xl sm:pr-10 ' >
            Du möchtest mehr über Ethereum erfahren, weißt aber nicht, wo du anfangen sollst? Kein Problem, wir führen dich Schritt für
            Schritt durch diese revolutionäre Blockchain-Technologie. Unser Ziel ist es, dich zu befähigen, mit Sicherheit und Vertrauen
            in die Welt von Ethereum einzusteigen. Fange jetzt an, entdecke die Welt von Ethereum und verdiene NFTs während deiner Lernreise!
          </h2>

        </div>
        <div className='relative w-full lg:w-2/4 h-full grow'>
          <Image src={"/eth/eth_hero.png"} fill alt='Ethereum Hero' />
        </div>

      </section>

      <section className='mt-22 flex flex-col items-center relative sm:px-5 w-full mb-44' >
        {/* <h3 className="text-4xl font-bold text-center max-w-5xl mb-5" >Entdecke die faszinierende Welt der Kryptowährungen: Starte deine Reise zu finanziellem Erfolg mit unserem Einführungsvideo!</h3> */}
        {showPlayer &&
          <div className='bg-slate-100 dark:bg-bgDarkGray w-full aspect-video sm:p-2 xl:p-5 rounded-xl max-w-[1240px]'>
            <div className=' w-full aspect-video xl:pb-5 ' >
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/oc2jLjw6904"
                controls={true}
                config={{
                  youtube: {
                    playerVars: { fs: 1 }
                  }
                }}
              />
            </div>
          </div>
        }
      </section>

      <h3 className='text-4xl  font-bold  bg-gradient-to-r from-primaryBlue
       via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center'
      >
        Ethereum verstehen: Theoretische Grundlagen
      </h3>
      <section className=' w-full flex flex-col justify-center relative z-50' >


        <LessonsListNew chain={"eth"} lessonsArray={generalLessons} title={"Was ist eine Blockchain"} totalVideoTime="11:54" isGeneralSection />
        <LessonsListNew chain={"eth"} lessonsArray={ethTheory} title={"Wie funktioniert Ethereum"} isTheorySection totalVideoTime="15:47" />
        <span className='mx-auto mt-28'>
          <h3 className='text-4xl  font-bold  bg-gradient-to-r from-primaryBlue 
          via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center w-full md text-center:w-max'
          >
            Ethereum nutzen: Praktische Quests
          </h3>
        </span>
        <LessonsListNew chain={"eth"} lessonsArray={ethQuests}  isQuestSection totalVideoTime="1:32:11" />


        {/* <Image src={"/eth/eth_windows.png"} className='absolute  -right-20 -bottom-36' width={600} height={600} alt='Ethereum Windows' /> */}

      </section>


      <section id='calendly' className='pb-10 flex flex-col items-center sm:px-5 pt-20' >
        <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col-reverse 
        md:flex-row w-full items-center justify-between rounded-lg xl:w-[1240px] relative'
        >
          <div className='flex flex-col grow items-center gap-5 sm:gap-2 lg:gap-6 max-md:py-10 max-sm:mx-5 max-xl:mx-10'>
            <h4 className='text-2xl max-md:text-4xl lg:text-4xl font-bold  text-center'>
              Du hast noch Fragen?
            </h4>
            <p className='tracking-wider text-center md:w-[360px] lg:w-[420px] xl:w-[500px]  mb-6'>
            Erhalte maßgeschneiderte Beratung von unseren Experten und löse all deine spezifischen
             Krypto-Fragen in unseren persönlichen Online-Coachings.
            </p>
            <PrimaryButton href='https://calendly.com/teachmedefi/1std' customClassButton='text-center' target='_blank' >Nutze unser limitiertes Angebot! </PrimaryButton>
          </div>
          <div className='relative aspect-square md:h-60 lg:h-96 max-md:w-full  lg:w-96  ' >
            <Image src={"/home/podcast_microphone.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
          </div>
        </div>
      </section>
      <StickyHelpButton />

    
    </div >
  )
}