
import { SecondaryButton } from "../Buttons/Buttons"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section id='about-us' className='my-44 flex flex-col items-center mb-5' >
      <div className="w-full flex flex-col items-center gap-16 max-w-5xl py-10"  >
        <h3 className="text-4xl font-bold ">Über uns</h3>
        <p className="tracking-wide leading-relaxed ">
          Seit 2017 setzen wir uns intensiv mit dem Thema DeFi und der Krypotwelt auseinander.
          Wir können auf persönliche Erfolge und Misserfolge zurückgreifen. Daher sind wir auch
          die richtigen, um Dir bei deinem Einstieg zu helfen. Wir wollen unsere Erfahrungen an
          Dich weitergeben und Dir mit Tipps und Tricks zur Seite stehen. Wir freuen uns auf Dich!
        </p>
        <div className="flex gap-44 " >
          <div className="flex flex-col items-center" >
            <div className="h-64 w-44 relative mb-3" >
              <Image
                src={"/home/placeholder_profile_pic.jpg"}
                className="rounded-3xl"
                fill
                alt="Profil picture"
              />
            </div>
            <h4 className="font-bold text-2xl" >Jan</h4>
            <p>M.Sc. Business & Economics</p>
            <p>Entrepreneur & Consultant</p>
            <p>In Krypto Seit 2019</p>
          </div>
          <div className="flex flex-col items-center" >
            <div className="h-64 w-44 relative mb-3" >
              <Image
                src={"/home/placeholder_profile_pic.jpg"}
                className="rounded-3xl"
                fill
                alt="Profil picture"
              />
            </div>
            <h4 className="font-bold text-2xl" >Sohejl</h4>
            <p>M.Sc. Business Administration</p>
            <p>Entrepreneur & Consultant</p>
            <p>In Krypto Seit 2017</p>
          </div>
          <div className="flex flex-col items-center" >
            <div className="h-64 w-44 relative mb-3" >
              <Image
                src={"/home/placeholder_profile_pic.jpg"}
                className="rounded-3xl"
                fill
                alt="Profil picture"
              />
            </div>
            <h4 className="font-bold text-2xl" >Rustam</h4>
            <p>B.Sc. Industrial Engineering</p>
            <p>Entrepreneur & Consultant</p>
            <p>In Krypto Seit 2017</p>
          </div>
        </div>
        <SecondaryButton>
          Vereinbare HEUTE noch ein Termin
        </SecondaryButton>
        <p className="tracking-wide leading-relaxed " >
          Wir befinden uns in einem Zeitalter der Entwicklung. Während das Web 1.0 in seiner Ursprungsphase noch
          statisch und ohne Interaktionsmöglichkeiten die ersten Websites präsentierte, revolutionierte das Web 2.0
          bereits alles bisher Dagewesene. Jede Person kann frei durch verschiedenste Websites navigieren. User
          können sogar selbst Content erstellen und mit der ganzen Welt teilen – das ist unser heutiger Stand.
          Aber die Entwicklung ist noch nicht abgeschlossen. Unsere Gesellschaft befindet sich auf dem Weg zu
          einer neuen Revolution – dem Web 3.0. Dies ist das Zeitalter des dezentralen Finanzsystems (DeFi),
          des neuen Bankings und des digitalen Eigentums.
        </p>
        <p className="tracking-wide leading-relaxed " >
          Die Krypto-Industrie ist zwar momentan noch klein, doch in ihr steckt viel Potenzial – sie wird in den
          nächsten Jahren konstant wachsen! Daher ist es ratsam, Dir schon jetzt die Zeit zu nehmen, Dich darauf
          vorzubereiten – denn der Fortschritt lässt sich nicht aufhalten.
        </p>
      </div>
    </section>
  )
}