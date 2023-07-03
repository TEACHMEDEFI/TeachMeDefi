
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


export default function Index() {
  const { isDarkMode } = useTheme();
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  useEffect(() => {
    switchNetworkIfNeeded()
    setShowPlayer(true);
  }, [])

  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h1 className='text-center text-4xl sm:text-6xl lg:text-7xl font-bold mb-5 mt-6' >
        Willkommen bei <span className='text-polkaPink'> Polkadot!</span>
      </h1>
      {/* <h2 className=' text-xl md:text-4xl font-bold mb-5' >
        Coming Soon!
      </h2> */}
      <section className='relative h-screen w-full flex  justify-center items-center max-w-7xl' >
        <div className='w-2/4 space-y-10  backdrop-blur-sm rounded-lg' >
          <h1 className='text-7xl font-bold mb-5' >
            Willkommen bei <span className='text-polkaPink'> Polkadot!</span>
          </h1>
          <h2 className='text-xl font-bold' >
          Lerne alles über die skalierbare, interoperable Blockchain für eine dezentrale Zukunft.
          </h2>
          <h3 className='font-bold tracking-widest max-w-4xl p-2 z-10 rounded-lg backdrop-blur-sm' >
          Polkadot ist eine Blockchain-Plattform, die darauf abzielt, die Interoperabilität und Skalierbarkeit
          von Blockchains zu verbessern. Es ist eine dezentrale Plattform, die es verschiedenen Blockchains ermöglicht,
          miteinander zu kommunizieren und zusammenzuarbeiten. Polkadot verwendet eine innovative Technologie namens
          &quot;Parachains&quot;, die es ermöglicht, dass mehrere Blockchains parallel auf der Plattform laufen und miteinander
          interagieren können. Dadurch können Entwickler und Anwender von den Vorteilen verschiedener Blockchains
          profitieren, ohne dass sie sich um technische Details kümmern müssen. Polkadot hat auch eine eigene
          Kryptowährung namens DOT, die zur Stimmrechtsausübung und Netzwerksicherung verwendet wird.
        </h3>
        </div>
        <div className='relative w-2/4 h-full grow'>
          <Image src={isDarkMode ? "/dot/dot-logo-dark.png" : "/dot/dot-logo-light.png"} fill alt='Ethereum Hero' />
        </div>
        <Image src={"/dot/polka_x.svg"} width={392/2} height={400/2} alt='polkadot ' className='absolute -left-60 bottom-0 ' />
        <Image src={"/dot/polka_line.svg"} width={289/2} height={258/2} alt='polkadot ' className='absolute -right-8 -top-2 ' />
        <Image src={"/dot/polka_net.svg"} width={706/2} height={487/2} alt='polkadot ' className='absolute -right-6 -top-48 ' />
       
      </section>

      <section>
        {showPlayer ? (
          <>
              <div className='bg-slate-100 dark:bg-bgDarkGray p-10 rounded-xl'>
                <div className='h-[540px] w-[960px] ' >
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
          </>
          ) : null}
      </section>
      <section className='w-full flex flex-col justify-center relative z-50' >
        <LessonsListNew chain={"dot"} lessonsArray={generalLessons} title={"Was ist eine Blockchain?"} isGeneralSection totalVideoTime="11:54" />
        <LessonsListNew chain={"dot"} lessonsArray={dotTheory} title={"Theorie Section"} isTheorySection totalVideoTime="25:34" />
        <LessonsListNew chain={"dot"} lessonsArray={dotQuests} title={"Quest Section"} isQuestSection totalVideoTime="49:21" />
      </section>
      <section className=' w-full flex flex-col items-center gap-10 justify-center mb-36 relative ' >

        <Image src={"/dot/polka_z.svg"} width={261/2} height={261/2} alt='polkadot ' className='absolute left-36 -bottom-36 ' />
        <Image src={"/dot/polka_polygon.svg"} width={455/2} height={437/2} alt='polkadot ' className='absolute -right-16 bottom-12 ' />
      </section >
      {/* <section className='h-screen' >

      </section> */}

    <section id='calendly' className='pb-10 flex flex-col items-center px-5 pt-20' >
        <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col-reverse md:flex-row w-full items-center justify-between rounded-lg xl:w-[1240px] relative'>
          <div className='flex flex-col grow items-center gap-8 max-md:py-10'>
            <h4 className='text-2xl sm:text-4xl font-bold text-center  '> Persönliche Online-Coachings: Erhalte maßgeschneiderte Beratung von unseren Experten und löse all deine spezifischen Krypto-Fragen.</h4>
            <PrimaryButton href='https://calendly.com/teachmedefi/1std' target='_blank' >Nutze unser limitiertes Angebot! </PrimaryButton>
          </div>
          <div className='relative aspect-square md:h-60 lg:h-96 max-md:w-full  lg:w-96  ' >
            <Image src={"/home/podcast_microphone.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
          </div>
        </div>
      </section>


    </div >
  )
}