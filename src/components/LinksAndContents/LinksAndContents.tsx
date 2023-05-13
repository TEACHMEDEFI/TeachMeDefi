
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { Lesson } from "../../data/generalLessons";
import { ethLessons } from "../../data/ethLessons";
import { btcLessons } from "../../data/btcLessons";
import { dotLessons } from "../../data/dotLessons";


type Props = {}

export default function LinksAndIndexBurger({ }: Props) {

  const [openLinks, setOpenLinks] = useState<boolean>(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson>();
  const [linksActive, setLinksActive] = useState<boolean>(true)
  const [contentsActive, setContentsActive] = useState<boolean>(false)
  // const [currentSection, setCurrentSection] = useState<string>("");
  const pathname = usePathname();

  const openLinksAndContents = () => {
    setOpenLinks(true)
  }

  // const closeLinksAndContents = () => {
  //   setOpenLinks(false)
  // }

  const handleLinksToggle = () => {
    setLinksActive(true)
    setContentsActive(false)
    if (!openLinks) setOpenLinks(true)
    if (openLinks && linksActive) setOpenLinks(false)
  }
  const handleContentsToggle = () => {
    setLinksActive(false)
    setContentsActive(true)
    if (!openLinks) setOpenLinks(true)
    if (openLinks && contentsActive) setOpenLinks(false)
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
  }, [])

  return (
    <div className="fixed right-24 bottom-0 flex flex-col ">
      <div
        className={`bg-gray-300 dark:bg-bgDarkGray h-12 flex items-center justify-evenly rounded-t-md w-64 `}
      // onClick={openLinksAndContents}
      >
        <button className={`w-full h-full rounded-tl-md px-2 ${!linksActive ? "bg-gray-400 dark:bg-gray-600 rounded-br-md" : "font-bold"}`} onClick={handleLinksToggle} >Links</button>
        <button className={`w-full h-full rounded-tr-md px-2 ${!contentsActive ? "bg-gray-400 dark:bg-gray-600 rounded-bl-md" : "font-bold"}`} onClick={handleContentsToggle} >Verzeichnis</button>
      </div>


      <div className={` ${!openLinks && "hidden"} bg-gray-300 dark:bg-bgDarkGray h-80 flex flex-col gap-3 p-5 pt-8 w-64 overflow-auto scrollbar-hide `} >
        {
          linksActive ?
            <>
              {currentLesson?.importantLinks ?
                currentLesson.importantLinks.map((link, i) => (
                  <Link href={link} key={i} target="_blank" >{link}</Link>
                ))
                :
                <div>
                  Dieses Video hat keine Links zur verfügung.
                </div>
              }
            </>
            :
            <>
              Verzöchnes
              <br />
              1.How
              <br />
              2. wie
              <br />
              3.afa
              <br />
              4.How
              <br />
              5. wie
              <br />
              6.wafw
              <br />
              7.How
              <br />
              8. wie
              <br />
              9.wafwafea
              <br />
              10.How
              <br />
              11. wie
              <br />
              12.wafwafw
              <br />
              13.How
              <br />
              14. wie
              <br />
              15.wafwaf
              <br />
              16.How
              <br />
              17. wie
              <br />
              18.wafwafw
              <br />
            </>
        }
        {/* <button className="absolute top-2 right-2 bg-bgDarkGray h-6 w-6 rounded-full flex justify-center items-center "
            onClick={() => closeLinksAndContents()}
          >
            X
          </button> */}
      </div>
    </div>
  )
}
