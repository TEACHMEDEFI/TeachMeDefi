
import { useState, useEffect } from "react"
import CookieBanner from "./CookieBanner";


export default function CookiePolicyModal() {
  const [showPopup, setShowPopup] = useState<boolean>(false);


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
    <div className="fixed left-24 bottom-0 flex flex-col ">
      <div
        className={`bg-gray-300 dark:bg-bgDarkGray h-12 flex items-center justify-evenly rounded-t-md w-64 `}
      >
        <button className={`w-full h-full rounded-tl-md px-2 ${!showPopup ? "bg-gray-400 dark:bg-gray-600 rounded-br-md" : "font-bold"}`}
          onClick={handleLinksToggle} >
          Cookies und Datenschutz
        </button>
      </div>

      {showPopup ? (
      <>
        <CookieBanner linksActive={showPopup} handleCookieBannerInteraction={handleCookieBannerInteraction} fromCookiePolicyNoobsie={true} togglePopup ={togglePopup} />
      </>
      ) : null}

      
    </div>
    
  )
}
