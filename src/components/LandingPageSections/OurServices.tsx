
import Image from "next/image";

export default function OurServices() {
  return (
    <section className='flex flex-col justify-center items-center w-full relative py-44' >
      <div className="flex gap-10 xl:gap-28 flex-col xl:flex-row">
        <div className=" max-xl:flex max-lg:flex-col justify-center  items-center gap-10 lg:gap-24  ">
          <div>
            <h2 className="text-4xl  font-bold mb-6">Entdecke unsere <br className="max-lg:hidden" />Services!</h2>
            <p className=" max-w-2xl lg:max-w-sm xl:w-[500px]">
              Ob durch unseren wöchentlichen Newsletter, informative
              Podcasts oder unser praxisorientiertes Krypto Bootcamp - wir bieten dir ein breites
              Spektrum an Wegen, dein Krypto-Wissen zu erweitern und aktiv in der Krypto-Welt teilzunehmen.
            </p>
          </div>
          {/* <div className=" h-[450px] w-[660px] relative flex flex-col justify-end" > */}
          <div className=" max-sm:w-full lg:h-[450px] lg:w-[600px] relative flex flex-col justify-end max-xl:mt-5" >
            <div className=" h-[230px] sm:h-[340px]  sm:w-[500px] bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink rounded-xl relative flex flex-col justify-end" >
              <p className="max-sm:p-5 sm:max-w-[360px] pl-3 pb-3 text-white" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatum culpa 
                necessitatibus nostrum ipsum commodi obcaecati odit dolorum tempore fugiat, at 
                optio sequi eligendi quis, quos et accusamus. Laboriosam, blanditiis?
              </p>

              <div className="absolute max-sm:hidden -right-24 bottom-0 w-[253px] h-[380px]">
                <Image src={"/home/sohejl.png"} fill alt="teaching crypto" />
              </div>
            </div>
            {/* <Image className="" src={"/home/rustam-kachel.png"} fill alt="Unsere Services" /> */}
          </div>
        </div>
        <div className="flex xl:flex-col max-xl:flex-wrap justify-center gap-10 lg:gap-24 xl:gap-10 max-xl:mt-10 ">

          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/ourServices/bullet-square-nft.svg"} fill alt="bullet point icon 1" />
            </div>
            <div className="max-sm:w-full" >
              <h4 className="text-2xl " >Onboarding quest</h4>
              <p className='mt-2 tracking-wider text-sm  sm:w-96 md:w-64 lg:w-80 xl:w-96'>
                In nur 90 Minuten fit für Bitcoin, Ethereum und Polkadot. Lerne die Grundlagen und
                erhalte Belohnungen für deine Lernerfolge! Unsere E-Learning-Plattform ist jederzeit
                und überall zugänglich - lerne in deinem eigenen Tempo!
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/ourServices/bullet-square-podcast.svg"} fill alt="bullet point icon 2" />
            </div>
            <div className="max-sm:w-full" >
              <h4 className="text-2xl " > Newsletter</h4>
              <p className='mt-2 tracking-wider text-sm  sm:w-96 md:w-64 lg:w-80 xl:w-96'>
                Lerne unterwegs Unterhaltsame Diskussionen, spannende Interviews mit Experten
                und tiefgründige Analysen - alles in leicht verdaulichen Episoden, die du überall
                und jederzeit anhören kannst.
              </p>
            </div>
          </div>

          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/ourServices/bullet-square-newsletter.svg"} fill alt="bullet point icon 3" />
            </div>
            <div className="max-sm:w-full" >
              <h4 className="text-2xl " >Podcast <br /> </h4>
              <p className='mt-2 tracking-wider text-sm  sm:w-96 md:w-64 lg:w-80 xl:w-96'>
                Bleibe auf dem Laufenden Erfahre als Erster von neuen Entwicklungen im Krypto-Markt
                und erhalte wertvolle Einsichten und Tipps direkt in dein Postfach. Kostenlos.
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/ourServices/bullet-square-e-paper.svg"} fill alt="bullet point icon 4" />
            </div>
            <div className="max-sm:w-full" >
              <h4 className="text-2xl " >E-Paper <br /> </h4>
              <p className='mt-2 tracking-wider text-sm  sm:w-96 md:w-64 lg:w-80 xl:w-96'>
                TEXT WO?
                Unser Newsletter ist die ultimative Quelle für Neuigkeiten, Tipps und
                Inspirationen für alle, die ihr Leben in vollen Zügen genießen möchten.
              </p>
            </div>
          </div>

        </div>
      </div>


    </section>
  )
}
