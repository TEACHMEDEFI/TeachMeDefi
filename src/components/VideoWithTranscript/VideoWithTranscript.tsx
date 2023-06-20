
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import Link from 'next/link';
import { Lesson, Transcript, Links } from '@/data/generalLessons';
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { Input, useToast } from '@chakra-ui/react';
import { useUserProgress } from '../../pages/api/ethereum-api'

export default function VideoWithTranscript({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [hasProgress, setProgress] = useUserProgress();
  // const [handleMint] = useMintNFT('eth-1');
  // const balance = useBalance('eth-1', 'nft');
  const [showPopup, setShowPopup] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const [testState, setTestState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTestState(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const setUserProgress = () => {
    // Update the progress using setProgress
    setProgress(currentLesson.id, 'check');
  };


  // const mintProgressNFT = async () => {
  //   // Update the progress using setProgress
  //   const hash = await handleMint();

  //   return hash;
  // };

  return (
    <section className='w-full ' >
      <div className='w-full relative' >
        {/* <div className='aspect-video ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 150px)" }} ></div> */}
        <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
          {showPlayer && <ReactPlayer
            height="100%"
            width="100%"
            url={currentLesson.youtubeUrl}
            controls={true}
            onEnded={() => setUserProgress()}
            config={{
              youtube: {
                playerVars: { fs: 1 }
              }
            }}
          />
          }
        </div>
      </div>
      <div className='w-full bg-gray-200 dark:bg-bgDarkerGray rounded-b-xl p-10 flex flex-col space-y-5' >
        <div className='w-full flex justify-between mb-10 ' >
          <div className='w-1/2' >
            <h2 className='font-bold text-3xl ' > {currentLesson?.title} </h2>
          </div>
          <div className='w-1/2' >
            {
              nextLessonSlug && <PrimaryButton href={nextLessonSlug}> Next </PrimaryButton>
            }
          </div>

          <div >
            {/* THIS IS FOR TESTING  */}
            <PrimaryButton onClick={() => setShowPopup(!showPopup)}> show popo </PrimaryButton>
          </div>

          {/* {console.log(currentLesson)} */}
          {/* <div className='w-1/2' >
            {
              nextLessonSlug && <button onClick={() => handleButtonClick()}> {userHasProgress() ? 'You Already watched this' : 'Set User Progress'} </button>
            }
          </div> */}

          {/* <div className='w-1/2' >
            {
              <button onClick={() => mintProgressNFT()}> {balance > 0 ? 'You already minted' : 'Mint Your Progress NFT '} </button>
            }
          </div> */}
        </div>
        <div className='flex justify-center' >
          <div className='max-w-5xl' >
            <div className='mx-10 space-y-8 '>
              {currentLesson.transcript && currentLesson.transcript.map((row: Transcript | string, i) => (
                <div key={i}>
                  {typeof row === "object" ?

                    <div>
                      {row.title && <h3 className='text-3xl font-bold mb-6'>{row.title}</h3>}
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
      {showPopup &&
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
      }
    </section>
  )
}