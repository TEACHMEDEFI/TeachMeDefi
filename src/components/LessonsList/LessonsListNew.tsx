
import Link from 'next/link'
import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { Lesson } from '@/data/generalLessons'
import { Quests } from '@/data/generalLessons'
import { ClaimRewardButton } from '../Buttons/Buttons'
import { useUserProgress } from '../../pages/api/ethereum-api'

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




/*
* Handles Modal Toggle and is passed as props
*/
const togglePopup = (questId: string) => {
  const show : QuestModalShow = {};
  show[questId] = true;
  setShowPopup(show)
}


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
    * Helper Function to pass as props
    */
    const setSelectedPolkaAccount = (account: InjectedAccountWithMeta) => {
        setSelectedAccount(account)
    }


    if (!imageClasses) {
        return ( <></>)
    }


    const renderList = (questSectionId: string) => {
        console.log(lessonsArray)
        let listItemsPerQuest: listItemsPerQuest = {}

        lessonsArray.forEach((quests: Quests, i) => (
            listItemsPerQuest[quests.questSectionId] =  quests.lessons.map((quest: Lesson, i) => (
                <li key={quest.id} className={imageClasses[quest.id]}><Link href={`/${chain}/${quest.slug}`}><i className="fa-brands fa-ethereum"></i> {quest.title}</Link></li>
                
            ))
        ))

        return listItemsPerQuest[questSectionId];
    }

    return (    
        <div>
            <h2 className='font-bold text-2xl' >{title}</h2>
             {lessonsArray && lessonsArray.map((quests: Quests, i) => (
                <div key={quests.questSectionId}>
                    <ul className="ul-circles ul-circles-vertical">
                    
                    <h2 className='pl-5' >{quests.questTitle}</h2>
                    {renderList(quests.questSectionId)}

                    <div className='flex items-center border-t ' >
    
                        {isQuestSection ?
                        <ClaimRewardButton onClick={() => togglePopup(quests.questSectionId)} customClassWrapper='ml-5 my-2' >Minte Dein Progress NFT</ClaimRewardButton>
                        :
                        null
                        }
                    </div>

                    {showPopup && showPopup[quests.questSectionId] && chain === 'eth' ? <QuestClaimModalEth questSectionId={quests.questSectionId} togglePopup={togglePopup} /> : null}

                    {showPopup && showPopup[quests.questSectionId] && chain === 'dot' ? <QuestClaimModalDot questSectionId={quests.questSectionId} togglePopup={togglePopup} 
                        selectedPolkaAccount={selectedAccount} setSelectedPolkaAccount={setSelectedPolkaAccount} /> : null}
                    
                   
                </ul>
                </div>
            ))}
        </div>
    )
}
