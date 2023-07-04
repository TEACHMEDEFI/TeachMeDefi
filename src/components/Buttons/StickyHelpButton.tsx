
import { useEffect } from "react"
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function StickyHelpButton() {
  const { isDarkMode } = useTheme();

  useEffect(() => {

  }, [isDarkMode])


  const scrollToElement = () => {
    document.getElementById('calendly')?.scrollIntoView();
  }

  return (
    <div className="fixed right-5 lg:right-16 bottom-0 flex flex-col z-50">
      <div
        className="bg-gray-300 dark:bg-bgDarkGray h-12 flex items-center justify-evenly rounded-t-md"
      >
        <button className="h-full flex items-center rounded-t-md px-2 lg:px-5 bg-gray-200 dark:bg-gray-600"
          onClick={scrollToElement} >
          <span className="h-6 w-6 relative  lg:mr-2">
            <Image src={isDarkMode ? "/cookie-light.svg" : "/cookie-dark.svg"}
              alt="cookie" fill sizes="60px"
            />
          </span>
          <span className="max-lg:hidden" >
            Noch Fragen?
          </span>
        </button>
      </div>


    </div>

  )
}
