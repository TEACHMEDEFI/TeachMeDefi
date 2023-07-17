
'use client';

import { btcLessons } from "@/data/btcLessons";
import { Lesson } from "@/data/generalLessons";
import { GetStaticPaths, GetStaticProps } from "next";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import LinksAndIndexBurger from "@/components/LinksAndContents/LinksAndContents";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";
import { ethQuests } from '@/data/eth';
import { ethTheory } from '@/data/eth/ethTheory';
import { generalLessons } from '@/data/generalLessons';
import { questSicherheit } from "@/data/eth/quest-sicherheit";


type Params = {
  lesson: string
}

export default function LessonPage({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {
  let questForProgressBar = ethQuests.find(quest => quest.lessons.some(lesson => lesson.id === currentLesson.id));
  let isQuestSection = true;
  let safetyLessons: any = [];

  if (!questForProgressBar) {
    questForProgressBar = ethTheory.find(quest => quest.lessons.some(lesson => lesson.id === currentLesson.id));
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
      <VideoWithTranscript currentLesson={currentLesson} nextLessonSlug={nextLessonSlug} questForProgressBar={questForProgressBar} chain="eth" isQuestSection={isQuestSection} />
      <LessonsBurgerMenu />
      {/* <LinksAndIndexBurger /> */}
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