
import { GeneralButton } from "@/components/Buttons/Buttons"
import Image from "next/image"

export default function CourseOverview() {
  return (
    <section id='courses' className='py-44 flex flex-col items-center' >
      <div className='z-10'>
        <h3 className='text-4xl font-bold mb-14' >Was wir bieten ...</h3>
        <div className='flex flex-wrap gap-32' >
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl w-72 pb-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/Cryptocurrencies_overview.jpg"}
                  fill
                  className='object-cover rounded-xl'
                  alt='ALT TEXT HERE -----------------'
                />
              </div>
              <div className='px-4'>
                <h4 className=' font-bold' >Bitcoin</h4>
                <p className='mt-5 tracking-wider text-sm'>
                  Text zu Bitcoin section
                </p>
              </div>
            </div>
            <GeneralButton
              href={"/btc"}
            >
              Weiter zu Bitcoin
            </GeneralButton>
          </div>
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl w-72 pb-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/Podcast_teaser.jpg"}
                  fill
                  className='object-cover rounded-xl'
                  alt='ALT THEXT HERE _----------------'
                />
              </div>
              <div className='px-4'>
                <h4 className=' font-bold' >
                  Ethereum
                </h4>
                <p className='mt-5 tracking-wider text-sm'>
                  Text zu Ethereum section
                </p>
              </div>
            </div>
            <GeneralButton
              href={"/eth"}
            >
              Weiter zu Ethereum
            </GeneralButton>
          </div>
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl w-72 pb-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/Newsletter.png"}
                  fill
                  className='object-cover rounded-xl'
                  alt='GIVE THIS AN ALT -------------'
                />
              </div>
              <div className='px-4'>
                <h4 className=' font-bold' >
                  Polkadot
                </h4>
                <p className='mt-5 tracking-wider text-sm'>
                  text zu Polkadot section
                </p>
              </div>
            </div>
            <GeneralButton
              href={"/dot"}
            >
              Weiter zu Polkadot
            </GeneralButton>
          </div>
        </div>
      </div>
    </section>
  )
}
