
import { Lesson } from "../generalLessons";


/**
 * Quest 1 
 * Section 2
 */

export const quest1: Lesson[] = [
  {
    id: "dot-19",
    title: 'Quest 1.1 - Wallet Einrichten',
    slug: 'wallet-einrichten',
    youtubeUrl: 'https://youtu.be/4fkGasAjWVA',
    youtubeThumbnail: "https://youtu.be/4fkGasAjWVA/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "Talisman Wallet",
        href: "talisman.xyz"
      },
    ],
    section: 2, // danach 3 und 4
    questNumber: 1,
    videoTime: '06:02',
    transcript: [
      {
        subline: "1. Talisman Wallet herunterladen und einrichten",
        title: "Anleitung zum Video",
        text: "1.1 Besuche talisman.xyz und klicke auf 'Download the Wallet'",
        links: [
          {
            linkText: "Talisman Wallet",
            href: "https://www.talisman.xyz/"
          }
        ]
      },
      {
        text: '1.2 Klicke auf "Hinzufügen" bzw. "Add Extension", um die Wallet-Erweiterung zu installieren"'
      },
      {  
        subline: "2. Wallet einrichten",
        text: '2.1 Öffne die Wallet-Erweiterung und wähle "Create a new wallet"',
      },
      {
        text: '2.2 Erstelle ein sicheres Passwort, um den Zugriff auf die Extension zu entsperren und zu sperren (ähnlich wie dein Sperrcode auf dem Smartphone).'
      },
      {
        text: '2.3 Klicke auf "Continue" und wähle deine bevorzugten Privatsphäre-Einstellungen aus.'
      },
      {  
        subline: "3. Wallet-Erweiterung im Browser pinnen",
        text: '3.1 Pinne die Talisman Wallet-Erweiterung in deinem Browser fest, indem du oben rechts auf das Symbol neben den Extension klickst (in Chrome und Brave ein Puzzlestück-Symbol) und dann auf den Pin Button neben Talisman klickst.',
      },
      {  
        subline: "4. Browser-Einstellungen anpassen",
        text: '4.1 Überprüfe, ob du unten im Fenster eine Meldung von Talisman erhältst, die dich bittet, eine Browser-Einstellung zu ändern.',
      },
      {
        text: '4.2 In Brave musst du bei der Version, die wir während der Aufnahme dieses Videos nutzen, beispielsweise die Browser-Einstellung “Restrict Websockets Pool” von "default" auf "disabled" umstellen, um das Problem zu beheben. Link für den Brave Browser: brave://flags/#restrict-websockets-pool',
        links: [
          {
            linkText: "Brave Browser",
            href: "brave://flags/#restrict-websockets-pool"
          }
        ]
      },
      {  
        subline: "5. Öffentliche Wallet-Adresse finden",
        text: '5.1 In der Talisman Wallet kannst du deine öffentliche Wallet-Adresse anzeigen lassen, indem du auf das kleine Kopier-Symbol neben dem Namen der Wallet klickst (z. B. neben “My Polkadot Account”).',
      },
      {
        text: '5.2 Das Addressformat unterscheidet sich je nach Parachain. Alle Addressen leiten sich von der obersten (”Substrate (Generic)”) ab, aber wähle hier immer genau die Chain aus, deren Adresse du sehen willst. Falls dir z. B. ein Freund DOT Coins zuschicken möchte, klicke hier auf “Polkadot”.'
      },
      {
        text: '5.3 Klicke dann auf “Copy Address” oder scanne den QR-Code um deine Wallet-Adresse zu kopieren. Du kannst diese Adresse an andere Personen weitergeben, damit sie dir Kryptowährungen schicken können.'
      },
      {  
        subline: "6. Wichtigkeit der Sicherung deiner Recovery Phrase (Privater Schlüssel)",
        text: '6.1 Bewahre die Recovery Phrase sicher auf, da du sie benötigst, um auf deine Kryptowährungen zuzugreifen. Teile sie niemandem mit, da sie sonst auch darauf zugreifen können!',
      },
      {
        text: '6.2 Falls du die Talisman-Erweiterung löschst oder deinen Laptop verlierst, benötigst du die Recovery Phrase, um wieder Zugang zu deinen Kryptowährungen zu erhalten. Ohne Recovery Phrase hättest du keinen Zugang mehr.'
      },
      {
        text: '6.3 Du kannst z. B. eine neue Wallet-Extension installieren und die Recovery Phrase eingeben, um erneut auf deine Kryptowährungen zuzugreifen.'
      },
      {  
        subline: '7. Sichere deine Recovery Phrase',
        text: '7.1 Klicke auf das Talisman-Symbol oben rechts im Browser.',
      },
      {
        text: '7.2 Klicke auf die drei Punkte unten rechts in der Talisman-Erweiterung.'
      },
      {
        text: '7.3 Gehe auf "Backup Wallet" und gib dein zuvor festgelegtes Passwort ein.'
      },
      {
        text: '7.4 Klicke auf "View Recovery Phrase", um deine private Schlüsselphrase anzuzeigen.'
      },
      {
        text: '7.5 Notiere dir die Recovery Phrase. Stelle sicher, dass du sie korrekt notiert hast und hinterlege sie an einem oder sogar mehreren Orten, wo niemand sonst Zugriff hat.'
      },
      {
        text: '7.6 Bestätige mit dem Button “I’ve backed it up”, dass du sie gesichert hast.'
      },
      {  
        subline: '8. Wichtigkeit der Sicherung',
        text: '8.1 Bewahre die Recovery Phrase sicher auf, da du sie benötigst, um auf deine Kryptowährungen zuzugreifen. Teile sie niemandem mit, da sie sonst auch darauf zugreifen können!',
      },
      {
        text: '8.2 Falls du die Talisman-Erweiterung löschst oder deinen Laptop verlierst, benötigst du die Recovery Phrase, um wieder Zugang zu deinen Kryptowährungen zu erhalten. Ohne Recovery Phrase hättest du keinen Zugang mehr.'
      },
      {
        text: '8.3 Du kannst eine neue Wallet installieren und die Recovery Phrase eingeben, um erneut auf deine Kryptowährungen zuzugreifen.'
      },
      {  
        subline: '9. Empfangen von Kryptowährungen',
        text: '9.1 Du kannst deine Wallet-Adressen auch alternativ wie folgt finden: Klicke in Talisman auf "Receive" und wähle die gewünschte Währung (z. B. DOT) und das entsprechende Konto aus, welches du nutzen willst, falls du mehrere erstellt hast.',
      },
      {
        text: '9.2 Kopiere die Adresse und teile sie dem Sender mit.'
      },
      {  
        subline: '10. Deaktivierung von Metamask (optional)',
        text: '10.1 Falls du die Metamask Wallet-Erweiterung verwendest, empfehle ich dir, sie zu deaktivieren, während du Talisman nutzt. Dies verhindert mögliche Konflikte beim Verbinden von Websites mit deiner Wallet. Vergiss aber nicht, vorher deine Recovery Phrase von Metamask sicher zu hinterlegen, falls du dies noch nicht getan hattest.',
      },
      {
        text: '10.1 Klicke auf das Puzzle-Symbol oben rechts im Browser und Klicke auf den Button "Manage Extensions"'
      },
      {
        text: '10.2 Finde Metamask und schalte den On/Off Button ab. Du kannst die Deaktivierung über diesen Button jederzeit rückgängig machen. Der Zugriff auf deine Wallet ist dann wiederhergestellt. Heißt: Theoretisch musst du nicht nochmal deine Metamask-Wallet importieren, aber sicherheitshalber solltest du deine Recovery Phrase trotzdem sicher hinterlegt haben, bevor du die Extension deaktivierst.'
      },
      {  
        subline: 'Fazit',
        text: "Das war's! Du hast nun erfolgreich die Talisman Wallet eingerichtet, den privaten Schlüssel gesichert und kannst die Wallet nutzen. Vergiss nicht, deine Recovery Phrase sicher aufzubewahren und den privaten Schlüssel geheim zu halten. Jetzt bist du bereit, in das Polkadot-Ökosystem einzutauchen!"
      },
      
    ]
  },
  {
    id: "dot-20",
    title: 'Quest 1.2 - Testnet ETH erhalten',
    slug: 'testnet-eth-erhalten',
    youtubeUrl: 'https://www.youtube.com/watch?v=zx422X70950',
    youtubeThumbnail: "https://www.youtube.com/watch?v=zx422X70950/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "Sepolia Faucet",
        href: "https://sepoliafaucet.com/"
      },
    ],
    section: 2, // danach 3 und 4
    questNumber: 2,
    videoTime: '03:56',
    transcript: [
      {
        subline: "1. Vorbereitung für den Erhalt von NFTs auf dem Sepolia Testnet",
        title: "Anleitung zum Video",
        text: 'Um kostenlose NFTs als symbolische Belohnung für die Teilnahme an unseren Tutorials zu erhalten und deinen Lernerfolg zu verfolgen, sind einige vorbereitende Maßnahmen erforderlich.'
      },
      {
        text: '1.1 Öffne die Talisman Wallet.'
      },
      {
        text: '1.2 Klicke auf "Settings".'
      },
      {
        text: '1.3 Wähle "Ethereum Networks" aus.'
      },
      {
        text: '1.4 Aktiviere die Option "Enable Testnets", um die Testnetzwerke anzuzeigen.'
      },
      {
        text: '1.5 Auf dem Sepolia Testnet kannst du NFTs ohne Transaktionsgebühren claimen.'
      },
      {
        subline: "2. Anmeldung bei Alchemy",
        text: 'Um Sepolia-ETH zu erhalten, folge diesen Schritten:'
      },
      {
        text: '2.1 Gehe auf sepoliafaucet.com und melde dich bei Alchemy an.',
        links: [
          {
            linkText: "Sepolia Faucet",
            href: "https://sepoliafaucet.com/"
          }
        ]
      },
      {
        text: '2.2 Klicke auf den Button "Sign Up".'
      },
      {
        text: '2.3 Gib deinen Namen, deine E-Mail-Adresse und ein Passwort ein.'
      },
      {
        text: '2.4 Klicke auf "Sign Up" und bestätige, dass du ein Mensch bist.'
      },
      {
        text: '2.5 Öffne die Bestätigungs-E-Mail, die du erhalten hast und gib den Bestätigungs-Code ein.'
      },
      {
        text: '2.6 Klicke dich durch die kurze Umfrage, welche nicht direkt für uns relevant ist. Wichtig ist, dass du die kostenlose Mitgliedschaft auswählst per Klick auf "Free".'
      },
      {
        subline: "3. Erhalt von Sepolia-ETH ",
        text: 'Folge diesen Schritten, um Sepolia-ETH zu erhalten:'
      },
      {
        text: '3.1 Öffne deine Wallet und kopiere deine Ethereum-Wallet-Adresse (”My Ethereum Account”).'
      },
      {
        text: '3.2 Füge die Adresse auf sepoliafaucet.com ein.',
        links: [
          {
            linkText: "Sepolia Faucet",
            href: "https://sepoliafaucet.com/"
          }
        ]
      },
      {
        text: '3.3 Bestätige, dass du kein Roboter bist.'
      },
      {
        text: '3.4 Klicke auf "Send me ETH", um das Testnetz-ETH zu erhalten.'
      },
      {
        text: '3.5 Du kannst täglich bis zu 0,5 Sepolia-ETH erhalten. Es handelt sich hierbei nicht um “echtes” ETH, sondern um Testnet-ETH, welches keinen echten monetären Wert hat.'
      },
      {
        subline: "4. Überprüfung des erhaltenen Sepolia-ETH",
        text: '4. 1 Überprüfe deine Wallet in der Talisman-App'
      },
      {
        text: '4.2 Öffne den Ethereum-Account und prüfe den Kontostand.'
      },
      {
        text: '4.3 Nach kurzer Zeit, solltest Du das erhaltene Sepolia-ETH sehen.'
      },
      {
        subline: 'Fazit',
        text: "Herzlichen Glückwunsch! Du hast nun die Vorbereitungen getroffen und Sepolia-ETH erhalten, um von uns NFTs ohne reale Kosten erhalten zu können. Du bist bereit, an den Tutorials teilzunehmen und dich weiterzuentwickeln. Viel Spaß beim Sammeln der NFTs!"
      },
      
    ]
  }
]
