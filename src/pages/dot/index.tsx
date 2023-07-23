
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react';
import { generalLessons } from '@/data/generalLessons'
import { dotQuests, sicherheitsQuestDot } from '@/data/dot'
import { dotTheory } from '@/data/dot/dotTheory'
import LessonsListNew from '@/components/LessonsList/LessonsListNew'
import { switchNetworkIfNeeded } from '../api/ethereum-api'
import ReactPlayer from "react-player"
import { useTheme } from '@/context/ThemeContext';
import { SupportCoaching } from '@/components/SupportCoaching/SupportCoaching';

export default function Index() {
  const { isDarkMode } = useTheme();
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modelOpenClass, setModelOpenClass] = useState<boolean>(false)

  useEffect(() => {
    switchNetworkIfNeeded()
    setShowPlayer(true);
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
    <div className={ `flex flex-col w-full justify-center items-center max-sm:px-5 ${modelOpenClass && 'modal-open-no-scroll'} `}>
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
       via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center flex items-center gap-1 sm:gap-5
       flex-col sm:flex-row'
      >
        Polkadot verstehen
        <span className="h-5 w-5 relative  lg:mr-2">
          <button onClick={scrollToCalendly} >
            <Image src={isDarkMode ? "/support/info-icon-light.svg" : "/support/info-icon-dark.svg"}
              alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
            />
          </button>
        </span>
      </h3>
      <section className='w-full flex flex-col justify-center relative z-50' >
        <LessonsListNew chain={"dot"} lessonsArray={generalLessons} title={"Was ist eine Blockchain?"} isGeneralSection totalVideoTime="11:54" onModalClose={onModalClose} onModalOpen={onModalOpen} />
        <LessonsListNew chain={"dot"} lessonsArray={dotTheory} title={"Wie funktioniert Polkadot?"} isTheorySection totalVideoTime="25:34" onModalClose={onModalClose} onModalOpen={onModalOpen} />
        <span className='mx-auto mt-28'>
          <h3 className='text-4xl  font-bold  bg-gradient-to-r from-primaryBlue 
          via-secondaryPurple to-primaryPink bg-clip-text text-transparent text-center w-full md:w-max 
          flex items-center gap-1 sm:gap-5 flex-col sm:flex-row'
          >
            Polkadot nutzen
            <span className="h-5 w-5 relative  lg:mr-2">
              <button onClick={scrollToCalendly} >
                <Image src={isDarkMode ? "/support/info-icon-light.svg" : "/support/info-icon-dark.svg"}
                  alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
                />
              </button>
            </span>
          </h3>
        </span>
        <LessonsListNew chain={"dot"} lessonsArray={dotQuests} isQuestSection totalVideoTime="49:21" onModalClose={onModalClose} onModalOpen={onModalOpen} />

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
        <LessonsListNew chain={"eth"} lessonsArray={sicherheitsQuestDot} totalVideoTime="15:17" onModalClose={onModalClose} onModalOpen={onModalOpen} />

      </section>
      <section className=' w-full flex flex-col items-center gap-10 justify-center mb-36 relative ' >
        <Image src={"/dot/polka_z.svg"} width={261 / 2} height={261 / 2} alt='polkadot ' className='absolute left-16 -bottom-36 ' />
        <Image src={"/dot/polka_polygon.svg"} width={455 / 2} height={437 / 2} alt='polkadot ' className='absolute max-lg:hidden  -right-16 bottom-12 ' />
      </section >
      <div ref={calendlyRef}>
        <SupportCoaching />
      </div>

    </div >
  )
}