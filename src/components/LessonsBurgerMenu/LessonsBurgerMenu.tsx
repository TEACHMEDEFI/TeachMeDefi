
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { Lesson } from "../../data/generalLessons";
import { ethLessons } from "../../data/ethLessons";
import { btcLessons } from "../../data/btcLessons";
import { dotLessons } from "../../data/dotLessons";


export default function LessonsBurgerMenu({ lessons }: any) {

  const [openLessons, setOpenLessons] = useState<boolean>(false);
  const [currentLessons, setCurrentLessons] = useState<Lesson[]>();
  const [currentSection, setCurrentSection] = useState<string>("");
  const pathname = usePathname();
  const activeLinkRef = useRef<HTMLAnchorElement>(null)

  // console.log(currentLessons , pathname.split("/")[2])
  // console.log(currentLessons)

  const checkIfSlugIsCurrentLesson = (slug: string) => {
    // console.log(slug === pathname.split("/")[2])
    return slug === pathname.split("/")[2]

  }

  const handleLessonsMenuClick = () => {
    setOpenLessons(!openLessons)
    if (!openLessons && activeLinkRef && activeLinkRef.current) {
      setTimeout(() => {
        if (activeLinkRef.current)
          activeLinkRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500)
    }
  }


  useEffect(() => {
    if (pathname.startsWith('/eth')) {
      setCurrentLessons(ethLessons);
      setCurrentSection("eth")
    } else if (pathname.startsWith('/btc')) {
      setCurrentLessons(btcLessons);
      setCurrentSection("btc")
    } else if (pathname.startsWith('/dot')) {
      setCurrentLessons(dotLessons);
      setCurrentSection("dot")
    }
  }, [])



  return (
    <div className="fixed left-0 top-28 flex ">
      <div className={` ${!openLessons && "hidden"} bg-gray-300 dark:bg-bgDarkGray flex flex-col p-5 rounded-br-lg gap-y-3 max-h-96 overflow-y-auto`} >
        {currentLessons && currentLessons.map((lesson, i) => (
          <div key={lesson.id}>
            <Link
              ref={checkIfSlugIsCurrentLesson(lesson.slug) ? activeLinkRef : null}
              href={`/${currentSection}/${lesson.slug}`}
              onClick={() => setOpenLessons(false)}
              className={checkIfSlugIsCurrentLesson(lesson.slug) ? "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent suuper" : ""}
            >
              {lesson.title}

            </Link>
            {i < currentLessons.length - 1 && <hr />}
          </div>
        ))}
      </div>
      <button
        className=" bg-gray-300 dark:bg-bgDarkGray w-12 h-12 rounded-tr-lg rounded-br-lg flex flex-col items-center justify-evenly py-1.5 px-1.5"
        onClick={handleLessonsMenuClick}
      >
        <div className=" bg-bgDarkGray dark:bg-primaryWhite h-1 w-7 rounded-md "></div>
        <div className=" bg-bgDarkGray dark:bg-primaryWhite h-1 w-7 rounded-md "></div>
        <div className=" bg-bgDarkGray dark:bg-primaryWhite h-1 w-7 rounded-md "></div>
      </button>
    </div>
  )
}