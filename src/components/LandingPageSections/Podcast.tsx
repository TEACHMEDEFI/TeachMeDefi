
import Image from "next/image";
import { PrimaryButton } from "@/components/Buttons/Buttons";

export default function Podcast() {
  return (
    <section id='podcast' className='py-44 flex flex-col items-center' >
      <div className=' bg-slate-100 dark:bg-gray-800 flex items-center justify-between rounded-lg w-[1200px]'>
        {/* du must noch farben anpassen, zu sonnig drausen  */}
        <div className='flex flex-col grow items-center gap-8 '>
          <h3 className='text-4xl font-bold '> Hör dir unsere <span className='text-5xl'>Podcasts</span> an</h3>
          <PrimaryButton href='/' target='_blank' >Jetzt anhören </PrimaryButton>
        </div>
        <div className='relative h-96 w-96 ' >
          <Image src={"/home/podcast_microphone.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
        </div>
      </div>
    </section>
  )
}
