import Image from 'next/image'
import { btcLessons } from '@/data/lessonsData'
import LessonsOverview from '@/components/LessonsOverview/LessonsOverview'


export default function index() {
  return (
    <div className='flex flex-col  w-full justify-center items-center'>
      <section className=' h-screen w-full flex justify-center items-center gap-24 max-w-7xl' >
        <div className='w-2/4 space-y-10' >
          <h1 className='text-7xl font-bold mb-5' >
            Willkommen bei <span className='text-bitcoinOrange'> Bitcoin!</span>
          </h1>
          <h2 className='text-xl font-bold' >
            Hier findest du alles, was du über die weltweit bekannteste Kryptowährung wissen musst.
          </h2>
        </div>
        <div className='relative w-2/5 h-full '>
          <Image src={"/btc/bitcoin_planet.png"} fill alt='Ethereum Hero' priority />
        </div>
      </section>
      <section className='h-96 w-full flex items-center justify-center relative' >
        <h2 className='font-bold tracking-widest text-center max-w-4xl p-2 z-10 rounded-lg  ' >
          Bitcoin ist eine digitale Währung, die 2009 von einer Person oder Gruppe namens Satoshi Nakamoto ins Leben
          gerufen wurde. Im Gegensatz zu traditionellen Währungen wird Bitcoin nicht von einer Zentralbank ausgegeben,
          sondern durch ein dezentrales Netzwerk von Computern verwaltet, die als Blockchain bezeichnet werden.
          Transaktionen werden direkt zwischen den Teilnehmern abgewickelt, ohne dass ein Dritter wie eine Bank
          benötigt wird. Bitcoin gilt als eine der ersten und bekanntesten Kryptowährungen und hat in den letzten
          Jahren aufgrund seiner schnellen und sicheren Transaktionen und seines begrenzten Angebots an Popularität gewonnen.
        </h2>
      </section>
      <section className=' w-full flex flex-col items-center gap-10 justify-center mb-36 relative ' >
        <LessonsOverview chain={"btc"} lessonsArray={btcLessons} title={"Was ist eine Blockchain"} section={0} />
        <LessonsOverview chain={"btc"} lessonsArray={btcLessons} title={"Theory Ethereum"} section={1} />
        <LessonsOverview chain={"btc"} lessonsArray={btcLessons} title={"Praktisch Ethereum"} section={2} />

      </section >
      {/* <section className='h-screen' >

      </section> */}


    </div >
  )
}