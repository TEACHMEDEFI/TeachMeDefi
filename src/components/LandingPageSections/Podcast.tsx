
import Image from "next/image";
import { PrimaryButton } from "@/components/Buttons/Buttons";

export default function Podcast() {
  return (
    <section id='podcast' className='pb-10 flex flex-col items-center px-5' >
      <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col-reverse md:flex-row w-full items-center justify-between rounded-lg xl:w-[1240px] relative'>
        <div className='flex flex-col grow items-center gap-8 max-md:py-10'>
          <h3 className='text-2xl sm:text-4xl font-bold text-center  '> Hör dir <br className="xl:hidden" /> unsere Podcasts an</h3>
          <PrimaryButton href={"https://podcasters.spotify.com/pod/show/teachmedefi"} target='_blank' >Jetzt anhören </PrimaryButton>
        </div>
        <div className='relative aspect-square md:h-60 lg:h-96 max-md:w-full  lg:w-96  ' >
          <Image src={"/home/podcast_microphone.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
        </div>
      <div className="absolute max-xl:hidden -left-44 -top-60 w-[410px] h-[300px]">
        <Image className="max-md:hidden" src={"/home/inBackground/merge-ship.png"} fill alt="ethereum picknick" />
      </div>
      </div>
    </section>
  )
}
