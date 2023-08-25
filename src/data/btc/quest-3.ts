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
        text: `Und es geht ans Eingemachte. Wir schauen uns an, wie du dein Bitcoin wie ein Pro sicher aufbewahren kannst. Es gibt verschiedene Möglichkeiten und ich helfe dir, die beste für dich zu finden. Als echter TMD'ler weißt du spätestens jetzt, dass eine Software-Wallet das absolute Minimum ist, um deine Bitcoin sicher zu verwahren. Vor allem für kleinere Summen, sagen wir mal bis zu 500 € in Bitcoin, sind Software-Wallets ein echtes Muss. Auf keinen Fall sollst du deine Coins auf zentralen Börsen liegen lassen, da lauern Gefahren an jeder Ecke. Und ich möchte dich daran erinnern, dass Begriffe wie "klein" und "groß" im Kontext von Geldbeträgen immer relativ sind. Für manche ist vielleicht 100 € schon viel, für andere ist es ein Trinkgeld. Deshalb rate ich dir, nicht mehr als 500 € in Bitcoin auf deinem Software-Wallet zu haben. Stell es dir vor, wie mit Bargeld - du würdest sicher auch nicht so entspannt durch die Gegend laufen, wenn du 500 € in der Tasche hast, stimmt's?`
      },
      {
        text: 'Und sei vorsichtig im App Store oder Google Play Store. Lad dir nicht einfach irgendeine Wallet herunter. Einige top-bewertete Wallets sind möglicherweise nicht so vertrauenswürdig, wie man anhand der Bewertungen denken könnte, und könnten Closed  Source sein oder im schlimmsten Fall einfach eine Fake-Wallet sein, welche eure Private Keys stiehlt. Ja, das ist schon alles vorgekommen. "Closed-Source" bedeutet übrigens, dass der Code des Wallets nicht öffentlich einsehbar ist und keiner wirklich prüfen kann, was im Hintergrund passiert.'
      },
      {
        text: "Also, welche Wallet ist denn jetzt nun die richtige? Ich persönlich nutze gerne Muun und Wallet of Satoshi. Beide sind reine Bitcoin-Hot-Wallets und unterstützen das Lightning-Netzwerk, über welches wir im Theorie-Video gesprochen haben. Den Link dazu findest du in der Beschreibung. Cool ist auch, dass du bei Wallet of Satoshi direkt über MoonPay, also über einen Drittanbieter, Bitcoin kaufen kannst."
      },
      {
        text: "Es gibt auch diverse Multi-Coin Software-Wallets. Zwei davon, die ich persönlich nutze und kenne, sind die Wallet von Coinbase und die Trust Wallet, das Pendant von Binance. Ich erwähne speziell diese beiden, weil ich weiß, dass sie Open-Source sind. Sie sind ziemlich praktisch, weil du damit nicht nur Bitcoin, sondern auch andere Kryptowährungen handhaben kannst. Aber ein kleines Manko haben sie trotzdem - sie unterstützen das Lightning-Netzwerk nicht."
      },
      {
        text: "So, und wo ist jetzt nun der Haken bei Software-Wallets? Naja, Software-Wallets sind Hot Wallets, das bedeutet, dass sie immer mit dem Internet verbunden sind und immer online. Wenn du Bitcoin sendest, verwendet die Wallet deine privat keys, also deine privaten Schlüssel intern, um die Transaktion zu signieren. Da dein Smartphone fast immer mit dem Internet verbunden ist, sind die privat keys möglicherweise anfällig, wenn Malware (Schadsoftware) auf deinem Gerät vorhanden ist oder falls ein Hacker Zugriff zu deinem Handy erlangt hat. Das macht Hot Wallets generell weniger sicher im Vergleich zu Hardware-Wallets, die nicht ständig mit dem Internet verbunden sind. Wenn ein Hacker Zugriff auf deine privat Keys hat, dann hat er im Grunde die Kontrolle über deine Kryptowährungen. "
      },
      {
        subline: "Und das führt zu einem wichtigen Sprichwort in der Krypto-Welt: 'Not your keys, not your crypto'. Wenn also jemand anderes deine privat keys hat, ist es höchstwahrscheinlich, dass dein Bitcoin futsch ist."
      },
      {
        text: "So, und jetzt zu den Big Playern unter uns. Für größere Mengen an Bitcoin empfehle ich dringend, eine Hardware-Wallet zu nutzen. Diese Hardware-Wallets sind wie ein digitales Schließfach für dein Bitcoin. Du erinnerst dich, im letzten Video haben wir über Cold-Wallets gesprochen, genau das sind Hardware-Wallets. Ich würde sagen, für Summen bis zu 10.000 Euro sind Hardware-Wallets mit einer Single-Sig, also einer einfachen Signatur, echt spitze. Single-Sig bedeutet übrigens, dass du nur einen privaten Schlüssel, also nur einen Private Key, benötigst, um eine Transaktion zu bestätigen. Stell es dir wie eine einzelne Unterschrift vor, die du für eine Überweisung benötigst."
      },
      {
        text: "Wenn es um Hardware-Wallets geht, sind Ledger und Trezor zwei dicke Fische. Sie unterstützen viele verschiedene Kryptowährungen. Wenn du aber ein reines Bitcoin-Hardware-Wallet haben möchtest, dann sind Blockstream und ColdCard die beiden hier eine sehr, sehr gute Wahl."
      },
      {
        text: "Und ganz, ganz wichtig: Kaufe Hardware-Wallets immer direkt auf den offiziellen Seiten der Hersteller. Nicht bei Amazon, nicht bei eBay oder sonstiges. Und ganz besonders wichtig: Finger weg von gebrauchten Wallets! Das ist, als würdest du einen gebrauchten Safe kaufen, bei dem der Vorbesitzer vielleicht noch den Code kennt. Das willst du nicht riskieren."
      },
      {
        text: "Also, kurz und knapp zusammengefasst: Kleine Mengen bis 500 Euro - Software-Wallets auf deinem Handy. Mittlere Mengen bis zu 10.000 Euro - Hardware-Wallet benutzen mit einer Single-Signature."
      },
      {
        text: "Ein letzter Gedanke von mir, bevor ich dich in die Wildnis entlasse: Deine 1000 € Investment in Bitcoin, die du heute im Jahr 2023 gemacht hast, könnten im Jahr 2025 locker 10.000 € wert sein. Du weißt nie, was passiert. Es ist wichtig, dass du jetzt schon vorausplanst und dich mit Hardware-Wallets vertraut machst. Das war's für heute. Im nächsten Video geht's noch tiefer ins Detail, also bleibt dran und vergiss nicht zu abonnieren. Bis dann!"
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
        text: "Heute fahren wir mit unserer Praxisreihe fort und beschäftigen uns mit den Bitcoin-Adressformaten. Im zweiten Video 'Bitcoin richtig kaufen' haben wir die verschiedenen Adressentypen kurz angesprochen. Jetzt gehen wir ins Detail. Bevor wir uns mit den Adressentypen befassen, müssen wir über Public- und Private Keys sprechen."
      },
      {
        text: "Stell dir einen Private Key wie die PIN deines Bankkontos vor - extrem geheim und niemals mit zu teilen. Der Public Key hingegen ist ähnlich wie die IBAN deines Bankkontos, den du teilen kannst, wenn dir jemand Geld schicken möchte. Wichtig zu wissen ist, dass der Private Key benutzt wird, um den Public Key zu generieren, und aus dem Public Key entsteht dann die Bitcoin-Adresse. Aber keine Sorge, dein Wallet übernimmt diese ganzen Aufgaben automatisch."
      },
      {
        text: "Die Architektur von Bitcoin wurde mit einem Fokus auf Privatsphäre entwickelt. Ein Mechanismus, der dies unterstützt, ist die Generierung neuer Adressen für jede Transaktion. Dies macht Bitcoin ist somit also pseudonym, es bietet ein gewisses Maß an Privatsphäre, indem nicht offensichtlich ist, welche Transaktion zu deiner Identität gehört."
      },
      {
        text: "Theoretisch könntest du immer wieder dieselbe Bitcoin-Adresse benutzen, aber das würde deine Pseudonymität beeinträchtigen. Beginnen wir mit den Legacy-Adressen. Diese Adressen sind die ursprünglichen Bitcoin-Adressen und beginnen alle mit einer 1. Sie sind immer noch funktionsfähig, aber im Vergleich zu den neueren Formaten weniger effizient, hauptsächlich wegen höherer Transaktionskosten und langsameren Bestätigungszeiten."
      },
      {
        text: "Lass uns nun über Forks sprechen, und nein, nicht das Essbesteck, sondern Soft- und Hardforks. Softforks sind wie kleinere App-Updates, die immer noch mit älteren Versionen der App kompatibel sind. Das heißt, sie sind rückwärtskompatibel. Stelle es dir wie ein Instagram-Update vor. Du kannst die App weiterhin nutzen und Fotos posten, selbst wenn du das Update nicht machst."
      },
      {
        text: "Im Gegensatz dazu sind Hardforks wie ein brandneues Betriebssystem, das nicht mit den Apps kompatibel ist. Das heißt, sie sind nicht rückwärtskompatibel. Ein gutes Beispiel für eine rückwärtskompatible Softfork ist SegWit, die effizienter ist als Legacy durch die optimierte Struktur der Transaktionsdaten. SegWit-Adressen beginnen alle mit einer 3."
      },
      {
        text: "Und weiter geht's zu einer weiteren Innovation: den Native SegWit-Adressen. Diese beginnen alle mit einer BC1. Native SegWit ist effizienter als das normale SegWit, da es die Blockgröße noch optimaler ausnutzt und dadurch geringere Gebühren und schnellere Transaktionszeiten ermöglicht."
      },
      {
        text: "So, nun ein kurzer Überblick über Taproot. Taproot ist eine weitere bedeutende Softfork. Mit Taproot wird Bitcoin um eine bedeutende Ebene erweitert. Es ermöglicht uns, komplexere Operationen durchzuführen, die zwar nicht ganz so umfangreich wie Smart Contracts auf Ethereum sind, jedoch ähnliche Funktionalitäten aufweisen. Der BRC20-Token-Standard und das Ordninals-Protokoll, eine Methode zur Erstellung einzigartiger Token auf Bitcoin sind Beispiele für solche erweiterten Funktionen. Zudem verbessert Taproot die Privatsphäre, indem es unterschiedliche Arten von Transaktionen gleich aussehen lässt. Das heißt, es ist schwieriger zu erkennen, ob eine Transaktion einfach nur Bitcoin sendet oder ob es kompliziertere Funktionen ausführt."
      },
      {
        text: "Taproot-Adressen beginnen ebenfalls wie Native SegWit mit einer BC1. In einem weiteren Video werden wir Taproot noch detaillierter behandeln."
      },
      {
        text: "Das Lightning-Netzwerk ist eine Layer-2-Lösung, also eine Lösung zweiter Ebene für Bitcoin, die blitzschnelle Transaktionen mit minimalen Gebühren ermöglicht. Speziell für das Netzwerk entwickelte Lightning-Adressen beginnen alle mit einer LNBC1. Das hört sich vielleicht etwas technisch an, aber keine Sorge, wenn du ein Lightning-fähiges Wallet benutzt, wird vieles automatisch für dich erledigt"
      },
      {
        text: "Zum Abschluss ein kurzer Überblick: SegWit und Native SegWit - Super Sache, breit unterstützt von den meisten Wallets und Tauschbörsen. Lightning-Netzwerk revolutioniert mit blitzschnellen Transaktionen und minimalen Gebühren die Bitcoin-Welt. Taproot und BRC20s bringen Bitcoin mit verbesserten Smart Contract-Fähigkeiten und erhöhter Privatsphäre auf ein neues Level."
      },
      {
        text: "In unserem nächsten Video werden wir praktisch, wir senden echte Bitcoin. Also bleibt dran und vielen Dank fürs Zuschauen! Bis zum nächsten Mal bei TEACHMEDEFI."
      }
    ]
  }
]