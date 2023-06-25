
import Image from "next/image";
import { PrimaryButton } from "@/components/Buttons/Buttons";

export default function Newsletter() {
  return (
    <section id='newsletter' className='pb-44 flex flex-col items-center'  >
      <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col md:flex-row items-center justify-between rounded-lg md:w-11/12 xl:w-[1240px] relative' >
        <div className='relative h-80 sm:h-96 md:h-60 lg:h-96 w-80 sm:w-96 md:w-60 lg:w-96 ' >
          <Image src={"/home/newsletter_mailbox.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
        </div>
        <div className='flex flex-col grow items-center gap-8 max-md:py-10 '>
          <h3 className=' text-2xl sm:text-4xl font-bold text-center '>Abonniere <br className="xl:hidden" /> unseren  Newsletter</h3>
          <PrimaryButton href='https://www.newsletter.teachmedefi.de/' target='_blank' >Starte jetzt </PrimaryButton>
        </div>
      <div className="absolute -right-52 -bottom-80 w-0 lg:w-[450px] h-0 lg:h-[600px]">
        <Image className="max-lg:hidden" src={"/home/inBackground/eth-robot.png"} fill alt="ethereum robot" />
      </div>
      </div>
    </section>
  )
}
