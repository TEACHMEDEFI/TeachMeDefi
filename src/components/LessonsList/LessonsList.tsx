
import Image from 'next/image'
import Link from 'next/link'
import { Lesson } from '@/data/generalLessons'
import { Quests } from '@/data/generalLessons'
import { ClaimRewardButton } from '../Buttons/Buttons'

type LessonsListProps = {
  lessonsArray: Quests[];
  chain: string;
  title: string;
  isQuestSection?: boolean;
}

export default function LesseonsList({ chain, lessonsArray, title, isQuestSection }: LessonsListProps) {
  return (
    <div className='relative dark:border-bgDarkGray p-3 w-full max-w-4xl backdrop-blur-lg rounded-lg'>
      <h2 className='font-bold text-2xl' >{title}</h2>
      {lessonsArray && lessonsArray.map((quests: Quests, i) => (
        <div key={quests.questTitle} className=' flex items-center '>
          <div className='w-full border-t-4 h-full  items-center pl-5'>

            <div className='font-bold flex items-center'>
              <Image src={i < 1 ? "/progress/top-progress-dark.svg" : "/progress/mid-progress-dark.svg"} width={30} height={30} alt='progress bar' />
              <h3 className='pl-5' >{quests.questTitle}</h3>
            </div>

            {quests.lessons.map((quest: Lesson, i) => (
              <div key={quest.id} >
                <div className='border-t flex items-center'>
                  <Image src={"/progress/mid-progress-dark.svg"} width={30} height={30} alt='progress bar mid' />
                  <div className='pl-5 flex items-center' >
                    <Link href={`/${chain}/${quest.slug}`} >
                      {quest.title}
                    </Link>
                  </div>
                </div>

                {quests.lessons.length === i + 1 &&
                  <div className='flex items-center border-t ' >
                    <Image src={quest.isLastQuest ? "/progress/bot-progress-dark.svg" : "/progress/progress-line.svg"} width={30} height={30} alt='progress bar' />
                    {isQuestSection ?
                      <ClaimRewardButton customClassWrapper='ml-5 my-2' >Claim</ClaimRewardButton>
                      :
                      <p className='ml-5 font-bold text-sm' >Du hast es geschafft</p>
                    }
                  </div>
                }

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
