
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Lesson } from '@/data/generalLessons'
import { Quests } from '@/data/generalLessons'
import { ClaimRewardButton } from '../Buttons/Buttons'
import { useUserProgress } from '../../pages/api/ethereum-api'
import QuestClaimModal from '../Modals/QuestClaimModal'


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


export default function LessonsList({ chain, lessonsArray, title, isQuestSection, isGeneralSection, isTheorySection }: LessonsListProps) {
  const [hasProgress] = useUserProgress();
  const [imagePaths, setImagePaths] = useState<ImageSourceObject>()
  const [showPopup, setShowPopup] = useState<QuestModalShow>();
  const imageSourceObject: ImageSourceObject = {}



  useEffect(() => {
    // Set Start-Knob Progress bar Color
    const firstQuestId = `${chain}-1`
    if (isGeneralSection) {
      setImagePath('general-1', 'top', 'top-slot')
    } else if (isTheorySection)  {
      setImagePath(firstQuestId, 'top',  'top-slot')
    }

    // Set Lessons Progress bar Color
    lessonsArray.forEach((quests: Quests, i) => {
      const bottomSlotId = quests.lessons[quests.lessons.length - 1].id;
      if (isQuestSection) {
        // console.log(hasProgress(quests.lessons[0].id))
        setImagePath(quests.lessons[0].id, 'top', 'top-slot')
      }
      setImagePath(bottomSlotId, 'bot', 'bottom-slot')
      
      // Set Progress for all mid slots
      quests.lessons.forEach((quest: Lesson) => {
        
        const questId = quest.id;
        setImagePath(questId, 'mid', 'none');

        setShowPopup({questId: false})
        
      }) 
    });

    setImagePaths(imageSourceObject);
  }, [])


  const setImagePath = (id: string, type : string, specialSpot: string): void => {
    let imagePath = '';

    if (!hasProgress(id)) {
      imagePath = `/progress/${type}-progress-dark.svg`
    } else {
      imagePath = `/progress/${type}-progress-rainbow.svg`
    }

    imageSourceObject[specialSpot !== 'none' ? specialSpot : id] = imagePath
  }

  useEffect(() => {

  }, [showPopup])


  const togglePopup = (questId: string) => {
    const show : QuestModalShow = {};
    show[questId] = true;
    setShowPopup(show)
  }


  if (!imagePaths) {
    return ( <></>)
  }



  return (
    <div className='relative dark:border-bgDarkGray p-3 w-full max-w-4xl backdrop-blur-lg rounded-lg'>
      <h2 className='font-bold text-2xl' >{title}</h2>
      {lessonsArray && lessonsArray.map((quests: Quests, i) => (
        <div key={quests.questTitle} className=' flex items-center '>
          <div className='w-full border-t-4 h-full  items-center pl-5'>

            <div className='font-bold flex items-center'>
              <Image src={imagePaths['top-slot']} width={30} height={30} alt='progress bar' />
              <h3 className='pl-5' >{quests.questTitle}</h3>
            </div>

            {quests.lessons.map((quest: Lesson, i) => (
              <div key={quest.id} >
                <div className='border-t flex items-center'>
                  <Image src={imagePaths[quest.id]} width={30} height={30} alt='progress bar mid' />
                  <div className='pl-5 flex items-center' >
                    <Link href={`/${chain}/${quest.slug}`} >
                      {quest.title} {quest.id}
                    </Link>
                  </div>
                </div>

                {quests.lessons.length === i + 1 &&
                  <div className='flex items-center border-t ' >
                    <Image src={imagePaths['bottom-slot']} width={30} height={30} alt='progress bar' />
                    {isQuestSection ?
                      <ClaimRewardButton onClick={() => togglePopup(quest.id)} customClassWrapper='ml-5 my-2' >Claim</ClaimRewardButton>
                      :
                      <p className='ml-5 font-bold text-sm' >Du hast es geschafft</p>
                    }
                  </div>
                }

                {showPopup[quest.id] ? <QuestClaimModal questSectionId={quests.questSectionId} togglePopup={togglePopup} /> : <p></p>}

              </div>
            ))}
          </div>
        </div>
      ))

      }
      {/* <div className=' flex items-center h-16 '>
        <Image src={"/progress/top-progress.svg"} className=' ' width={40} height={40} alt='------------' />
        <div className='w-full border-y-2 h-full flex items-center pl-5'>
          <h3>Some title here</h3>
        </div>
      </div>
      <div className=' flex items-center h-16 '>
        <Image src={"/progress/mid-progress.svg"} className=' ' width={40} height={40} alt='------------' />
        <div className='w-full border-y-2 h-full flex items-center pl-5'>
          <h3>Some title here</h3>
        </div>
      </div>
      <div className=' flex items-center h-16 '>
        <Image src={"/progress/bot-progress.svg"} className=' ' width={40} height={40} alt='------------' />
        <div className='w-full border-y-2 h-full flex items-center pl-5'>
          <h3>Some title here</h3>
        </div>
      </div> */}
    </div>
  )
}
