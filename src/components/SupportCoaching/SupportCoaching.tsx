
import Image from "next/image"
import { PrimaryButton } from "../Buttons/Buttons"

export function SupportCoaching() {
  return (
    <article id='calendly' className='pb-10 flex flex-col items-center sm:px-5 pt-20' >
      <div className=' bg-slate-100 dark:bg-gray-800 flex flex-col-reverse 
        md:flex-row w-full items-center justify-between rounded-lg xl:w-[1240px] relative'
      >
        <div className='flex flex-col grow items-center gap-5 sm:gap-2 lg:gap-4 max-md:py-10 max-sm:mx-5 max-xl:mx-10'>
          <h4 className='text-2xl max-md:text-4xl lg:text-4xl font-bold  text-center'>
            Du hast noch Fragen?
          </h4>
          <p className='tracking-wider text-center md:w-[360px] lg:w-[420px] xl:w-[500px]  mb-3'>
            Erhalte maßgeschneiderte Beratung von unseren Experten und löse all deine spezifischen
            Krypto-Fragen in unseren persönlichen Online-Coachings.
          </p>
          <p className='tracking-wider text-center md:w-[360px] lg:w-[420px] xl:w-[500px]  '>
            Nutze unser limitiertes Angebot!
            {/* CHECK FOR RESPONSIVENESSS  */}
          </p>
          <PrimaryButton href='https://calendly.com/teachmedefi/1std' customClassButton='text-center' target='_blank' >Termin buchen </PrimaryButton>
        </div>
        <div className='relative aspect-square md:h-60 lg:h-96 max-md:w-full  lg:w-96  ' >
          <Image src={"/support/support-banner-img.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
        </div>
      </div>
    </article>
  )
}