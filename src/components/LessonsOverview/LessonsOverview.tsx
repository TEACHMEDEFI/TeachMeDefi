
import { Lesson } from "@/data/generalLessons";
import { useTheme } from "@/context/ThemeContext";
import { PrimaryButton, SecondaryButton, GeneralButton } from "../Buttons/Buttons";
import Link from "next/link";
import Image from "next/image";

type lessonsOverview = {
  lessonsArray: Lesson[];
  title: string;
  section: number;
  chain: string;
}
// "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink"
export default function LessonsOverview({ lessonsArray, title, section, chain }: lessonsOverview) {
  let borderClass: string = "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink";
  const { isDarkMode } = useTheme()

  switch (chain) {
    case "dot":
      borderClass = "bg-polkaPink";
      break;
    case "btc":
      borderClass = "bg-bitcoinOrange";
      break;
    default:
      break;
  }
  return (
    <div className="flex flex-col items-center gap-5" >
      <h2 className='text-2xl font-bold backdrop-blur-md p-2 rounded-md' >{title}</h2>
      <div className='flex flex-wrap justify-center gap-10 mb-16' >
        {lessonsArray.map((lesson, i) => (
          <>
            {lesson.section === section &&
              <div key={lesson.id} className={` p-1 rounded-xl  ${i > 1 ? "bg-gray-300 dark:bg-bgDarkGray" : borderClass}  `} >

                <div key={lesson.id} className='relative m-1 rounded-xl font-bold flex justify-center items-center '>
                  <Link href={`/${chain}/${lesson.slug}`} key={lesson.id} className='z-10 bg-white dark:bg-bgDarkBlue flex justify-center items-center w-60 h-32 rounded-3xl px-3' >
                     {lesson.title}
                  </Link>

                </div>

              </div>
            }
          </>
        ))}
      </div>
    </div>
  )
}