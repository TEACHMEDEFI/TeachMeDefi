
import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className='flex flex-col justify-center items-center w-full relative mt-20 pb-44' >
      <div className="flex gap-28 ">
        <div className="">
          <h2 className="text-4xl font-bold mb-6">Entdecke unsere <br />Services!</h2>
          <p className="w-[500px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas iusto perferendis deserunt molestiae id blanditiis quasi nesciunt, iure iste voluptatibus? Quibusdam ipsum alias rerum quidem cum voluptatum sed cumque eaque?</p>
          <div className=" h-[450px] w-[660px] relative" >
            <Image src={"/placeholder-our-service.png"} fill alt="Unsere Services" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10">

          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/bullet-square-1.svg"} fill alt="bullet point 1" />
            </div>
            <div>
              <h4 className="text-2xl " >Lerne Krypto, <br /> verdiene NFTs</h4>
              <p className='mt-3 tracking-wider text-sm w-96'>
                Unsere E-Learning-Plattform bietet ansprechende und interaktive Kurse für alle Niveaus,
                die jederzeit und überall zugänglich sind - lernen Sie in Ihrem eigenen Tempo!
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/bullet-square-2.svg"} fill alt="bullet point 2" />
            </div>
            <div>
              <h4 className="text-2xl " >Krypto Chats: <br /> Gemeinsam WEB3 erforschen</h4>
              <p className='mt-3 tracking-wider text-sm w-96'>
                Unser Podcast ist die perfekte Mischung aus Unterhaltung und Bildung, da wir eine Vielzahl von
                Themen in einem informellen und unterhaltsamen Ton diskutieren.
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/bullet-square-3.svg"} fill alt="bullet point 3" />
            </div>
            <div>
              <h4 className="text-2xl " >Krypto Insider <br /> Newsletter</h4>

              <p className='mt-3 tracking-wider text-sm w-96'>
                Unser Newsletter ist die ultimative Quelle für Neuigkeiten, Tipps und
                Inspirationen für alle, die ihr Leben in vollen Zügen genießen möchten.
              </p>
            </div>
          </div>

        </div>
      </div>




      {/* <div className='z-10'>
        <h3 className='text-4xl font-bold mb-14' >Entdecke unsere Services!</h3>
        <div className='flex flex-wrap gap-32' >
          <div className=' bg-slate-100 dark:bg-gray-800 rounded-2xl p-5 space-y-5 flex flex-col justify-between' >
            <div >
              <div className='relative w-72 h-72 mb-3'>
                <Image
                  src={"/home/cryptocurrencies-overview.jpg"}
                  fill
                  loading='lazy'
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
                  loading="lazy"
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
                  loading='lazy'
                  className='object-cover rounded-xl'
                  alt='Newsletter image'
                />
              </div>
              <div className=' max-w-[280px] '>
                <h4 className=' font-bold' >
                  Krypto Insider Newsletter
                </h4>
                <p className='mt-5 tracking-wider text-sm'>
                  Unser Newsletter ist die ultimative Quelle für Neuigkeiten, Tipps und
                  Inspirationen für alle, die ihr Leben in vollen Zügen genießen möchten.
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
      </div> */}
    </section>
  )
}
