
import { Lesson } from "../generalLessons";


/**
 * Quest 1 
 * Section 2
 */

export const quest5: Lesson[] = [
  {
    id: "dot-25",
    title: 'Quest 5.1 Krypto handeln auf einer DEX',
    slug: 'handeln-dex',
    youtubeUrl: 'https://youtu.be/gw9jEMs3r4s',
    youtubeThumbnail: "https://youtu.be/gw9jEMs3r4s/hqdefault.jpg",
    importantLinks: [],
    section: 2, // danach 3 und 4
    questNumber: 8,
    videoTime: '06:09',
    transcript: [
      {
        subline: "Krypto handeln auf einer DEX",
        title: "Anleitung zum Video",
        text: "Schritt-für-Schritt Anleitung: Kryptowährungen auf einer DEX handeln (Moonbeam)"
      },
      {
        subline: "Hinweis",
        text: "Bevor du dieses Tutorial zur Nutzung einer dezentralen Handelsbörse (DEX) startest, beachte die folgenden Risiken:"
      },
      {
        text: 'Hohe Preisvolatilität und potenzielle Verluste'
      },
      {
        text: 'Mögliche Programmierfehler oder Sicherheitslücken in Smart Contracts'
      },
      {
        text: 'Begrenzte Kundensupport-Möglichkeiten'
      },
      {
        text: 'Geringere Liquidität und mögliche Ausführungsprobleme'
      },
      {
        text: 'Risiko von Benutzerfehlern und Verlusten'
      },
      {
        text: 'Phishing-Angriffe und Betrugsrisiken'
      },
      {
        text: 'Achte darauf, angemessene Vorsichtsmaßnahmen zu treffen und dich selbst über den Handelsprozess und die Sicherheit zu informieren, bevor du mit dem Handel auf einer DEX beginnst.'
      },
      {  
        subline: "1. Besuche die Website 'dtmb.xyz' - Downtown Moonbeam, um das Moonbeam-Ökosystem zu erkunden.",
        links: [
          {
              linkText: 'Moonbeam',
              href: "https://www.dtmb.xyz/"
          }
      ]
      },
      {  
        subline: "2. Entdecke die Vielzahl von Projekten und Anwendungen auf Moonbeam, einschließlich NFTs, DeFi, Gaming und Staking. Filtere nach deinen Interessen und erkunde Anwendungen, die du interessant findest."
      },

      {  
        subline: "3. Beispiel DeFi - Klicke auf 'Stella Swap', eine dezentrale Handelsbörse auf Moonbeam. Klicke auf “Launch App”.",
        links: [
          {
              linkText: 'Stella Swap',
              href: "https://stellaswap.com/"
          }
      ]
      },
      {  
        subline: '4. Erhalte den Coin "Glimmer" (GLMR) für Transaktionen auf Moonbeam',
        text: '4.1 Ähnlich wie auf Ethereum (ETH) oder Polkadot’s Relay Chain (DOT), müssen wir hier Gebühren für die Durchführung von Transaktionen in einem nativen Coin zahlen. Moonbeam’s nativer Coin heißt GLMR.',
      },
      {
        text: '4.2 Ein Talisman Fenster dürfte sich öffnen, wenn du die Webseite öffnest. Verbinde deine Wallet mit der Webseite (wähle deinen Ethereum Account aus).'
      },
      {
        text: '4.3 Um GLMR zu kaufen, klicke auf "Transfer" und dann auf "Swap For Gas". und wähle DOT aus, um Glimmer zu erhalten. Da ich 1 DOT zu Moonbeam teleportiert habe, wähle ich hier z. B. 0,4 DOT aus.'
      },
      {
        text: '4.4 Klicke auf den Button unten und gib die Transaktion danach in Talisman frei. Nach einigen Sekunden sollte die Transaktion durchgeführt sein und wir sehen in der Talisman Wallet, dass wir nun GLMR im Ethereum Account haben.'
      },
      {
        text: '4.5 Hinweis: Hier kann es sein, dass du eventuell zwei Transaktionen durchführen: Einmal die Freigabe, dass StellaSwap deine DOT Coins für den Trade “benutzen” darf und einmal die anschließende eigentliche Durchführung des Trades.'
      },
      {
        subline: '5. Krypto-Handel auf Stella Swap',
        text: '5.1 Klicke oben auf "Trade" und “Swap” und gelange zur Trading-Oberfläche. Hier kannst du zwischen verschiedenen Coins handeln. Wir haben jetzt genügend GLMR, um Transaktionsgebühren zu decken.'
      },
      {
        subline: '6. Tausche DOT gegen einen anderen Token',
        text: '6.1 Wähle den gewünschten Coin, z.B. "Astar", und den Betrag an DOT aus, den du gegen Astar tauschen möchtest. (”Swap From”: DOT, “Swap To”: Astar)'
      },
      {
        text: '6.2 Bestätige die Transaktion(en) und warte auf die Bestätigung.'
      },
      {
        subline: '6. Tausche DOT gegen einen anderen Token',
        text: '6.1 Wähle den gewünschten Coin, z.B. "Astar", und den Betrag an DOT aus, den du gegen Astar tauschen möchtest. (”Swap From”: DOT, “Swap To”: Astar)'
      },
      {
        subline: '7. Anzeige des xcASTAR-Coins in der Wallet (Token Contract Adresse hinzufügen)',
        text: '7.1 Anschließend müssen wir die Anzeige des Coins Astar in unserer Wallet freischalten. Dafür klicken wir, sobald die Transaktion bestätigt ist, auf “Add to Metamask”. Talisman öffnet sich und wir bestätigen.'
      },
      {
        text: '7.2 Hinweis: Hier geht es darum, dass die Talisman-Extension unsere Astar-Coins auf der Chain “sehen” kann. Das Astar-Guthaben ist bereits auf der Blockchain in unserer Wallet-Adresse. Wir wollen hier lediglich sicherstellen, dass uns dies auch im “Front-End” der Browser-Erweiterung angezeigt wird.'
      },
      {
        text: '7.3 Navigiere zum Ethereum Account und nach einigen Sekunden wird dir nun dein Astar-Guthaben angezeigt.'
      },
      {
        subline: '8. (Optional) - Tausche den Coin zurück.',
        text: '8.1 Ich tausche den Astar Coin zurück zu DOT, damit ich genug DOT und GLMR für den nächsten Quest habe, in dem wir Liquidity Mining betreiben werden.'
      },
      {
        text: '8.2 Wähle im Swap Fenster Astar für “Swap From” und DOT für “Swap To” aus.'
      },
      {
        text: '8.3 Klicke auf “Max” im Feld für Astar um unser gesamtes Guthaben zu verkaufen. Bestätige die Transaktion und warte auf die Bestätigung.'
      },
      {
        text: '8.4 Hinweis: Hier solltest du evtl. zwei Transaktionen durchführen müssen: Einmal die Freigabe, dass StellaSwap deine Astar Coins für den Trade “benutzen” darf und einmal die anschließende eigentliche Durchführung des Trades.'
      },
      {  
        text: "Bitte beachte, dass dies eine vereinfachte Anleitung ist und weitere Details in unserem Video zu finden sind.",
      },
      {
        text: 'Viel Spaß beim Erkunden des Moonbeam-Ökosystems und dem Handeln von Kryptowährungen!'
      }
    ]
  },
  {
    id: "dot-26",
    title: 'Quest 5.2 Liquidity Mining',
    slug: 'liquidity-mining',
    youtubeUrl: 'https://youtu.be/kwAT-ieOeQws',
    youtubeThumbnail: "https://youtu.be/kwAT-ieOeQw/hqdefault.jpg",
    importantLinks: [],
    section: 2, // danach 3 und 4
    questNumber: 9,
    videoTime: '07:00',
    transcript: [
      {
        subline: "Anleitung zur Bereitstellung von Liquidität auf StellaSwap",
        title: "Anleitung zum Video",
        text: "In diesem Tutorial erfährst du, wie du Liquidität bereitstellen bzw. “Liquidity Mining” auf einer dezentralen Handelsbörse betreiben und dabei eine Verzinsung verdienen kannst. Indem du Liquidität in einen Pool einbringst, ermöglicht es anderen Benutzern, zwischen verschiedenen Assets zu handeln. Dabei erhältst du als Belohnung eine Verzinsung, untere anderem aus den Trading-Gebühren die die Nutzer zahlen."
      },
      {
        subline: "Hinweis",
        text: "Bitte beachte, dass diese Anlagestrategie Risiken birgt. Investiere nie mehr, als du bereit bist zu verlieren. Die Informationen in diesem Video dienen nur zu Demonstrationszwecken und stellen keine finanzielle Beratung dar. Näheres zu den Risiken wie u.a. der Preisvolatilität der Kryptowährungen, möglichem “Impermanent Loss” und Smart Contract Hacks/Fehlern findest du im Risikohinweis am Ende dieser Anleitung."
      },
      {  
        subline: "1. Verständnis von Liquidity Mining bzw. Liquiditätsbereitstellung ",
        text: 'Wenn du Liquidität auf StellaSwap bereitstellst, trägst du dazu bei, dass andere Benutzer zwischen Assets handeln können. Durch die Bereitstellung von Liquidität in einem Pool erhältst du eine Verzinsung für deine Beiträge. Beispiel: Du stellst sowohl GLMR Coins als auch DOT Coins in dem GLMR-DOT Liquiditätspool bereit und ermöglichst so, dass Nutzer in diesem Pool GLMR gegen DOT (Nutzer zahlt GLMR in den Pool ein und entnimmt DOTaus dem Pool) oder DOT gegen GLMR tauschen können (Nutzer zahlt DOT in den Pool ein und entnimmt GLMR aus dem Pool).'
      },
      {  
        subline: "2.Zugriff auf den “Farm”-Bereich auf StellaSwap",
        text: 'Gehe zur StellaSwap-Website und klicke auf "Earn", dann wähle "Farm" aus dem Menü. Hier findest du eine Liste der verfügbaren Liquiditätspools.'
      },

      {  
        subline: "3. Auswahl des passenden Pools",
        text: 'Wähle den Pool aus, der die Coins enthält, die du derzeit hältst. Wir wählen den DOT-GLMR Pool aus.'
      },
      {  
        subline: '4. Überprüfung der Pool-Informationen ',
        text: '4.1 Informiere dich über die Details des ausgewählten Pools. Beachte das abgeschlossene Liquiditätsvolumen, das 24-Stunden-Handelsvolumen und den Annual Percentage Return (APR), der die erwartete jährliche Verzinsung angibt.',
      },
      {
        subline: '5. Verständnis der Risiken',
        text: '5.1 Sei dir bewusst, dass Liquidity Mining mit bestimmten Risiken verbunden ist. Es besteht unter anderem die Möglichkeit von Wertverlusten aufgrund von Volatilität der Coins (DOT und GLMR könnten hier z. B. im Preis fallen), “[Impermanent Loss](loss is a risk, the time you deposited them.)”, Preisverfall des Coins in dem die Rendite ausgezahlt wird, und dem Risiko von Smart Contract Hacks oder Fehlern. Grundsätzlich sollte man nicht mehr einzahlen, als man bereit ist zu verlieren.',
        links: [
          {
              linkText: 'Impermanent Loss',
              href: "https://www.ledger.com/academy/glossary/impermanent-loss#:~:text=Impermanent"
          }
      ]
      },
      {
        subline: '6. Bereitstellung von Liquidität ',
        text: '6.1 Klicke auf "Deposit" und gib den Betrag ein, den du bereitstellen möchtest. Beachte, dass du etwas GLMR in deiner Wallet belassen solltest, um Transaktionsgebühren zu bezahlen. Ich lasse dafür 1-2 GLMR in der Wallet übrig.'
      },
      {
        text: '6.2 Bestätige die Transaktion(en) und warte auf die Bestätigung.'
      },
      {
        subline: '7. Genehmigung der Transaktion ',
        text: '7.1 Klicke auf "Approve", um die Nutzung deiner Coins für den Smart Contract freizugeben. Bestätige die Transaktion in deiner Wallet.'
      },
      {
        subline: '8. Überprüfung der abgeschlossenen Transaktion',
        text: '8.1 Sobald die Transaktion bestätigt ist, kannst du auf "Review & Confirm" klicken. Überprüfe die Transaktionsdetails und bestätige sie erneut in deiner Wallet.'
      },
      {
        subline: '9. Überprüfung des Liquiditätspools ',
        text: '9.1 Klicke auf "View Portfolio" und gehe zum Dashboard, um deine Position im Liquiditätspool zu sehen. Hier kannst du den Gesamtwert deiner Position und deine potenzielle Verzinsung einsehen.'
      },
      {
        text: 'Hinweis: Beachte, dass der "Harvest All" Button nur aktiv ist, wenn du bereits Belohnungen erhalten hast. Über den Button kannst du deine Verzinsung annehmen während du Liquiditätsbereitsteller bist.'
      },
      {
        subline: '8. Schließung der Position ',
        text: '9.1 Wenn du deine Position im Pool beenden möchtest, klicke auf "Exit" und wähle den Prozentsatz der Position, den du entfernen möchtest. Wir schließen an dieser Stelle die gesamte Position, da dies nur zu Demonstrationszwecken diente. Bestätige die Transaktion in deiner Wallet.'
      },
      {
        text: 'Das wars! Du hast jetzt erfahren, wie du Liquidität auf StellaSwap bereitstellen kannst. Schaue dir am besten unser Tutorial-Video an, falls diese Anleitung nicht detailliert genug war.'
      },
      {
        subline: 'Liquidity Mining auf einer dezentralen Handelsbörse (DEX) ',
        title: 'Risikohinweis',
        text: 'Bevor du dich für das Liquidity Mining auf einer DEX entscheidest und das entsprechende Tutorial durchführst, ist es wichtig, die damit verbundenen Risiken zu verstehen:'
      },
      {
        text: '1. Hohe Preisvolatilität: Die Preise von Kryptowährungen und Tokens können stark schwanken, was zu potenziellen Verlusten führen kann. Sei dir bewusst, dass du deine eingezahlten Mittel verlieren könntest.'
      },
      {
        text: '2. Verlust der investierten Mittel: Das Liquidity Mining birgt das Risiko des Verlustes der eingesetzten Kryptowährungen oder Tokens. Es besteht die Möglichkeit, dass du nicht die erwarteten Renditen erzielst oder sogar einen Teil oder die gesamte Investition verlierst.'
      },
      {
        text: '3. Smart Contract-Risiken: Liquidity Mining erfolgt oft über Smart Contracts, die potenzielle Programmierfehler oder Sicherheitslücken aufweisen können. Diese könnten dazu führen, dass deine Mittel gefährdet werden. Überprüfe daher sorgfältig die Sicherheit des verwendeten Smart Contracts.'
      },
      {
        text: '4. Geringe Liquidität: DEXs haben möglicherweise eine geringere Liquidität im Vergleich zu zentralisierten Handelsplattformen. Dies kann zu Schwierigkeiten bei der Ausführung von Transaktionen und einem höheren Risiko von Preisabweichungen führen.'
      },
      {
        text: '5. Kein Kundensupport: Im Gegensatz zu zentralisierten Börsen bieten DEXs oft begrenzte oder gar keinen Kundensupport an. Sei darauf vorbereitet, dass du möglicherweise nicht die gleiche Unterstützung erhältst wie bei traditionellen Handelsplattformen.'
      },
      {
        text: 'Bevor du dich für das Liquidity Mining entscheidest, solltest du dich über den Prozess, die Risiken und die Sicherheitsmaßnahmen gründlich informieren. Es wird empfohlen, nur Mittel einzusetzen, die du bereit bist zu verlieren, und gegebenenfalls weiteren Rat einzuholen.'
      },
      {
        text: 'Bitte beachte, dass diese Anlagestrategie Risiken birgt. Investiere nie mehr, als du bereit bist zu verlieren. Die Informationen in diesem Video dienen nur zu Demonstrationszwecken und stellen keine finanzielle Beratung dar.'
      }
    ]
  },
  {
    id: "dot-27",
    title: 'Quest 5.3 Heimreise',
    slug: 'heimreise',
    youtubeUrl: 'https://youtu.be/3YHZKhhDYVs',
    youtubeThumbnail: "https://youtu.be/3YHZKhhDYVs/hqdefault.jpg",
    importantLinks: [],
    section: 2, // danach 3 und 4
    questNumber: 9,
    isLastQuest: true,
    videoTime: '03:14',
    transcript: [
      {
        subline: "Schritt-für-Schritt Anleitung zum “Rückgängig”-machen der getätigten Aktionen und Rücksenden von DOT zur Relay Chain:",
        title: "Anleitung zum Video",
        text: "In dieser Anleitung zeigen wir dir, wie du einfach und schnell alle Aktionen, die wir bisher in dieser “Polkadot-Serie” durchgeführt haben, “rückgängig” machen und deine DOT zur Relay Chain zurückschicken kannst. Erfahre, wie du deine GLMR in DOT tauschst und dabei einen Teil für Transaktionsgebühren in GLMR behältst. Anschließend senden wir die DOTs von Moonbeam zurück zur Relay Chain."
      },
      {
        subline: '1. Zurückswappen von GLMR zu DOT',
        text: '1.1 Besuche die Stella Swap Seite und wähle GLMR für “Swap From" und DOT für “Swap To”',
        links: [
          {
              linkText: 'Stella Swap',
              href: "https://app.stellaswap.com/exchange/swap"
          }
        ]
      },
      {
        text: '1.2 Gib den Betrag ein, den du zurückswappen möchtest, und behalte etwas Glimmer für Transaktionsgebühren übrig. Wähle nicht “Max” für GLMR, da wir noch etwas GLMR für die anschließende Cross-Chain Transaktion benötigen.'
      },
      {
        text: '1.3 Ich lasse hier 1 GLMR in der Wallet für zukünftige Gebühren und trade den Rest zu DOT.'
      },
      {
        text: '1.4 Klicke auf "Approve" und warte, bis die Transaktion abgeschlossen ist.'
      },
      {
        subline: '2.  Zurücksenden von DOT zur Relay Chain',
        text: '2.1 Gehe zum Moonbeam-Dashboard und wähle "Crosschain" > "Parachain Bridges". Wähle DOT aus und klicke diesmal für das “From”-Feld "Moonbeam” und für das “To”-Feld “Polkadot".',
        links: [
          {
              linkText: 'Moonbeam Dashboard',
              href: "https://apps.moonbeam.network/moonbeam"
          }
        ]
      },
      {
        text: 'Falls noch nicht verbunden, verbinde sowohl deinen Ethereum-Account (”Sender”-Feld) und deinen Polkadot-Account (”Recipient”-Feld).'
      },
      {
        text: 'Klicke auf "Max", um den gesamten verbleibenden DOT-Betrag zu teleportieren.'
      },
      {
        text: 'Klicke “Send” und sende somit die DOTs zurück zur Relay Chain.'
      },
      {
        subline: '3. Überprüfung und Abschluss',
        text: '3.1 Warte, bis die Transaktion abgeschlossen ist und deine DOTs auf der Relay Chain erscheinen.',
      },
      {
        text: '3.2 Überprüfe deine Wallet-Adresse auf der Relay Chain, um sicherzustellen, dass die DOTs wieder sichtbar sind. Klicke dafür auf deinen Polkadot Account in Talisman, um dein DOT-Guthaben zu sehen. Auf deinem Ethereum-Account andererseits solltest du nun kein xcDOT-Guthaben mehr sehen.'
      },
      {
        subline: 'Fazit',
        text: 'Wir hoffen, dass dir diese Anleitung gefallen hat und du etwas Neues gelernt hast. Falls du Fragen hast oder Feedback geben möchtest, kontaktiere uns gerne über unsere Webseite. Dieses kurze Abenteuer in die Polkadot-Welt ist nun zu Ende! Wir freuen uns darauf, von dir zu hören und hoffen dich auch zukünftig auf deinen Krypto-Abenteuern zu begleiten!',
        links: [
          {
              linkText: 'Teach Me Defi',
              href: "https://www.teachmedefi.de/"
          }
        ]
      },
      {
        text: 'Wenn diese Informationen für dich nützlich waren, abonniere doch gerne unseren Newsletter und unseren Podcast auf teachmedefi.de. Wir halten dich dort wöchentlich auf dem Laufenden was die aktuellsten Ereignisse im Krypto-Markt angeht!'
      },
    ]
  }
]
