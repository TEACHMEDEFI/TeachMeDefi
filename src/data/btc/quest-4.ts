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
        subline: 'Schritt für Schritt:'
      },
      {
        subline: '4.1 Ledger Wallet auf PC und Muun-Wallet auf Handy nutzen:',
        text: "Logge dich ein und öffne die Ledger App. Gehe zu 'Portfolio', dann zu 'Bitcoin'. Klicke auf 'Senden' und füge die Empfängeradresse aus dem Muun-Wallet hinzu."
      },
      {
        subline: '4.2 Bestimme den zu sendenden Bitcoin-Betrag und die Transaktionsgebühr:',
        text: "Der Betrag, den du versenden möchtest. Die Empfängeradresse, die mit 'BC1' beginnt. Die Transaktionsgebühr."
      },
      {
        subline: '4.3 Bestätige und signiere die Transaktion:',
        text: "Überprüfe alle Details und klicke auf 'Weiter'. Signiere die Transaktion mit dem Ledger-Gerät. Die Bestätigung der Transaktion erfolgt mit dem Ledger-Gerät."
      },
      {
        subline: '4.4 Überprüfung im Muun-Wallet:',
        text: "Der Bitcoin-Betrag sollte kurz danach im Muun-Wallet angezeigt werden. Siehe nach 6 Bestätigungen nach, um sicherzustellen, dass die Transaktion endgültig in der Blockchain ist."
      },
      {
        subline: '4.5 Verwende den Blockexplorer:',
        text: "Klicke auf 'Im Explorer anzeigen', um zur Seite 'Blockstream.info' zu gelangen. Hier kannst du alle Transaktionsdetails und deren Status überprüfen."
      },
      {
        subline: '4.6 Verständnis von UTXOs:',
        text: "Erkenne, dass der Restbetrag nach einer Transaktion als UTXO in deinem Wallet bleibt. Überlege, UTXO zu konsolidieren, wenn die Transaktionskosten niedrig sind, um zukünftige Transaktionen einfacher und kostengünstiger zu gestalten."
      },
      {
        subline: '4.7 Nutze Mempool.space:',
        text: "Besuche die Webseite, um den besten Zeitpunkt für die Konsolidierung von UTXO zu ermitteln."
      },
      {
        subline: "Wichtige Links:",
        links: [
          {
            linkText: "Blockexplorer",
            href: "https://blockstream.info/ "
          },
          {
            linkText: "Mempool.space - Aktuelle Gebührensituation",
            href: "https://mempool.space/"
          }
        ]
      },
      {
        subline: 'Tipp:',
        text: "Überlege, deine UTXO zu konsolidieren, wenn die Transaktionskosten niedrig sind, um in der Zukunft Geld zu sparen und den Transaktionsprozess zu vereinfachen."
      },
      
    ]
  }
]