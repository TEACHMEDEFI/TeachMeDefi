
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import { Lesson } from '@/data/generalLessons';
import { PrimaryButton } from '../Buttons/Buttons';
import { useUserProgress, useMintNFT, useBalance } from '../../pages/api/ethereum-api'

export default function VideoWithTranscript({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [hasProgress, setProgress] = useUserProgress();
  const [handleMint] = useMintNFT('eth-1');
  const balance = useBalance('eth-1', 'nft');

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const handleButtonClick = () => {
    // Update the progress using setProgress
    setProgress(currentLesson.lessonId, 'check');
  };


  const mintProgressNFT = async () => {
    // Update the progress using setProgress
    const hash = await handleMint();

    return hash;
  };

  const userHasProgress = () => {

    return hasProgress(currentLesson.lessonId);
  }

  return (
    <section className='w-full' >
      <div className='w-full relative' >
        {/* <div className='aspect-video ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 150px)" }} ></div> */}
        <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
          {showPlayer && <ReactPlayer
            height="100%"
            width="100%"
            url={currentLesson.youtubeUrl}
            controls={true}
            // onEnded={() => setProgress(currentLesson.lessonId)}
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

          {/* <div className='w-1/2' >
            {
              nextLessonSlug && <button onClick={() => handleButtonClick()}> {userHasProgress() ? 'You Already watched this' : 'Set User Progress'} </button>
            }
          </div>

          <div className='w-1/2' >
            {
              <button onClick={() => mintProgressNFT()}> {balance > 0 ? 'You already minted' : 'Mint Your Progress NFT '} </button>
            }
          </div> */}
        </div>
        <div className='flex justify-center' >
          <div className='max-w-5xl' >
            <h3 className='font-bold text-xl ml-10 mb-5'>Transcript</h3>
            <div className='mx-10 space-y-8 '>
              {currentLesson.transcript && currentLesson.transcript}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}