
import { useState, useEffect } from "react"
import CookieBanner from "./CookieBanner";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function CookiePolicyModal() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { isDarkMode } = useTheme();

  const handleLinksToggle = () => {
    showPopup ? setShowPopup(false) : setShowPopup(true)
  }

  const handleCookieBannerInteraction = () => {
    setShowPopup(false)
  }

  const togglePopup = (show: boolean) => {
    setShowPopup(show)
  }

  useEffect(() => {

  }, [showPopup])

  return (
    <div className="fixed left-5 lg:left-16 bottom-0 flex flex-col z-50">
      <div
        className={`bg-gray-300 dark:bg-bgDarkGray h-12 flex items-center justify-evenly rounded-t-md  `}
      >
        <button className={`h-full flex items-center rounded-t-md px-2 lg:px-5 ${!showPopup ? "bg-gray-200 dark:bg-gray-600 " : "font-bold"}`}
          onClick={handleLinksToggle} >
          <span className="h-6 w-6 relative  lg:mr-2">
            <Image src={isDarkMode ? "/cookie-light.svg" : "/cookie-dark.svg"}
              alt="cookie" fill sizes="60px"
            />
          </span>
          <span className="max-lg:hidden" >
            Cookies & Datenschutz
          </span>
        </button>
      </div>

      {showPopup ? (
        <>
          <CookieBanner linksActive={showPopup} handleCookieBannerInteraction={handleCookieBannerInteraction} fromCookiePolicyNoobsie={true} togglePopup={togglePopup} />
        </>
      ) : null}


    </div>

  )
}
