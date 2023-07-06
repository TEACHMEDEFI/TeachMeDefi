
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { generalLessons } from '@/data/generalLessons'
import { dotQuests } from '@/data/dot'
import { dotTheory } from '@/data/dot/dotTheory'
import LessonsList from '@/components/LessonsList/LessonsList'
import LessonsListNew from '@/components/LessonsList/LessonsListNew'
import { switchNetworkIfNeeded } from '../api/ethereum-api'
import ReactPlayer from "react-player"
import { useTheme } from '@/context/ThemeContext';
import { PrimaryButton } from "@/components/Buttons/Buttons";
import StickyHelpButton from '@/components/Buttons/StickyHelpButton'


export default function Index() {
  const { isDarkMode } = useTheme();
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  useEffect(() => {
    switchNetworkIfNeeded()
    setShowPlayer(true);
  }, [])

  return (
    <div className='flex flex-col w-full justify-center items-center max-sm:px-5'>
      <section className='h-[90vh] relative w-full flex flex-col lg:flex-row justify-center items-center max-w-7xl max-lg:mb-24 ' >
        <div className='my-14 md:my-32 lg:my-0 lg:w-2/4 space-y-5  backdrop-blur-sm rounded-lg ' >
          <h1 className='xl:text-5xl text-4xl font-bold' >
            Entdecke die Welt von <span className='text-polkaPink'> Polkadot!</span>
          </h1>
          <h2 className='xl:text-lg text-sm pb-1 lg:pb-10 backdrop-blur-lg rounded-3xl sm:pr-10 ' >
            Steig ein in die aufregende Welt von Polkadot, dem Internet der Blockchains! Polkadot ist eine revolutionäre “Multi-Chain”-Plattform, die es ermöglicht, dass verschiedene Blockchains nahtlos und sicher zusammenarbeiten.
            Auf dieser Seite erlebst du eine Mischung aus fundiertem theoretischen Wissen und praktischen Anleitungen, verpackt in leicht verständliche Module.
            Fange jetzt an, entdecke das Potenzial von Polkadot und verdiene NFTs während deiner Lernreise!

          </h2>

        </div>
        <div className='relative w-full lg:w-2/4 h-full grow'>
          <Image src={isDarkMode ? "/dot/dot-logo-dark.png" : "/dot/dot-logo-light.png"} fill alt='Ethereum Hero' />
        </div>
        <Image src={"/dot/polka_x.svg"} width={392 / 2} height={400 / 2} alt='polkadot ' className='absolute -left-60 bottom-0 ' />
        <Image src={"/dot/polka_line.svg"} width={289 / 2} height={258 / 2} alt='polkadot ' className='absolute max-md:hidden -right-8 bottom-20 ' />
        <Image src={"/dot/polka_net.svg"} width={706 / 2} height={487 / 2} alt='polkadot ' className='absolute max-lg:hidden -right-6 top-0 ' />

      </section>

      <section className='flex flex-col items-center relative sm:px-5 w-full mb-24 lg:mb-44'>
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
        Polkadot verstehen
      </h3>
      <section className='w-full flex flex-col justify-center relative z-50' >
        <LessonsListNew chain={"dot"} lessonsArray={generalLessons} title={"Was ist eine Blockchain?"} isGeneralSection totalVideoTime="11:54" />
        <LessonsListNew chain={"dot"} lessonsArray={dotTheory} title={"Theorie Section"} isTheorySection totalVideoTime="25:34" />
        <span className='mx-auto mt-28'>
          <h3 className='text-4xl  font-bold  bg-gradient-to-r from-primaryBlue 
          via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center w-full md:w-max'
          >
            Polkadot nutzen
          </h3>
        </span>
        <LessonsListNew chain={"dot"} lessonsArray={dotQuests} isQuestSection totalVideoTime="49:21" />
        <h3 className='text-4xl  font-bold  bg-gradient-to-r from-primaryBlue 
          via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center w-full md:w-max'
          >
            Sicher auf der Blockchain
          </h3>
      </section>
      <section className=' w-full flex flex-col items-center gap-10 justify-center mb-36 relative ' >
        {/* {showPlayer &&
          <div className='bg-slate-100 dark:bg-bgDarkGray w-full aspect-video p-2 xl:p-5 rounded-xl max-w-[1240px] z-50'>
            <div className=' w-full aspect-video xl:pb-5 ' >
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/_WGuKCnW6ro"
                controls={true}
                config={{
                  youtube: {
                    playerVars: { fs: 1 }
                  }
                }}
              />
            </div>
          </div>
        } */}
        <Image src={"/dot/polka_z.svg"} width={261 / 2} height={261 / 2} alt='polkadot ' className='absolute left-16 -bottom-36 ' />
        <Image src={"/dot/polka_polygon.svg"} width={455 / 2} height={437 / 2} alt='polkadot ' className='absolute max-lg:hidden  -right-16 bottom-12 ' />
      </section >


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
            <p className='tracking-wider text-center md:w-[360px] lg:w-[420px] xl:w-[500px]  mb-6'>
            Nutze unser limitiertes Angebot! 
            {/* CHECK FOR RESPONSIVENESSS  */}
            </p>
            <PrimaryButton href='https://calendly.com/teachmedefi/1std' customClassButton='text-center' target='_blank' >Termin buchen </PrimaryButton>
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