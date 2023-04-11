
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { ethLessons, btcLessons, dotLessons, Lesson } from "../../data/lessonsData";

type Props = {}

export default function LessonsBurgerMenu({ lessons }: any) {

  const [openLessons, setOpenLessons] = useState(false);
  const [currentLessons, setCurrentLessons] = useState<Lesson[]>();
  const pathname = usePathname();
  // const currentLessons:any = [];
  console.log(currentLessons)
  console.log(pathname.startsWith("/eth"))

  const handleLessonsMenuClick = () => {
    setOpenLessons(!openLessons)
  }
  useEffect(() => {
    if (pathname.startsWith('/eth')) {
      setCurrentLessons(ethLessons);
    } else if (pathname.startsWith('/btc')) {
      setCurrentLessons(btcLessons);
    } else if (pathname.startsWith('/dot')) {
      setCurrentLessons(dotLessons);
    }
  }, [])

  return (
    <div className="absolute left-0 top-28 flex ">
      <div className={` ${!openLessons && "hidden"} bg-bgDarkGray flex flex-col p-5 rounded-br-lg `} >
        <Link href={"/"} >Dis is Link</Link>
        <Link href={"/"} >Dis is Link</Link>
        <Link href={"/"} >Dis is Link</Link>
        <Link href={"/"} >Dis is Link</Link>
        <Link href={"/"} >Dis is Link</Link>
        <Link href={"/"} >Dis is Link</Link>
      </div>
      <button
        className=" bg-bgDarkGray w-16 h-14 rounded-tr-lg rounded-br-lg flex flex-col items-center justify-evenly py-1.5 "
        onClick={handleLessonsMenuClick}
      >

        <div className="bg-primaryWhite h-1.5 w-10 rounded-md "></div>
        <div className="bg-primaryWhite h-1.5 w-10 rounded-md "></div>
        <div className="bg-primaryWhite h-1.5 w-10 rounded-md "></div>
      </button>
    </div>
  )
}