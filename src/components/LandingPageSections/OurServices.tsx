
import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className='flex flex-col justify-center items-center w-full relative mt-20 pb-44' >
      <div className='z-10'>
        <h3 className='text-4xl font-bold mb-14' >Entdecke unsere Services!</h3>
        <div className='flex flex-wrap gap-32' >
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl p-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/cryptocurrencies-overview.jpg"}
                  fill
                  className='object-cover rounded-xl'
                  alt='Overview image over all cryptocurrencies Bitcoin Ethereum Polkadot'
                />
              </div>
              <div className=' max-w-[280px] '>
                <h4 className=' font-bold' >Lerne Krypto, verdiene NFTs</h4>
                <p className='mt-5 tracking-wider text-sm'>
                  Unsere E-Learning-Plattform bietet ansprechende und interaktive Kurse für alle Niveaus,
                  die jederzeit und überall zugänglich sind - lernen Sie in Ihrem eigenen Tempo!
                </p>
              </div>
            </div>
            <Link
              href={"#courses"}
              scroll={false}
              className='underline rainbow-text font-bold text-lg '
            >
              Mehr erfahren
            </Link>
          </div>
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl p-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/Podcast_teaser.jpg"}
                  fill
                  className='object-cover rounded-xl'
                  alt='Podcasst teaser Crypto Cryptocurrencie Krypto Kryptowährung Bitcoin Ethereum Polkadot'
                />
              </div>
              <div className=' max-w-[280px] '>
                <h4 className=' font-bold' >
                  Krypto Chats: Gemeinsam WEB3 erforschen
                </h4>
                <p className='mt-5 tracking-wider text-sm'>
                  Unser Podcast ist die perfekte Mischung aus Unterhaltung und Bildung, da wir eine Vielzahl von
                  Themen in einem informellen und unterhaltsamen Ton diskutieren.
                </p>
              </div>
            </div>
            <Link
              href={"#podcast"}
              scroll={false}
              className='underline rainbow-text font-bold text-lg  '
            >
              Mehr erfahren
            </Link>
          </div>
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl p-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/Newsletter.png"}
                  fill
                  className='object-cover rounded-xl'
                  alt='GIVE THIS AN ALT'
                />
              </div>
              <div className=' max-w-[280px] '>
                <h4 className=' font-bold' >
                  Krypto Insider Newsletter
                </h4>
                <p className='mt-5 tracking-wider text-sm'>
                  Unser Newsletter ist die ultimative Quelle für Neuigkeiten, Tipps und
                  Inspirationen für alle, die ihr Leben in vollen Zügen genießen möchten.
                  {/* Abonniere unseren Newsletter um auf dem aktuellen Stand zu bleiben. */}
                </p>
              </div>
            </div>
            <Link
              href={"#newsletter"}
              scroll={false}
              className='underline rainbow-text font-bold text-lg  '
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
