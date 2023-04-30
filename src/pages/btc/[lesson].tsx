
'use client';

import { useState, useEffect } from "react";
import { btcLessons, Lesson } from "@/data/lessonsData";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactPlayer from "react-player";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import LinksAndIndexBurger from "@/components/LinksAndContents/LinksAndContents";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";


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
      <VideoWithTranscript lesson={lesson} />
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