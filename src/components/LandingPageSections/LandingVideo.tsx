

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function LandingVideo() {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  return (
    <section className='mt-22 flex flex-col items-center relative px-5' >
      {/* <h3 className="text-4xl font-bold text-center max-w-5xl mb-5" >Entdecke die faszinierende Welt der Kryptowährungen: Starte deine Reise zu finanziellem Erfolg mit unserem Einführungsvideo!</h3> */}
      {showPlayer &&
        <div className='bg-slate-100 dark:bg-bgDarkGray w-full aspect-video p-2 xl:p-5 rounded-xl'>
          <div className=' w-full aspect-video xl:px-0 xl:h-[676px] xl:w-[1200px] ' >
            <ReactPlayer
              height="100%"
              width="100%"
              url="https://youtu.be/20xgeCs3aw4"
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
  )
}
