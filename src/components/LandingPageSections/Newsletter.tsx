
import { useState } from "react";

import Image from "next/image";
import { PrimaryButton } from "@/components/Buttons/Buttons";
import { NewsletterSubiFrame } from "../NewsletterSubiFrame/NewsletterSubiFrame";

export default function Newsletter() {

  const [showNewsletterSub, setShowNewsletterSub] = useState(false)

  const handleCloseNewsletterPopup = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setShowNewsletterSub(false)
  }


  return (
    <>
      <section id='newsletter' className='pb-24 lg:pb-44 flex flex-col items-center px-5'  >
        <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col md:flex-row items-center justify-between rounded-lg w-full xl:w-[1240px] relative' >
          <div className='relative aspect-square md:h-60 lg:h-96 max-md:w-full lg:w-96 ' >
            <Image src={"/home/newsletter_mailbox.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
          </div>
          <div className='flex flex-col grow items-center gap-8 max-md:py-10 '>
            <h3 className=' text-2xl sm:text-4xl font-bold text-center '>Abonniere <br className="xl:hidden" /> unseren  Newsletter</h3>
            <PrimaryButton onClick={() => setShowNewsletterSub(true)} >Starte jetzt </PrimaryButton>
          </div>
          <div className="absolute -right-56 -bottom-60 w-0 lg:w-[450px] h-0 lg:h-[600px]">
            <Image className="max-lg:hidden" src={"/home/inBackground/eth-robot.png"} fill alt="ethereum robot" />
          </div>
        </div>
      </section>
      {showNewsletterSub &&
        <div
          className="fixed w-screen h-screen bg-slate-800 bg-opacity-50 top-0 left-0 z-50
            flex justify-center items-center p-5"
          onClick={handleCloseNewsletterPopup}
        >
          <div className=" p-2 sm:p-10 bg-white max-sm:w-full h-[450px] sm:h-[600px] sm:aspect-square relative" 
            onClick={e=>e.stopPropagation()}
          >
            <button
              className="text-slate-700 text-xl font-bold absolute right-5 top-5
            rounded-lg border-4 border-slate-700 w-10 h-10  "
              onClick={handleCloseNewsletterPopup}
            >
              X
            </button>
            <NewsletterSubiFrame />
          </div>
        </div>
      }
    </>
  )
}
