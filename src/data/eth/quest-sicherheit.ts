
import { Lesson } from "../generalLessons";

/**
 * Quest 8
 * Section 7
 * Ist eine art Bonus quest über Sicherheitsmaßnahmen 
 */

export const questSicherheit: Lesson[] = [
  {
    id: "eth-27",
    title: 'Sicherheit - Cold Wallet einrichten',
    slug: 'cold-wallet-einrichten',
    youtubeUrl: 'https://www.youtube.com/watch?v=h-j3-XVmz2U',
    youtubeThumbnail: "https://img.youtube.com/vi/h-j3-XVmz2U/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "Ledger-Webseite",
        href: "https://www.ledger.com/"
      },
      {
        linkText: "Leger Live Download-Seite",
        href: "https://www.ledger.com/ledger-live/download/"
      },
      {
        linkText: "Trezor Wallet",
        href: "https://trezor.io/"
      }
    ],
    section: 8,
    questNumber: 7,
    videoTime: '12:15',
    transcript: [
      {
        title: "Sicherheit bei Kryptowährungen: Ein praktischer Leitfaden zur Einrichtung von Cold Wallets wie Ledger und Trezor",
        text: 'Sicherheit sollte immer deine oberste Priorität sein, wenn du in die Welt der Kryptowährungen einsteigst. Eine Möglichkeit, deine Krypto-Assets zu schützen, ist die Verwendung eines Cold Wallets. In diesem Leitfaden zeigen wir dir, wie du ein Ledger Cold Wallet einrichtest, um deine Kryptowährungen sicher aufzubewahren. Dabei erwähnen wir auch andere gängige Optionen wie das Trezor Wallet.'
      },
      {
        text: 'Ein Cold Wallet ist ein Offline-Gerät zur Speicherung deiner Kryptowährungen. Im Gegensatz zu einem Hot Wallet, das ständig mit dem Internet verbunden ist, bietet ein Cold Wallet erhöhte Sicherheit, indem es deine Krypto-Assets von Online-Bedrohungen isoliert. Es gibt verschiedene Arten von Cold Wallets, doch Hardware-Wallets wie Ledger und Trezor sind unter den beliebtesten.'
      },
      {
        subline: 'Einrichtung des Ledger Cold Wallets',
        text: '1. Kaufe ein Ledger-Gerät: Du kannst ein Ledger Wallet wie Ledger Nano S, Ledger Nano X oder Ledger S Plus auf der offiziellen Ledger-Website erwerben. Jedes Gerät bietet unterschiedliche Funktionen, von Speicherkapazität bis hin zu Bluetooth-Konnektivität, sodass du das Gerät auswählen kannst, das am besten zu deinen Bedürfnissen passt.',
        links: [
          {
            linkText: "Ledger-Webseite",
            href: "https://www.ledger.com/"
          }
        ]
      },
      {
        text: '2. Installiere die Ledger Live App: Nach Erhalt deines Ledger Wallets, gehe zur Ledger Live Download-Seite und lade die passende App für dein Betriebssystem herunter.',
        links: [
          {
            linkText: "Leger Live Download-Seite",
            href: "https://www.ledger.com/ledger-live/download/"
          }
        ]
      },
      {
        text: '3. Verbinde dein Ledger Wallet mit deinem Computer: Verbinde dein Ledger Wallet über das mitgelieferte Kabel mit deinem Computer und befolge die Anweisungen auf dem Bildschirm, um dein Gerät einzurichten.'
      },
      {
        text: '4. Erstelle einen Pin-Code und eine Recovery Phrase: Während der Einrichtung wirst du aufgefordert, einen Pin-Code zu erstellen und eine Recovery Phrase (ein Satz aus 24 Wörtern) aufzuschreiben. Bewahre diese sicher auf, denn sie sind der Schlüssel zu deinem Wallet, falls du dein Gerät verlierst oder es beschädigt wird.'
      },
      {
        text: 'Installiere die entsprechenden Apps für deine Kryptowährungen: In der Ledger Live App kannst du Apps für verschiedene Kryptowährungen installieren, um diese auf deinem Wallet zu speichern.'
      },
      {
        subline: 'Trezor Cold Wallet',
        text: 'Eine andere populäre Cold Wallet-Option ist das Trezor Wallet. Die Schritte zur Einrichtung eines Trezor Wallets sind sehr ähnlich zu denen des Ledger Wallets. Beide Geräte bieten hohe Sicherheitsstandards, um deine Kryptowährungen zu schützen.',
        links: [
          {
            linkText: "Trezor Wallet",
            href: "https://trezor.io/"
          },
        ]
      },
      {
        subline: 'Die Sicherheit deiner Kryptowährungen sollte immer an erster Stelle stehen. Durch die Verwendung eines Cold Wallets wie Ledger oder Trezor kannst du sicher sein, dass deine Krypto-Assets sicher aufbewahrt sind und vor Online-Bedrohungen geschützt sind. Vergiss nicht, dass die Verantwortung für die Sicherheit deiner Kryptowährungen letztendlich bei dir liegt. Sei daher immer wachsam und treffe geeignete Sicherheitsvorkehrungen.',
      },
    ]
  },
  {
    id: "eth-28",
    title: 'Sicherheit - Multisig Wallet einrichten',
    slug: 'multisig-wallet-einrichten',
    youtubeUrl: 'https://www.youtube.com/watch?v=MtZULB6a60k',
    youtubeThumbnail: "https://img.youtube.com/vi/MtZULB6a60k/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "Gnosis Safe",
        href: "https://gnosis-safe.io/app/"
      },
    ],
    section: 8,
    questNumber: 7,
    videoTime: '06:30',
    transcript: [
      {
        title: "Anleitung: Wie man Multisig-Wallets einrichtet - Erhöhe deine Kryptosicherheit",
        text: 'In der Welt der Kryptowährungen ist Sicherheit von entscheidender Bedeutung. Eine der innovativen Möglichkeiten, deine Krypto-Assets zu schützen, besteht darin, ein Multisignature-Wallet (auch bekannt als Multisig-Wallet) einzurichten. In dieser Anleitung zeigen wir dir, wie du ein Multisig-Wallet aufsetzt und stellen verschiedene Anbieter vor, um dir die Auswahl zu erleichtern.'
      },
      {
        subline: 'Was ist ein Multisig-Wallet?',
        text: 'Ein Multisig-Wallet ist ein Krypto-Wallet, das mehrere Signaturen (Schlüssel) für eine Transaktion benötigt. Dies bietet ein zusätzliches Sicherheitsniveau, da nicht nur eine einzige Signatur erforderlich ist, um deine Krypto-Assets zu verschieben.',
      },
      {
        subline: 'Schritt-für-Schritt-Anleitung zur Einrichtung eines Multisig-Wallets',
        text: '1. Wähle einen Anbieter aus: Es gibt verschiedene Anbieter für Multisig-Wallets, aber für diese Anleitung nutzen wir Gnosis Safe, ein bekannter und vertrauenswürdiger Anbieter.',
        links: [
          {
            linkText: "Gnosis Safe",
            href: "https://gnosis-safe.io/app/"
          },
        ]
      },
      {
        text: '2. Verknüpfe dein aktuelles Wallet: Verbinde dein bestehendes Ethereum-Wallet mit der Gnosis Safe App. Dies kann dein Hot-Wallet sein, wie z.B. MetaMask.'
      },
      {
        text: '3. Erstelle dein Multisig-Wallet: Füge die Besitzer des Wallets hinzu. Diese können verschiedene Personen sein oder verschiedene Wallets, die du besitzt. Bei Gnosis Safe kannst du die Anzahl der erforderlichen Bestätigungen angeben. Wenn du beispielsweise drei Besitzer hinzufügst, kannst du festlegen, dass zwei von ihnen eine Transaktion bestätigen müssen.'
      },
      {
        text: '4. Finde deine Multisig-Wallet-Adresse: Sobald das Wallet erstellt ist, erhältst du eine spezielle Multisig-Wallet-Adresse. Du kannst diese Adresse verwenden, um Krypto-Assets zu senden oder zu empfangen.'
      },
      {
        text: '5. Transaktionen bestätigen: Wenn du Assets von deinem Multisig-Wallet versenden möchtest, benötigst du die entsprechende Anzahl von Bestätigungen, die du in Schritt 3 festgelegt hast.'
      },
      {
        subline: 'Es ist wichtig zu beachten, dass für optimale Sicherheit jedes "Besitzer"-Wallet auf einem separaten Gerät oder sogar einer separaten Plattform (z.B. Hardware-Wallet, andere Browser-Erweiterung) gehalten werden sollte.'
      },
      {
        subline: "Durch das Einrichten eines Multisig-Wallets kannst du deine Krypto-Assets besser schützen und deine Sicherheitsstufe erhöhen. Denke jedoch immer daran, deine privaten Schlüssel sicher aufzubewahren und vorsichtig zu sein, wenn du Transaktionen durchführst. Denn in der Welt der Kryptowährungen bist du für deine eigene Sicherheit verantwortlich."
      }
    ]
  },
  {
    id: "eth-29",
    title: 'Sicherheit - Phishing, Telegram, 2FA, VPN',
    slug: 'phishing-telegram-2fa-vpn',
    youtubeUrl: 'https://www.youtube.com/watch?v=h-j3-XVmz2U',
    youtubeThumbnail: "https://img.youtube.com/vi/h-j3-XVmz2U/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "PayPal",
        href: "https://www.paypal.com/"
      },
      {
        linkText: "Coinbase",
        href: "https://www.coinbase.com/"
      },
      {
        linkText: "Telegram",
        href: "https://telegram.org/"
      },
      {
        linkText: "Discord",
        href: "https://discord.com/"
      },
      {
        linkText: "Google Authenticator",
        href: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=de&gl=US"
      },
      {
        linkText: "Apple's iCloud Schlüsselbund",
        href: "https://support.apple.com/de-de/HT204085"
      },
      {
        linkText: "LastPass",
        href: "https://www.lastpass.com/"
      },
      {
        linkText: "NordVPN",
        href: "https://nordvpn.com/de/"
      },
      {
        linkText: "ExpressVPN",
        href: "https://www.expressvpn.com/de"
      },
    ],
    section: 8,
    questNumber: 7,
    videoTime: '03:02',
    transcript: [
      {
        title: "Sicherheit in der Krypto-Welt: Dein umfassender Leitfaden zur Vermeidung von Betrug und Phishing",
        text: 'In der aufregenden Welt der Kryptowährungen und dezentralisierten Finanzen (DeFi) ist Sicherheit von entscheidender Bedeutung. Die Zahl der Betrugsfälle nimmt zu, und es ist unerlässlich, dass du dich wappnest. Hier ist ein Schritt-für-Schritt-Leitfaden, wie du sicher in der Krypto-Welt navigieren kannst.'
      },
      {
        subline: '1. Erkenne Phishing-Versuche',
        text: 'Phishing ist eine gängige Methode, bei der Betrüger versuchen, deine persönlichen Informationen zu stehlen. Du könntest E-Mails erhalten, die so aussehen, als kämen sie von bekannten Krypto-Anbietern wie PayPal oder Coinbase. Klicke niemals auf verdächtige Links. Wenn du Zweifel hast, wende dich direkt an den Support des Anbieters.',
        links: [
          {
            linkText: "PayPal",
            href: "https://www.paypal.com/"
          },
          {
            linkText: "Coinbase",
            href: "https://www.coinbase.com/"
          },
        ]
      },
      {
        subline: '2. Schütze deine Privatsphäre auf Social-Media-Plattformen',
        text: 'Viele Krypto-Gespräche finden auf Plattformen wie Telegram und Discord statt. Stelle sicher, dass deine Einstellungen so gesetzt sind, dass du privat bleibst und nur von Personen kontaktiert werden kannst, denen du vertraust. Beachte: Kein seriöser Support wird dich unaufgefordert anschreiben.',
        links: [
          {
            linkText: "Telegram",
            href: "https://telegram.org/"
          },
          {
            linkText: "Discord",
            href: "https://discord.com/"
          },
        ]
      },
      {
        subline: '3. Nutze eine Authenticator-App',
        text: 'Eine Authenticator-App wie Google Authenticator bietet eine zusätzliche Sicherheitsebene für deine Konten. Sie generiert regelmäßig neue Codes, die du eingeben musst, um auf deine Konten zuzugreifen.',
        links: [
          {
            linkText: "Google Authenticator",
            href: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=de&gl=US"
          },
        ]
      },
      {
        subline: '4. Verwalte deine Passwörter sicher',
        text: "Verwende niemals dasselbe Passwort für mehrere Konten. Ein Passwort-Manager wie Apple's iCloud Schlüsselbund oder LastPass kann dir dabei helfen, verschiedene starke Passwörter für all deine Konten zu generieren und sicher aufzubewahren.",
        links: [
          {
            linkText: "Apple's iCloud Schlüsselbund",
            href: "https://support.apple.com/de-de/HT204085"
          },
          {
            linkText: "LastPass",
            href: "https://www.lastpass.com/"
          },
        ]
      },
      {
        subline: '5. Surfe sicher mit einem VPN',
        text: 'Ein VPN (Virtual Private Network) wie NordVPN oder ExpressVPN kann deine IP-Adresse verschleiern und deine Online-Privatsphäre verbessern.',
        links: [
          {
            linkText: "NordVPN",
            href: "https://nordvpn.com/de/"
          },
          {
            linkText: "ExpressVPN",
            href: "https://www.expressvpn.com/de"
          },
        ]
      },
      {
        subline: 'Denk daran, immer wachsam zu bleiben und Sicherheitsmaßnahmen ernst zu nehmen. In der Welt der Kryptowährungen kann Sicherheit den Unterschied zwischen Erfolg und Verlust bedeuten. Bleibe sicher, bleibe klug und navigiere erfolgreich durch die Krypto-Welt.',
      },
    ]
  },
  {
    id: "eth-30",
    title: 'Sicherheit - Transaktionen Rückgängig machen',
    slug: 'transaktionen-rueckgaenging-machen',
    youtubeUrl: 'https://www.youtube.com/watch?v=Q7Omyb6ZYEE',
    youtubeThumbnail: "https://img.youtube.com/vi/Q7Omyb6ZYEE/hqdefault.jpg",
    importantLinks: [
      {
        linkText: "revoke.cash",
        href: "https://revoke.cash/"
      },
    ],
    section: 8,
    questNumber: 7,
    isLastQuest: true,
    videoTime: '06:00',
    transcript: [
      {
        title: "Anleitung: Wie man Krypto-Transaktionen rückgängig macht",
        text: 'Falls du dich jemals in der Situation wiederfindest, in der du eine Transaktion in der Kryptowelt rückgängig machen musst, sind hier die Schritte, die du befolgen solltest.'
      },
      {
        text: 'Sicherheit sollte in der Welt der Kryptowährungen stets an erster Stelle stehen. Ein integraler Aspekt der Sicherheit ist zu wissen, wie man autorisierte Transaktionen rückgängig macht, insbesondere, wenn du erkennst, dass du etwas genehmigt hast, das du lieber nicht hättest.'
      },
      {
        text: 'Hierzu kann die Website revoke.cash eine große Hilfe sein.'
      },
      {
        subline: '1. Verbindung zu Revoke.cash',
        text: 'Öffne deinen Webbrowser und navigiere zu revoke.cash. Sobald du auf der Seite bist, musst du deine Wallet verbinden. Die Seite zeigt dir dann an, welche Berechtigungen du den verschiedenen Protokollen erteilt hast.',
        links: [
          {
            linkText: "revoke.cash",
            href: "https://revoke.cash/"
          },
        ]
      },
      {
        subline: '2. Überprüfen der Berechtigungen',
        text: 'Sieh dir die Liste der Assets an, die von den verschiedenen Protokollen verwendet werden dürfen. Dies kann dir dabei helfen zu erkennen, ob du möglicherweise versehentlich eine betrügerische Seite autorisiert hast.',
      },
      {
        subline: '3. Widerrufen der Berechtigungen',
        text: 'Wenn du eine Berechtigung widerrufen möchtest, klicke einfach auf "Revoke" neben dem entsprechenden Asset. Beachte, dass du für jede Widerrufstransaktion Netzwerkgebühren zahlen musst.',
      },
      {
        subline: '4. Überprüfen der Transaktion',
        text: 'Nachdem du die Berechtigung widerrufen hast, überprüfe, ob die Transaktion erfolgreich war. Du solltest sehen können, dass die entsprechende Berechtigung nicht mehr in deiner Liste aufgeführt ist.',
      },
      {
        text: 'Das Zurückziehen von Berechtigungen auf revoke.cash ist ein wichtiges Werkzeug in deinem Krypto-Sicherheitsarsenal. Es ist immer eine gute Idee, diese Seite in deinem Browser zu speichern, falls du sie in Zukunft benötigen solltest.'
      },
      {
        subline: 'Denk daran, dass es in der Kryptowelt immer sicherer ist, vorsichtig zu sein und deine Schritte sorgfältig zu überprüfen. Und wenn du einmal einen Fehler gemacht hast, ist revoke.cash ein lebensrettendes Werkzeug, um diese Fehler zu korrigieren. Bleib sicher und viel Erfolg beim Navigieren durch die aufregende Welt der Kryptowährungen!',
      },
    ]
  }
]