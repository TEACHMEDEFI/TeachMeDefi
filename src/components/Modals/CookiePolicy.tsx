
import { useState, useEffect } from "react"
import CookieBanner from "./CookieBanner";


export default function CookiePolicyModal() {
  const [linksActive, setLinksActive] = useState<boolean>(false)


  const handleLinksToggle = () => {
    console.log('setting links active')
    setLinksActive(true)
  }

  const handleCookieBannerInteraction = () => {
    setLinksActive(false)
  }

  useEffect(() => {
   
  }, [linksActive])

  return (
    <div className="fixed right-24 bottom-0 flex flex-col ">
      <div
        className={`bg-gray-300 dark:bg-bgDarkGray h-12 flex items-center justify-evenly rounded-t-md w-64 `}
      >
        <button className={`w-full h-full rounded-tl-md px-2 ${!linksActive ? "bg-gray-400 dark:bg-gray-600 rounded-br-md" : "font-bold"}`}
          onClick={handleLinksToggle} >
          Cookies und Datenschutz
        </button>
      </div>

      {linksActive ? (
      <>
        <CookieBanner linksActive={linksActive} handleCookieBannerInteraction={handleCookieBannerInteraction} />
      </>
      ) : null}

      
    </div>
    
  )
}
