import { Lesson } from "../generalLessons";


export const quest3: Lesson[] = [
  {
    id: "btc-11",
    title: 'Quest 3.1 - Bitcoin Wallets und Aufbewahrung (kleine bis mittlere Mengen)',
    slug: 'bitcoin-wallets-und-aufbewahrung',
    youtubeUrl: 'https://youtu.be/ArU1_TWGVPM',
    youtubeThumbnail: "https://img.youtube.com/vi/ArU1_TWGVPM/hqdefault.jpg",
    importantLinks: [
      // {
      //   linkText: "Google Chrome",
      //   href: "https://www.google.com/chrome/"
      // }

    ],
    section: 2,
    questNumber: 1,
    videoTime: '05:24',
    transcript: [

      {
        subline: 'In diesem Video zeige ich dir, wie du deine Bitcoin am sichersten aufbewahren kannst. Es ist gar nicht so kompliziert, wenn du den Dreh raus hast – und ich bin hier, um dir dabei zu helfen.'
      },
      {
        subline: '3.1 Einführung in Bitcoin Wallets',
        text: 'Für echte TMDler ist eine Software-Wallet ein Muss, um Bitcoin sicher aufzubewahren. Vor allem für Beträge bis zu 500€. Denk daran: Was als klein gilt, ist immer relativ.'
      },
      {
        subline: '3.2 Gefahren zentraler Börsen',
        text: 'Lass deine Bitcoin niemals lange auf zentralen Börsen liegen. Da lauern viele Gefahren.'
      },
      {
        subline: '3.3  Auswahl einer sicheren Software-Wallet',
        text: 'Sei vorsichtig, welche Wallet du dir aus dem App Store oder Google Play holst. Manche hoch bewerteten Wallets sind vielleicht nicht so sicher, wie du denkst. "Closed-Source" Wallets können nicht öffentlich überprüft werden. Empfehlung: Ich nutze am liebsten Muun und Wallet of Satoshi. Beide unterstützen das Lightning-Netzwerk und bieten sogar Möglichkeiten, über Dritte Bitcoin zu kaufen.'
      },
      {
        subline: '3.4 Multi-Coin Software-Wallets',
        text: 'Beliebte Multi-Coin Software-Wallets sind die Coinbase Wallet und die Trust Wallet. Beide sind Open-Source und können verschiedene Kryptos speichern. Allerdings unterstützen sie das Lightning-Netzwerk nicht.'
      },
      {
        subline: '3.5 Der Unterschied zwischen Hot und Cold Wallets',
        text: 'Software-Wallets sind "Hot Wallets", das heißt, sie sind ständig online. Deine privaten Schlüssel könnten in Gefahr sein, wenn du Schadsoftware auf deinem Gerät hast. Ein wichtiger Grundsatz: "Not your keys, not your crypto". Wenn jemand deine privaten Schlüssel hat, könnten deine Bitcoin weg sein.'
      },
      {
        subline: '3.6 Hardware-Wallets für größere Mengen',
        text: 'Für größere Bitcoin-Mengen empfehle ich Hardware-Wallets. Sie sind wie ein digitales Schließfach. Bei Mengen bis zu 10.000€ sind Ledger und Trezor top. Wenn du ein reines Bitcoin-Hardware-Wallet willst, dann sind Blockstream und ColdCard die besten. Hinweis: Kaufe Hardware-Wallets immer direkt beim Hersteller, nicht über Dritthändler und schon gar nicht gebraucht!'
      },
      {
        subline: '3.7 Zusammenfassung',
        text: 'Für Beträge bis 500€: Nutze Software-Wallets. Bei Beträgen bis 10.000€: Nimm eine Hardware-Wallet mit einfacher Signatur (Single-Signature).'
      },
      {
        subline: 'Abschlussgedanken',
        text: 'Denk voraus! Deine heutige Investition könnte in der Zukunft viel mehr wert sein. Mach dich jetzt schon mit Hardware-Wallets vertraut. Und bleib dran fürs nächste Video mit noch mehr Details!'
      },
      
      {
        // subline: "Link zum Theorie-Video über das Lightning-Netzwerk",
        links: [
          {
            linkText: "Link zum Theorie-Video über das Lightning-Netzwerk",
            href: "https://youtu.be/6yw9f4RY5Og"
          }
        ]
      },
      {
        subline: "Wichtige Links:",
        links: [
          {
            linkText: "Muun",
            href: "https://muun.com/ "
          },
          {
            linkText: "Walletofsatoshi",
            href: "https://www.walletofsatoshi.com/"
          },
          {
            linkText: "Coinbase",
            href: "https://www.coinbase.com/wallet"
          },
          {
            linkText: "Trustwallet",
            href: "https://trustwallet.com/"
          },
          {
            linkText: "Ledger",
            href: "https://shop.ledger.com/de?referral_code=2V8BK7BRYSH1P"
          },
          {
            linkText: "Trezor",
            href: "https://trezor.io"
          },
          {
            linkText: "Blockstream",
            href: "https://blockstream.com/"
          },
          {
            linkText: "ColdCard",
            href: "https://coldcard.com/"
          }
        ]
      },
    ]
  },
  {
    id: "btc-12",
    title: 'Quest 3.2 - Bitcoin-Adressformate Verstehen: Legacy, SegWit, Native SegWit, Taproot & Lightning',
    slug: 'bitcoint-adressformat-verstehen',
    youtubeUrl: 'https://youtu.be/YcZ6MVHS0aw',
    youtubeThumbnail: "https://img.youtube.com/vi/YcZ6MVHS0aw/hqdefault.jpg",
    importantLinks: [
      // {
      //   linkText: "Google Chrome",
      //   href: "https://www.google.com/chrome/"
      // }

    ],
    section: 2,
    questNumber: 1,
    videoTime: '04:45',
    transcript: [

      {
        subline: '3.1 Hallo zusammen! Heute vertiefen wir unser Wissen über Bitcoin-Adressformate. Wir haben schon kurz in unserem Video "Bitcoin richtig kaufen" darüber gesprochen, heute gehts ins Detail.',
        text: "Zuerst: Was sind eigentlich Public- und Private Keys? Denk an deinen Private Key wie die PIN deines Bankkontos – super geheim und niemals zu teilen. Der Public Key? Das ist wie die IBAN, die du teilen kannst, wenn dir jemand Geld schicken soll. Aus dem Public Key entsteht dann die Bitcoin-Adresse. Aber mach dir keinen Kopf – dein Wallet erledigt das alles automatisch für dich. Eines der coolen Dinge bei Bitcoin ist, dass du für jede Transaktion eine neue Adresse generieren kannst. Das erhöht die Pseudonymität, sodass man nicht direkt sieht, welche Transaktion zu wem gehört."
      },
      {
        subline:'3.2 Adressformate', 
        text: "Legacy-Adressen: Die Ur-Adressen von Bitcoin, erkennbar am Start mit einer 1. Ja, sie funktionieren noch, aber sie sind nicht mehr so effizient. Forks – und nein, wir reden nicht vom Besteck: Softforks sind wie App-Updates. Sie sind rückwärtskompatibel. Hardforks sind wie ein neues OS. Nicht kompatibel mit dem Alten. SegWit ist ein gutes Beispiel für einen Softfork. Es macht Transaktionen effizienter als Legacy. Diese Adressen fangen mit einer 3 an. Noch besser? Native SegWit-Adressen. Sie starten mit BC1 und sind effizienter als normales SegWit. Taproot ist eine spannende Entwicklung. Es bringt uns komplexere Operationen – nicht so umfangreich wie Ethereum, aber immerhin. Und das Tolle? Mehr Privatsphäre. Diese Adressen beginnen auch mit BC1. Zuletzt das Lightning-Netzwerk: Hier gibt's spezielle Adressen, die mit LNBC1 anfangen. Mit Lightning geht alles ruckzuck und kostet fast nichts."
      },
      {
        subline: 'Zusammenfassung:',
        text: "SegWit und Native SegWit: Top und weit verbreitet. Lightning: Schnell und günstig. Taproot: Bitcoin wird smarter und privater. Freut euch auf das nächste Video, da wird es praktisch! Bis dann und danke fürs Zuschauen! Dein TEACHMEDEFI."
      },
    ]
  }
]