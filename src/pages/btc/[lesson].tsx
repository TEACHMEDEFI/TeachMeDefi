
'use client';

import { useState, useEffect } from "react";
import { btcLessons, Lesson } from "@/data/lessonsData";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactPlayer from "react-player";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import LinksAndIndexBurger from "@/components/LinksAndContents/LinksAndContents";


type Params = {
  lesson: string
}

export default function LessonPage({ lesson }: { lesson: Lesson }) {

  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);
  return (
    <main className='w-full flex flex-col  items-center ' >
      <section className='w-full' >
        <div className='w-full relative' >
          {/* <div className='aspect-video ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 150px)" }} ></div> */}
          <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
            {showPlayer && <ReactPlayer
              height="100%"
              width="100%"
              url={lesson.youtubeUrl}
              config={{
                youtube: {
                  playerVars: { fs: 1 }
                }
              }}
            />
            }
          </div>
        </div>
        <div className='w-full  bg-bgDarkerGray rounded-b-xl p-10 flex flex-col space-y-5' >
          <h2 className='font-bold text-2xl ' > {lesson?.title} </h2>
          <h3 className='font-bold text-xl '>Transcript</h3>
          <p>
            {lesson.transcript}
          </p>
        </div>
      </section>
      <LessonsBurgerMenu />
      <LinksAndIndexBurger />
    </main>
  )
}


export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = btcLessons.map((lesson) => ({
    params: { lesson: lesson.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ lesson: Lesson }, Params> = async ({
  params,
}) => {
  const { lesson } = params!

  const currentLesson = btcLessons.find(
    (currentLesson) => currentLesson.slug === lesson
  )

  return {
    props: {
      lesson: currentLesson!,
    },
  }
}