
import Image from 'next/image'
import { useEffect } from 'react';
import { generalLessons } from '@/data/generalLessons'
import { dotQuests } from '@/data/dot'
import { dotTheory } from '@/data/dot/dotTheory'
import LessonsList from '@/components/LessonsList/LessonsList'
import LessonsListNew from '@/components/LessonsList/LessonsListNew'
import {switchNetworkIfNeeded} from '../api/ethereum-api'


export default function Index() {
  useEffect(() => {
    switchNetworkIfNeeded()
  }, [])

  return (
    <div className='flex flex-col  w-full justify-center items-center'>
      <section className='relative h-screen w-full flex  justify-center items-center max-w-7xl' >
        <div className='w-2/4 space-y-10  backdrop-blur-sm rounded-lg' >
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
        <Image src={"/dot/polka_x.svg"} width={392/2} height={400/2} alt='polkadot ' className='absolute -left-60 bottom-0 ' />
        <Image src={"/dot/polka_line.svg"} width={289/2} height={258/2} alt='polkadot ' className='absolute -right-8 -top-2 ' />
      </section>
      <section className=' w-full flex items-center justify-center relative my-36' >
        <h2 className='font-bold tracking-widest text-center max-w-4xl p-2 z-10 rounded-lg backdrop-blur-sm' >
          Polkadot ist eine Blockchain-Plattform, die darauf abzielt, die Interoperabilität und Skalierbarkeit
          von Blockchains zu verbessern. Es ist eine dezentrale Plattform, die es verschiedenen Blockchains ermöglicht,
          miteinander zu kommunizieren und zusammenzuarbeiten. Polkadot verwendet eine innovative Technologie namens
          &quot;Parachains&quot;, die es ermöglicht, dass mehrere Blockchains parallel auf der Plattform laufen und miteinander
          interagieren können. Dadurch können Entwickler und Anwender von den Vorteilen verschiedener Blockchains
          profitieren, ohne dass sie sich um technische Details kümmern müssen. Polkadot hat auch eine eigene
          Kryptowährung namens DOT, die zur Stimmrechtsausübung und Netzwerksicherung verwendet wird.
        </h2>
        <Image src={"/dot/polka_net.svg"} width={706/2} height={487/2} alt='polkadot ' className='absolute -right-6 -top-48 ' />
        <Image src={"/dot/polka_corner.svg"} width={397/2} height={294/2} alt='polkadot ' className='absolute left-60 -bottom-32 ' />
      </section>
      <section className=' w-full flex flex-col items-center justify-center relative z-50' >
        <LessonsListNew chain={"dot"} lessonsArray={generalLessons} title={"Was ist eine Blockchain"} isGeneralSection />
        <LessonsListNew chain={"dot"} lessonsArray={dotTheory} title={"Theorie Section"} isTheorySection />
        <LessonsListNew chain={"dot"} lessonsArray={dotQuests} title={"Quest Section"} isQuestSection />
      </section>
      <section className=' w-full flex flex-col items-center gap-10 justify-center mb-36 relative ' >
        {/* <LessonsOverview chain={"dot"} lessonsArray={dotLessons} title={"Was ist eine Blockchain"} section={0} />
        <LessonsOverview chain={"dot"} lessonsArray={dotLessons} title={"Theory Ethereum"} section={1} />
        <LessonsOverview chain={"dot"} lessonsArray={dotLessons} title={"Praktisch Ethereum"} section={2} /> */}

        <Image src={"/dot/polka_z.svg"} width={261/2} height={261/2} alt='polkadot ' className='absolute left-36 -bottom-36 ' />
        <Image src={"/dot/polka_polygon.svg"} width={455/2} height={437/2} alt='polkadot ' className='absolute -right-16 bottom-12 ' />
      </section >
      {/* <section className='h-screen' >

      </section> */}


    </div >
  )
}