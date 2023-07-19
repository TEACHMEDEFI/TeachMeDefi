import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { Lesson } from '@/data/generalLessons'
import { Quests } from '@/data/generalLessons'
import { useUserProgress } from '../../pages/api/ethereum-api'
import Link from 'next/link';
import LessonPage from '@/components/Modals/VideoModal'
import styled, { css } from 'styled-components';



/*
* Dynamic Imports die to NextJS Server Side Prerendering
*/
const QuestClaimModalEth = dynamic(() => import('../Modals/QuestClaimModalEth'), {
  ssr: false,
});

const QuestClaimModalDot = dynamic(() => import('../Modals/QuestClaimModalDot'), {
  ssr: false,
});


type LessonsListProps = {
    lessonsArray: Quests[];
    chain: string;
    title?: string;
    isQuestSection?: boolean;
    isGeneralSection?: boolean;
    isTheorySection?: boolean;
    totalVideoTime: string;
    onModalClose: Function;
  }

type ImageSourceObject = {
    [key: string]: string
}

type QuestModalShow = {
    [key: string]: boolean
}

type listItemsPerQuest = {
    [key: string]: Array<any>
}


type QuestVideoTimes = {
  [key: string]: string
}


const questVideoTimes: QuestVideoTimes = {
  'dot-quest-1': '09:58',
  'dot-quest-2': '14:18',
  'dot-quest-3': '03:33',
  'dot-quest-4': '04:09',
  'dot-quest-5': '16:23',

  'eth-quest-1': '22:09',
  'eth-quest-2': '22:39',
  'eth-quest-3': '07:12',
  'eth-quest-4': '11:49',
  'eth-quest-5': '22:17',
  'eth-quest-6': '05:26',
  'eth-quest-7': '27:47'
}


const QuestContainer = styled.div<{ isLarge: boolean }>`
  transition: transform 0.3s;

  ${({ isLarge }) =>
    isLarge &&
    css`
      transform: scale(1.1);
    `}
`;


export default function LessonsListNew({chain, lessonsArray, title, isQuestSection, onModalClose, totalVideoTime }: LessonsListProps) {
  const [hasProgress, setHasProgress] = useUserProgress();
  const [showPopup, setShowPopup] = useState<QuestModalShow>();
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
  const [isLarge, setIsLarge] = useState<{ [key: string]: boolean }>({});


  useEffect(() => {
  
  }, []);

  const setUserProgress = (questId: string) => {
    setHasProgress(questId, 'check')
  }

 
  /*
  * Handles Modal Toggle and is passed as props
  */
  const togglePopup = (questId: string) => {
    const show : QuestModalShow = {};
    show[questId] = true;
    setShowPopup(show)
    console.log('classes are rerendered')
  }

  const onClose = (questId: string, questSectionid: string) => {
    const show : QuestModalShow = {};
    show[questId] = true;
    setShowPopup(show)
    onModalClose()


    setIsLarge((prevIsLarge) => ({
      ...prevIsLarge,
      [questSectionid]: true,
    })); // Set isLarge for the specific questSectionId to true to trigger the CSS transition effect

    // Reset isLarge to false after 1 second
    setTimeout(() => {
      setIsLarge((prevIsLarge) => ({
        ...prevIsLarge,
        [questSectionid]: false,
      }));
    }, 1000);
  }


  const isModalOpen = (questId: string) => {
    const modalOpen = showPopup && showPopup[questId]

    return modalOpen
  }


  /*
  * Helper Function to pass as props
  */
  const setSelectedPolkaAccount = (account: InjectedAccountWithMeta) => {
      setSelectedAccount(account)
  }


    return (
        <div className='lesson-list-container'>
            { title && <h2 className='font-bold text-xl' >{title}</h2>}
            <h3 className='italic text-xl'> {totalVideoTime} Min</h3>
             {lessonsArray && lessonsArray.map((quests: Quests, i) => (
                <QuestContainer key={quests.questSectionId} isLarge={isLarge[quests.questSectionId] || false} className='quest-container'>
                  {isQuestSection ? (<><h2 className="font-bold text-xl">{quests.questTitle}</h2></>) : null}
                  {isQuestSection ? (<><h3 className=" text-xl italic">{questVideoTimes[quests.questSectionId]}</h3></>) : null}

                    <div className="progress-container">

                      <ul className="ul-circles">
                          {quests.lessons.map((quest: Lesson) => (
                        <Link
                          onClick={() => togglePopup(quest.id)}
                          key={quest.id}
                          href='javascript:;'
                          className={`${hasProgress(quest.id) ? 'has-progress-circle' : 'has-no-progress-circle'} bg-[#fdfdfd] dark:bg-gray-700 sm:mb-7`}
                        >
                          <i className='fa-regular fa-play' /> {quest.videoTime} Min
                        </Link>
                      ))}

                      {isQuestSection && (
                        <>
                          <Link
                            href='javascript:;'
                            className='is-nft-mint bg-[#fdfdfd] dark:bg-gray-700'
                            onClick={() => togglePopup(quests.questSectionId)}
                          >
                            <i className='fa-light fa-trophy' />Mint NFT
                          </Link>
                        </>
                      )}

                    {showPopup && showPopup[quests.questSectionId] && chain === 'eth' ? (
                      <QuestClaimModalEth questSectionId={quests.questSectionId} togglePopup={togglePopup} />
                    ) : null}

                    {showPopup && showPopup[quests.questSectionId] && chain === 'dot' ? (
                      <QuestClaimModalDot
                        questSectionId={quests.questSectionId}
                        togglePopup={togglePopup}
                        selectedPolkaAccount={selectedAccount}
                        setSelectedPolkaAccount={setSelectedPolkaAccount}
                      />
                    ) : null}
                  </ul>

                  {quests.lessons.map((quest: Lesson, i: number) => (
                    <LessonPage
                      key={quest.id}
                      currentLesson={quest}
                      // @ts-ignore
                      modalOpen={isModalOpen(quest.id)}
                      onClose={onClose}
                      setUserProgress={setUserProgress}
                      questSectionid={quests.questSectionId} // Pass hasProgress function as prop
                      currentQuest={quests}
                      currentQuestIndex={i}
                      isQuestSection
                    />
                  ))}
                </div>
            </QuestContainer>
          ))}
      </div>
    )
}
