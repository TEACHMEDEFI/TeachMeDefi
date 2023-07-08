
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";


export function SupportButton() {
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed  right-2 lg:right-5 bottom-2 lg:bottom-0 flex flex-col z-50">
      <div
        className={` max-lg:h-10 max-lg:w-10 lg:h-12 flex items-center justify-evenly   `}
      >
        <Link
          href={"https://twitter.com/messages/compose?recipient_id=1415614087686393857"}
          className={`h-full w-full flex items-center lg:rounded-t-md  lg:px-5 
          bg-gray-300 dark:bg-gray-600 max-lg:rounded-full max-lg:justify-center 
         
          `}
          target="_blank"
          data-screen-name={"@TeachMeDefi"}
        >
          <span className="h-6 w-6 relative  lg:mr-2">
            <Image src={isDarkMode ? "/support-light.svg" : "/support-dark.svg"}
              alt="support" fill sizes="60px"
            />
          </span>
          <span className="max-lg:hidden" >
            Support
          </span>
        </Link>
      </div>

    </div>

  )
}
