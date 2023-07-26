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
    onModalOpen: Function
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


export default function LessonsListNew({chain, lessonsArray, title, isQuestSection, onModalClose, onModalOpen, totalVideoTime }: LessonsListProps) {
  const [hasProgress, setHasProgress] = useUserProgress();
  const [showPopup, setShowPopup] = useState<QuestModalShow>();
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
  const [isLarge, setIsLarge] = useState<{ [key: string]: boolean }>({});
  const [imageClasses, setImageClasses] = useState<ImageSourceObject>()


  useEffect(() => {
    const imageSourceObject: ImageSourceObject = {}

    lessonsArray.forEach((quests: Quests, i) => {  
      quests.lessons.forEach((quest: Lesson) => {
        const questId = quest.id;

        imageSourceObject[questId] = hasProgress(questId) ? 'has-progress-circle' : 'has-no-progress-circle'
      }) 
    });

    setImageClasses(imageSourceObject);
  
  }, [showPopup]);




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

    onModalOpen()
  }

  const onCloseNft = (questSectionid: string) => {
    const show : QuestModalShow = {};

    show[questSectionid] = false;
    setShowPopup(show)
    onModalClose(questSectionid)
  }

  const onClose = (questId: string, questSectionid: string) => {
    const show : QuestModalShow = {};
    show[questId] = true;
    setShowPopup(show)
    onModalClose(questSectionid)


    setTimeout(() => {
      setIsLarge((prevIsLarge) => ({
        ...prevIsLarge,
        [questSectionid]: true,
      }));
    }, 1000);


    // Reset isLarge to false after 1 second
    setTimeout(() => {
      setIsLarge((prevIsLarge) => ({
        ...prevIsLarge,
        [questSectionid]: false,
      }));
    }, 2000);
  }


  const isModalOpen = (questId: string) => {
    const modalOpen = showPopup && showPopup[questId]

    return modalOpen
  }

  /*
    * Creates the li Elements for each specific listof Quests
    */
  const renderProgressBarItems = (questSectionId: string) => {
    let listItemsPerQuest: listItemsPerQuest = {}

    lessonsArray.forEach((quests: Quests, j) => (
        listItemsPerQuest[quests.questSectionId] =  quests.lessons.map((quest: Lesson, i) => (
            <Link onClick={() => togglePopup(quest.id)} key={quest.id} href="#" className={`${imageClasses && imageClasses[quest.id]} bg-[#fdfdfd] dark:bg-gray-700 sm:mb-7 ` }><i className="fa-regular fa-play" /> {quest.videoTime} Min</Link>
            
        ))
    ))

    return listItemsPerQuest[questSectionId];
}

  /*
  * Helper Function to pass as props
  */
  const setSelectedPolkaAccount = (account: InjectedAccountWithMeta) => {
      setSelectedAccount(account)
  }

  // ${modelOpenClass && 'modal-open-no-scroll'}`}


    return (
        <div className='lesson-list-container'>
            { title && <h2 className='font-bold text-xl' >{title}</h2>}
            <h3 className='italic text-xl'> {totalVideoTime} Min</h3>
             {lessonsArray && lessonsArray.map((quests: Quests, i) => (
                <QuestContainer key={quests.questSectionId} isLarge={isLarge[quests.questSectionId] || false} className='quest-container' id={quests.questSectionId}>
                  {isQuestSection ? (<><h2 className="font-bold text-xl">{quests.questTitle}</h2></>) : null}
                  {isQuestSection ? (<><h3 className=" text-xl italic">{questVideoTimes[quests.questSectionId]}</h3></>) : null}

                    <div className="progress-container">

                    <ul className="ul-circles">
                      {renderProgressBarItems(quests.questSectionId)}

                          {isQuestSection ? (
                            <>
                              <Link href="#" className="is-nft-mint bg-[#fdfdfd] dark:bg-gray-700" onClick={() => togglePopup(quests.questSectionId)}><i className="fa-light fa-trophy" />Mint NFT</Link>
                            </>)
                            :
                            null
                          }
                        
                      {// @ts-ignore
                      showPopup && showPopup[quests.questSectionId] && chain === 'eth' ? <QuestClaimModalEth questSectionId={quests.questSectionId} togglePopup={togglePopup} onClose={onCloseNft} modalOpen={isModalOpen(quests.questSectionId)} /> : null}

                      {showPopup && showPopup[quests.questSectionId] && chain === 'dot' ? <QuestClaimModalDot questSectionId={quests.questSectionId} togglePopup={togglePopup}
                      // @ts-ignore
                          selectedPolkaAccount={selectedAccount} setSelectedPolkaAccount={setSelectedPolkaAccount} onClose={onCloseNft} modalOpen={isModalOpen(quests.questSectionId)} /> : null}
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
