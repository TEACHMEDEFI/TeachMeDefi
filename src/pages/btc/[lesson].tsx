
'use client';

import { btcLessons } from "@/data/btcLessons";
import { Lesson } from "@/data/generalLessons";
import { GetStaticPaths, GetStaticProps } from "next";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import LinksAndIndexBurger from "@/components/LinksAndContents/LinksAndContents";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";
import { dotQuests } from '@/data/dot';


type Params = {
  lesson: string
}

export default function LessonPage({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {
  const questForProgressBar = dotQuests.find(quest => quest.lessons.some(lesson => lesson.id === currentLesson.id));

  return (
    <main className='w-full flex flex-col  items-center ' >
      <VideoWithTranscript currentLesson={currentLesson} nextLessonSlug={nextLessonSlug} questForProgressBar={questForProgressBar} chain="dot"  />
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

export const getStaticProps: GetStaticProps<{ currentLesson: Lesson | undefined }, Params> = async ({
  params,
}) => {
  const { lesson } = params!

  const currentLessonIndex = btcLessons.findIndex(
    (currentLesson) => currentLesson.slug === lesson
  )

  const currentLesson = btcLessons.find(
    (currentLesson) => currentLesson.slug === lesson
  )

  const nextLessonSlug = (btcLessons.length !== currentLessonIndex + 1) ?
    `/btc/${btcLessons[currentLessonIndex + 1].slug}` : ""

  return {
    props: {
      currentLesson: currentLesson,
      nextLessonSlug,
    },
  }
}