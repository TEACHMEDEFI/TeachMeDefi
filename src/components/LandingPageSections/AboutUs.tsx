
import { SecondaryButton } from "../Buttons/Buttons"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section id='about-us' className='flex flex-col items-center mb-5' >
      <div className="w-full flex flex-col items-center gap-16 max-w-[1240px]"  >
        <h3 className="text-4xl font-bold ">Über uns</h3>
        <p className="tracking-wide leading-relaxed text-center ">
          Seit 2017 setzen wir uns intensiv mit dem Thema DeFi und der Krypto-Welt auseinander.
          Wir können auf persönliche Erfolge und Misserfolge zurückgreifen. Daher sind wir auch
          die richtigen, um Dir bei deinem Einstieg zu helfen. Wir wollen unsere Erfahrungen an
          Dich weitergeben und Dir mit Tipps und Tricks zur Seite stehen. Wir freuen uns auf Dich!
        </p>
        <div className="flex flex-wrap justify-center gap-5 gap-y-10 lg:gap-16 xl:gap-28 " >
          <div
            // className="flex flex-col items-center"
            className="bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-3xl relative text-bgDarkGray flex flex-col items-center"
          >
            <div className="lg:mx-3 xl:mx-10 mt-5 w-64 text-center flex flex-col items-center text-white">

              <h4 className="font-bold mb-2 text-2xl" >Jan</h4>
              <p>M.Sc. Business & Economics</p>
              <p>Entrepreneur & Consultant</p>
              <p>In Krypto Seit 2019</p>
              <div className="h-64 w-48 relative mt-3" >
                <Image
                  src={"/home/aboutUs/jan.png"}
                  className="rounded-3xl"
                  fill
                  loading='lazy'
                  alt="Profil picture"
                />
              </div>
            </div>
          </div>
          <div
            // className="flex flex-col items-center"
            className="bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-3xl relative text-bgDarkGray flex flex-col items-center"
          >
            <div className="lg:mx-3 xl:mx-10 mt-5 w-64 text-center flex flex-col items-center text-white">

              <h4 className="font-bold mb-2 text-2xl" >Sohejl</h4>
              <p>M.Sc. Business Administration</p>
              <p>Entrepreneur & Consultant</p>
              <p>In Krypto Seit 2017</p>
              <div className="h-64 w-44 relative mt-3" >
                <Image
                  src={"/home/aboutUs/sohejl.png"}
                  className="rounded-3xl"
                  fill
                  loading='lazy'
                  alt="Profil picture"
                />
              </div>
            </div>
          </div>
          <div
            // className="flex flex-col items-center"
            className="bg-gradient-to-br
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-3xl relative text-bgDarkGray flex flex-col items-center"
          >
            <div className="lg:mx-3 xl:mx-10 mt-5 w-64 text-center flex flex-col items-center text-white">

              <h4 className="font-bold mb-2 text-2xl" >Rustam</h4>
              <p>B.Sc. Industrial Engineering</p>
              <p>Entrepreneur & Consultant</p>
              <p>In Krypto Seit 2017</p>
              <div className="h-64 w-44 relative mt-3" >
                <Image
                  src={"/home/aboutUs/rustam.png"}
                  className="rounded-3xl"
                  fill
                  loading='lazy'
                  alt="Profil picture"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="tracking-wide leading-relaxed text-center" >
          Wir befinden uns in einem Zeitalter der Entwicklung. Während das Web 1.0 in seiner Ursprungsphase
          noch statisch und ohne Interaktionsmöglichkeiten die ersten Websites präsentierte, revolutionierte
          das Web 2.0 bereits alles bisher Dagewesene. Jede Person kann frei durch verschiedenste Websites
          navigieren. User können sogar selbst Content erstellen und mit der ganzen Welt teilen - das ist
          unser heutiger Stand. Aber die Entwicklung ist noch nicht abgeschlossen. Unsere Gesellschaft
          befindet sich auf dem Weg zu einer neuen Revolution - dem Web 3.0. Dies ist das Zeitalter des
          dezentralen Finanzsystems (DeFi), des neuen Bankings und des digitalen Eigentums.
        </p>
        <p className="tracking-wide leading-relaxed text-center" >
          Die Krypto-Industrie ist zwar momentan noch jung, doch in ihr steckt viel Potenzial - sie wird in
          den nächsten Jahren kontinuierlich wachsen. Daher ist es ratsam, Dir schon jetzt die Zeit zu nehmen
          und nicht der Letzte zu sein, der den Markt betritt. Nutze stattdessen die Chance, sei frühzeitig
          dabei, positioniere Dich und profitiere von den Möglichkeiten. Bei TeachMeDeFi unterstützen wir
          Dich dabei, diese Chancen zu erkennen und Deine Position in der aufstrebenden Krypto-Welt zu stärken.
          Lass uns gemeinsam die Zukunft der Finanzen gestalten und keine Gelegenheit verpassen.
        </p>
      </div>
    </section>
  )
}