
import { Lesson } from "../generalLessons";


/**
 * Quest 1 
 * Section 2
 */

export const quest4: Lesson[] = [
  {
    id: "dot-24",
    title: 'Quest 4. DOT zwischen Blockchains "bridgen"',
    slug: 'dot-bridgen',
    youtubeUrl: 'https://youtu.be/uYfeDhnZI84',
    youtubeThumbnail: "https://youtu.be/uYfeDhnZI84/hqdefault.jpg",
    importantLinks: [],
    section: 2, // danach 3 und 4
    questNumber: 7,
    videoTime: '04:09',
    transcript: [
      {
        subline: "Dot Bridgen",
        title: "Anleitung zum Video",
        text: "Cross-Chain Transaktionen mit Polkadot und Moonbeam | Schritt-für-Schritt Anleitung"
      },
      {
        text: 'Dank Polkadots Cross-Chain-Fähigkeiten kannst du Kryptowährungen in Sekundenschnelle (!) zwischen verschiedenen Blockchains transferieren. Wir werden in dieser Anleitung DOT von Polkadots Relay Chain zur Moonbeam-Blockchain teleportieren. Dies ermöglicht dir die Nutzung des Moonbeam-Ökosystems.'
      },
      {  
        subline: "1. Verbinden der Talisman Wallet Extension",
        text: '1.1 Klicke oben rechts auf die Talisman Extension und wähle "Expand Portfolio View"',
      },
      {
        text: '1.2 Gelange zur Talisman-App entweder durch Klicken auf den NFTs-Tab rechts oder durch Eingabe der Adresse der Talisman App im Browser',
        links: [
            {
                linkText: 'Talisman',
                href: "https://app.talisman.xyz/explore"
            }
        ]
      },
      {
        text: 'Gehe zum Explore-Tab für eine Übersicht des Polkadot-Ökosystems'
      },
      {  
        subline: "2. Auswahl des Cross-Chain Transfers",
        text: '2.1 Klicke auf Moonbeam, um zum Moonbeam-Dashboard zu gelangen',
      },
      {
        text: '2.2 Verbinde deine Wallet mit der Webseite, indem du oben rechts auf "Connect" klickst und die Wallet mit deinen DOT Coins auswählst. Eventuell poppt Talisman auch von alleine auf, sobald du die Webseite öffnest.'
      },
      {
        text: 'Klicke links auf den Tab “Cross-Chain” und dann auf “Parachain Bridges”'
      },
      {  
        subline: "3. Verbindung einer zusätzlichen Wallet",
        text: '3.1 Moonbeam ist eine Ethereum-kompatible Blockchain, daher ist eine weitere Wallet-Verbindung erforderlich (bisher haben wir nur den Polkadot Account mit der Website verbunden)'
      },
      {
        text: '3.2 Klicke auf den “Connect Wallet” Button neben dem “Recipient”-Feld'
      },
      {
        text: '3.3 Klicke auf Talisman in der Liste und wähle die bereits in Talisman vorhandene Ethereum-kompatible Adresse (“My Ethereum Account”) aus'
      },
      {  
        subline: '4. Auswahl und Versenden der Coinsr',
        text: '4.1 Wähle den Coin (DOT) aus, den du verschicken möchtest',
      },
      {
        text: '4.2 Gib den gewünschten Betrag ein (z.B. 1 DOT). Eine kleine anfallende Gebühr wird angezeigt.'
      },
      {
        text: '4.3 Klicke auf “Send”'
      },
      {
        subline: '5. Genehmigung und Durchführung des Transfers',
        text: '5.1 Bestätige die Transaktion in Talisman, indem du den Anweisungen im Fenster folgst'
      },
      {
        text: '5.2 Der Transfervorgang sollte nur wenige Sekunden dauern. Sobald die Transaktion durchgeführt ist und deine DOT Coins von der Relay Chain zu Moonbeam teleportiert worden sind, wird dir das auf der Nutzeroberfläche angezeigt (”finalized”)'
      },
      {
        text: '5.3 Überprüfe den erfolgreichen Transfer, indem du deine Ethereum-Adresse in der Talisman-Wallet aufrufst und das erhaltene DOT (”xcDOT”) siehst, welches nun auf Moonbeam existiert. Das “xc” steht für cross-chain und ist das cross-chain Token-Format von Moonbeam. xcDOT repräsentiert aber prinzipiell dasselbe wie DOT.'
      },
      {  
        subline: 'Fazit',
        text: "Dank Polkadots Cross-Chain-Fähigkeiten kannst du jetzt Kryptowährungen in Sekundenschnelle zwischen verschiedenen Blockchains transferieren. Mit Talisman Wallet und Moonbeam hast du erfolgreich DOT von Polkadots Relay Chain zur Moonbeam-Blockchain gesendet. Dies ermöglicht dir die Nutzung des Moonbeam-Ökosystems. Cross-Chain-Transaktionen auf Polkadot sind viel schneller als vergleichbare Transfers auf Ethereum mit “Layer 2”s wie z.B. Arbitrum, Optimism und Polygon, welche unter anderem ganze 7 Tage dauern können. Dies liegt an Trade-Offs im Hinblick auf die Netzwerkarchitektur und Sicherheit. Polkadots Parachains profitieren alle von der gemeinsamen Sicherheit Polkadots.",
      }
    ]
  }
]
