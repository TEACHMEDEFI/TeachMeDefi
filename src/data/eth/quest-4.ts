

import { Lesson } from "../generalLessons";

/**
 * Quest 5
 * Section 4
 */

export const quest4: Lesson[] = [
  {
    id: "eth-18",
    title: '4.1 - Layer 2 Solution einrichten & nutzen',
    slug: 'layer-two-einrichten-und-nutzen',
    youtubeUrl: 'https://www.youtube.com/watch?v=XVZ8GKAucZ0',
    youtubeThumbnail: "https://img.youtube.com/vi/XVZ8GKAucZ0/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "Arbitrum One",
        href: "https://offchainlabs.com/arbitrum-one"
      },
      {
        linkText: "Arbitrum Bridge",
        href: "https://bridge.arbitrum.io/"
      },
      {
        linkText: "Uniswap",
        href: "https://app.uniswap.org/#/swap"
      },
      {
        linkText: "SushiSwap",
        href: "https://app.sushi.com/swap"
      },
      {
        linkText: "QuickSwap",
        href: "https://quickswap.exchange/#/swap"
      },
      {
        linkText: "Optimism",
        href: "https://optimism.io/"
      },
      {
        linkText: "Polygon",
        href: "https://polygon.technology/"
      },
      {
        linkText: "StarkNet",
        href: "https://starkware.co/starknet/"
      },
    ],
    section: 5,
    questNumber: 4,
    transcript: [
      {
        title: "Wie man Layer 2 Solution mit Arbitrum One einrichtet: Deine Schritt-für-Schritt-Anleitung",
        text: 'In der sich rasant entwickelnden Welt der Kryptowährungen suchen wir ständig nach effizienteren Wegen, um Transaktionen durchzuführen. Ethereum hat uns einen langen Weg gebracht, aber die hohen Transaktionskosten und langsamen Geschwindigkeiten machen es für viele Benutzer unzugänglich. Hier kommen Layer 2-Lösungen ins Spiel und in diesem Artikel zeige ich dir, wie du eine Layer 2-Lösung mit Arbitrum One einrichtest, Coins bridged und DEXs (Decentralized Exchanges) nutzt.'
      },
      {
        subline: '1. Einführung in Arbitrum One',
        text: 'Arbitrum One ist eine Layer 2-Lösung, die auf der Ethereum-Blockchain aufbaut und darauf abzielt, ihre Skalierbarkeit und Effizienz zu verbessern. Sie erreicht dies durch die Verlagerung der Rechenlast von der Hauptkette (Layer 1) auf eine sekundäre Kette (Layer 2). Besuche die offizielle Website von Arbitrum One um mehr zu erfahren.',
        links: [
          {
            linkText: "Arbitrum One",
            href: "https://offchainlabs.com/arbitrum-one"
          },
        ]
      },
      {
        subline: '2. Coins Bridgen',
        text: 'Um deine Tokens von der Ethereum-Blockchain (Layer 1) auf Arbitrum One (Layer 2) zu übertragen, benötigst du eine Bridge. Die Offizielle Arbitrum Bridge ist dafür dein bester Ansprechpartner. Achte darauf, dass du genügend Ethereum für Gasgebühren zur Verfügung hast, da die Übertragung nach wie vor auf der Ethereum-Blockchain stattfindet.',
        links: [
          {
            linkText: "Arbitrum Bridge",
            href: "https://bridge.arbitrum.io/"
          },
        ]
      },
      {
        subline: '3. DEXs nutzen',
        text: 'Sobald deine Coins erfolgreich auf Arbitrum One übertragen wurden, kannst du dezentrale Börsen (DEXs) nutzen, um sie zu handeln. DEXs wie Uniswap, Sushiswap und Quickswap unterstützen Arbitrum One und bieten nahtlose Handelserfahrungen auf Layer 2. Du kannst die gewünschte DEX besuchen und die Chain auf Arbitrum One umstellen, um loszulegen.',
        links: [
          {
            linkText: "Uniswap",
            href: "https://app.uniswap.org/#/swap"
          },
          {
            linkText: "SushiSwap",
            href: "https://app.sushi.com/swap"
          },
          {
            linkText: "QuickSwap",
            href: "https://quickswap.exchange/#/swap"
          },
        ]
      },
      {
        subline: '4. Weitere Exploration',
        text: 'Nachdem du dich mit den Grundlagen von Arbitrum One vertraut gemacht hast, empfehle ich dir, mehr über Layer 2-Lösungen zu erfahren und zu erforschen, wie sie die Zukunft der Blockchain-Technologie beeinflussen könnten. Es gibt viele andere Layer 2-Lösungen wie Optimism, Polygon, und StarkNet, die alle einzigartige Ansätze zur Verbesserung von Ethereum bieten.',
        links: [
          {
            linkText: "Optimism",
            href: "https://optimism.io/"
          },
          {
            linkText: "Polygon",
            href: "https://polygon.technology/"
          },
          {
            linkText: "StarkNet",
            href: "https://starkware.co/starknet/"
          },
        ]
      },
      {
        text: 'Ich hoffe, dieser Leitfaden hilft dir dabei, deine ersten Schritte mit Layer 2-Lösungen und Arbitrum One zu machen. Denke daran, dass das Lernen nie aufhört, und es gibt immer mehr zu entdecken in der aufregenden Welt der Kryptowährungen und Blockchain-Technologie. Willkommen auf der Reise!',
      },
      {
        subline: "Hinweis",
        text: 'Bitte sei dir bewusst, dass der Handel mit Kryptowährungen und die Nutzung von Layer 2-Lösungen immer mit Risiken verbunden sind. Stelle sicher, dass du deine Due Diligence durchführst und deine Investments sorgfältig prüfst.',
      },
    ]
  },
  {
    id: "eth-19",
    title: '4.2 - DEX Aggregator',
    slug: 'dex-aggregator',
    youtubeUrl: 'https://www.youtube.com/watch?v=W9QPpyIO9Uo',
    youtubeThumbnail: "https://img.youtube.com/vi/W9QPpyIO9Uo/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "",
        href: ""
      },

    ],
    section: 5,
    questNumber: 4,
    transcript: [
      {
        title: "Wie man einen DEX-Aggregator nutzt: Ein Leitfaden zur Nutzung von One Inch und anderen Alternativen",
        text: 'Willkommen in der Welt der dezentralisierten Börsen und DEX-Aggregatoren. In dieser Anleitung führe ich dich durch den Prozess der Nutzung von One Inch, einem beliebten DEX-Aggregator, und gebe dir einen Überblick über einige Alternativen.',
        links: [
          {
            linkText: "One Inch",
            href: "https://1inch.io/"
          },
        ]
      },
      {
        subline: 'Was ist ein DEX-Aggregator?',
        text: 'Ein DEX-Aggregator ist ein Werkzeug, das sich auf mehrere dezentrale Börsen (DEX) stützt, um Nutzern die besten Handelskonditionen zu bieten. Statt manuell auf verschiedenen Plattformen nach dem besten Angebot zu suchen, macht der DEX-Aggregator die Arbeit für dich und präsentiert dir die besten Handelsrouten.',
      },
      {
        subline: 'So nutzt du One Inch',
        text: '1. Öffne zuerst die One Inch-Website. Denk immer daran, die URL selbst zu überprüfen, um Betrugsseiten zu vermeiden.',
        links: [
          {
            linkText: "One Inch",
            href: "https://1inch.io/"
          },
        ]
      },
      {
        text: '2. Verbinde dein Wallet. One Inch bietet Unterstützung für eine Vielzahl von Wallets wie Metamask, WalletConnect und viele andere. Wähle dasjenige aus, das du verwendest, und folge den Anweisungen zur Verbindung.',
      },
      {
        text: '3. Wähle das Netzwerk aus. One Inch unterstützt verschiedene Netzwerke wie Ethereum und Binance Smart Chain. Wähle das Netzwerk, das du verwenden möchtest.'
      },
      {
        text: '4. Gib die Menge der Kryptowährung ein, die du tauschen möchtest, und wähle die Kryptowährung aus, die du erhalten möchtest. One Inch zeigt dir den besten Handelsweg und die zugehörigen Gebühren an.'
      },
      {
        text: '5. Wenn du mit den Handelsbedingungen zufrieden bist, klicke auf "Swap" und bestätige die Transaktion in deinem Wallet.'
      },
      {
        subline: 'Vergiss nicht, immer sicher zu handeln und dein Due Diligence durchzuführen, bevor du eine neue Plattform ausprobierst. Viel Spaß beim Handeln!'
      }
    ]
  }
]
