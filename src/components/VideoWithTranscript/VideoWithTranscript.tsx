
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import { Lesson } from '@/data/lessonsData';
import { PrimaryButton } from '../Buttons/Buttons';

export default function VideoWithTranscript({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  return (
    <section className='w-full' >
      <div className='w-full relative' >
        {/* <div className='aspect-video ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 150px)" }} ></div> */}
        <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
          {showPlayer && <ReactPlayer
            height="100%"
            width="100%"
            url={currentLesson.youtubeUrl}
            // onEnded={() => setProgress('Video - Id to write to local storage')}
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
        <div className='w-full flex justify-between ' >
          <div className='w-1/2' >
            <h2 className='font-bold text-2xl ' > {currentLesson?.title} </h2>
          </div>
          <div className='w-1/2' >
            {
              nextLessonSlug && <PrimaryButton href={nextLessonSlug}> Next </PrimaryButton>
            }
          </div>
        </div>
        <h3 className='font-bold text-xl '>Transcript</h3>
        <p>
          {currentLesson.transcript}
        </p>
      </div>
    </section>
  )
}