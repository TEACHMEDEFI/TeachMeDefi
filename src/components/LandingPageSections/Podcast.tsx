
import Image from "next/image";
import { PrimaryButton } from "@/components/Buttons/Buttons";

export default function Podcast() {
  return (
    <section id='podcast' className='  pb-10 flex flex-col items-center' >
      <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col-reverse md:flex-row items-center justify-between rounded-lg md:w-11/12 xl:w-[1240px] relative'>
        <div className='flex flex-col grow items-center gap-8 max-md:py-10'>
          <h3 className='text-2xl sm:text-4xl font-bold text-center  '> Hör dir <br className="xl:hidden" /> unsere Podcasts an</h3>
          <PrimaryButton href='/' target='_blank' >Jetzt anhören </PrimaryButton>
        </div>
        <div className='relative h-80 sm:h-96 md:h-60 lg:h-96 w-80 sm:w-96 md:w-60 lg:w-96  ' >
          <Image src={"/home/podcast_microphone.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
        </div>
      <div className="absolute -left-44 -top-60 w-[410px] h-[300px]">
        <Image className="max-md:hidden" src={"/home/inBackground/merge-ship.png"} fill alt="ethereum picknick" />
      </div>
      </div>
    </section>
  )
}
