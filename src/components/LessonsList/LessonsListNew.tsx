import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { Lesson } from '@/data/generalLessons'
import { Quests } from '@/data/generalLessons'
import { useUserProgress } from '../../pages/api/ethereum-api'
import { useIsProgressNftMintable } from '../scripts/claim-modals-api'
import { BN } from 'bn.js';
import Link from 'next/link';
import LessonPage from '@/components/Modals/VideoModal'



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


export default function LessonsListNew({chain, lessonsArray, title, isQuestSection, isGeneralSection, isTheorySection, totalVideoTime }: LessonsListProps) {
const [hasProgress] = useUserProgress();
const [imageClasses, setImageClasses] = useState<ImageSourceObject>()
const [showPopup, setShowPopup] = useState<QuestModalShow>();
const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
const imageSourceObject: ImageSourceObject = {}
const nftMintable = useIsProgressNftMintable('', 'token', new BN(0), false);

  useEffect(() => {
    // Set Lessons Progress bar Color
    
    lessonsArray.forEach((quests: Quests, i) => {  
      quests.lessons.forEach((quest: Lesson) => {
        const questId = quest.id;

        imageSourceObject[questId] = hasProgress(questId) ? 'has-progress-circle' : 'has-no-progress-circle'
      }) 
    });

    setImageClasses(imageSourceObject);
  }, [showPopup])

  /*
  * Handles Modal Toggle and is passed as props
  */
  const togglePopup = (questId: string, event: Event | undefined) => {
    event?.preventDefault();

    const show : QuestModalShow = {};
    show[questId] = true;
    setShowPopup(show)
  }


    /*
    * Helper Function to pass as props
    */
    const setSelectedPolkaAccount = (account: InjectedAccountWithMeta) => {
        setSelectedAccount(account)
    }


    if (!imageClasses) {
        return ( <></>)
    }


    /*
    * Creates the li Elements for each specific listof Quests
    */
    const renderProgressBarItems = (questSectionId: string) => {
        let listItemsPerQuest: listItemsPerQuest = {}

        lessonsArray.forEach((quests: Quests, j) => (
            listItemsPerQuest[quests.questSectionId] =  quests.lessons.map((quest: Lesson, i) => (
                <Link onClick={() => togglePopup(quest.id, event)} key={quest.id} href="javascript:;" className={`${imageClasses[quest.id]} bg-[#fdfdfd] dark:bg-gray-700 sm:mb-7 ` }><i className="fa-regular fa-play" /> {quest.videoTime} Min</Link>
                
            ))
        ))

        return listItemsPerQuest[questSectionId];
    }


    const renderVideoModals = (questSectionId: string) => {
      let lessonModalsPerQuest: listItemsPerQuest = {}

      lessonsArray.forEach((quests: Quests, j) => (
        lessonModalsPerQuest[quests.questSectionId] = quests.lessons.map((quest: Lesson, i) => (
            // @ts-ignore: Object is possibly 'null'.
            <LessonPage key={quest.id} currentLesson={quest} modalOpen={showPopup[quest.id]} togglePopup={togglePopup} />
          ))
      ))

      return lessonModalsPerQuest[questSectionId]
    }

    
    return (
        <div className='lesson-list-container'>
            { title && <h2 className='font-bold text-xl' >{title}</h2>}
            <h3 className='italic text-xl'> {totalVideoTime} Min</h3>
             {lessonsArray && lessonsArray.map((quests: Quests, i) => (
                <div className="quest-container" key={quests.questSectionId}>
                  {isQuestSection ? (<><h2 className="font-bold text-xl">{quests.questTitle}</h2></>) : null}
                  {isQuestSection ? (<><h3 className=" text-xl italic">{questVideoTimes[quests.questSectionId]}</h3></>) : null}

                  <div className="progress-container">

                    <ul className="ul-circles">
                      {renderProgressBarItems(quests.questSectionId)}

                          {isQuestSection ? (
                            <>
                              <Link href="javascript:;" className="is-nft-mint bg-[#fdfdfd] dark:bg-gray-700" onClick={() => togglePopup(quests.questSectionId, event)}><i className="fa-light fa-trophy" />Mint NFT</Link>
                            </>)
                            :
                            null
                          }
                          
                      {showPopup && showPopup[quests.questSectionId] && chain === 'eth' ? <QuestClaimModalEth questSectionId={quests.questSectionId} togglePopup={togglePopup} /> : null}

                      {showPopup && showPopup[quests.questSectionId] && chain === 'dot' ? <QuestClaimModalDot questSectionId={quests.questSectionId} togglePopup={togglePopup} 
                          selectedPolkaAccount={selectedAccount} setSelectedPolkaAccount={setSelectedPolkaAccount} /> : null}
                    </ul>

                    {renderVideoModals(quests.questSectionId)}
                  </div>
                </div>         
            ))}
        </div>
    )
}
