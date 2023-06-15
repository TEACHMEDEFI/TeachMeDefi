
import Image from 'next/image'
import Link from 'next/link'
import { ethQuestsTEST } from '@/data/ethTest'
import { Lesson } from '@/data/generalLessons'
import { Quests } from '@/data/ethTest'

type LessonsListProps = {
  lessonsArray: Quests[];
  chain: string;
}

export default function LesseonsList({ chain, lessonsArray }: LessonsListProps) {



  return (
    <div className='relative border-4 dark:border-bgDarkGray p-3 w-full max-w-7xl backdrop-blur-lg rounded-lg'>
      {ethQuestsTEST && ethQuestsTEST.map((quests: Quests, i) => (
        <div key={quests.questTitle} className=' flex items-center '>
          <div className='w-full border-t-2 h-full  items-center pl-5'>
            <div className='font-bold flex items-center'>
              <Image src={i < 1 ?"/progress/top-progress-dark.svg": "/progress/mid-progress-dark.svg"} className=' ' width={30} height={30} alt='------------' />
              <h3 className='pl-5' >{quests.questTitle}</h3>

            </div>
            {quests.quests.map((quest: Lesson, i) => (
              <div key={quest.id} className='border-t flex items-center'>
                <Image src={quest.isLastQuest ? "/progress/bot-progress-dark.svg":"/progress/mid-progress-dark.svg"} className=' ' width={30} height={30} alt='------------' />
                <div className='pl-5' >
                  <Link href={`/${chain}/${quest.slug}`} >
                    {quest.title}
                  </Link>
                </div>
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
