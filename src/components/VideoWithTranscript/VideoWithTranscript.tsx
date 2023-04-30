
import { useState, useEffect } from 'react'
import ReactPlayer from "react-player";
import { Lesson } from '@/data/lessonsData';


export default function VideoWithTranscript({ lesson }: { lesson: Lesson }) {
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
            url={lesson.youtubeUrl}
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
        <h2 className='font-bold text-2xl ' > {lesson?.title} </h2>
        <h3 className='font-bold text-xl '>Transcript</h3>
        <p>
          {lesson.transcript}
        </p>
      </div>
    </section>
  )
}