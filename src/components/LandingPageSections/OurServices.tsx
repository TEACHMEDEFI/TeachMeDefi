
import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className='flex flex-col justify-center items-center w-full relative py-24 lg:py-44 px-5' >
      <div className="flex gap-10 xl:gap-40 flex-col xl:flex-row">
        <div className=" max-xl:flex max-lg:flex-col justify-center  items-center gap-10 lg:gap-24 xl:space-y-44 ">
          <div className="w-full">
            <h2 className="text-4xl  font-bold mb-6">Dein Tor zur Krypto-Welt!</h2>
            <p className="  lg:max-w-sm xl:w-[500px]">
              Ob durch unseren wöchentlichen Newsletter, informative
              Podcasts oder unser praxisorientiertes Krypto Bootcamp - wir bieten dir ein breites
              Spektrum an Wegen, dein Krypto-Wissen zu erweitern und aktiv in der Krypto-Welt teilzunehmen.
            </p>
          </div>
          {/* <div className=" h-[450px] w-[660px] relative flex flex-col justify-end" > */}
          <div className=" w-full lg:w-[600px] relative flex flex-col justify-end max-lg:items-center  max-xl:mt-5" >
            <div className="  sm:h-[340px]  sm:w-[500px]  bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink rounded-xl relative flex flex-col justify-end" >
              <p className="max-sm:p-5 sm:max-w-[360px] pl-7 pb-7 text-white" >
                Starte deine Krypto-Reise mit uns und entdecke eine Welt voller Möglichkeiten.
                Egal ob du ein Anfänger oder bereits erfahren bist, wir begleiten dich bei jedem Schritt.
                Nutze unseren Service und mach den ersten Schritt in deine Krypto-Zukunft. Bist du bereit?
              </p>

              <div className="absolute max-sm:hidden -right-32 bottom-0 w-[253px] h-[360px]">
                <Image src={"/home/ourServices/rustam-white.png"} fill alt="teaching crypto" />
              </div>
            </div>
            {/* <Image className="" src={"/home/rustam-kachel.png"} fill alt="Unsere Services" /> */}
          </div>
        </div>
        <div className="flex xl:flex-col max-xl:flex-wrap lg:justify-center gap-10 lg:gap-24 xl:gap-10 max-xl:mt-10 ">

          <div className="flex ">
            <div className="h-16 w-16 aspect-square relative mr-5">
              <Image src={"/home/ourServices/bullet-square-nft.svg"} fill alt="bullet point icon 1" />
            </div>
            <div className="max-lg:w-full" >
              <h4 className="text-2xl " >Onboarding Quest</h4>
              <p className='mt-2 tracking-wider text-sm w-full lg:w-80 xl:w-96'>
                In nur 90 Minuten fit für Bitcoin, Ethereum und Polkadot. Lerne die Grundlagen und
                erhalte Belohnungen für deine Lernerfolge! Unsere E-Learning-Plattform ist jederzeit
                und überall zugänglich - lerne in deinem eigenen Tempo!
              </p>
              <Link
                href={"#courses"}
                className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent"
              >
                Starte jetzt
              </Link>
            </div>
          </div>

          <div className="flex ">
            <div className="h-16 w-16 aspect-square relative mr-5">
              <Image src={"/home/ourServices/bullet-square-podcast.svg"} fill alt="bullet point icon 2" />
            </div>
            <div className="max-md:w-full" >
              <h4 className="text-2xl " >Podcast  </h4>
              <p className='mt-2 tracking-wider text-sm w-full  lg:w-80 xl:w-96'>
                Lerne unterwegs Unterhaltsame Diskussionen, spannende Interviews mit Experten
                und tiefgründige Analysen - alles in leicht verdaulichen Episoden, die du überall
                und jederzeit anhören kannst.
              </p>
              <Link
                href={"https://podcasters.spotify.com/pod/show/teachmedefi"}
                target="_blank"
                className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent"
              >
               Jetzt anhören
              </Link>
            </div>
          </div>

          <div className="flex ">
            <div className="h-16 w-16 aspect-square relative mr-5">
              <Image src={"/home/ourServices/bullet-square-newsletter.svg"} fill alt="bullet point icon 3" />
            </div>
            <div className="max-md:w-full" >

              <h4 className="text-2xl " > Newsletter</h4>
              <p className='mt-2 tracking-wider text-sm w-full  lg:w-80 xl:w-96'>
                Bleibe auf dem Laufenden Erfahre als Erster von neuen Entwicklungen im Krypto-Markt
                und erhalte wertvolle Einsichten und Tipps direkt in dein Postfach. Kostenlos.
              </p>
              <Link
                href={"https://www.newsletter.teachmedefi.de/"}
                target="_blank"
                className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent"
              >
                Hier abonnieren
              </Link>
            </div>
          </div>
          <div className="flex ">
            <div className="h-16 w-16 aspect-square relative mr-5">
              <Image src={"/home/ourServices/bullet-square-e-paper.svg"} fill alt="bullet point icon 4" />
            </div>
            <div className="max-md:w-full" >
              <h4 className="text-2xl " >E-Paper  </h4>
              <p className='mt-2 tracking-wider text-sm w-full  lg:w-80 xl:w-96'>
                Stürze dich ins Krypto-Abenteuer - schnapp dir unser E-Paper und starte deine Entdeckungsreise jetzt!
              </p>
              <Link target="_blank"
                href={"https://www.newsletter.teachmedefi.de/"}
                // target="_blank"
                className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent"
              >
                Hier herunterladen
              </Link>
            </div>
          </div>

        </div>
      </div>


    </section>
  )
}
