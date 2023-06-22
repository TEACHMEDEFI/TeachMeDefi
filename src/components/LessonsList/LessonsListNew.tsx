
import Link from 'next/link'
import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { Lesson } from '@/data/generalLessons'
import { Quests } from '@/data/generalLessons'
import { ClaimRewardButton } from '../Buttons/Buttons'
import { useUserProgress } from '../../pages/api/ethereum-api'
import { useIsProgressNftMintable } from '../scripts/claim-modals-api'
import Image from 'next/image';
import { BN } from 'bn.js';


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
    title: string;
    isQuestSection?: boolean;
    isGeneralSection?: boolean;
    isTheorySection?: boolean;
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


export default function LessonsListNew({chain, lessonsArray, title, isQuestSection, isGeneralSection, isTheorySection }: LessonsListProps) {
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
  const togglePopup = (questId: string) => {
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
        console.log(lessonsArray)
        let listItemsPerQuest: listItemsPerQuest = {}

        lessonsArray.forEach((quests: Quests, j) => (
            listItemsPerQuest[quests.questSectionId] =  quests.lessons.map((quest: Lesson, i) => (
                <li key={quest.id} className={imageClasses[quest.id]}><i className="fa-regular fa-play" /><a href={`/${chain}/${quest.slug}`}> 3:32 Min</a></li>
                
            ))
        ))

        return listItemsPerQuest[questSectionId];
    }

    /*
    * Creates the li Elements the video descriptions
    */
  //   const renderVideoDescriptionsquestSectionId = (questSectionId: string) => {
  //     console.log(lessonsArray)
  //     let listItemsPerQuest: listItemsPerQuest = {}

  //     lessonsArray.forEach((quests: Quests, j) => (
  //         listItemsPerQuest[quests.questSectionId] =  quests.lessons.map((quest: Lesson, i) => (
  //             <li key={quest.id} className={imageClasses[quest.id]}><i className={chain === 'eth' ? 'fa-brands fa-ethereum' : 'fa-sharp fa-regular fa-circle-dot'}></i> Video {i + 1}: {quest.title}</li>
  //         ))
  //     ))

  //     return listItemsPerQuest[questSectionId];
  // }

    
    return (
        <div className='lesson-list-container'>
            <h2 className='font-bold text-2xl' >{title}</h2>
            <h3 className='font-italic text-2xl'> 22:52 Min</h3>
             {lessonsArray && lessonsArray.map((quests: Quests, i) => (
                <div className="quest-container" key={quests.questSectionId}>
                  {isQuestSection ? (<><h2 className="font-bold text-xl">{quests.questTitle}</h2></>) : null}
                  
                  {/* <div className="video-description-container">
                    <ul className="video-description-list ul-plain">
                      {renderVideoDescriptionsquestSectionId(quests.questSectionId)}

                    </ul>
                  </div> */}

                  <div className="progress-container">
                    
                   {/* <h3 className='pl-5' >Dein Fortschritt:</h3> */}

                    <ul className="ul-circles">
                      {renderProgressBarItems(quests.questSectionId)}

                          {isQuestSection ? (
                          <>
                            <li><i className="fa-regular fa-hexagon-vertical-nft" /><button onClick={() => togglePopup(quests.questSectionId)}>Erhalte hier dein NFT</button></li>
                          </>)
                          
                          :
                          null
                          }
                      {showPopup && showPopup[quests.questSectionId] && chain === 'eth' ? <QuestClaimModalEth questSectionId={quests.questSectionId} togglePopup={togglePopup} /> : null}

                      {showPopup && showPopup[quests.questSectionId] && chain === 'dot' ? <QuestClaimModalDot questSectionId={quests.questSectionId} togglePopup={togglePopup} 
                          selectedPolkaAccount={selectedAccount} setSelectedPolkaAccount={setSelectedPolkaAccount} /> : null}
                    </ul>
                  </div>
                </div>         
            ))}
        </div>
    )
}
