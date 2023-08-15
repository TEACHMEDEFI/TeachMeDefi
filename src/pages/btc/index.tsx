
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { ethQuests, sicherheitsQuest } from '@/data/eth';
import { ethTheory } from '@/data/eth/ethTheory';
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
    // <div className='flex flex-col  w-full justify-center items-center'>

    //   <section className='flex flex-col w-full justify-center items-center relative mb-32'>
    //     <h1 className=' text-center text-4xl sm:text-6xl lg:text-7xl font-bold mb-5 mt-16' >
    //       Willkommen bei{" "}
    //       <span className='text-bitcoinOrange'> Bitcoin!</span>
    //     </h1>
    //     <h2 className='text-xl md:text-4xl font-bold mb-5 mt-8 '>Coming Soon!</h2>
    //     <div className='relative w-80 sm:w-96 h-80 sm:h-96 mt-10'>
    //       <Image src={"/btc/bitcoin_planet.png"} fill alt='Ethereum Hero' priority />
    //     </div>
    //   </section>

    //   {/* <section className=' h-screen w-full flex justify-center items-center gap-24 max-w-7xl' >
    //     <div className='w-2/4 space-y-10' >
    //       <h1 className='text-7xl font-bold mb-5' >
    //         Willkommen bei <span className='text-bitcoinOrange'> Bitcoin!</span>
    //       </h1>
    //       <h2 className='text-xl font-bold' >
    //         Hier findest du alles, was du über die weltweit bekannteste Kryptowährung wissen musst.
    //       </h2>
    //     </div>
    //     <div className='relative w-2/5 h-full '>
    //       <Image src={"/btc/bitcoin_planet.png"} fill alt='Ethereum Hero' priority />
    //     </div>
    //   </section>
    //   <section className='h-96 w-full flex items-center justify-center relative' >
    //     <h2 className='font-bold tracking-widest text-center max-w-4xl p-2 z-10 rounded-lg  ' >
    //       Bitcoin ist eine digitale Währung, die 2009 von einer Person oder Gruppe namens Satoshi Nakamoto ins Leben
    //       gerufen wurde. Im Gegensatz zu traditionellen Währungen wird Bitcoin nicht von einer Zentralbank ausgegeben,
    //       sondern durch ein dezentrales Netzwerk von Computern verwaltet, die als Blockchain bezeichnet werden.
    //       Transaktionen werden direkt zwischen den Teilnehmern abgewickelt, ohne dass ein Dritter wie eine Bank
    //       benötigt wird. Bitcoin gilt als eine der ersten und bekanntesten Kryptowährungen und hat in den letzten
    //       Jahren aufgrund seiner schnellen und sicheren Transaktionen und seines begrenzten Angebots an Popularität gewonnen.
    //     </h2>
    //   </section> */}
    //   {/* <section className=' w-full flex flex-col items-center gap-10 justify-center mb-36 relative ' >
    //     <LessonsOverview chain={"btc"} lessonsArray={btcLessons} title={"Was ist eine Blockchain"} section={0} />
    //     <LessonsOverview chain={"btc"} lessonsArray={btcLessons} title={"Theory Ethereum"} section={1} />
    //     <LessonsOverview chain={"btc"} lessonsArray={btcLessons} title={"Praktisch Ethereum"} section={2} />

    //   </section > */}

    // </div >
    <div className={`flex flex-col  w-full justify-center items-center relative mb-32 max-sm:px-5 ${modelOpenClass && 'modal-open-no-scroll'} `}>
      <section className='h-[60vh] w-full flex flex-col lg:flex-row justify-center items-center max-w-7xl max-lg:mb-24' >
        <div className=' my-14 md:my-32 lg:my-0 lg:w-2/4 space-y-5   sm:pl-8 lg:pl-16 xl:pl-0 ' >
          <h1 className='text-7xl font-bold mb-5' >
            Willkommen bei <span className='text-bitcoinOrange'> Bitcoin!</span>
          </h1>
          <h2 className='text-xl font-bold' >
            Hier findest du alles, was du über die weltweit bekannteste Kryptowährung wissen musst.
          </h2>
        </div>
        <div className='relative w-80 sm:w-96 h-80 sm:h-96 mt-10'>
          <Image src={"/btc/bitcoin_planet.png"} fill alt='Ethereum Hero' priority />
        </div>

      </section>

      <section className='flex flex-col items-center relative sm:px-5 w-full mb-24 lg:mb-44' >
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


        <LessonsListNew chain={"btc"} lessonsArray={generalLessons} title={"Was ist eine Blockchain"} totalVideoTime="11:54" isGeneralSection onModalClose={onModalClose} onModalOpen={onModalOpen} />
        <LessonsListNew chain={"btc"} lessonsArray={ethTheory} title={"Wie funktioniert Bitcoin"} isTheorySection totalVideoTime="---" onModalClose={onModalClose} onModalOpen={onModalOpen} />
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
        <LessonsListNew chain={"eth"} lessonsArray={ethQuests} isQuestSection totalVideoTime="----" onModalClose={onModalClose} onModalOpen={onModalOpen} />

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

      <div ref={calendlyRef} >
        <SupportCoaching />
      </div>

    </div >
  )
}