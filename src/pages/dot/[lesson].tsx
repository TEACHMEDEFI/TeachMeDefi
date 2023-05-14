
'use client';

import { dotLessons } from "@/data/dotLessons";
import { Lesson } from "@/data/generalLessons";
import { GetStaticPaths, GetStaticProps } from "next";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import LinksAndIndexBurger from "@/components/LinksAndContents/LinksAndContents";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";

// import {useUserProgress, useMintNFT, useBalance, useFetch} from '../api/ethereum-api';


type Params = {
  lesson: string
}

export default function LessonPage({ currentLesson, nextLessonSlug }: { currentLesson: Lesson, nextLessonSlug: string }) {
  // console.log(lesson)

  // const [hasProgress, setProgress] = useUserProgress();
  // const [handleMint, txHash] = useMintNFT(null);

  // Check whether the user has completed the 'ethereum-quest' challenge
  // const ethereumQuestCompleted = hasProgress('Video - Id to get from local storage');

  // <button onClick={handleMint}>Mint NFT</button>
  // const balance = useCoinBalance("0x1234567890123456789012345678901234567890");

  // const isSuccess = useFetch("Paste a url here!!");


  return (
    <main className='w-full flex flex-col  items-center ' >

      <VideoWithTranscript currentLesson={currentLesson} nextLessonSlug={nextLessonSlug} />
      <LessonsBurgerMenu />
      <LinksAndIndexBurger />
    </main>
  )
}


export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = dotLessons.map((lesson) => ({
    params: { lesson: lesson.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ currentLesson: Lesson }, Params> = async ({
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
      currentLesson: currentLesson!,
      nextLessonSlug,
    },
  }
}