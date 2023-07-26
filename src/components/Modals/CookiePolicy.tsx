
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
    <div className="fixed  left-2 lg:left-5 bottom-2 lg:bottom-0 flex flex-col z-50">
      <div
        className={` max-lg:h-10 max-lg:w-10 lg:h-8 flex items-center justify-evenly   `}
      >
        <button
          className={`h-full w-full flex items-center lg:rounded-t-md  lg:px-3 
         ${!showPopup ? "bg-gray-200 dark:bg-gray-600 " : "font-bold"}
         max-lg:rounded-full max-lg:justify-center
         `}
          onClick={handleLinksToggle}
        >
          <span className="h-6 w-5 relative  lg:mr-2">
            <Image src={isDarkMode ? "/cookie/cookie-light.svg" : "/cookie/cookie-dark.svg"}
              alt="cookie" fill sizes="60px"
            />
          </span>
          <span className="max-lg:hidden text-sm" >
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
