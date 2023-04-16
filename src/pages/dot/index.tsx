
import Link from 'next/link'
import Image from 'next/image'
import { dotLessons } from '@/data/lessonsData'


export default function index() {
  return (
    <div className='flex flex-col  w-full justify-center items-center'>
      <section className=' h-screen w-full flex  justify-center items-center max-w-7xl' >
        <div className='w-2/4 space-y-10' >
          <h1 className='text-7xl font-bold mb-5' >
            Willkommen bei <span className='text-polkaPink'> Polkadot!</span>
          </h1>
          <h2 className='text-xl font-bold' >
            Hier lernst du alles über die skalierbare und
            interoperable Blockchain, die die Grundlage für eine dezentrale Zukunft bildet.
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

        {dotLessons.map((lesson, i) => (
          <div key={lesson.id} className='relative  rounded-xl flex justify-center items-center '>
            <Link href={`/dot/${lesson.slug}`} key={lesson.id} className='z-10 bg-bgDarkBlue flex justify-center items-center w-60 h-32 rounded-3xl ' >
              {/* <Image src={lesson.youtubeThumbnail} width={50} height={50} alt={lesson.title} /> */}
              {lesson.title}
            </Link>
            <div className={`absolute w-64 h-36 rounded-xl ${i > 0 ? "bg-bgDarkGray" : "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink"}  `} ></div>
          </div>
        ))
        }



      </section >
      {/* <section className='h-screen' >

      </section> */}


    </div >
  )
}