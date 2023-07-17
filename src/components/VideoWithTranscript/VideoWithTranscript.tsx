
import { useState, useEffect, useRef } from 'react';
import dynamic from "next/dynamic";
import ReactPlayer from "react-player";
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
// import { Input, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Lesson, Transcript, Links } from '@/data/generalLessons';
import { Quests } from '@/data/generalLessons'
import { PrimaryButton } from '../Buttons/Buttons';
import { useUserProgress } from '../../pages/api/ethereum-api'
import { useTheme } from '@/context/ThemeContext';

/*
* Dynamic Imports die to NextJS Server Side Prerendering
*/
const QuestClaimModalEth = dynamic(() => import('../Modals/QuestClaimModalEth'), {
  ssr: false,
});

const QuestClaimModalDot = dynamic(() => import('../Modals/QuestClaimModalDot'), {
  ssr: false,
});


type VideoWithTranscriptProps = {
  questForProgressBar: Quests | undefined;
  currentLesson: Lesson;
  nextLessonSlug: string;
  chain: string;
  isQuestSection: boolean
}

type ImageSourceObject = {
  [key: string]: string
}

type QuestModalShow = {
  [key: string]: boolean
}

export default function VideoWithTranscript({ currentLesson, nextLessonSlug, questForProgressBar, chain, isQuestSection }: VideoWithTranscriptProps) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);
  const [hasProgress, setProgress] = useUserProgress();
  const [imageClasses, setImageClasses] = useState<ImageSourceObject>()
  const [showPopup, setShowPopup] = useState<QuestModalShow>();
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
  const imageSourceObject: ImageSourceObject = {}
  const { isDarkMode } = useTheme();
  const calendlyRef = useRef<HTMLElement>(null);
  // const [showPopup, setShowPopup] = useState(false);
  // const toast = useToast();

  useEffect(() => {
    setShowPlayer(true);
    setShowNextButton(false)

    questForProgressBar?.lessons.forEach((quest: Lesson) => {
        const questId = quest.id;

        imageSourceObject[questId] = hasProgress(questId) ? 'has-progress-circle' : 'has-no-progress-circle'
      }) 


    setImageClasses(imageSourceObject);
  }, []);

  const handleVideoOnEnd = () => {
    setUserProgress()
    setShowNextButton(true)
  }


  /*
  * Handles Modal Toggle and is passed as props
  */
  const togglePopup = (questId: string, event: Event | undefined) => {
    event?.preventDefault();

    const show : QuestModalShow = {};
    show[questId] = true;
    setShowPopup(show)
  }

  if (!imageClasses || !questForProgressBar) {
    return ( <></>)
}


   /*
    * Creates the li Elements for each specific listof Quests
    */
   const renderProgressBarItems = () => {
      const listItems =  questForProgressBar?.lessons.map((quest: Lesson, i) => (
          <Link key={quest.id} href={`/${chain}/${quest.slug}`} className={`${imageClasses[quest.id]} bg-[#fdfdfd] dark:bg-gray-700 sm:mb-7 ` }><i className="fa-regular fa-play" /> {quest.videoTime} Min</Link>
      ))

    return listItems;
  }

  /*
    * Helper Function to pass as props
    */
  const setSelectedPolkaAccount = (account: InjectedAccountWithMeta) => {
    setSelectedAccount(account)
  }

  // const [testState, setTestState] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTestState(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  const scrollToCalendly = () => {
    if (calendlyRef && calendlyRef.current) {
      calendlyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const setUserProgress = () => {
    // Update the progress using setProgress
    setProgress(currentLesson.id, 'check');
  };

  return (
    <section className='w-full mb-22 lg:mb-44 relative' >
      <div className='w-full relative' >
        {/* <div className='aspect-video ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 150px)" }} ></div> */}
        <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
          {showPlayer && <ReactPlayer
            height="100%"
            width="100%"
            url={currentLesson.youtubeUrl}
            controls={true}
            onEnded={handleVideoOnEnd}
            config={{
              youtube: {
                playerVars: { fs: 1 }
              }
            }}
          />
          }
        </div>
      </div>
      <ul className="ul-circles mt-5 mb-5">
            {renderProgressBarItems()}
            {isQuestSection && 
              <Link href="javascript:;" className="is-nft-mint bg-[#fdfdfd] dark:bg-gray-700" onClick={() => togglePopup(questForProgressBar.questSectionId, event)}><i className="fa-light fa-trophy" />Mint NFT</Link>
            }
      </ul>
      {showPopup && showPopup[questForProgressBar.questSectionId] && chain === 'eth' ? <QuestClaimModalEth questSectionId={questForProgressBar.questSectionId} togglePopup={togglePopup} /> : null}

      {showPopup && showPopup[questForProgressBar.questSectionId] && chain === 'dot' ? <QuestClaimModalDot questSectionId={questForProgressBar.questSectionId} togglePopup={togglePopup} 
          selectedPolkaAccount={selectedAccount} setSelectedPolkaAccount={setSelectedPolkaAccount} /> : null}

      <div className='w-full bg-slate-100 dark:bg-gray-800 rounded-b-xl p-10 flex flex-col space-y-5' >
        <div className='w-full flex flex-row justify-center mb-10 ' >
          <div className='max-w-5xl flex flex-col-reverse md:flex-row justify-between lg:px-10 w-full'>

            <div className=' sm:mr-5 flex flex-col sm:flex-row sm:items-center gap-x-5' >
              <h2 className='font-bold text-3xl ' > {currentLesson?.title} </h2>
              <span className="h-5 w-5 relative ">
                <button onClick={scrollToCalendly} >
                  <Image src={isDarkMode ? "/support/question-icon-light.svg" : "/support/question-icon-dark.svg"}
                    alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
                  />
                </button>
              </span>
            </div>
            <div className='w-fit max-md:mb-5 self-start' >
              {
                nextLessonSlug && showNextButton && <PrimaryButton href={nextLessonSlug}> Next </PrimaryButton>
              }
            </div>

            {/* <div >
            <PrimaryButton onClick={() => setShowPopup(!showPopup)}> show popo </PrimaryButton>
          </div> */}
          </div>
        </div>
        <div className='flex justify-center' >
          <div className='max-w-5xl' >
            <div className='lg:mx-10 space-y-8 '>
              {currentLesson.transcript && currentLesson.transcript.map((row: Transcript | string, i) => (
                <div key={i}>
                  {typeof row === "object" ?

                    <div>
                      {row.title && <h3 className='text-2xl font-bold mb-6'>{row.title}</h3>}
                      {row.subline && <h4 className='font-bold mb-1'>{row.subline}</h4>}
                      {row.text && <p className='tracking-wider '>{row.text}</p>}
                      {row.links &&
                        <ul className='list-disc ml-5'>
                          {row.links && row.links.map((link: Links, i) => (
                            <li key={i}>
                              <Link href={link.href} key={i} target="_blank" className="underline font-bold" >{link.linkText}</Link>
                            </li>
                          ))}
                        </ul>
                      }
                    </div>
                    :
                    <p className='tracking-wider' >
                      {row}
                    </p>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* THIS IS FOR TESTING  */}
      {/* {showPopup &&
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
          <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >
            <p>Claim your NFT to continue</p>
            {currentLesson.popupHasInput &&
              <Input
                isInvalid={true}
                errorBorderColor='crimson'
                className='rounded-sm'
                placeholder='0xaa559f9di9d50046d451632e372245dddf0b69be5b39asvbd28429e4dc6d03f1'
              />
            }
            <PrimaryButton buttonDisabled={testState} onClick={() => alert("CLaim pressed")} >Claim</PrimaryButton>
            <GeneralButton onClick={() => setShowPopup(false)}>closeee</GeneralButton>
          </div>
        </div>
      } */}

      <article id='calendly' ref={calendlyRef} className='pb-10 flex flex-col items-center pt-20' >
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
            <Image src={"/support/support-banner-img.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
          </div>
        </div>
      </article>
      {/* <SupportButton /> */}
    </section>
  )
}