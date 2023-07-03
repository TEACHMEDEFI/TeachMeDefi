import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { Lesson } from '@/data/generalLessons'
import { Quests } from '@/data/generalLessons'
import { useUserProgress } from '../../pages/api/ethereum-api'
import { useIsProgressNftMintable } from '../scripts/claim-modals-api'
import { BN } from 'bn.js';
import Link from 'next/link';


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
                <Link key={quest.id} href={`/${chain}/${quest.slug}`} className={`${imageClasses[quest.id]} bg-[#fdfdfd] dark:bg-gray-700 sm:mb-7` }><i className="fa-regular fa-play" /> 3:32 Min</Link>
                
            ))
        ))

        return listItemsPerQuest[questSectionId];
    }

    
    return (
        <div className='lesson-list-container'>
            <h2 className='font-bold text-2xl' >{title}</h2>
            <h3 className='font-italic text-2xl'> 22:52 Min</h3>
             {lessonsArray && lessonsArray.map((quests: Quests, i) => (
                <div className="quest-container" key={quests.questSectionId}>
                  {isQuestSection ? (<><h2 className="font-bold text-xl">{quests.questTitle}</h2></>) : null}
                  <h3>7:32</h3>

                  <div className="progress-container">

                    <ul className="ul-circles">
                      {renderProgressBarItems(quests.questSectionId)}

                          {isQuestSection ? (
                            <>
                              <Link href="javascript:;" className="is-nft-mint bg-[#fdfdfd] dark:bg-gray-700" onClick={() => togglePopup(quests.questSectionId, event)}><i className="fa-solid fa-handshake" />Mint NFT</Link>
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
