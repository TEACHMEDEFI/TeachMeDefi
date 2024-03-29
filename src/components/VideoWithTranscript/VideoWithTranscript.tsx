
import { useState, useEffect, useRef } from 'react';
import ReactPlayer from "react-player";
import Link from 'next/link';
import Image from 'next/image';
import { Lesson, Transcript, Links } from '@/data/generalLessons';
import { PrimaryButton } from '../Buttons/Buttons';
import { useTheme } from '@/context/ThemeContext';
import { Quests } from '@/data/generalLessons'
import { SupportCoaching } from '../SupportCoaching/SupportCoaching';
import Spinner from '../Spinner/Spinner';
import { NewsletterSubiFrame } from '../NewsletterSubiFrame/NewsletterSubiFrame';


type VideoWithTranscriptProps = {
  currentLesson: Lesson;
  setUserProgress?: Function;
  displayPrevVideoInModal: Function;
  displayNextVideoInModal: Function
  currentQuest: Quests;
  lessonIndex: number;
  replayVideoInModal: Function
  isQuestSection: boolean
}


export default function VideoWithTranscript({ currentLesson, setUserProgress, displayPrevVideoInModal, displayNextVideoInModal,
  currentQuest, lessonIndex, replayVideoInModal, isQuestSection }: VideoWithTranscriptProps) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const [showNextButton, setShowNextButton] = useState<boolean>(false);
  const [showPrevButton, setShowPrevButton] = useState<boolean>(false);
  const [videoEnded, setVideoEnded] = useState<boolean>(false);
  const [showNavButtons, setShowNavButtons] = useState<boolean>(true);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [showFeedbackDialogue, setShowFeedbackDialogue] = useState<boolean>(false);
  const [showNewsletterSub, setShowNewsletterSub] = useState<boolean>(false);
  const [showMintNftDirections, setShowMintNftDirections] = useState<boolean>(false);
  const [videoStuck, setVideoStuck] = useState<boolean>(false)
  const { isDarkMode } = useTheme();
  const calendlyRef = useRef<HTMLDivElement>(null);
  const gdocsLink = 'https://docs.google.com/forms/d/e/1FAIpQLSftkvPlhlYYCFJNdr4YcM6ch-PvS-DlGtywb-i9mSzrzcwWzQ/viewform?usp=sf_link'

  useEffect(() => {
    setShowPlayer(true);
    setShowNextButton(false)
    setShowPrevButton(false)
    handleButtons()
  }, [videoEnded]);


  // console.log('IsQuestSection', isQuestSection)


  const handleVideoOnPlay = () => {
    if (setUserProgress) {
      setUserProgress(currentLesson.id)
    }
  }

  const handleButtons = () => {
    handleShowNextButton()
    handleShowPrevButton()
  }


  const scrollToCalendly = () => {
    if (calendlyRef && calendlyRef.current) {
      calendlyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const displayNextVideo = () => {
    displayNextVideoInModal();
    handleButtons()
  }


  const displayPrevVideo = () => {
    displayPrevVideoInModal()
    handleButtons()
  }

  const replayVideo = () => {
    replayVideoInModal()
    handleButtons()
  }

  const handleShowNextButton = () => {
    if (currentQuest.lessons[lessonIndex + 1] !== undefined) {
      setShowNextButton(true)
    } else {
      setShowNextButton(false)
    }
  }

  const handleShowPrevButton = () => {
    if (currentQuest.lessons[lessonIndex - 1] !== undefined) {
      setShowPrevButton(true)
    } else {
      setShowPrevButton(false)
    }
  }

  const subscriptionGiven = () => {
    if (typeof window != undefined) {
      return window.sessionStorage.getItem('subscribed');
    }

    return false;
  }

  const handleRandomNewsletterSub = () => {
    const shouldShowNewsletterSub = Math.random() > 0.5;
    const subscribed = subscriptionGiven();

    if (shouldShowNewsletterSub && !subscribed) {
      setShowNewsletterSub(true)
    }
  }

  const handleNewsletterSubClick = () => {
    if (typeof window != undefined) {
      window.sessionStorage.setItem('subscribed', 'true');
    }
    setShowNewsletterSub(false);
  }
  const handleSkipNewsletterSub = () => {
    setShowSpinner(true)
    window.sessionStorage.setItem('subscribed', 'true');
    setTimeout(() => {
      setVideoEnded(true);
      setShowNavButtons(false)
      setShowNewsletterSub(false)
      if (isQuestSection && currentQuest.lessons[lessonIndex + 1] === undefined) {
        setShowMintNftDirections(true)
      }
      setShowSpinner(false)
    }, 1000)
  }


  const feedbackGiven = () => {
    if (typeof window != undefined) {
      return window.sessionStorage.getItem('feedbackGiven');
    }

    return false;
  }

  const handleRandomFeedbackDialogue = () => {
    const shouldShowDialogue = Math.random() < 0.1;
    const feedbackDone = feedbackGiven();

    if (shouldShowDialogue && !feedbackDone) {
      setShowFeedbackDialogue(true)
    }
  }

  const handleFeedbackClick = () => {
    if (typeof window != undefined) {
      window.open(gdocsLink, '_blank');
      window.sessionStorage.setItem('feedbackGiven', 'true');
    }

    setShowFeedbackDialogue(false);
  }

  const handleSkipFeedback = () => {
    setShowSpinner(true)
    window.sessionStorage.setItem('feedbackGiven', 'true');
    setTimeout(() => {
      setVideoEnded(true);
      setShowNavButtons(false)
      setShowFeedbackDialogue(false)
      if (isQuestSection && currentQuest.lessons[lessonIndex + 1] === undefined) {
        setShowMintNftDirections(true)
      }
      setShowSpinner(false)
    }, 1000)
  }


  const handleVideoOnEnd = () => {
    setShowSpinner(true)
    setTimeout(() => {
      setVideoEnded(true);
      setShowNavButtons(false)
      if (isQuestSection && currentQuest.lessons[lessonIndex + 1] === undefined) {
        setShowMintNftDirections(true)
      }
      handleRandomFeedbackDialogue();
      handleRandomNewsletterSub();
      setShowSpinner(false)
    }, 1000)



  }


  const onVideoScroll = () => {
    if (typeof window !== 'undefined') {
      const videoWrap = document.querySelector('.video-wrap') as HTMLElement;
      const video = document.querySelector('.video');
      const scrollContainer = document.querySelector('.video-page')

      if (video && videoWrap) {
        const videoHeight = video.getBoundingClientRect().height;
        // @ts-ignore
        const sectionScrollTop = scrollContainer?.pageYOffset | scrollContainer?.scrollTop;
        // @ts-ignore
        const videoBottom = videoHeight + videoWrap?.getBoundingClientRect().top;

        // @ts-ignore
        if (sectionScrollTop > videoBottom - 300) {
          // @ts-ignore
          setVideoStuck(true)
        }
        // @ts-ignore
        if (sectionScrollTop < videoBottom - 200) {
          // @ts-ignore
          setVideoStuck(false)
        }
      }
    }
  }



  return (
    <section className=' relative video-modal-container overflow-y-scroll max-lg:h-[80vh] lg:aspect-video px-2 md:px-10 video-wrap video-page' onScroll={() => onVideoScroll()} >
      {showPlayer && !videoEnded && !showSpinner && (
        <div className='video-wrap z-50 w-full relative' >

          <div className={`w-full -z-10 aspect-video ${videoStuck ? 'block' : 'absolute'} `} ></div>
          <div className={`w-full aspect-video overflow-hidden rounded-t-xl video ${videoStuck ? 'stuck' : ''} `} >
            <ReactPlayer
              height="100%"
              width="100%"
              url={currentLesson.youtubeUrl}
              controls={true}
              onEnded={handleVideoOnEnd}
              onStart={handleVideoOnPlay}
              config={{
                youtube: {
                  playerVars: { fs: 1 }
                }
              }}
            />
          </div>
        </div>
      )}

      <div className="content">
        {videoEnded && !showMintNftDirections && !showFeedbackDialogue && !showSpinner && !showNewsletterSub && (
          <div className="fade-out">
            <h2 className='font-bold text-3xl '>Du hast das Video beendet. Was möchtest du als nächstes tun?</h2>
            <div className="flex flex-col md:flex-row justify-around  gap-5 py-5">
              <PrimaryButton customClassButton='md:w-max ' buttonDisabled={!showPrevButton} onClick={displayPrevVideo}>Vorheriges Video</PrimaryButton>
              <PrimaryButton customClassButton='md:w-max ' onClick={replayVideo}>Video nochmal abspielen</PrimaryButton>
              <PrimaryButton customClassButton='md:w-max ' buttonDisabled={!showNextButton} onClick={displayNextVideo}>Nächstes Video</PrimaryButton>
            </div>
          </div>
        )}


        {showSpinner &&
          <Spinner />
        }

        {videoEnded && !showMintNftDirections && showFeedbackDialogue && !showSpinner && (
          <div className="fade-out">
            <h2 className='font-bold text-xl '>Bitte nimm dir einen Moment Zeit und gib uns Feedback!</h2>
            <h3 className='font-bold text-3s '>Klicke auf den Link und beantworte einige wenige Fragen. Damit hilfst du uns unsere Lernplattform weiter zu verbessern. Vielen Dank!</h3>
            <div className="flex flex-col md:flex-row justify-around  gap-5 py-5">
              <PrimaryButton customClassButton='md:w-max ' onClick={handleFeedbackClick}>Feedback</PrimaryButton>
              <PrimaryButton customClassButton='md:w-max ' onClick={handleSkipFeedback}>Überspringen</PrimaryButton>
            </div>
          </div>
        )}

        {videoEnded && !showMintNftDirections && showNewsletterSub && !showFeedbackDialogue && !showSpinner && (
          <div className="fade-out">
            {/* <h2 className='font-bold text-xl '>Bitte nimm dir einen Moment Zeit und gib uns Feedback!</h2>
            <h3 className='font-bold text-3s '>Klicke auf den Link und beantworte einige wenige Fragen. Damit hilfst du uns unsere Lernplattform weiter zu verbessern. Vielen Dank!</h3> */}
            <NewsletterSubiFrame />
            <div className="flex flex-col md:flex-row justify-around  gap-5 py-5">
              <PrimaryButton customClassButton='md:w-max ' onClick={handleNewsletterSubClick}>Ich bin bereits Abonnent</PrimaryButton>
              <PrimaryButton customClassButton='md:w-max ' onClick={handleSkipNewsletterSub}>Überspringen</PrimaryButton>
            </div>
          </div>
        )}


        {showMintNftDirections && videoEnded && !showSpinner && (
          <div className="fade-out">
            <h2 className='font-bold text-3xl '>Super! Du bist beim letzten Video dieser Quest angekommen. Wenn du alle Challenges erfüllt hast,
              dann schließe jetzt dieses Popup-Fenster und klicke den &quot;Mint NFT&quot; Button für diese Quest. Im folgenden Popup-Fenster wird dir der nächste Schritt erklärt! Alternativ
              kannst du dir die Videos für diese Quest nochmal anschauen.</h2>
            <div className="flex flex-col md:flex-row justify-around gap-5 py-5">
              <PrimaryButton customClassButton='md:w-max' buttonDisabled={!showPrevButton} onClick={displayPrevVideo}>Vorheriges Video</PrimaryButton>
              <PrimaryButton customClassButton='md:w-max' onClick={replayVideo}>Video nochmal abspielen</PrimaryButton>
              <PrimaryButton customClassButton='md:w-max' buttonDisabled={!showNextButton} onClick={displayNextVideo}>Nächstes Video</PrimaryButton>
            </div>
          </div>

        )}

        {showNavButtons && !showSpinner && <div className="flex flex-col sm:flex-row justify-around gap-5 py-5 ">
          <PrimaryButton customClassButton='sm:w-max' buttonDisabled={!showPrevButton} onClick={displayPrevVideo}>Vorheriges Video</PrimaryButton>
          <PrimaryButton customClassButton='sm:w-max' buttonDisabled={!showNextButton} onClick={displayNextVideo}>Nächstes Video</PrimaryButton>
        </div>}
        {!videoEnded &&
          <div className='w-full bg-slate-100 dark:bg-gray-800 rounded-b-xl p-5 sm:p-10 flex flex-col space-y-5' >
            <div className='w-full flex flex-row justify-center mb-10 ' >
              <div className='max-w-5xl flex flex-col-reverse md:flex-row justify-between lg:px-10 w-full'>

                <div className='  flex flex-col md:flex-row items-center gap-x-5' >
                  <h2 className='font-bold text-xl sm:text-3xl max-lg:w-[80%]  md:w-fit lg:!text-start' > {currentLesson?.title} </h2>
                  <span className="h-5 w-5 relative mx-auto mt-2 ">
                    <button onClick={scrollToCalendly} >
                      <Image src={isDarkMode ? "/support/info-icon-light.svg" : "/support/info-icon-dark.svg"}
                        alt="Vereinbare ein Termin mit Calendly" fill sizes="10px"
                      />
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-center' >
              <div className='max-w-5xl' >
                <div className='lg:mx-10 space-y-8 '>
                  {currentLesson.transcript && currentLesson.transcript.map((row: Transcript | string, i) => (
                    <div key={i}>
                      {typeof row === "object" ?

                        <div>
                          {row.title && <h3 className='text-2xl font-bold mb-6 !text-start'>{row.title}</h3>}
                          {row.subline && <h4 className='font-bold mb-1 !text-start'>{row.subline}</h4>}
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
          </div>}

        {/* <article ref={calendlyRef} id='calendly' className='pb-10 flex flex-col items-center pt-20' >
          <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col-reverse 
          md:flex-row w-full items-center justify-between rounded-lg relative'
          >
            <div className='flex flex-col grow items-center gap-5 sm:gap-2 lg:gap-4 max-md:py-10 mx-auto lg:px-2  xl:px-0 '>
              <h4 className='text-2xl max-md:text-4xl lg:text-4xl font-bold  text-center'>
                Du hast noch Fragen?
              </h4>
              <p className='tracking-wider text-center md:max-w-[360px] lg:max-w-[420px] xl:w-[500px]  mb-3'>
                Erhalte maßgeschneiderte Beratung von unseren Experten und löse all deine spezifischen
                Krypto-Fragen in unseren persönlichen Online-Coachings.
              </p>
              <p className='tracking-wider text-center md:max-w-[360px] lg:max-w-[420px] xl:w-[500px]  '>
                Nutze unser limitiertes Angebot!
              </p>
              <PrimaryButton href='https://calendly.com/teachmedefi/1std' customClassButton='text-center' target='_blank' >Termin buchen </PrimaryButton>
            </div>
            <div className='relative aspect-square md:h-60 lg:h-96 max-md:w-full  lg:w-96  ' >
              <Image src={"/support/support-banner-img.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
            </div>
          </div>
        </article> */}

        <article className='pb-10 flex flex-col items-center pt-20' >
          <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col-reverse 
          md:flex-row w-full items-center justify-between rounded-lg relative'
          >
            <div className='flex flex-col grow items-center gap-5 sm:gap-2 lg:gap-4 max-md:py-10 mx-auto lg:px-2  xl:px-0 '>
            <h3 className=' text-2xl sm:text-4xl font-bold text-center '>Abonniere <br className="xl:hidden" /> unseren  Newsletter</h3>
              <PrimaryButton href='https://www.newsletter.teachmedefi.de/' customClassButton='text-center' target='_blank' >Starte jetzt! </PrimaryButton>
            </div>
            <div className='relative aspect-square md:h-60 lg:h-96 max-md:w-full  lg:w-96  ' >
              <Image src={"/home/newsletter_mailbox.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
            </div>
          </div>
        </article>
      </div>

    </section>
  )
}
