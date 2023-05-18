import React from "react";
import { generalLessons, Lesson } from "./generalLessons";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails

/**
 *  ____________________ ETHEREUM LESSONS ___________________________
 */
export const ethLessons: Lesson[] = [
  ...generalLessons,
  {
    id: "a2c9d8f1-20b7-4b14-a4fb-d47f4d8a1467",
    title: 'Die Ethereum Blockchain.',
    slug: 'die-ethereum-blockchain',
    youtubeUrl: 'https://www.youtube.com/watch?v=hyNcJDO1JOM',
    youtubeThumbnail: "https://img.youtube.com/vi/hyNcJDO1JOM/hqdefault.jpg",
    // importantLinks: [],
    section: 1,
    transcript: (
      <>
        
      </>
    )
    // transcript:
    //   [
    //     'Lass uns jetzt gemeinsam herausfinden, was die Ethereum Blockchain so besonders macht.',
    //     'Ethereum wurde 2015 von Vitalik Buterin, einem russisch-kanadischen Programmierer, gemeinsam mit anderen Mitbegründern wie Gavin Wood, Joseph Lubin und Charles Hoskinson ins Leben gerufen. Die Idee für Ethereum entstand, als Vitalik erkannte, dass Bitcoin zwar revolutionär war, aber in seinen Anwendungsmöglichkeiten begrenzt ist, da man zu dieser Zeit lediglich Bitcoin empfangen und versenden konnte.',
    //     'Das Team hinter Ethereum wollte eine Plattform schaffen, die über die Funktionen einer reinen Kryptowährung hinausgeht. Ihr Ziel war es, eine Umgebung zu entwickeln, die es ermöglicht, dezentrale Anwendungen (dApps) und automatisierte Verträge zu erstellen. Auf Ethereum können komplexe Finanzprodukte, dezentrale Organisationen oder sogar virtuelle Welten aufgebaut werden. Diese bahnbrechende Technologie hat das Potenzial, traditionelle Geschäftsmodelle und Organisationen zu verändern und eine Vielzahl neuer Möglichkeiten zu erschließen.',
    //     'In den nachfolgenden Videos werden wir gemeinsam tiefer in die verschiedenen Funktionen von Ethereum eintauchen und dir zeigen, wie du Zugang zu diesem spannenden Ökosystem findest. Begleite uns auf dieser Reise, um mehr über Ethereum, seine Funktionen und die Zukunft der Blockchain-Technologie zu erfahren.',
    //   ],
  },
  {
    id: "1c728798-3297-4d8f-98c3-3a3a68e33d27",
    title: 'Ethereum 2.0 - Der Wechsel von PoW zu PoS.',
    slug: 'ethereum-wechsel-von-pow-zu-pos',
    youtubeUrl: 'https://www.youtube.com/watch?v=ExIs9mKfvaU',
    youtubeThumbnail: "https://img.youtube.com/vi/ExIs9mKfvaU/hqdefault.jpg",
    // importantLinks: [],
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
    id: "fdb7a5f5-d5f7-4e5c-9d22-fc328f6b659e",
    title: 'Ether - der Treibstoff von Ethereum.',
    slug: 'ether-treibstoff-von-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=QfnuJlchwsw',
    youtubeThumbnail: "https://img.youtube.com/vi/QfnuJlchwsw/hqdefault.jpg",
    // importantLinks: [],
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
    id: "e2990f6c-a259-4e7e-a02a-cc0d3b9bf2f9",
    title: 'Smart Contracts & Ethereum Virtual Mashine (EVM).',
    slug: 'smart-contracts-and-evm',
    youtubeUrl: 'https://www.youtube.com/watch?v=UwLioT3iHQU',
    youtubeThumbnail: "https://img.youtube.com/vi/UwLioT3iHQU/hqdefault.jpg",
    // importantLinks: [],
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
    id: "c1e4d508-f5d6-4d22-90ec-15d4ba986a3e",
    title: 'Dezentrale Applikationen (dApps).',
    slug: 'dezentrale-applikationen',
    youtubeUrl: 'https://www.youtube.com/watch?v=2VHPOGq0qfw',
    youtubeThumbnail: "https://img.youtube.com/vi/2VHPOGq0qfw/hqdefault.jpg",
    // importantLinks: [],
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
    id: "0c461c16-5e45-4f02-9b96-41bb36348cc4",
    title: 'DeFi - Dezentrale Finanzsysteme.',
    slug: 'dezentrale-finanzsysteme',
    youtubeUrl: 'https://www.youtube.com/watch?v=QD2RCTvh97o',
    youtubeThumbnail: "https://img.youtube.com/vi/QD2RCTvh97o/hqdefault.jpg",
    // importantLinks: [],
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
    id: "3b12bb20-4be7-49a8-94a2-4f4b9476a5bc",
    title: 'Die Tokenisierung von Vermögenswerten & Rechten - ERC20 & ERC721.',
    slug: 'erc20-and-erc721',
    youtubeUrl: 'https://www.youtube.com/watch?v=3ng1K8eEfnU',
    youtubeThumbnail: "https://img.youtube.com/vi/3ng1K8eEfnU/hqdefault.jpg",
    // importantLinks: [],
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
    id: "e8a7f79c-2074-4d26-96d5-3e6c894ef9eb",
    title: 'Smart Contracts & Ethereum Virtual Mashine (EVM).',
    slug: 'ether-treibstoff-von-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=QgCqAEi7bsA',
    youtubeThumbnail: "https://img.youtube.com/vi/QgCqAEi7bsA/hqdefault.jpg",
    // importantLinks: [],
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
]