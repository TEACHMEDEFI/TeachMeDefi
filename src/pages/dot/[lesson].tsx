
'use client';

import { dotLessons } from "@/data/dotLessons";
import { Lesson } from "@/data/generalLessons";
import { GetStaticPaths, GetStaticProps } from "next";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";


type Params = {
  lesson: string
}

export default function LessonPage({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {

  return (
    <main className='w-full flex flex-col  items-center ' >
      {/* <VideoWithTranscript currentLesson={currentLesson} nextLessonSlug={nextLessonSlug} /> */}
      <LessonsBurgerMenu />
      {/* <LinksAndIndexBurger /> */}
    </main>
  )
}


export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = dotLessons.map((lesson) => ({
    params: { lesson: lesson.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ currentLesson: Lesson | undefined }, Params> = async ({
  params,
}) => {
  const { lesson } = params!

  const currentLessonIndex = dotLessons.findIndex(
    (currentLesson) => currentLesson.slug === lesson
  )

  const currentLesson = dotLessons.find(
    (currentLesson) => currentLesson.slug === lesson
  )

  const nextLessonSlug = (dotLessons.length !== currentLessonIndex + 1) ?
    `/dot/${dotLessons[currentLessonIndex + 1].slug}` : ""

  return {
    props: {
      currentLesson,
      nextLessonSlug,
    },
  }
}