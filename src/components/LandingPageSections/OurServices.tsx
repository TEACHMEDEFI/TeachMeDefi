
import Image from "next/image";

export default function OurServices() {
  return (
    <section className='flex flex-col justify-center items-center w-full relative py-44' >


      <div className="flex gap-28 ">
        <div className="">
          <h2 className="text-4xl font-bold mb-6">Entdecke unsere <br />Services!</h2>
          <p className="w-[500px]">
            Ob durch unseren wöchentlichen Newsletter, informative
            Podcasts oder unser praxisorientiertes Krypto Bootcamp - wir bieten dir ein breites
            Spektrum an Wegen, dein Krypto-Wissen zu erweitern und aktiv in der Krypto-Welt teilzunehmen.
          </p>
          <div className=" h-[450px] w-[660px] relative" >
            <Image src={"/home/rustam-kachel.png"} fill alt="Unsere Services" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6">

          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/ourServices/bullet-square-nft.svg"} fill alt="bullet point icon 1" />
            </div>
            <div>
              <h4 className="text-2xl " >Onboarding quest</h4>
              <p className='mt-3 tracking-wider text-sm w-96'>
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
            <div>
              <h4 className="text-2xl " > Newsletter</h4>
              <p className='mt-3 tracking-wider text-sm w-96'>
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
            <div>
              <h4 className="text-2xl " >Podcast <br /> </h4>
              <p className='mt-3 tracking-wider text-sm w-96'>
                Bleibe auf dem Laufenden Erfahre als Erster von neuen Entwicklungen im Krypto-Markt 
                und erhalte wertvolle Einsichten und Tipps direkt in dein Postfach. Kostenlos.
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="h-16 w-16 relative mr-5">
              <Image src={"/home/ourServices/bullet-square-e-paper.svg"} fill alt="bullet point icon 4" />
            </div>
            <div>
              <h4 className="text-2xl " >E-Paper <br /> </h4>
              <p className='mt-3 tracking-wider text-sm w-96'>
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
