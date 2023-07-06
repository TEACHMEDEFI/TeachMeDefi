
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { Lesson, Links } from "../../data/generalLessons";
import { ethLessons } from "../../data/ethLessons";
import { btcLessons } from "../../data/btcLessons";
import { dotLessons } from "../../data/dotLessons";


export default function LinksAndIndexBurger() {

  const [openLinks, setOpenLinks] = useState<boolean>(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson>();
  const [linksActive, setLinksActive] = useState<boolean>(true)
  const pathname = usePathname();

  // console.log(ethLessons)
  // console.log(currentLesson?.slug === pathname.split("/")[2])
  

  const handleLinksToggle = () => {
    setLinksActive(true)
    if (!openLinks) setOpenLinks(true)
    if (openLinks && linksActive) setOpenLinks(false)
  }

  useEffect(() => {
    const slug = pathname.split("/")[2]
    if (pathname.startsWith('/eth')) {
      const currentLesson = ethLessons.find(lesson => lesson.slug === slug);
      setCurrentLesson(currentLesson);
      // setCurrentSection("eth")
    } else if (pathname.startsWith('/btc')) {
      const currentLesson = btcLessons.find(lesson => lesson.slug === slug);
      setCurrentLesson(currentLesson);
      // setCurrentSection("btc")
    } else if (pathname.startsWith('/dot')) {
      const currentLesson = dotLessons.find(lesson => lesson.slug === slug);
      setCurrentLesson(currentLesson);
      // setCurrentSection("dot")
    }
  }, [pathname])

  return (
    <div className="fixed right-24 bottom-0 flex flex-col ">
      <div
        className={`bg-gray-300 dark:bg-bgDarkGray h-12 flex items-center justify-evenly rounded-t-md w-64 `}
      >
        <button className={`w-full h-full rounded-tl-md px-2 ${!linksActive ? "bg-gray-400 dark:bg-gray-600 rounded-br-md" : "font-bold"}`}
          onClick={handleLinksToggle} >
          Wichtige Links
        </button>
      </div>

      <div className={` ${!openLinks && "hidden"} bg-gray-300 dark:bg-bgDarkGray flex flex-col gap-3 p-5 pt-8 w-64 overflow-auto scrollbar-hide `} >
        {currentLesson?.importantLinks ?
          currentLesson.importantLinks.map((link: Links, i) => (
            <div key={i}>
              <Link href={link.href} key={i} target="_blank" className="underline" >{`${i + 1}.`} {link.linkText}</Link>
            </div>
          ))
          :
          <div>
            Dieses Video hat keine Links zur verfügung.
          </div>
        }

      </div>
    </div>
  )
}
