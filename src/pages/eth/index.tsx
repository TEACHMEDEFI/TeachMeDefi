
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ethQuests } from '@/data/eth';
import { ethTheory } from '@/data/eth/ethTheory';
import { generalLessons } from '@/data/generalLessons';
import LessonsList from '@/components/LessonsList/LessonsList';
import LessonsListNew from '@/components/LessonsList/LessonsListNew';
import {switchNetworkIfNeeded} from '../api/ethereum-api'
import ReactPlayer from "react-player"


export default function Index() {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  useEffect(() => {
    switchNetworkIfNeeded()
    setShowPlayer(true)
  }, [])


  return (
    <div className='flex flex-col  w-full justify-center items-center relative mb-32'>
      <h1 className='text-7xl font-bold mb-5 mt-6' >
      Willkommen bei <span
              className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'
            >
              Ethereum!
            </span>
      </h1>
      <h2 className='text-4xl font-bold mb-5'>Coming Soon!</h2>

      {/* <section className=' h-screen w-full flex  justify-center items-center max-w-7xl' >
        <div className='w-2/4 space-y-10' >
          <h1 className='text-7xl font-bold mb-5' >
            Willkommen bei <span
              className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'
            >
              Ethereum!
            </span>
          </h1>
          <h2 className='text-xl font-bold' >Hier erfährst du alles über die zweitgrößte <br /> Kryptowährung der Welt.</h2>
          <h3 className='font-bold tracking-widest max-w-4xl p-2 z-10 rounded-lg  backdrop-blur-md' >
          Ethereum ist eine dezentrale, Open-Source-Blockchain-Plattform,
          die es Entwicklern ermöglicht, Smart Contracts und dezentrale Anwendungen (DApps)
          zu erstellen. Im Gegensatz zu Bitcoin, das hauptsächlich als digitales
          Zahlungssystem fungiert, ist Ethereum eher eine Plattform für die Entwicklung
          von Anwendungen und Diensten, die auf der Blockchain-Technologie basieren.
          Ethereum ist auch die zweitgrößte Kryptowährung nach Marktkapitalisierung, hinter Bitcoin.
        </h3>
        
        </div>
        <div className='relative w-2/4 h-full grow'>
          <Image src={"/eth/eth_hero.png"} fill alt='Ethereum Hero' />
        </div>
        
      </section> */}
      {/* <section>
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
      </section> */}

      {/* <section className=' w-full flex flex-col justify-center relative z-50' >
        <LessonsListNew chain={"eth"} lessonsArray={generalLessons} title={"Was ist eine Blockchain"} isGeneralSection />
        <LessonsListNew chain={"eth"} lessonsArray={ethTheory} title={"Theorie Sektion"} isTheorySection />
        <LessonsListNew chain={"eth"} lessonsArray={ethQuests} title={"Quest section"} isQuestSection />

        
        <Image src={"/eth/eth_windows.png"} className='absolute  -right-20 -bottom-36' width={600} height={600} alt='Ethereum Windows' />
        
      </section> */}
        
      {/* <section className='w-full flex flex-col items-center gap-10 justify-center mb-36 relative pb-80' >
      </section > */}
    </div >
  )
}