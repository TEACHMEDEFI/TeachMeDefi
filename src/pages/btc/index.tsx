
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { btcQuests } from '@/data/btc';
import { btcTheory } from '@/data/btc/btcTheory';
import { generalLessons } from '@/data/generalLessons';
import LessonsListNew from '@/components/LessonsList/LessonsListNew';
import { switchNetworkIfNeeded } from '../api/ethereum-api'
import ReactPlayer from "react-player"
import { SupportCoaching } from '@/components/SupportCoaching/SupportCoaching';
import { useTheme } from '@/context/ThemeContext';


export default function Index() {

  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modelOpenClass, setModelOpenClass] = useState<boolean>(false)
  const calendlyRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();


  useEffect(() => {
    switchNetworkIfNeeded()
    setShowPlayer(true)

  }, [modalOpen])


  const scrollToQuest = (questId: string) => {
    setTimeout(() => {
      const element = document.getElementById(questId);

      element?.scrollIntoView();
    }, 300)
  }

  const handleModelOpenScroll = (scroll: boolean) => {
    setModelOpenClass(scroll)
  }


  const onModalClose = (questId: string) => {
    const newState = modalOpen ? !modalOpen : true;
    setModalOpen(newState);
    setModelOpenClass(false)
    scrollToQuest(questId);
  }

  const onModalOpen = () => {
    handleModelOpenScroll(true);
  }



  const scrollToCalendly = () => {
    if (calendlyRef && calendlyRef.current) {
      calendlyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
   
    <div className={`flex flex-col  w-full justify-center items-center relative mb-32 max-sm:px-5 ${modelOpenClass && 'modal-open-no-scroll'} `}>
      <section className='lg:h-[60vh] w-full flex flex-col lg:flex-row justify-center items-center max-w-7xl' >
        <div className=' my-8 md:my-16 lg:my-0 lg:w-2/4 space-y-5   sm:pl-8 lg:pl-16 xl:pl-0 ' >
          <h1 className='xl:text-5xl text-4xl font-bold' >
            Willkommen bei <span className='text-bitcoinOrange'> Bitcoin!</span>
          </h1>
          <h2 className='xl:text-lg text-sm pb-1 lg:pb-10 backdrop-blur-lg rounded-3xl sm:pr-10' >
          Dein Schlüssel zum Bitcoin-Universum! Du bist am Anfang deiner Krypto-Reise und suchst den besten Startpunkt? Hier findest du alles, was du für einen erfolgreichen Start brauchst. 
          Unser Bitcoin-Bootcamp bietet dir die essenziellen Informationen, kompakt und leicht verständlich, ohne dich in Details zu verlieren. Das Ziel unseres Bootcamps ist es, dir einen schnellen und fundierten Einstieg in die Welt von Bitcoin zu ermöglichen. 
          Und das Beste daran? Alles ist kostenfrei! Als Dankeschön für deinen Eifer winkt dir ein symbolisches NFT für jeden erreichten Meilenstein. Tritt ein, rüste dich mit dem Nötigsten aus und beginne deine Reise in der Bitcoin-Welt voller Vertrauen!
          </h2>
        </div>
        <div className=' max-lg:hidden relative w-full lg:w-2/4 h-full lg:h-[80%] grow'>
          <Image src={"/btc/bitcoin_planet.png"} fill alt='Ethereum Hero' priority />
        </div>

      </section>

      <section className='flex flex-col items-center relative sm:px-5 w-full mb-12 lg:mb-44' >
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
       via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center flex items-center gap-1 sm:gap-5
      flex-col sm:flex-row'
      >
        Bitcoin verstehen
        <span className="h-5 w-5 relative  lg:mr-2">
          <button className='w-full h-full' onClick={scrollToCalendly} >
            <Image src={isDarkMode ? "/support/info-icon-light.svg" : "/support/info-icon-dark.svg"}
              alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
            />
          </button>
        </span>
      </h3>
      <section className=' w-full flex flex-col justify-center relative z-50' >


        <LessonsListNew chain={"btc"} lessonsArray={generalLessons} title={"Was ist eine Blockchain"} totalVideoTime="11:54" isGeneralSection onModalClose={onModalClose} onModalOpen={onModalOpen} isQuestSection={false} />
        <LessonsListNew chain={"btc"} lessonsArray={btcTheory} title={"Wie funktioniert Bitcoin"} isTheorySection totalVideoTime="21:56" onModalClose={onModalClose} onModalOpen={onModalOpen} isQuestSection={false} />
        <span className='mx-auto mt-28'>
          <h3 className='text-4xl  font-bold  bg-gradient-to-r from-primaryBlue 
          via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center w-full md text-center:w-max
          flex items-center gap-1 sm:gap-5 flex-col sm:flex-row'
          >
            Bitcoin nutzen
            <span className="h-5 w-5 relative  lg:mr-2">
              <button className='w-full h-full' onClick={scrollToCalendly} >
                <Image src={isDarkMode ? "/support/info-icon-light.svg" : "/support/info-icon-dark.svg"}
                  alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
                />
              </button>
            </span>
          </h3>
        </span>
        <LessonsListNew chain={"btc"} lessonsArray={btcQuests} totalVideoTime="27:58" onModalClose={onModalClose} onModalOpen={onModalOpen} isQuestSection={true} />

        {/* <span className='mx-auto mt-28'>
          <h3 className='text-4xl  font-bold  bg-gradient-to-r from-primaryBlue 
          via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center w-full md text-center:w-max 
          flex items-center gap-1 sm:gap-5 flex-col sm:flex-row'
          >
            Sicher auf der Blockchain
            <span className="h-5 w-5 relative  lg:mr-2">
              <button className='w-full h-full' onClick={scrollToCalendly} >
                <Image src={isDarkMode ? "/support/info-icon-light.svg" : "/support/info-icon-dark.svg"}
                  alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
                />
              </button>
            </span>
          </h3>
        </span>
        <LessonsListNew chain={"btc"} lessonsArray={sicherheitsQuest} totalVideoTime="27:47" onModalClose={onModalClose} onModalOpen={onModalOpen} /> */}
        {/* <Image src={"/eth/eth_windows.png"} className='absolute  -right-20 -bottom-36' width={600} height={600} alt='Ethereum Windows' /> */}

      </section>

      {/* <div ref={calendlyRef} >
        <SupportCoaching />
      </div> */}

    </div >
  )
}