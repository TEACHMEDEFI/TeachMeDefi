import { GeneralButton } from "@/components/Buttons/Buttons";

type ModalProps = {
    togglePopup: Function;
}

export default function AboutUsModal({togglePopup}: ModalProps) {
    const handleToggle = (open: boolean) => {
        togglePopup(open)
    }

    return (
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
            <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >

                <h3 className="text-4xl font-bold">Über uns</h3>
                <p className="tracking-wide leading-relaxed text-center ">
                    Seit 2017 setzen wir uns intensiv mit dem Thema DeFi und der Krypto-Welt auseinander.
                    Wir können auf persönliche Erfolge und Misserfolge zurückgreifen. Daher sind wir auch
                    die richtigen, um Dir bei deinem Einstieg zu helfen. Wir wollen unsere Erfahrungen an
                    Dich weitergeben und Dir mit Tipps und Tricks zur Seite stehen. Wir freuen uns auf Dich!
                </p>
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

                <GeneralButton onClick={() => handleToggle(false)}>Modal Schließen</GeneralButton>
            </div>
        </div>
    )
}