
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";


export function SupportButton() {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className="fixed  right-2 lg:right-5 bottom-2 lg:bottom-0 flex flex-col z-50">
        <div
          className={` max-lg:h-10 max-lg:w-10 lg:h-8 flex items-center justify-evenly   `}
        >
          <button
            onClick={() => setShowPopup(true)}
            className={`h-full w-full flex items-center lg:rounded-t-md  lg:px-3 
          bg-gray-200 dark:bg-gray-600 max-lg:rounded-full max-lg:justify-center `}
          >
            <span className="h-5 w-5 relative  lg:mr-2">
              <Image src={isDarkMode ? "/support/support-light.svg" : "/support/support-dark.svg"}
                alt="support" fill sizes="60px"
              />
            </span>
            <span className="max-lg:hidden text-sm" >
              Support/Feedback
            </span>
          </button>
        </div>

      </div>
      {showPopup &&

        <div className="fixed z-50 h-screen w-screen  bottom-0"
          onClick={() => setShowPopup(false)}
        >
          <div className="absolute w-72  bg-gray-200 dark:bg-gray-600 rounded-lg p-3 bottom-0 right-2 lg:right-7 " >
            <p className="text-sm"> Bitte nimm dir einen Moment Zeit und fülle unseren Feedback Fragebogen aus! <br /> <br /> Bei Fragen kannst du uns gerne auf Twitter erreichen! <br /> (Hinweis: Registrierung notwendig). </p>
            <Link
              href={"https://twitter.com/messages/compose?recipient_id=1415614087686393857"}
              className={`relative w-fit flex items-center rounded-md px-3 py-1 mt-3
          bg-gray-300 dark:bg-gray-500 max-lg:justify-center 
          twitter-mention-button font-bold`}
              target="_blank"
              data-screen-name={"@TeachMeDefi"}
              data-show-count="false"
            >
              Twitter / X
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </Link>
            <Link
              href={"https://docs.google.com/forms/d/e/1FAIpQLSftkvPlhlYYCFJNdr4YcM6ch-PvS-DlGtywb-i9mSzrzcwWzQ/viewform?usp=sf_link"}
              className={`relative w-fit flex items-center rounded-md px-3 py-1 mt-3
          bg-gray-300 dark:bg-gray-500 max-lg:justify-center 
          twitter-mention-button font-bold`}
              target="_blank"
              data-screen-name={"@TeachMeDefi"}
              data-show-count="false"
            >
              Feedback Fragebogen
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </Link>
          </div>
        </div>
      }
    </>
  )
}


