
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { ethLessons, btcLessons, dotLessons, Lesson } from "../../data/lessonsData";


export default function LessonsBurgerMenu({ lessons }: any) {

  const [openLessons, setOpenLessons] = useState<boolean>(false);
  const [currentLessons, setCurrentLessons] = useState<Lesson[]>();
  const [currentSection, setCurrentSection] = useState<string>("");
  const pathname = usePathname();

  const handleLessonsMenuClick = () => {
    setOpenLessons(!openLessons)
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
      <div className={` ${!openLessons && "hidden"} bg-bgDarkGray flex flex-col p-5 rounded-br-lg `} >
        {currentLessons && currentLessons.map(lesson => (
          <Link href={`/${currentSection}/${lesson.slug}`} key={lesson.id} >{lesson.title}</Link>
        ))}
      </div>
      <button
        className=" bg-bgDarkGray w-12 h-12 rounded-tr-lg rounded-br-lg flex flex-col items-center justify-evenly py-1.5 "
        onClick={handleLessonsMenuClick}
      >
        <div className="bg-primaryWhite h-1 w-7 rounded-md "></div>
        <div className="bg-primaryWhite h-1 w-7 rounded-md "></div>
        <div className="bg-primaryWhite h-1 w-7 rounded-md "></div>
      </button>
    </div>
  )
}