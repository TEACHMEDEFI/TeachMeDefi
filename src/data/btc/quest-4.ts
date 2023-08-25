import { Lesson } from "../generalLessons";


export const quest4: Lesson[] = [
  {
    id: "btc-13",
    title: 'Quest 4. - Bitcoin-Transaktionen: Versenden, Verfolgen und UTXOs Verstehen',
    slug: 'bitcoin-transaktionen',
    youtubeUrl: 'https://youtu.be/5NcgTlvuJag',
    youtubeThumbnail: "https://img.youtube.com/vi/D2Lu120FfPA/hqdefault.jpg",
    importantLinks: [
      // {
      //   linkText: "Google Chrome",
      //   href: "https://www.google.com/chrome/"
      // }

    ],
    section: 2,
    questNumber: 1,
    videoTime: '06:21',
    transcript: [

      {
        text: "Lass uns endlich Bitcoin versenden! Wir durchlaufen verschiedene Schritte und verwenden verschiedene Geräte, um dir die Vielfalt des Prozesses zu zeigen. Also fangen wir an."
      },
      {
        text: "Zuerst versenden wir Bitcoin von unserem Ledger Wallet auf dem PC an unser Muun-Wallet auf dem Handy. Wir loggen uns ein. Der Prozess ist wirklich einfach und viele Wege führen zum selben Ziel. Sobald du die Ledger App offen hast, kannst du hier ein bisschen rumspielen und sehen, was ich meine. Der Prozess des Versendens sieht bei jedem Wallet ähnlich aus. Zum Versenden brauchst du lediglich die Empfängeradresse und etwas Bitcoin, damit du die Transaktionsgebühr bezahlen kannst."
      },
      {
        text: "Wir wählen den Reiter 'Portfolio', wählen 'Bitcoin', steuern das Bitcoin Konto an, was wir im Video 2 erstellt und Bitcoin gekauft haben, klicken auf 'Senden' und fügen hier die Adresse ein, die wir aus unserem Muun-Wallet kopiert haben. Die hier. Wie du siehst, fängt die Adresse mit einer 'BC1' an. Das heißt, es ist eine native SegWit-Adresse. Mach dir keine Sorgen, wenn das jetzt noch etwas kompliziert klingt. Du wirst schnell den Dreh herausbekommen."
      },
      {
        text: "Jetzt bestimmen wir, wie viel Bitcoin wir versenden wollen und legen die Transaktionsgebühr fest. Du erinnerst dich vielleicht an den Mempool aus dem Video 5 des Theorieteils. Das ist der Ort, an dem alle Transaktionen darauf warten, um in die Blockchain aufgenommen zu werden. Miner, die diese Transaktion verarbeiten, wählen gezielt Transaktionen mit der höchsten Gebühr aus. Warum? Ganz einfach, weil sie dadurch mehr Geld verdienen. Also, wenn wir bereit sind, eine höhere Gebühr zu zahlen, wird unsere Transaktion bevorzugt und schneller abgewickelt, und wir bekommen sozusagen eine Expressbehandlung."
      },
      {
        text: "Nachdem wir auf 'Weiter' geklickt haben, erscheint eine Übersicht mit den Transaktionsdetails. Jetzt ist der Moment, um nochmal genau hinzuschauen: Stimmt der Betrag, den ich versenden möchte? Passt die Empfängeradresse? Ist die Transaktionsgebühr okay? Wenn alle Angaben korrekt sind, stoßen wir die Transaktion an."
      },
      {
        text: "Der nächste Schritt ist die Signatur mit unserem Ledger Gerät, wobei wir einfach den Anweisungen folgen, die Ledger uns vorgibt. Warum müssen wir die Transaktion überhaupt auf unserem Gerät signieren? Denke an das Ledger-Gerät als eine sichere Brücke: Auf der einen Seite haben wir das Internet, auf der anderen Seite unsere wertvollen Kryptowährungen. Der private Schlüssel, der zum Signieren der Transaktion benötigt wird, bleibt immer auf der sicheren Seite der Brücke. Das ist unser Ledger-Gerät. Wenn wir eine Transaktion bestätigen, erzeugt das Gerät eine Signatur und schickt sie über die Brücke ins Internet. Unsere wertvollen Daten jedoch bleiben immer auf der sicheren Seite."
      },
      {
        text: "Den Bitcoin-Betrag siehst du ziemlich schnell im Muun-Wallet angezeigt. Das kleine Uhren-Symbol bedeutet, dass die Transaktion immer noch im Mempool ist und von Minern noch nicht genügend bestätigt wurde. Nach sechs Bestätigungen, eine gängige Faustregel, gilt die Transaktion als final und sicher auf der Blockchain. Klicken wir auf 'Details anzeigen', sehen wir alle Informationen zu unserer Transaktion nochmal auf einen Blick. Interessant ist hier die Transaktions-ID. Sie ist eine Art Fingerabdruck und einzigartig, genau für diese eine Transaktion. Und siehst du diesen Reiter hier oben, der 'Im Explorer anzeigen' heißt? Das ist der Blockexplorer, unser Werkzeug, um Transaktionen in der Blockchain zu verfolgen."
      },
      {
        text: "Der Blockexplorer, den Ledger momentan verwendet, heißt 'Blockstream.info'. Mit diesem Tool hast du die Möglichkeit, nicht nur deine, sondern auch alle Bitcoin-Transaktionen, die jemals stattgefunden haben, nachzuvollziehen. Wie du siehst, wurde unsere Transaktion in diesem Block abgearbeitet und hat diese spezifische Transaktions-ID mit der 'a33a' am Ende. Eine Transaktion kann auf verschiedene Weisen im Blockexplorer gefunden werden: Dazu gibst du einfach die Bitcoin-Adresse, von der oder zu der die Transaktion ging, oder die Transaktions-ID, auch bekannt als Hash, ein. Eine weitere Option ist die Eingabe der Blockhöhe. Das ist die Anzahl der Blöcke, die seit dem allerersten Block, dem sogenannten Genesis-Block, hinzugekommen sind."
      },
      {
        text: "Aber die Suche nach einer Transaktion über die Blockhöhe ist durchaus zeitaufwendig, da ein einzelner Block tausende von Transaktionen enthalten kann. Zum Zeitpunkt der Aufnahme dieses Videos haben wir fast 800.000 Blöcke in der Bitcoin Blockchain. Jeder dieser Blöcke wurde durch komplexe Rechenprozesse erstellt. Das zeigt, wie viel Arbeit und Rechenleistung in dieses Netzwerk gesteckt wurde. Um Bitcoin zu zerstören, müsste jemand mehr Rechenleistung haben als der Rest des Netzwerks zusammen. Das ist fast unmöglich, daher ist Bitcoin sehr sicher."
      },
      {
        text: "Ein wichtiger Punkt, den du kennen sollst, ist das UTXO-Modell, mit dem Bitcoin arbeitet. UTXO steht für 'Unspent Transaction Output' oder auf Deutsch 'unverbrauchter Transaktionsausgang'. Stell es dir vor wie Wechselgeld: Wenn du mit einem 10 Euro Schein bezahlst und nur 7 Euro ausgibst, bekommst du 3 Euro zurück. So ähnlich ist es bei Bitcoin: Wenn du Bitcoin sendest und nicht den ganzen Betrag ausgibst, bleibt der Rest als UTXO, also als 'Bitcoin-Wechselgeld', in deinem Wallet. Da unsere Transaktion ebenfalls aus mehreren UTXOs bestand, haben wir hier 'Restgeld' zurückbekommen, was du genau hier sehen kannst."
      },
      {
        text: "Du musst wissen, dein Wallet zeigt zwar die gesamte Summe an, doch tatsächlich setzt sich dieser Betrag aus verschiedenen 'Bitcoin-Wechselgeldern' zusammen. Das kann eine zukünftige Transaktion komplexer und somit teurer machen, weil sie quasi aus vielen kleinen Beträgen besteht. Es ist ähnlich, als hättest du nur Kleingeld in deinem Portemonnaie und möchtest damit einen größen Betrag bezahlen. Es ist umständlicher und dauert auch viel länger."
      },
      {
        text: "Ein kleiner Tipp von mir: Du kannst bei Bitcoin diese kleinen UTXOs zusammenführenren, wenn die Transaktionskosten niedrig sind. Es ist, als würdest du dein Kleingeld zu einem größeren Schein wechseln, um zukünftige Transaktionen einfacher und günstiger zu gestalten. Um den optimalen Zeitpunkt für die Zusammenführung deines Bitcoin-Wechselgeldes zu finden, kann dir Mempool.space helfen. Wie du siehst, kannst du hier die aktuelle Gebührensituation auf der Bitcoin-Blockchain ansehen und so den günstigsten Zeitpunkt ermitteln, um mehrere kleinere UTXOs in eine größere zu konsolidieren und dabei Transaktionskosten zu sparen."
      }
    ]
  }
]