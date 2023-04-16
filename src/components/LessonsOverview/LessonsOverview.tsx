
import { Lesson } from "@/data/lessonsData"
import Link from "next/link"

type lessonsOverview = {
  lessonsArray: Lesson[];
  title: string;
  section: number;
  chain: string;
}

export default function LessonsOverview({ lessonsArray, title, section, chain }: lessonsOverview) {
  return (
    <div className="flex flex-col items-center gap-5" >
      <h2 className='text-2xl font-bold backdrop-blur-md p-2 rounded-md' >{title}</h2>
      <div className='flex flex-wrap justify-center mb-16' >
        {lessonsArray.map((lesson, i) => (
          <div key={lesson.id}>
            {lesson.section === section &&
              <div key={lesson.id} className='relative m-5 rounded-xl font-bold flex justify-center items-center '>
                <Link href={`/${chain}/${lesson.slug}`} key={lesson.id} className='z-10 bg-bgDarkBlue flex justify-center items-center w-60 h-32 rounded-3xl px-3' >
                  {/* <Image src={lesson.youtubeThumbnail} width={50} height={50} alt={lesson.title} /> */}
                  {`${i + 1}.`} {lesson.title}
                </Link>
                <div className={`absolute w-64 h-36 rounded-xl ${i > 1 ? "bg-bgDarkGray" : "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink"}  `} ></div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}