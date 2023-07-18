
'use client';

import { Lesson } from "@/data/generalLessons";
import LessonsBurgerMenu from "@/components/LessonsBurgerMenu/LessonsBurgerMenu";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";
import { GeneralButton } from "@/components/Buttons/Buttons";



type LessonPageProps = {
    currentLesson: Lesson
    modalOpen: boolean
    togglePopup: Function;
    setUserProgress: Function
}

export default function LessonPage({ currentLesson, modalOpen, togglePopup, setUserProgress }: LessonPageProps) {

    const handleToggle = (open: boolean) => {
        togglePopup(open)
      }

    if (!modalOpen) {
        return (<></>)
    }

    return (
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
            <div className='relative w-[80rem] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >
                <VideoWithTranscript currentLesson={currentLesson} setUserProgress={setUserProgress}  />
                <LessonsBurgerMenu />
                {/* <LinksAndIndexBurger /> */}

                <GeneralButton onClick={() => handleToggle(false)}>Schließen</GeneralButton>
            </div>
        </div>
    )
}

