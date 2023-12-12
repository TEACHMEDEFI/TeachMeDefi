import { GeneralButton } from "@/components/Buttons/Buttons";

type ModalProps = {
  togglePopup: Function;
}

export default function AboutUsModal({ togglePopup }: ModalProps) {
  const handleToggle = (open: boolean) => {
    togglePopup(open)
  }

  return (
    <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
      <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >

        <div className="about-us-container pr-4 !overflow-x-hidden">
          <h3 className="text-4xl font-bold mb-5">Über uns</h3>
          <p className="tracking-wide leading-relaxed text-center ">
            Seit 2017 haben wir uns alle persönlich und intensiv mit dem Thema DeFi und der Krypto-Welt auseinander gesetzt. 
            Seit 2022 führen wir immer wieder Kooperationsprojekte gemeinsam als TEACHMEDEFI durch.
            Wir können auf persönliche Erfolge und Misserfolge zurückgreifen. Daher sind wir auch
            die richtigen, um Dir bei deinem Einstieg zu helfen. Wir wollen unsere Erfahrungen an
            Dich weitergeben und Dir mit Tipps und Tricks zur Seite stehen. Wir freuen uns auf Dich!
          </p>
          <br />
          <p className="tracking-wide leading-relaxed text-center" >
            Wir befinden uns in einem Zeitalter der Entwicklung. Während das Web 1.0 in seiner Ursprungsphase
            noch statisch und ohne Interaktionsmöglichkeiten die ersten Websites präsentierte, revolutionierte
            das Web 2.0 bereits alles bisher Dagewesene. Jede Person kann frei durch verschiedenste Websites
            navigieren. User können sogar selbst Content erstellen und mit der ganzen Welt teilen - das ist
            unser heutiger Stand. Aber die Entwicklung ist noch nicht abgeschlossen. Unsere Gesellschaft
            befindet sich auf dem Weg zu einer neuen Revolution - dem Web 3.0. Dies ist das Zeitalter des
            dezentralen Finanzsystems (DeFi), des neuen Bankings und des digitalen Eigentums.
          </p>
          <br />
          <p className="tracking-wide leading-relaxed text-center" >
            Die Krypto-Industrie ist zwar momentan noch jung, doch in ihr steckt viel Potenzial - sie wird in
            den nächsten Jahren kontinuierlich wachsen. Daher ist es ratsam, Dir schon jetzt die Zeit zu nehmen
            und nicht der Letzte zu sein, der den Markt betritt. Nutze stattdessen die Chance, sei frühzeitig
            dabei, positioniere Dich und profitiere von den Möglichkeiten. Bei TeachMeDeFi unterstützen wir
            Dich dabei, diese Chancen zu erkennen und Deine Position in der aufstrebenden Krypto-Welt zu stärken.
            Lass uns gemeinsam die Zukunft der Finanzen gestalten und keine Gelegenheit verpassen.
          </p>
          <br />
          <p className="tracking-wide leading-relaxed text-center" >
            <strong>Jan</strong> betrat die Krypto-Welt im Jahr 2019. Mit über fünf Jahren Erfahrung als Unternehmer,
            Produktentwickler und Berater hat Jan mehrere Unternehmen gegründet, darunter DA&apos;QORD,
            ein patentiertes Fashion-Tech-Accessoire. Seit 2019 arbeitet er als Berater in Marketing & Sales
            und bringt diese Expertise in das TEACHMEDEFI-Team ein.
          </p>
          <br />
          <p className="tracking-wide leading-relaxed text-center" >
            Seit 2017 in der Krypto-Welt aktiv, kann <strong>Sohejl</strong> auf sechs Jahre internationale Erfahrung in den
            Bereichen Mergers & Acquisitions, Beteiligungscontrolling und Corporate Strategy zurückblicken.
            Mit seiner umfangreichen Erfahrung ist er für die strategische Ausrichtung von TEACHMEDEFI verantwortlich.
          </p>
          <br />
          <p className="tracking-wide leading-relaxed text-center" >
            Auch <strong>Rustam</strong> hat seit 2017 seine Leidenschaft für Krypto entdeckt. Mit einem B.Sc. in Wirtschaftsingenieurwesen-Elektrotechnik
            und über fünf Jahren Erfahrung im B2B- Vertrieb sowie zwei Jahren Erfahrung als Business und Approvals
            Coordinator, bei dem er ein Team von 30 internationalen Mitarbeitern leitete, bringt Rustam eine solide operative Kompetenz in unser Team.
          </p>
        </div>


        <GeneralButton onClick={() => handleToggle(false)}>Schließen</GeneralButton>
      </div>
    </div>
  )
}
