
'use client';

import { ethLessons } from "@/data/ethLessons";
import { Lesson } from "@/data/generalLessons";
import { GetStaticPaths, GetStaticProps } from "next";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
// import LinksAndIndexBurger from "@/components/LinksAndContents/LinksAndContents";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";

type Params = {
  lesson: string
}

export default function LessonPage({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {



  return (
    <main className='w-full flex flex-col  items-center ' >
      <VideoWithTranscript currentLesson={currentLesson} nextLessonSlug={nextLessonSlug}  />
      <LessonsBurgerMenu />
      {/* <LinksAndIndexBurger /> */}
    </main>
  )
}


export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = ethLessons.map((lesson) => ({
    params: { lesson: lesson.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ currentLesson: Lesson | undefined }, Params> = async ({
  params,
}) => {
  const { lesson } = params!
  
  const currentLessonIndex = ethLessons.findIndex(
    (currentLesson) => currentLesson.slug === lesson
  )

  console.log(currentLessonIndex)

  const currentLesson = ethLessons.find(
    (currentLesson) => currentLesson.slug === lesson
  )

  const nextLessonSlug = (ethLessons.length !== currentLessonIndex + 1) ?
    `/eth/${ethLessons[currentLessonIndex + 1].slug}` : ""

  return {
    props: {
      currentLesson: currentLesson,
      nextLessonSlug,
    },
  }
}
