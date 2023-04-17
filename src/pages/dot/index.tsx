
import Image from 'next/image'
import { dotLessons } from '@/data/lessonsData'
import LessonsOverview from '@/components/LessonsOverview/LessonsOverview'


export default function index() {
  return (
    <div className='flex flex-col  w-full justify-center items-center'>
      <section className=' h-screen w-full flex  justify-center items-center max-w-7xl' >
        <div className='w-2/4 space-y-10' >
          <h1 className='text-7xl font-bold mb-5' >
            Willkommen bei <span className='text-polkaPink'> Polkadot!</span>
          </h1>
          <h2 className='text-xl font-bold' >
          Lerne alles über die skalierbare, interoperable Blockchain für eine dezentrale Zukunft.
          </h2>
        </div>
        <div className='relative w-2/4 h-full grow'>
          <Image src={"/dot/Polkadot_Logo_Vertical.png"} fill alt='Ethereum Hero' />
        </div>
      </section>
      <section className='h-96 w-full flex items-center justify-center relative' >
        <h2 className='font-bold tracking-widest text-center max-w-4xl p-2 z-10 rounded-lg bg-slate-900/25 ' >
          Polkadot ist eine Blockchain-Plattform, die darauf abzielt, die Interoperabilität und Skalierbarkeit
          von Blockchains zu verbessern. Es ist eine dezentrale Plattform, die es verschiedenen Blockchains ermöglicht,
          miteinander zu kommunizieren und zusammenzuarbeiten. Polkadot verwendet eine innovative Technologie namens
          &quot;Parachains&quot;, die es ermöglicht, dass mehrere Blockchains parallel auf der Plattform laufen und miteinander
          interagieren können. Dadurch können Entwickler und Anwender von den Vorteilen verschiedener Blockchains
          profitieren, ohne dass sie sich um technische Details kümmern müssen. Polkadot hat auch eine eigene
          Kryptowährung namens DOT, die zur Stimmrechtsausübung und Netzwerksicherung verwendet wird.
        </h2>
      </section>
      <section className='h-screen w-full flex flex-col items-center gap-10 justify-center mb-36 relative ' >
        <LessonsOverview chain={"dot"} lessonsArray={dotLessons} title={"Was ist eine Blockchain"} section={0} />
        <LessonsOverview chain={"dot"} lessonsArray={dotLessons} title={"Theory Ethereum"} section={1} />
        <LessonsOverview chain={"dot"} lessonsArray={dotLessons} title={"Praktisch Ethereum"} section={2} />

      </section >
      {/* <section className='h-screen' >

      </section> */}


    </div >
  )
}