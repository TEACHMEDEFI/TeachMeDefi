

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function LandingVideo() {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  return (
    <section className='my-44 flex flex-col items-center ' >
        {showPlayer &&
          <div className='bg-slate-100 dark:bg-bgDarkGray p-10 rounded-xl'>
            <div className='h-[540px] w-[960px] ' >
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
