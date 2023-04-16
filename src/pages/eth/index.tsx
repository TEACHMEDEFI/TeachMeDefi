
import Link from 'next/link'
import Image from 'next/image'
import { ethLessons } from '@/data/lessonsData'


export default function index() {
  return (
    <div className='flex flex-col  w-full justify-center items-center'>
      <section className=' h-screen w-full flex  justify-center items-center max-w-7xl' >
        <div className='w-2/4 space-y-10' >
          <h1 className='text-7xl font-bold mb-5' >
            Willkommen bei <span
              className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'
            >
              Ethereum!
            </span>
          </h1>
          <h2 className='text-xl font-bold' >Hier erfährst du alles über die zweitgrößte <br /> Kryptowährung der Welt.</h2>
        </div>
        <div className='relative w-2/4 h-full grow'>
          <Image src={"/eth/eth_hero.png"} fill alt='Ethereum Hero' />
        </div>
      </section>
      <section className='h-96 w-full flex items-center justify-center relative' >
        <h2 className='font-bold tracking-widest text-center max-w-4xl p-2 z-10 rounded-lg  backdrop-blur-md' >
          Ethereum ist eine dezentrale, Open-Source-Blockchain-Plattform,
          die es Entwicklern ermöglicht, Smart Contracts und dezentrale Anwendungen (DApps)
          zu erstellen. Im Gegensatz zu Bitcoin, das hauptsächlich als digitales
          Zahlungssystem fungiert, ist Ethereum eher eine Plattform für die Entwicklung
          von Anwendungen und Diensten, die auf der Blockchain-Technologie basieren.
          Ethereum ist auch die zweitgrößte Kryptowährung nach Marktkapitalisierung, hinter Bitcoin.
        </h2>
        <Image src={"/eth/eth_hand.png"} height={400} width={400} className='absolute -left-20 -bottom-28' alt='Ethereum Legos Hand' />
      </section>
      <section className='w-full flex flex-col items-center gap-10 justify-center mb-36 relative ' >
        <h2>was ist eine Blockchain</h2>

        {ethLessons.map((lesson, i) => (
          <div key={lesson.id} className='relative  rounded-xl flex justify-center items-center '>
            <Link href={`/eth/${lesson.slug}`} key={lesson.id} className='z-10 bg-bgDarkBlue flex justify-center items-center w-60 h-32 rounded-3xl ' >
              {/* <Image src={lesson.youtubeThumbnail} width={50} height={50} alt={lesson.title} /> */}
              {lesson.title}
            </Link>
            <div className={`absolute w-64 h-36 rounded-xl ${i > 0 ? "bg-bgDarkGray" : "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink"}  `} ></div>
          </div>
        ))
      }
      <h2>Theory in ethere</h2>
        {ethLessons.map((lesson, i) => (
          <div key={lesson.id} className='relative  rounded-xl flex justify-center items-center '>
            <Link href={`/eth/${lesson.slug}`} key={lesson.id} className='z-10 bg-bgDarkBlue flex justify-center items-center w-60 h-32 rounded-3xl ' >
              {/* <Image src={lesson.youtubeThumbnail} width={50} height={50} alt={lesson.title} /> */}
              {lesson.title}
            </Link>
            <div className={`absolute w-64 h-36 rounded-xl ${i > 0 ? "bg-bgDarkGray" : "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink"}  `} ></div>
          </div>
        ))
      }
      <h2>Praktisch ethereum</h2>
        {ethLessons.map((lesson, i) => (
          <div key={lesson.id} className='relative  rounded-xl flex justify-center items-center '>
            <Link href={`/eth/${lesson.slug}`} key={lesson.id} className='z-10 bg-bgDarkBlue flex justify-center items-center w-60 h-32 rounded-3xl ' >
              {/* <Image src={lesson.youtubeThumbnail} width={50} height={50} alt={lesson.title} /> */}
              {lesson.title}
            </Link>
            <div className={`absolute w-64 h-36 rounded-xl ${i > 0 ? "bg-bgDarkGray" : "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink"}  `} ></div>
          </div>
        ))
      }
        {ethLessons.map((lesson, i) => (
          <div key={lesson.id} className='relative  rounded-xl flex justify-center items-center '>
            <Link href={`/eth/${lesson.slug}`} key={lesson.id} className='z-10 bg-bgDarkBlue flex justify-center items-center w-60 h-32 rounded-3xl ' >
              {/* <Image src={lesson.youtubeThumbnail} width={50} height={50} alt={lesson.title} /> */}
              {lesson.title}
            </Link>
            <div className={`absolute w-64 h-36 rounded-xl ${i > 0 ? "bg-bgDarkGray" : "bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink"}  `} ></div>
          </div>
        ))
      }


        <Image src={"/eth/eth_windows.png"} className='absolute -right-20 -bottom-36' width={600} height={600} alt='Ethereum Windows' />


      </section >
      {/* <section className='h-screen' >

      </section> */}


    </div >
  )
}