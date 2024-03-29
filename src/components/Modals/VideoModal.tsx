
'use client';

import { useEffect, useState } from 'react';
import { Lesson } from "@/data/generalLessons";
import VideoWithTranscript from "@/components/VideoWithTranscript/VideoWithTranscript";
import { GeneralButton } from "@/components/Buttons/Buttons";
import { Quests } from '@/data/generalLessons'
import Spinner from '../Spinner/Spinner';



type LessonPageProps = {
    currentLesson: Lesson
    modalOpen: boolean
    onClose: Function;
    setUserProgress: Function
    questSectionid: string;
    currentQuest: Quests;
    currentQuestIndex: number;
    isQuestSection: boolean
}


export default function LessonPage({ currentLesson, modalOpen, onClose, setUserProgress, questSectionid,
    currentQuest, currentQuestIndex, isQuestSection }: LessonPageProps) {
    const [lesson, setLesson] = useState<Lesson>(currentLesson);
    const [lessonIndex, setLessonIndex] = useState<number>(currentQuestIndex)
    const [showSpinner, setShowSpinner] = useState<boolean>(false);

    const handleClose = () => {
        onClose(currentLesson, questSectionid)
    }

    const handleOutsideClick = (event: MouseEvent) => {
        const modalElement = document.querySelector('.lesson-page-modal');
        if (modalElement && !modalElement.contains(event.target as Node)) {
            handleClose();
        }
    };

    useEffect(() => {
        if (modalOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [modalOpen]);



    const displayNextVideoInModal = () => {
        setShowSpinner(true)
        setLesson(currentQuest.lessons[lessonIndex + 1])
        setLessonIndex(lessonIndex + 1);

        setTimeout(() => setShowSpinner(false), 1000)
    }
  
  
    const displayPrevVideoInModal = () => {
        setShowSpinner(true)
        setLesson(currentQuest.lessons[lessonIndex - 1])
        setLessonIndex(lessonIndex - 1);

        setTimeout(() => setShowSpinner(false), 1000)
    }

    const replayVideoInModal = () => {
        setShowSpinner(true)
        setLesson(currentQuest.lessons[lessonIndex])
        setLessonIndex(lessonIndex);

        setTimeout(() => setShowSpinner(false), 1000)

    }

    if (showSpinner) {
        return (
            <>
            <div className='fixed backdrop-blur-sm top-0 w-screen h-screen left-0 z-50 flex items-center justify-center px-2' >
                <div className='relative w-80 bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16 lesson-page-modal' >
                    <Spinner />
                </div>
            </div>
            </>
        )
    }

    if (!modalOpen) {
        return (<></>)
    }

    return (
        <div className='fixed backdrop-blur-md top-0 w-screen h-[100vh] left-0 z-50 flex items-center justify-center  px-2' >
            <div className='relative w-[95vw] lg:w-[80vw] h-[80vh] lg:h-min bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 p-2 sm:p-4 lesson-page-modal' >
                <VideoWithTranscript currentLesson={lesson} setUserProgress={setUserProgress} 
                    displayNextVideoInModal={displayNextVideoInModal} displayPrevVideoInModal={displayPrevVideoInModal}
                    currentQuest={currentQuest} lessonIndex={lessonIndex} replayVideoInModal={replayVideoInModal} isQuestSection={isQuestSection}  />
                {/* <LessonsBurgerMenu /> */}
                {/* <LinksAndIndexBurger /> */}

                <GeneralButton onClick={() => handleClose()} customClassButton='w-max mx-auto'>Schließen</GeneralButton>
            </div>
        </div>
    )
}

