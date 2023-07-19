
import { Quests } from '@/data/generalLessons'
import { Lesson } from '@/data/generalLessons'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUserProgress } from '../../pages/api/ethereum-api'



type ProgressbarProps = {
    quests: Quests;

}

export default function Progressbar ({quests}: ProgressbarProps) {
    const [hasProgress] = useUserProgress();



    return (
        <div className="progress-container">

        <ul className="ul-circles">
            {quests.lessons.map((quest: Lesson) => (
        <Link
            key={quest.id}
            href='javascript:;'
            className={`${hasProgress(quest.id) ? 'has-progress-circle' : 'has-no-progress-circle'} bg-[#fdfdfd] dark:bg-gray-700 sm:mb-7`}
        >
                {quest.title.split(' ')[0]}
            </Link>
            ))}

            {/* {isQuestSection && (
            <>
                <Link
                href='javascript:;'
                className='is-nft-mint bg-[#fdfdfd] dark:bg-gray-700'
                onClick={() => togglePopup(quests.questSectionId)}
                >
                <i className='fa-light fa-trophy' />Mint NFT
                </Link>
            </>
            )} */}

        {/* {showPopup && showPopup[quests.questSectionId] && chain === 'eth' ? (
            <QuestClaimModalEth questSectionId={quests.questSectionId} togglePopup={togglePopup} />
        ) : null}

        {showPopup && showPopup[quests.questSectionId] && chain === 'dot' ? (
            <QuestClaimModalDot
            questSectionId={quests.questSectionId}
            togglePopup={togglePopup}
            selectedPolkaAccount={selectedAccount}
            setSelectedPolkaAccount={setSelectedPolkaAccount}
            />
        ) : null} */}
        </ul>


    </div>
    )


    

}