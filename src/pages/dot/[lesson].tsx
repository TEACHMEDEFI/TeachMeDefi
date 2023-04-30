
'use client';

import { useState, useEffect } from "react";
import { dotLessons, Lesson } from "@/data/lessonsData";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactPlayer from "react-player";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import LinksAndIndexBurger from "@/components/LinksAndContents/LinksAndContents";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";

// import {useUserProgress, useMintNFT, useBalance, useFetch} from '../api/ethereum-api';


type Params = {
  lesson: string
}

export default function LessonPage({ lesson }: { lesson: Lesson }) {
  // console.log(lesson)
  const [showPlayer, setShowPlayer] = useState(false);
  // const [hasProgress, setProgress] = useUserProgress();
  // const [handleMint, txHash] = useMintNFT(null);

  // Check whether the user has completed the 'ethereum-quest' challenge
  // const ethereumQuestCompleted = hasProgress('Video - Id to get from local storage');

  // <button onClick={handleMint}>Mint NFT</button>
  // const balance = useCoinBalance("0x1234567890123456789012345678901234567890");

  // const isSuccess = useFetch("Paste a url here!!");

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
  const paths = dotLessons.map((lesson) => ({
    params: { lesson: lesson.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ lesson: Lesson }, Params> = async ({
  params,
}) => {
  const { lesson } = params!

  const currentLesson = dotLessons.find(
    (currentLesson) => currentLesson.slug === lesson
  )

  return {
    props: {
      lesson: currentLesson!,
    },
  }
}