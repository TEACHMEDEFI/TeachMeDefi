import React from "react";
import { generalLessons, Lesson } from "./generalLessons";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails

/**
 *  ____________________ ETHEREUM LESSONS ___________________________
 */
export const ethLessons: Lesson[] = [
  ...generalLessons,
  {
    id: "eth-1",
    title: 'Die Ethereum Blockchain.',
    slug: 'die-ethereum-blockchain',
    youtubeUrl: 'https://www.youtube.com/watch?v=hyNcJDO1JOM',
    youtubeThumbnail: "https://img.youtube.com/vi/hyNcJDO1JOM/hqdefault.jpg",
    // importantLinks: [],
    questNumber: 1,
    section: 1,
    transcript:
      [
        'Lass uns jetzt gemeinsam herausfinden, was die Ethereum Blockchain so besonders macht.',
        'Ethereum wurde 2015 von Vitalik Buterin, einem russisch-kanadischen Programmierer, gemeinsam mit anderen Mitbegründern wie Gavin Wood, Joseph Lubin und Charles Hoskinson ins Leben gerufen. Die Idee für Ethereum entstand, als Vitalik erkannte, dass Bitcoin zwar revolutionär war, aber in seinen Anwendungsmöglichkeiten begrenzt ist, da man zu dieser Zeit lediglich Bitcoin empfangen und versenden konnte.',
        'Das Team hinter Ethereum wollte eine Plattform schaffen, die über die Funktionen einer reinen Kryptowährung hinausgeht. Ihr Ziel war es, eine Umgebung zu entwickeln, die es ermöglicht, dezentrale Anwendungen (dApps) und automatisierte Verträge zu erstellen. Auf Ethereum können komplexe Finanzprodukte, dezentrale Organisationen oder sogar virtuelle Welten aufgebaut werden. Diese bahnbrechende Technologie hat das Potenzial, traditionelle Geschäftsmodelle und Organisationen zu verändern und eine Vielzahl neuer Möglichkeiten zu erschließen.',
        'In den nachfolgenden Videos werden wir gemeinsam tiefer in die verschiedenen Funktionen von Ethereum eintauchen und dir zeigen, wie du Zugang zu diesem spannenden Ökosystem findest. Begleite uns auf dieser Reise, um mehr über Ethereum, seine Funktionen und die Zukunft der Blockchain-Technologie zu erfahren.',
      ],
  },
  {
    id: "eth-2",
    title: 'Ethereum 2.0 - Der Wechsel von PoW zu PoS.',
    slug: 'ethereum-wechsel-von-pow-zu-pos',
    youtubeUrl: 'https://www.youtube.com/watch?v=ExIs9mKfvaU',
    youtubeThumbnail: "https://img.youtube.com/vi/ExIs9mKfvaU/hqdefault.jpg",
    // importantLinks: [],
    questNumber: 2,
    section: 1,
    transcript:
      [
        'Bevor wir nun an eingemachte gehen beachte, dass Ethereum im Jahr 2022 einen bedeutenden Übergang vom Proof-of-Work (PoW) zum Proof-of-Stake (PoS) Konsensmechanismus vollzogen. Dieser Wechsel verbessert die Energieeffizienz und Skalierbarkeit des Netzwerks.',
        'Wenn du dir nicht mehr sicher bist, was der Unterschied der beiden Mechanismen ist, kannst du dir gerne nochmal eines der vorherigen Videos anschauen, bevor du nun weitermachst.',
        'Zusammenfassend verlangt der Proof-of-Work-Mechanismus, dass Miner komplexe mathematische Rätsel lösen, um neue Blöcke zu erstellen und Transaktionen zu validieren. Dieser Prozess wird von der BTC Blockchain verwendet.',
        'Der Proof-of-Stake-Mechanismus hingegen basiert auf der Menge an Kryptowährung, die ein Validator besitzt und „staket“, um am Konsensprozess teilzunehmen. ',
        'Durch den Wechsel von PoW zu PoS verspricht Ethereum, eine nachhaltigere und umweltfreundlichere Blockchain-Plattform zu werden. Der Proof-of-Stake-Mechanismus ermöglicht es, den Energieverbrauch drastisch zu reduzieren und gleichzeitig die Netzwerksicherheit und Skalierbarkeit zu verbessern. Diese Veränderung stellt einen bedeutenden Fortschritt in der Blockchain-Technologie dar und zeigt das Engagement der Ethereum-Community, eine nachhaltigere und zukunftsfähige Lösung für dezentrale Anwendungen und Finanztransaktionen bereitzustellen.',
      ],
  },
  {
    id: "eth-3",
    title: 'Ether - der Treibstoff von Ethereum.',
    slug: 'ether-treibstoff-von-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=QfnuJlchwsw',
    youtubeThumbnail: "https://img.youtube.com/vi/QfnuJlchwsw/hqdefault.jpg",
    // importantLinks: [],
    questNumber: 3,
    section: 1,
    transcript:
      [
        'Ether ist die native Kryptowährung von Ethereum, der als Treibstoff für die Plattform dient.',
        'Auf der Ethereum-Blockchain wird bei jeder Transaktion oder Interaktion mit dem Netzwerk eine Gebühr fällig. Diese Gebühr wird als Gas bezeichnet und in Ether von der Person bezahlt, die die Transaktion eingeleitet hat.',
        'Gasgebühren dienen dazu, Validatoren zu entlohnen, damit diese Transaktionen bestätigen und in die Blockchain aufnehmen. Je komplexer eine Transaktion ist, desto höher sind die Gasgebühren, die dafür anfallen. Gasgebühren können je nach Netzwerkauslastung variieren, und manchmal kann es vorkommen, dass sie sehr hoch sind. Deshalb ist es wichtig, sich vor jeder Transaktion über die aktuellen Gaspreise zu informieren. Doch keine Sorge, in unserem praktischen Onboarding bereiten wir dich darauf vor.',
        'Wie du bereits gelernt hast, erfolgt die Schöpfung neuer Ether durch den Validator-Prozess und zwar jedes mal wenn ein neuer Block zur Ethereum-Blockchain hinzugefügt wird.',
        'Im Gegenzug zu Bitcoin gibt es bei der Schöpfung von Ether keine maximale Obergrenze für die Gesamtmenge. Es wird aber bei jeder Transaktion ein gewisser Anteil an ETH verbrannt und dieser Anteil ist größer als der neu geschöpfte Anteil, was sich deflationär auf die im Umlauf befindliche Menge an Ethereum auswirkt. Das hält die Wirtschaftlichkeit des Systems aufrecht.',
        'Wenn Bitcoin das digitale Gold ist, dann ist Ethereum eine Art dezentrales Internet und ETH das digitale Geld, das weltweit und ohne Einschränkungen von dir gesendet und empfangen werden kann. ETH ermöglicht es, Transaktionen durchzuführen und sogenannte Smart Contracts auszuführen und dApps zu nutzen',
        'Jetzt fragst du dich sicherlich, was Smart Contracts oder dApps sind??!!',
        'In dem nächsten Video erfährst du mehr darüber.',
      ],
  },
  {
    id: "eth-4",
    title: 'Smart Contracts & Ethereum Virtual Mashine (EVM).',
    slug: 'smart-contracts-and-evm',
    youtubeUrl: 'https://www.youtube.com/watch?v=UwLioT3iHQU',
    youtubeThumbnail: "https://img.youtube.com/vi/UwLioT3iHQU/hqdefault.jpg",
    // importantLinks: [],
    questNumber: 4,
    section: 1,
    transcript:
      [
        'Eine der großen Unterschiede der Ethereum Blockchain zur Bitcoin Blockchain ist die Möglichkeit intelliegente Verträge - sogenannte Smart contracts - zu nutzen.',
        'Smart Contracts sind Verträge, die sich selbst ausführen und deren spezifische Vertragsbedingungen direkt im Code verankert sind. Sie werden in der Programmiersprache Solidity geschrieben, auf der Blockchain gespeichert und automatisch ausgeführt, sobald die im Vertrag festgelegten Bedingungen erfüllt sind. Es gibt also keine zentrale Kontrollinstanz. Die teilnehmenden Akteure vertrauen voll und ganz dem geschriebenen Code. ',
        'Smart Contracts bieten viele Vorteile wie Automatisierung, Kosteneinsparungen, Transparenz und Sicherheit. Sie finden Anwendung in vielen Bereichen wie Finanzen, Versicherungen, Immobilien, Lieferkettenmanagement und bald sogar im Gesundheitswesen. Einige Beispiele für die Anwendung von Smart Contracts sind automatische Zahlungen, digitale Identitätsverwaltung und sogar dezentrale autonome Organisationen (DAOs).',
        'Doch warum können smart contracts überhaupt auf der Ethereum Blockchain laufen?',
        'Das macht die sogenannte Ethereum Virtual Machine möglich.',
        'Die Ethereum Virtual Machine (EVM) ist die dezentrale Computerplattform, die das Ethereum-Netzwerk antreibt und ermöglicht die Ausführung von Smart Contracts und dezentralen Anwendungen (dApps). Die EVM stellt sicher, dass Smart Contracts und dApps auf dem Ethereum-Netzwerk interoperabel und sicher sind. Jede Transaktion, die im Ethereum-Netzwerk stattfindet, wird von der EVM verarbeitet und validiert.',
        'Die EVM ist auf allen Knotenpunkten (Nodes) im Ethereum-Netzwerk implementiert, wodurch sie das Herzstück der dezentralen Natur von Ethereum bildet. Diese Dezentralisierung gewährleistet Redundanz und Widerstandsfähigkeit gegen Ausfälle, da alle Nodes im Netzwerk unabhängig voneinander arbeiten und die EVM auf jedem Node ausgeführt wird.',
        'Einer der Hauptvorteile der EVM ist die Unterstützung von Turing-vollständigen Programmiersprachen wie Solidity und Vyper. Dies bedeutet, dass Entwickler theoretisch beliebig komplexe Smart Contracts und dApps erstellen können, die eine Vielzahl von Anwendungsfällen abdecken.',
        'Die EVM stellt auch sicher, dass Transaktionen und Smart Contracts isoliert voneinander ausgeführt werden. Dies bedeutet, dass die Ausführung eines Smart Contracts keine anderen Smart Contracts oder das gesamte Netzwerk beeinflussen kann. Durch diese Isolation wird das Ethereum-Netzwerk vor Fehlern oder Angriffen geschützt, die durch fehlerhafte oder bösartige Smart Contracts verursacht werden könnten.',
        'Insgesamt ist die Ethereum Virtual Machine ein grundlegender Bestandteil des Ethereum-Ökosystems, der die Ausführung von Smart Contracts und dApps ermöglicht, deren Interoperabilität und Sicherheit gewährleistet und eine zuverlässige, dezentrale Computerplattform für das Ethereum-Netzwerk bereitstellt.',
      ],
  },
  {
    id: "eth-5",
    title: 'Dezentrale Applikationen (dApps).',
    slug: 'dezentrale-applikationen',
    youtubeUrl: 'https://www.youtube.com/watch?v=2VHPOGq0qfw',
    youtubeThumbnail: "https://img.youtube.com/vi/2VHPOGq0qfw/hqdefault.jpg",
    // importantLinks: [],
    questNumber: 5,
    section: 1,
    transcript:
      [
        'Decentralised Applications, also dezentrale Applikationen, kurz auch als dApps bezeichnet, sind Anwendungen, die auf der Ethereum Blockchain laufen und keine zentrale Kontrollinstanz benötigen.',
        'Sie nutzen Smart Contracts, um automatisiert und transparent zu funktionieren, wodurch sie sich von herkömmlichen, zentralisierten Anwendungen unterscheiden. Die Ethereum Blockchain wurde speziell dafür entwickelt, um als Plattform für solche dezentrale Anwendungen zu fungieren. Sie ermöglicht es Entwicklern, dApps mithilfe von Smart Contracts und der Ethereum Virtual Machine (EVM) zu erstellen.',
        'DApps können in vielen verschiedenen Branchen und Anwendungsfällen eingesetzt werden, von Finanzdienstleistungen und Versicherungen bis hin zu Supply-Chain-Management und Gaming.',
        'Einige Beispiele für populäre dApps sind Uniswap, eine dezentrale Krypto-Handelsplattform; oder  MakerDAO, eine dezentrale Kreditplattform.',
        'DApps sind revolutionär, da sie dir als Benutzer volle Kontrolle über deine Daten geben und gleichzeitig sicher und transparent sind.',
      ],
  },
  {
    id: "eth-6",
    title: 'DeFi - Dezentrale Finanzsysteme.',
    slug: 'dezentrale-finanzsysteme',
    youtubeUrl: 'https://www.youtube.com/watch?v=QD2RCTvh97o',
    youtubeThumbnail: "https://img.youtube.com/vi/QD2RCTvh97o/hqdefault.jpg",
    // importantLinks: [],
    questNumber: 6,
    section: 1,
    transcript:
      [
        'Die Entwicklung und Anwendung von Smart Contracts und dApps auf der Ethereum Blockchain ermöglicht es, eine dezentrale Finanzwelt aufzubauen, die ohne zentrale Kontrollinstanz sicher agieren kann. Und das rund um die Uhr.',
        'Während traditionelle Handelsplattformen am Wochenende den Betrieb zurückfahren und du theoretisch keine Wertpapiere handeln kannst, läuft eine dezentrale Handelsplattform wie bspw. Uniswap rund um die Uhr. Zu jeder Zeit können die unterschiedlichsten Coins gehandelt werden.',
        'Durch dezentrale Plattformen und Protokolle revolutioniert DeFi Finanzdienstleistungen, indem es dir zu jeder Zeit die volle Kontrolle über deine Finanzen gibt.',
        'Einige der bekanntesten DeFi-Protokolle sind Uniswap, Aave, Compound und MakerDAO. Diese bieten verschiedene Finanzdienstleistungen an, wie z.B. dezentrale Handelsbörsen, Kreditevergabe, Staking und vieles mehr, ohne dass ein zentrales Unternehmen oder eine Bank involviert ist.',
        'DeFi stellt das traditionelle Finanzwesen auf den Kopf, indem es Finanzdienstleistungen demokratisiert und für jeden zugänglich macht, unabhängig von geografischer Lage oder finanzieller Situation. DeFi ermöglicht es dir, die volle Kontrolle über deine eigenen Vermögenswerte zu haben und Finanztransaktionen direkt mit anderen Benutzern durchzuführen, ohne auf eine zentrale Institution angewiesen zu sein.',
        'In Zukunft wird DeFi voraussichtlich weiter wachsen.',
        'Es hat das Potenzial, das traditionelle Finanzsystem grundlegend zu verändern.',
      ],
  },
  {
    id: "eth-7",
    title: 'Die Tokenisierung von Vermögenswerten & Rechten - ERC20 & ERC721.',
    slug: 'erc20-and-erc721',
    youtubeUrl: 'https://www.youtube.com/watch?v=3ng1K8eEfnU',
    youtubeThumbnail: "https://img.youtube.com/vi/3ng1K8eEfnU/hqdefault.jpg",
    // importantLinks: [],
    questNumber: 7,
    section: 1,
    transcript:
      [
        'Die Tokenisierung ist der Prozess der Umwandlung von Vermögenswerten oder Rechten in digitale Tokens auf einer Blockchain. Durch die Tokenisierung können physische oder digitale Güter auf einer sicheren, transparenten und dezentralen Plattform wie Ethereum verfolgt, gehandelt und verwaltet werden. Die Vorteile der Tokenisierung umfassen erhöhte Liquidität, schnellere und effizientere Transaktionen sowie verbesserte Sicherheit und Transparenz.',
        'Schauen wir uns nun einmal die zwei wichtigsten Token Standards an: ERC-20 und ERC-721.',
        'Eth besitz beispielsweise den ERC20 Tokenstandard. Ein ERC-20-Token ist der Standard für fungible Tokens auf der Ethereum Blockchain. Fungible Tokens sind solche, die untereinander austauschbar sind und denselben Wert haben. Zum Beispiel sind alle 1-ETH-Coins gleichwertig und austauschbar. ERC-20-Token sind in der Kryptoindustrie weit verbreitet und ermöglichen die einfache Integration in Wallets, Börsen und Smart Contracts. Weitere Beispiele für ERC-20-Token sind Chainlink (LINK), (AAVE) und USD Coin (USDC).',
        'Ein ERC-721-Token hingegen, auch bekannt als Nicht-fungibler Token oder NFT, ist ein einzigartiger, nicht austauschbarer Token-Standard auf der Ethereum Blockchain. Jeder ERC-721-Token repräsentiert ein einzigartiges digitales oder physisches Objekt, wie zum Beispiel Kunstwerke, Sammelgegenstände, Immobilien oder virtuelle Güter. NFTs haben in den letzten Jahren stark an Popularität gewonnen, da sie Künstlern und Schöpfern eine neue Möglichkeit bieten, ihre Werke zu verkaufen und zu vermarkten.',
        'Im Gegensatz zu ERC-20-Token, bei denen jeder Token denselben Wert hat, ist jeder ERC-721-Token also einzigartig und kann einen unterschiedlichen Wert haben. NFTs ermöglichen die einfache Übertragung von Eigentumsrechten und die Verfolgung von Provenienz.',
        'Alle Token-Standards haben das Potenzial, die Art und Weise, wie wir Vermögenswerte und Rechte handhaben, grundlegend zu verändern.',
      ],
  },
  {
    id: "eth-8",
    title: 'Smart Contracts & Ethereum Virtual Mashine (EVM).',
    slug: 'ether-treibstoff-von-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=QgCqAEi7bsA',
    youtubeThumbnail: "https://img.youtube.com/vi/QgCqAEi7bsA/hqdefault.jpg",
    // importantLinks: [],
    questNumber: 8,
    section: 1,
    transcript:
      [
        'DAOs sind Organisationen, die auf der Blockchain-Technologie basieren und von Smart Contracts gesteuert werden. Sie ermöglichen die gemeinschaftliche Entscheidungsfindung durch dezentrale Governance, wobei Mitglieder ohne zentrale Autorität oder Hierarchie zusammenarbeiten. DAOs haben das Potenzial, traditionelle Organisationsstrukturen zu revolutionieren und transparentere, demokratischere Entscheidungsprozesse zu ermöglichen.',
        'Governance-Tokens spielen eine entscheidende Rolle in DAOs, indem sie den Inhabern Stimmrechte und Einfluss auf die Entscheidungsfindung gewähren. Diese Token repräsentieren das Engagement und die Beteiligung der Mitglieder an der Organisation und ermöglichen es ihnen, bei wichtigen Entscheidungen, wie der Änderung von Protokollparametern oder der Finanzierung von Projekten, abzustimmen.',
        'Einige Beispiele für bekannte Governance-Token sind:',
        '1.  Maker (MKR): MakerDAO ist eine der bekanntesten DAOs im DeFi-Bereich und ermöglicht es seinen Mitgliedern, über die Stabilität und das Management des DAI-Stablecoins abzustimmen.',
        '2.  Compound (COMP): Compound ist eine beliebte DeFi-Plattform, die es Benutzern ermöglicht, Kryptowährungen zu verleihen und zu leihen. Inhaber von COMP-Token können über die Zukunft des Protokolls und seine Parameter abstimmen.',
        '3.  Aave (AAVE): Aave ist eine weitere DeFi-Plattform, die es ermöglicht, Kryptowährungen zu verleihen und zu leihen. Governance-Token-Inhaber können über Änderungen am Protokoll und seiner Funktionsweise abstimmen.',
        'Um an Governance-Abstimmungen teilzunehmen, müssen Mitglieder in der Regel ihre Governance-Token in einem speziellen Smart Contract oder einer Voting-DApp (dezentrale Anwendung) "staken". Die Anzahl der Token, die ein Mitglied besitzt, bestimmt sein Stimmengewicht. Nachdem ein Mitglied seine Stimme abgegeben hat, wird die Abstimmung ausgewertet, und die Entscheidung wird auf der Grundlage der Mehrheit der abgegebenen Stimmen getroffen.',
        'DAOs und Governance-Tokens sind ein spannender Fortschritt in der Welt der Blockchain und DeFi. Sie ermöglichen transparentere, demokratischere Entscheidungsfindung und können dazu beitragen, das traditionelle Organisations- und Verwaltungsmodell zu revolutionieren.',
      ],
  },

  /**
   *   PRAKTISCHE SEKTION
   */

  {
    id: "eth-9",
    title: '1.1 - Der richtige Browser',
    slug: 'der-richtige-browser',
    youtubeUrl: 'https://www.youtube.com/watch?v=LOnkasO9dSA',
    youtubeThumbnail: "https://img.youtube.com/vi/LOnkasO9dSA/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "Google Chrome",
        href: "https://www.google.com/chrome/"
      },
      {
        linkText: "Mozilla Firefox",
        href: "https://www.mozilla.org/de/firefox/new/"
      },
      {
        linkText: "Microsoft Edge",
        href: "https://www.microsoft.com/de-de/edge"
      },
      {
        linkText: "Brave",
        href: "https://brave.com/"
      }
    ],
    section: 2,
    questNumber: 1,
    transcript: [
      {
        title: "Anleitung zum Video",
        text: "Die Wahl des richtigen Browsers für Kryptowährungen: Ein umfassender Leitfaden"
      },
      {
        text: "Wenn du dich in die Welt der Kryptowährungen begibst, ist die Wahl des richtigen Browsers entscheidend. Dein Browser ist das Tor zur digitalen Welt und die richtige Auswahl kann nicht nur deine Online-Sicherheit erhöhen, sondern auch deine Krypto-Erfahrung verbessern. In diesem Leitfaden zeigen wir dir, wie du den besten Browser für deine Bedürfnisse auswählst und wie du seine Funktionen optimal nutzt."
      },
      {
        subline: "Google Chrome - Der Universelle",
        text: "Google Chrome ist einer der bekanntesten Browser und bietet ein breites Spektrum an Erweiterungen, darunter auch viele für Krypto-Wallets. Dank seiner weiten Verbreitung wird er häufig für die Entwicklung neuer Funktionen und Erweiterungen bevorzugt.",
        links: [
          {
            linkText: "Google Chrome",
            href: "https://www.google.com/chrome/"
          }
        ]
      },
      {
        subline: "Mozilla Firefox - Der Privatsphärenwächter",
        text: "Firefox von Mozilla ist bekannt für seine starken Datenschutzfunktionen. Es bietet weniger Krypto-Erweiterungen als Chrome, doch wenn Datenschutz für dich an erster Stelle steht, könnte Firefox deine Wahl sein.",
        links: [
          {
            linkText: "Mozilla Firefox",
            href: "https://www.mozilla.org/de/firefox/new/"
          }
        ]
      },
      {
        subline: "Microsoft Edge - Der Windows-Freund",
        text: "Microsoft Edge ist der Standard-Browser von Windows und bietet eine nahtlose Integration mit dem Betriebssystem. Auch er verfügt über einige Krypto-Erweiterungen und bietet einen guten Kompromiss zwischen Funktionen und Sicherheit.",
        links: [
          {
            linkText: "Microsoft Edge",
            href: "https://www.microsoft.com/de-de/edge"
          }
        ]
      },
      {
        subline: "Brave - Der Krypto-Favorit",
        text: "Unsere persönliche Empfehlung ist Brave. Er legt großen Wert auf Privatsphäre und Sicherheit und blockiert standardmäßig alle Anzeigen und Tracking-Software. Außerdem verfügt er über ein integriertes Krypto-Wallet, was ihn zur ersten Wahl für viele Krypto-Enthusiasten macht.",
        links: [
          {
            linkText: "Brave",
            href: "https://brave.com/"
          }
        ]
      },
      {
        text: "Die Wahl des richtigen Browsers hängt von deinen individuellen Bedürfnissen und Präferenzen ab. Experimentiere mit verschiedenen Optionen und finde heraus, welcher am besten zu dir passt. Erinnere dich immer daran, dass Online-Sicherheit beim Umgang mit Kryptowährungen von größter Bedeutung ist."
      },
      {
        text: "Schau dir unser detailliertes YouTube-Video zu diesem Thema an, um weitere Tipps und Tricks zu erfahren."
      }
    ]
  },
  {
    id: "eth-10",
    title: '1.2 - Das Hot Wallet einrichten',
    slug: 'hot-wallet-einrichten',
    youtubeUrl: 'https://www.youtube.com/watch?v=dZPJp8X2PH4',
    youtubeThumbnail: "https://img.youtube.com/vi/dZPJp8X2PH4/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "MetaMask",
        href: "https://metamask.io/"
      }
    ],
    section: 2,
    questNumber: 1,
    transcript: [
      {
        title: "Anleitung zum Video",
        subline: "Anleitung zur Einrichtung eines MetaMask Hot Wallets ",
        text: "Bereit, deine Reise in die Kryptowelt zu beginnen? Bevor du dich kopfüber in das Feld der Kryptowährungen stürzt, brauchst du ein grundlegendes Werkzeug: ein digitales Wallet. In diesem Leitfaden zeigen wir dir, wie du ein MetaMask Hot Wallet einrichtest - ein sicheres und benutzerfreundliches Wallet, das dich direkt mit der Ethereum Blockchain und vielen anderen Kryptowährungen verbindet."
      },
      {
        subline: "Schritt 1: Download MetaMask",
        text: "Besuche die MetaMask Website und lade das MetaMask Wallet herunter. Du kannst es entweder als Erweiterung für deinen Browser (Chrome, Firefox, Brave und Edge werden unterstützt) oder als mobile App installieren.",
        links: [
          {
            linkText: "MetaMask",
            href: "https://metamask.io/"
          }
        ],
      },
      {
        subline: "Schritt 2: Wallet erstellen",
        text: 'Schritt 2: Wallet erstellen Öffne MetaMask und klicke auf "Wallet erstellen". Du wirst gebeten, ein Passwort einzugeben - wähle ein starkes Passwort aus und behalte es sicher auf.'
      },
      {
        subline: "Schritt 3: Notiere deinen Seed-Phrase",
        text: 'MetaMask wird dir eine Phrase mit 12 Wörtern, auch bekannt als Seed-Phrase, anzeigen. Diese Phrase ist extrem wichtig - sie ist der Schlüssel zu deinem Wallet. Notiere diese Wörter in der gegebenen Reihenfolge und bewahre sie an einem sicheren Ort auf. Teile diese Phrase mit niemandem!'
      },
      {
        subline: "Schritt 4: Wallet verwenden",
        text: 'Jetzt bist du bereit! Du kannst nun Ethereum und andere unterstützte Kryptowährungen senden, empfangen und speichern. Du kannst auch deinen Kontostand und deine Transaktionen überprüfen und sogar zwischen verschiedenen Blockchain-Netzwerken wechseln.'
      },
      {
        subline: "Sicherheitstipps",
        text: 'Die Sicherheit deiner Kryptowährungen sollte immer oberste Priorität haben. Hier sind einige Tipps, die du beachten solltest:'
      },
      {
        text: 'Teile niemals deine Seed-Phrase mit jemandem. Wer auch immer diese Phrase hat, kann auf dein Wallet zugreifen und deine Kryptowährungen stehlen. Behalte dein Passwort für dich selbst. Sei vorsichtig mit Phishing-Versuchen - gehe niemals auf Links in E-Mails oder Nachrichten, die dich auffordern, deine Seed-Phrase einzugeben. Update dein MetaMask Wallet regelmäßig. Updates beheben oft Sicherheitsprobleme und fügen neue Funktionen hinzu. Mit deinem neuen MetaMask Hot Wallet bist du jetzt bereit, die spannende Welt der Kryptowährungen zu erkunden. Viel Glück auf deiner Reise! Für weitere Anleitungen und Tipps, besuche unsere Website und unseren YouTube-Kanal. '
      },
    ]
  },
  {
    id: "eth-11",
    title: '1.3 - Netzwerke einrichten',
    slug: 'netzwerke-einrichten',
    youtubeUrl: 'https://www.youtube.com/watch?v=H1gdVfvghxg',
    youtubeThumbnail: "https://img.youtube.com/vi/H1gdVfvghxg/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "Chainlist",
        href: "https://chainlist.org/"
      },
      {
        linkText: "RPC Nodes",
        href: "https://www.coindesk.com/learn/ethereum-101/ethereum-node-types"
      },
      {
        linkText: "Infura",
        href: "https://infura.io/"
      },
      {
        linkText: "Testnetzwerke",
        href: "https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-custom-Network-RPC-and-or-Block-Explorer"
      },
      {
        linkText: "Arbitrum",
        href: "https://offchainlabs.com/arbitrum"
      },
      {
        linkText: "Aurora",
        href: "https://aurora.dev/"
      },
      {
        linkText: "Avalon",
        href: "https://avalon.cocos.com/"
      },
    ],
    section: 2,
    questNumber: 1,
    transcript: [
      {
        title: "Anleitung zum Video",
        subline: "Anleitung zur Einrichtung eines MetaMask Hot Wallets ",
        text: "Erlange die volle Kontrolle über dein Krypto-Portfolio, indem du lernst, wie man verschiedene Netzwerke in deinem MetaMask Hot Wallet einrichtet. Diese umfassende Anleitung führt dich Schritt für Schritt durch den Prozess, inklusive der Verwendung von chainlist.org zur Integration von Netzwerken. Bereit, dein Krypto-Wissen zu erweitern? Los geht's!"
      },
      {
        subline: '1. Verstehen von RPC Nodes',
        text: 'RPC, oder Remote Procedure Call, ermöglicht es deinem Wallet, mit dem Blockchain-Netzwerk zu interagieren. Nodes fungieren als Brücke zwischen deinem Wallet und der Blockchain, was von öffentlichen oder privaten Nodes abhängt. Diese Nodes können entweder für alle oder nur für bestimmte Personen zugänglich sein. Erfahre mehr über RPC Nodes hier.',
        links: [
          {
            linkText: "RPC Nodes",
            href: "https://www.coindesk.com/learn/ethereum-101/ethereum-node-types"
          },
        ]
      },
      {
        subline: '2. Einrichten von Infura und anderen Testnetzwerken',
        text: 'In deinem MetaMask Wallet findest du vordefinierte Netzwerke wie das Ethereum Mainnet und Testnetzwerke wie Goerli und Rinkeby. Diese Testnetzwerke sind wichtig für Entwickler, die ihre Smart Contracts unter realen Bedingungen testen möchten, ohne dabei echtes Ether zu verwenden. Erfahre mehr über Infura und die Einrichtung von Testnetzwerken hier.',
        links: [
          {
            linkText: "Infura",
            href: "https://infura.io/"
          },
          {
            linkText: "Testnetzwerke",
            href: "https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-custom-Network-RPC-and-or-Block-Explorer"
          },
        ]
      },
      {
        subline: '3. Hinzufügen von Layer-2-Netzwerken',
        text: 'Um die Skalierbarkeit deines Wallets zu verbessern und die Transaktionskosten zu senken, kannst du Layer-2-Lösungen wie Arbitrum, Aurora und Avalon hinzufügen. Diese Netzwerke bauen auf Ethereum auf und erweitern die Möglichkeiten deines Wallets.',
        links: [
          {
            linkText: "Arbitrum",
            href: "https://offchainlabs.com/arbitrum"
          },
          {
            linkText: "Aurora",
            href: "https://aurora.dev/"
          },
          {
            linkText: "Avalon",
            href: "https://avalon.cocos.com/"
          },
        ]
      },
      {
        subline: '4. Verwenden von chainlist.org zur Integration von Netzwerken',
        text: 'Chainlist.org ist eine praktische Ressource, um weitere Netzwerke zu deinem MetaMask Wallet hinzuzufügen. Möchtest du das Polygon Mainnet hinzufügen? Gehe einfach auf "Connect", wähle dein Wallet, klicke auf "Weiter" und "Verbinden", und schon bist du eingerichtet. Hier findest du eine detaillierte Anleitung zur Verwendung von chainlist.org.',
        links: [
          {
            linkText: "Chainlist",
            href: "https://chainlist.org/"
          },
        ]
      },
      {
        text: 'Durch die Einrichtung verschiedener Netzwerke in deinem MetaMask Wallet erhöhst du deine Fähigkeit, mit verschiedenen dezentralen Applikationen und Smart Contracts zu interagieren. Du bist jetzt gut ausgestattet, um die Welt der Kryptowährungen zu erkunden und dein Portfolio zu optimieren. Viel Spaß beim Erkunden!'
      },
    ]
  },



]