
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
    console.log('Rerendered Due to Modal Close')

  }, [modalOpen])

  const handleModelOpenScroll = (scroll: bool) => {
    setModelOpenClass(scroll)
  }


  const onModalClose = () => {
    const newState = modalOpen ? !modalOpen : true;
    setModalOpen(newState);
    setModelOpenClass(false)
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
    <div className={ `flex flex-col  w-full justify-center items-center relative mb-32 max-sm:px-5 ${modelOpenClass && 'modal-open-no-scroll'} `}>
      <section className='h-[90vh] w-full flex flex-col lg:flex-row justify-center items-center max-w-7xl max-lg:mb-24' >
        <div className=' my-14 md:my-32 lg:my-0 lg:w-2/4 space-y-5' >
          <h1 className='xl:text-5xl text-4xl font-bold' >
            Willkommen bei <span
              className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'
            >
              Ethereum!
            </span>
          </h1>
          <h2 className='xl:text-lg text-sm pb-1 lg:pb-10 backdrop-blur-lg rounded-3xl sm:pr-10' >
            Du möchtest mehr über Ethereum erfahren, weißt aber nicht, wo du anfangen sollst? Kein Problem, wir führen dich Schritt für
            Schritt durch diese revolutionäre Blockchain-Technologie. Unser Ziel ist es, dich zu befähigen, mit Sicherheit und Vertrauen
            in die Welt von Ethereum einzusteigen. Fange jetzt an, entdecke die Welt von Ethereum und verdiene NFTs während deiner Lernreise!
          </h2>
        </div>
        <div className='relative w-full lg:w-2/4 h-full grow'>
          <Image src={"/eth/eth_hero.png"} fill alt='Ethereum Hero' />
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
        Ethereum verstehen
        <span className="h-5 w-5 relative  lg:mr-2">
          <button className='w-full h-full' onClick={scrollToCalendly} >
            <Image src={isDarkMode ? "/support/info-icon-light.svg" : "/support/info-icon-dark.svg"}
              alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
            />
          </button>
        </span>
      </h3>
      <section className=' w-full flex flex-col justify-center relative z-50' >


        <LessonsListNew chain={"eth"} lessonsArray={generalLessons} title={"Was ist eine Blockchain"} totalVideoTime="11:54" isGeneralSection onModalClose={onModalClose} onModalOpen={onModalOpen}/>
        <LessonsListNew chain={"eth"} lessonsArray={ethTheory} title={"Wie funktioniert Ethereum"} isTheorySection totalVideoTime="15:47" onModalClose={onModalClose} onModalOpen={onModalOpen} />
        <span className='mx-auto mt-28'>
          <h3 className='text-4xl  font-bold  bg-gradient-to-r from-primaryBlue 
          via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center w-full md text-center:w-max
          flex items-center gap-1 sm:gap-5 flex-col sm:flex-row'
          >
            Ethereum nutzen
            <span className="h-5 w-5 relative  lg:mr-2">
          <button className='w-full h-full' onClick={scrollToCalendly} >
            <Image src={isDarkMode ? "/support/info-icon-light.svg" : "/support/info-icon-dark.svg"}
              alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
            />
          </button>
        </span>
          </h3>
        </span>
        <LessonsListNew chain={"eth"} lessonsArray={ethQuests} isQuestSection totalVideoTime="1:04:47" onModalClose={onModalClose} onModalOpen={onModalOpen} />

        <span className='mx-auto mt-28'>
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
        <LessonsListNew chain={"eth"} lessonsArray={sicherheitsQuest} totalVideoTime="27:47" onModalClose={onModalClose} onModalOpen={onModalOpen} />
        {/* <Image src={"/eth/eth_windows.png"} className='absolute  -right-20 -bottom-36' width={600} height={600} alt='Ethereum Windows' /> */}

      </section>

      <div ref={calendlyRef} >
        <SupportCoaching />
      </div>

    </div >
  )
}
