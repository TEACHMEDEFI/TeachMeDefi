
'use client';

import { dotLessons } from "@/data/dotLessons";
import { Lesson } from "@/data/generalLessons";
import { GetStaticPaths, GetStaticProps } from "next";
import { dotQuests } from '@/data/dot';
import { generalLessons } from '@/data/generalLessons';
import { dotTheory } from '@/data/dot/dotTheory'
import { questSicherheit } from "@/data/eth/quest-sicherheit";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";


type Params = {
  lesson: string
}

export default function LessonPage({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {
  let questForProgressBar = dotQuests.find(quest => quest.lessons.some(lesson => lesson.id === currentLesson.id));
  let isQuestSection = true;
  let safetyLessons: any = [];

  if (!questForProgressBar) {
    questForProgressBar = dotTheory.find(quest => quest.lessons.some(lesson => lesson.id === currentLesson.id));
    isQuestSection = false
  }

  if (!questForProgressBar) {
    questForProgressBar = generalLessons.find(quest => quest.lessons.some(lesson => lesson.id === currentLesson.id));
    isQuestSection = false
  }

  if (!questForProgressBar) {
    questSicherheit.forEach((sicherheit) => {
      safetyLessons.push(sicherheit)
    })

    questForProgressBar = {
        questTitle: 'safety',
        lessons: safetyLessons,
        questSectionId: 'safety'

    }
    isQuestSection = false
  }

  if (!questForProgressBar) {
    return (<></>)
  }


  return (
    <main className='w-full flex flex-col  items-center ' >
      <VideoWithTranscript currentLesson={currentLesson} nextLessonSlug={nextLessonSlug} questForProgressBar={questForProgressBar} chain="dot" isQuestSection={isQuestSection} />
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