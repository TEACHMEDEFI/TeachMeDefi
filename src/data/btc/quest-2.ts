import { Lesson } from "../generalLessons";


export const quest2: Lesson[] = [
  {
    id: "btc-10",
    title: 'Quest 2. - Bitcoin richtig kaufen (Ledger, Software-Wallet und CEX)',
    slug: 'bitcoin-richtig-kaufen',
    youtubeUrl: 'https://youtu.be/J0UFX4AaIWw',
    youtubeThumbnail: "https://img.youtube.com/vi/J0UFX4AaIWw/hqdefault.jpg",
    importantLinks: [
      // {
      //   linkText: "Google Chrome",
      //   href: "https://www.google.com/chrome/"
      // }

    ],
    section: 2,
    questNumber: 1,
    videoTime: '08:17',
    transcript: [

      {
        subline: '2.1 . Verständnis der Kaufmethoden:',
        text: "Bitcoin kann direkt in deinem Wallet oder auf einer Central Exchange (CEX) wie Binance, Coinbase oder Crypto.com. gekauft werden."
      },
      {
        subline: '2.2 Die Gefahr von Central Exchanges:',
        text: 'Aktuell geht die US-Börsenaufsichtsbehörde (SEC) gegen Krypto-Giganten wie Binance und Coinbase vor. Daher ist es empfehlenswert, unabhängig von der Unsicherheit der Exchanges zu bleiben und Self-Custody zu betreiben.'
      },
      {
        subline: '2.3 Bitcoin Kauf mit Ledger:',
        text: 'Ledger Live App herunterladen und öffnen. Auf "Markt" klicken und anschließend "Kaufen" auswählen. Währung und Bitcoin auswählen. Neues Konto erstellen und es benennen. Anbieter für den Kauf auswählen und Transaktion durchführen.'
      },
      {
        subline: '2.4 Alternative Wallets:',
        text: 'Solltest du keinen Ledger oder Trezor  besitzen, gibt es Alternativen wie das Coinbase Wallet. Die Übersicht über Wallets findest du weiter unten'
      },
      {
        subline: '2.5 Bitcoin Kauf mit Coinbase Wallet:',
        text: 'In der Coinbase Wallet auf "Kaufen" klicken. KYC-Verifizierung auf Coinbase abschließen. Bitcoin mit Coinbase Pay oder anderen Zahlungsmethoden kaufen.'
      },
      {
        subline: '2.6  Bitcoin Kauf auf einer Central Exchange (CEX):',
        text: 'Schritt 1: KYC-Verifizierung auf der gewählten Plattform, z.B. Coinbase oder KuCoin, abschließen. Schritt 2: Konto mit einer Zahlungsmethode aufladen. Schritt 3: Euro gegen Bitcoin tauschen. Schritt 4: Bitcoin an das eigene Wallet, wie z.B. ColdCard oder Blockstream, senden.'
      },
      {
        subline: 'Empfehlung:',
        text: 'Es ist empfehlenswert, dezentral zu bleiben und Bitcoin in einem eigenen Wallet zu halten, egal ob Ledger, Trezor, das Coinbase Wallet oder reine Bitcoin-Wallets wie ColdCard oder Blockstream.'
      },
     
      {
        subline: "Tauschbörsen",
        links: [
          {
            linkText: "Coinbase",
            href: "https://www.coinbase.com/"
          },
          {
            linkText: "Binance",
            href: "https://accounts.binance.info/register?ref=JRCVYL1B"
          },
          {
            linkText: "Crypto.com",
            href: "https://crypto.com/app/knz3rug89e"
          },
          {
            linkText: "KuCoin",
            href: "https://www.kucoin.com/r/rf/2H4eve5/"
          },
        ]
      },
      {
      subline: "Wallets für Bitcoin:",
      links: [
        {
          linkText: "Ledger",
          href: "https://shop.ledger.com/de?referral_code=2V8BK7BRYSH1P"
        },
        {
          linkText: "Trezor",
          href: "https://trezor.io/"
        },
        {
          linkText: "ColdCard",
          href: "https://coldcard.com/"
        },
        {
          linkText: "Blockstream",
          href: "https://blockstream.com/"
        },
        {
          linkText: "Coinbase Wallet",
          href: "https://www.coinbase.com/wallet "
        },
      ]
    },
    ]
  }
]