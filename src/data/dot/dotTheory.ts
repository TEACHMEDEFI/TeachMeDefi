import { Quests } from "../generalLessons";

export const dotTheory: Quests[] = [
  {
    questTitle: "Theorie Sektion",
    questSectionId: 'dot-theory-1',
    lessons: [
      {
        id: "dot-1",
        title: 'Was ist Polkadot?',
        slug: 'was-ist-polkadot',
        youtubeUrl: 'https://youtu.be/83kWudF8Rfc',
        youtubeThumbnail: "https://youtu.be/83kWudF8Rfc/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 1,
        section: 1,
        transcript:
          [
            'Hallo und herzlich willkommen zu diesem Kurs für Kryptowährungen für Einsteiger! Heute sprechen wir über Polkadot. Also, was ist Polkadot?',
            'Polkadot ist eine Blockchain-Plattform der nächsten Generation, die einige der größten Herausforderungen lösen soll, denen das aktuelle Blockchain-Ökosystem gegenübersteht. Die Blockchain wurde von Gavin Wood kreiert, der Mitgründer von Ethereum war und Solidity erfand, die Smart Contract Programmiersprache von Ethereum.',
            'Im Wesentlichen ermöglicht Polkadot es verschiedenen Blockchains nahtlos und sicher zusammenzuarbeiten.',
            'Das bedeutet, dass verschiedene Blockchains, welche sich jeweils auf gewisse Anwendungsfälle spezialisieren, miteinander kommunizieren und Informationen teilen können. Dadurch können dezentrale Anwendungen (oder sogenannte dApps) erstellt werden, welche auf die Fähigkeiten und Stärken verschiedenster Blockchains zugreifen.',
            'Aber wie funktioniert das? Nun, Polkadot basiert auf einer einzigartigen Architektur namens "Relay Chain". Dies ist das Rückgrat des Netzwerks und verbindet mehrere Blockchains miteinander, welche hier "Parachains" genannt werden.',
            'Jede Parachain kann ihre eigenen Regeln und Funktionen haben, aber sie können alle über die Relay Chain miteinander kommunizieren. Dadurch entsteht ein flexibleres und skalierbareres Blockchain-Ökosystem, das sich an verschiedene Anforderungen und Anwendungsfälle anpassen kann.',
            'Insgesamt ist Polkadot ein aufregendes Projekt, das das Potenzial hat, die Art und Weise zu revolutionieren, wie wir Blockchain-Technologie nutzen. Wenn Du mehr darüber erfahren möchtest, bleib dran für unsere nächsten Videos!'

          ],
      },
      {
        id: "dot-2",
        title: 'Die Bedeutung von Interoperabilität',
        slug: 'bedeuting-interoperabilität',
        youtubeUrl: 'https://youtu.be/uXqMwhZeyio',
        youtubeThumbnail: "https://youtu.be/uXqMwhZeyio/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 2,
        section: 1,
        transcript:
          [
            'Warum ist Interoperabilität wichtig in der Welt der Blockchains?',
            'Interoperabilität bezieht sich auf die Fähigkeit verschiedener Blockchains, nahtlos miteinander zusammen zu arbeiten und Informationen austauschen zu können. Dies ist ein wesentlicher Aspekt beim Aufbau eines vernetzten und effizienten dezentralen Ökosystems.',
            'In der Regel sind Blockchains voneinander isoliert und eine der größten Herausforderungen ist die mangelnde Interoperabilität zwischen verschiedenen Blockchains. Jede Blockchain hat ihre eigenen Regeln und Protokolle, was den Austausch von Daten und Assets zwischen ihnen erschwert. Das macht es schwierig, Anwendungen zu erstellen, die mit mehreren Blockchains interagieren können, was  das Potenzial der Blockchain-Technologie beschränkt.',
            'Deshalb ist die sogenannte Cross-Chain-Kommunikation so wichtig. Sie ermöglicht es verschiedenen Blockchains, miteinander zu kommunizieren und Daten auszutauschen, was die Interoperabilität erhöht und die Effizienz der gesamten Blockchain-Industrie verbessert.',
            'Wie kann nun die Cross-Chain-Kommunikation in der Blockchain-Welt erreicht werden? ',
            'Die Antwort ist Polkadot.',
            'Polkadot ist eine Blockchain-Plattform, die für ihre Interoperabilität bekannt ist. Polkadot ermöglicht es verschiedenen Blockchains, miteinander zu kommunizieren und Daten auszutauschen, indem es eine gemeinsame Infrastruktur namens Relay Chain bereitstellt.',
            'Mit dem Aufstieg von interoperabilitätsorientierten Projekten wie Polkadot erleben wir jedoch eine neue Ära der Blockchain-Innovation. Durch die Möglichkeit, verschiedene Blockchains miteinander zu verbinden und Informationen auszutauschen, können wir leistungsfähigere und flexiblere Systeme aufbauen, die eine breitere Palette von Anforderungen und Anwendungsfällen erfüllen können.',
            'Interoperabilität trägt auch dazu bei, die Gesamtsicherheit und Zuverlässigkeit des Blockchain-Ökosystems zu verbessern. Durch die Verbindung verschiedener Blockchains können wir ein dezentraleres und verteiltes Netzwerk schaffen, das schwerer anzugreifen oder zu manipulieren ist.',
            'Wenn Du also an Blockchains und Kryptowährungen interessiert bist, achte unbedingt auf das Konzept der Interoperabilität! Es ist ein Schlüsselfaktor für die Zukunft dezentraler Anwendungen und wird in Zukunft eine immer wichtigere Rolle spielen. Ein Satz, der hierzu öfters fällt ist: The Future is Multi-Chain!'
          ],
      },
      {
        id: "dot-3",
        title: 'Was macht Polkadot einzigartig?',
        slug: 'bedeuting-interoperabilität',
        youtubeUrl: 'https://youtu.be/e-wlyU-yk2Q',
        youtubeThumbnail: "https://youtu.be/e-wlyU-yk2Q/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 3,
        section: 1,
        transcript:
          [
            'Was macht Polkadot so besonders? Was sind die konkreten Unterschiede zwischen Polkadot und anderen Blockchains?',
            'Obwohl es viele Blockchains gibt, die ähnliche Funktionen und Merkmale aufweisen, unterscheidet sich Polkadot in einigen wesentlichen Punkten.',
            'Zunächst einmal, wie bereits angeschnitten, ist Polkadot eine interoperable Chain, die verschiedene Blockchains nahtlos zusammenarbeiten lässt. Dies ist im Vergleich zu anderen Blockchains, die in der Regel isoliert sind, ein entscheidender Vorteil.',
            'Die sogenannte Relay Chain verbindet mehrere Blockchains miteinander, die hier "Parachains" genannt werden, und ermöglicht eine höhere Flexibilität und Skalierbarkeit, was Polkadot zu einer idealen Plattform für verschiedene Anwendungsfälle macht.',
            'Ein Anwendungsentwickler auf Ethereum zum Beispiel ist an die Regeln und Logik von Ethereum gebunden. Ein Beispiel wäre, dass für jede Transaktion Transaktionsgebühren in Ethereum’s nativer Kryptowährung Ether anfallen und Benutzer also diese Applikation nur nutzen können wenn sie Ether haben. ',
            'Auf Polkadot dagegen kann ein Anwendungsentwickler einer Parachain selber die Regeln und Logik seiner Parachain festlegen, darunter auch wie und wann Benutzer seine Anwendung verwenden können. Ähnlich wie auch bei traditionellen Web2-Geschäftsmodellen. Wenn wir z. B. Google nutzen, müssen wir ja nicht für eine Google-Suche bezahlen. ',
            'Während du also Ether brauchst um auf Ethereum Gebühren für die Nutzung von Applikationen zu bezahlen, brauchst du als Nutzer einer Parachain keine DOT coins um Transaktionsgebühren zu bezahlen. Wie der Benutzerzugriff reguliert wird, ist der Parachain selbst überlassen. Unabhängig von DOT. Theoretisch sind z. B. auch Konzepte mit gebührenfreien Transaktionen möglich. ',
            'Außerdem macht die zuvor besprochene Interoperabilität Polkadots es möglich, dass Parachains sicher miteinander kommunizieren und es können dadurch Anwendungen erschaffen werden, die auf die Funktionen verschiedenster Parachains gleichzeitig zugreifen. ',
            'Ein simples Beispiel für die Interoperabilität ist das sogenannte “Bridging”, also wenn man eine Kryptowährung von einer Blockchain zu einer anderen Blockchain übertragen möchte. Ohne eine gemeinsame Sicherheitsebene ist Bridging zwischen Blockchains riskant. Bis heute sind Kryptowährungen im Wert von mehr als 2,5 Mrd Dollar in solchen Bridges gehackt worden. Das ist mehr als 50% aller DeFi-Hacks. Auf Polkadot gibt es dieses Bridging Risiko nicht. Du kannst Kryptowährungen zwischen Parachains umher schicken, ohne dir ähnliche Sorgen machen zu müssen. Die Parachains profitieren alle von der gemeinsamen Sicherheit Polkadots.',
            'Aber nicht nur simples Bridging wird dadurch möglich, sondern es können nun “cross-chain” Applikationen existieren: Applikationen, welche mit nur einem Klick des Nutzers mehrere Transaktionen auf mehreren Chains mit verschiedenen Kryptowährungen auslösen. Die Komplexität passiert dabei im Hintergrund.',
            'Sagen wir der Nutzer will ein NFT auf der Chain Astar kaufen, hält aber keine Kryptowährung auf Astar um dieses NFT kaufen zu können. Er hält aber Kryptowährungen auf einer anderen Chain wie z. B. KILT. Nun kann er mit einem Klick sicher auslösen, dass die KILT coins z.B zur Blockchain Astar transportiert werden, sie dort auf einer Dezentralen Handelsbörse  gegen den Coin von Astar ausgetauscht werden und dann damit das NFT gekauft wird. Dieser Fall zeigt wie deine Liquidität, welche bisher zwischen isolierten Blockchains verteilt und schwer zugänglich war, auf Polkadot mit wenigen Klicks mobilisiert werden kann und nun in einem gemeinsamen, verbundenen Ökosystem existiert.',
            'Insgesamt bietet Polkadot eine einzigartige Architektur, die eine höhere Interoperabilität, Flexibilität und Skalierbarkeit ermöglicht. Später in den Quests, wirst du selber einige dieser Funktionen nutzen!'
          ],
      },
      {
        id: "dot-4",
        title: 'Der DOT Coin - Polkadots Kryptowährung',
        slug: 'dot-coin',
        youtubeUrl: 'https://youtu.be/eSaSPSZdF9A',
        youtubeThumbnail: "https://youtu.be/eSaSPSZdF9A/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 4,
        section: 1,
        transcript:
          [
            'In diesem Video sprechen wir über DOT, die native Kryptowährung von Polkadot.',
            'DOT ist eine digitale Währung, die auf der Polkadot-Blockchain existiert. Sie wurde erstmalig im Jahr 2020 eingeführt und ist seitdem zu einer der bekanntesten Kryptowährungen der Welt geworden.',
            'DOT dient drei verschiedenen Zwecken auf Polkadot: Staking, Governance und Bonding.',
            'Beim sogenannten “Staking” von DOT erhältst du DOT coins im Austausch für die Sicherung des Netzwerks. Diese Coins stammen aus den Anreizen, die Polkadot-Validatoren erhalten, wenn sie einen Block im Netzwerk produzieren. Das klingt jetzt etwas kompliziert. Näheres dazu besprechen wir in einem der nachfolgenden Videos. Im Wesentlichen heißt das, wenn du DOT coins besitzt, kannst du diese sozusagen im Netzwerk abschließen, die Polkadot-Blockchain dadurch sicherer machen und erhälst dafür mehr DOT als Belohnung.',
            'Governance beschreibt die Steuerung des Netzwerks, also die Mitbestimmung was mit Polkadot passiert. DOT-Inhaber haben die vollständige Kontrolle über das Protokoll. Alle Privilegien, die auf anderen Blockchains ausschließlich den Minern oder Validatoren vorbehalten sind, werden hier stattdessen allen DOT-Inhabern gewährt. Das bedeutet wenn du DOT hältst kannst du über Entscheidungen mitbestimmen, die Einfluss auf Polkadot haben. Das können auch Ereignisse sein wie Protokoll-Upgrades und -Korrekturen oder wie finanzielle Mittel der Treasury benutzt werden. Dazu mehr später.',
            'Wenn neue Blockchains oder “Parachains” Teil des Polkadot Ökosystems werden wollen, müssen sie DOT für den Zeitraum dieser Anbindung im Netzwerk abschließen oder “bonden”. Wenn du DOT hältst kannst du deine Coins dafür verwenden und zu diesem Bond beitragen, um ein Projekt dabei zu unterstützen eine Parachain zu werden. Dafür erhältst du wiederum Belohnungen, wie z. B.  Coins der Parachain, die du da unterstützt hast. ',
            'DOT kann auf verschiedenen Kryptowährungsbörsen gekauft und gehandelt werden. Wenn Du daran interessiert bist, in DOT zu investieren, solltest Du dich aber zuerst über die Risiken und Chancen informieren. Wir bei TeachMeDeFi geben keine Finanzberatung, aber zeigen dir später in den Quests einige Optionen wie du DOT erhalten und auch nutzen kannst. '
          ],
      },
      {
        id: "dot-5",
        title: 'Nominatoren, Validatoren und Kollatoren',
        slug: 'nominatoren-validatoren-kollatoren',
        youtubeUrl: 'https://youtu.be/KBpxDliWqBM',
        youtubeThumbnail: "https://youtu.be/KBpxDliWqBM/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 5,
        section: 1,
        transcript:
          [
            'In diesem Video sprechen wir über einige Schlüsselakteure im Polkadot-Ökosystem, nämlich über Nominatoren, Validatoren und Kollatoren.',
            'Validatoren sind Gruppen von Knotenpunkten, die mit der Validierung von Transaktionen auf der Polkadot Blockchain beauftragt sind. Validatoren müssen einen Teil ihrer DOT als Sicherheitsleistung hinterlegen bzw. “staken”, um sicherzustellen, dass sie ihre Aufgaben ordnungsgemäß erfüllen. Validatoren erhalten Belohnungen in DOT, wenn sie Transaktionen erfolgreich validieren und neue Blocks in der Block-Kette, also der “Blockchain” kreieren. Ganz grob gesagt, kann man Validatoren mit den Minern bei Bitcoin vergleichen. Es gibt da einige entscheidende Unterschiede, aber dazu später mehr.',
            'Es gibt grundsätzlich technische und finanzielle Hürden um selbst ein Validator zu werden. Wie ist es also möglich das Netzwerk mehr zu dezentralisieren und Usern die Möglichkeit zu geben ihre DOT ebenfalls zu staken und Belohnungen zu erhalten? Hier kommen Nominatoren ins Spiel.',
            'Nominatoren sind Personen, die DOT besitzen und ihre DOTs an Validatoren delegieren, um bei der Sicherung und Validierung von Transaktionen auf Polkadot zu helfen. Nominatoren können Belohnungen verdienen, wenn sie erfolgreich Validatoren auswählen, die gute Arbeit leisten. ',
            'Kollatoren sind auch Gruppen von Knotenpunkten, die bei der Verarbeitung von Transaktionen auf Polkadot helfen. Kollatoren sammeln Transaktionen von den Parachains und erstellen Blöcke, die dann von Validatoren validiert werden. Kollatoren können auch Belohnungen verdienen, wenn sie ihre Aufgaben erfolgreich erfüllen.',
            'Zusammen sorgen Validatoren, Nominatoren und Kollatoren für die Sicherheit und Integrität  Polkadots. Das klingt alles ein wenig komplex. Als durchschnittlicher User ist für dich nur unmittelbar relevant, dass du als Nominator DOT staken kannst, damit zur Sicherung des Netzwerks beiträgst und dafür Belohnungen in DOT erhalten kannst. Wie das funktioniert zeigen wir dir später in den Quests!'
          ],
      },
      {
        id: "dot-6",
        title: 'Polkadot Adressen und Transaktionen',
        slug: 'polka-addressen-transaktionen',
        youtubeUrl: 'https://youtu.be/if61AYJjgiA',
        youtubeThumbnail: "https://youtu.be/if61AYJjgiA/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 6,
        section: 1,
        transcript:
          [
            'In diesem Video sprechen wir über Polkadot-Adressen und Transaktionen.',
            'Polkadot-Adressen sind ähnlich wie Bitcoin- oder Ethereum-Addressen, da sie verwendet werden um unter anderem Transaktionen zwischen verschiedenen Benutzern auf der Blockchain zu ermöglichen. Polkadot-Adressen bestehen aus einer Reihe von Buchstaben und Zahlen und werden verwendet, um DOT oder andere Vermögenswerte auf der Blockchain zu senden und zu empfangen.',
            'Wenn du eine Transaktion auf Polkadot durchführen möchtest, wie z. B. deine DOT oder andere Vermögenswerte an eine andere Polkadot-Adresse zu senden, dann tust du das über eine sogenannte Wallet, die quasi als deine digitale Brieftasche fungiert. ',
            'Bei der Einrichtung einer Wallet erhältst du einerseits eine publike Addresse und andererseits einen privaten Schlüssel.',
            'Die publike Addresse kannst du so wie deine Kontonummer verstehen. Du kannst sie also anderen Leuten mitteilen, um z. B. DOT zugeschickt zu bekommen. Diese Adresse wird auch public address oder wallet address genannt.',
            'Der private Schlüssel andererseits ist dein persönlicher Schlüssel, der sicherstellt dass nur du auf dieses Konto Zugriff hast. Dieser private Schlüssel wird auch oft als private key oder seed phrase bezeichnet. Du darfst ihn niemandem mitteilen und musst ihn sicher hinterlegen. Falls du deine Wallet mal deinstallierst oder z. B. deinen Laptop verlierst, brauchst du deinen privaten Schlüssel, um wieder Zugriff auf deine Adresse herzustellen. Außerdem kann jeder andere, der deinen privaten Schlüssel kennt, ebenfalls auf deine Adresse und die Coins die du auf ihr hältst, zugreifen. Deswegen ist es wichtig Wallets sicher zu managen und eben deinen privaten Schlüssel sicher zu hinterlegen. ',
            'Wie das ganze genau funktioniert, gehen wir aber später in den Quests durch.'
          ],
      },
      {
        id: "dot-7",
        title: 'Polkadots Architektur',
        slug: 'polka-architektur',
        youtubeUrl: 'https://youtu.be/0DlttXMMDEQ',
        youtubeThumbnail: "https://youtu.be/0DlttXMMDEQ/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 7,
        section: 1,
        transcript:
          [
            'Die Relay-Chain ist das Herzstück des Netzwerks und ermöglicht den Datenaustausch zwischen den verschiedenen Parachains. Da jede Parachain eine eigene Blockchain ist, die speziell für eine bestimmte Anwendung entwickelt wurde, können sie Daten nicht direkt untereinander austauschen. Die Relay-Chain ermöglicht jedoch die Kommunikation zwischen diesen verschiedenen Blockchains, indem sie als Vermittler fungiert und den Datenaustausch erleichtert. Dies ist ein entscheidender Faktor für die Schaffung eines dezentralen Ökosystems, in dem verschiedene Anwendungen und Protokolle miteinander interagieren können',
            'Parachains sind Blockchains, die an die Relay Chain angeschlossen sind aber über ihre eigenen Token und Konsensmechanismen verfügen. ',
            'Moonbeam ist zum Beispiel eine Parachain, die ähnlich wie Ethereum funktioniert, aber an die Relay-Chain angeschlossen ist und so eine super erste Anlaufstelle für Entwickler und Nutzer von Ethereum-Applikationen ist. ',
            'Interlay ist eine Parachain die es möglich macht, dass du deine Bitcoin auf sichere Weise in das Polkadot Ökosystem transportierst und es im Decentralized Finance Bereich einsetzt. Du kannst z.B. deine Bitcoin verleihen und dafür eine Rendite erhalten.',
            'Centrifuge ist eine Parachain, die darauf fokussiert ist, dass man sich mit echten Vermögensgegenständen als Sicherheit dezentral finanzieren kann. Du könntest also einen kleinen Teil zu einem Kredit beitragen, der an ein Unternehmen vergeben wird. Dieses Unternehmen hinterlegt echte Vermögenswerte als Sicherheit um diesen Kredit zu erhalten wie z. B. ein Haus, eine Maschine oder Wertpapiere. Und du würdest einen Teil der Zinseinnahmen erhalten. ',
            'Diese Parachains und viele andere sind spezialisiert auf ihre eigenen Anwendungsfälle und können gleichzeitig aber auch miteinander kommunizieren.',
            'Parathreads sind ähnlich wie Parachains, aber sind nicht durchgehend angebunden an die Relay Chain, sondern zahlen nur bei Bedarf mit DOT für die Nutzung der Netzwerkinfrastruktur. '
          ],
      },
      {
        id: "dot-8",
        title: 'Substrate',
        slug: 'substrate',
        youtubeUrl: 'https://youtu.be/6NxHY8iZW7U',
        youtubeThumbnail: "https://youtu.be/6NxHY8iZW7U/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 8,
        isLastQuest: true,
        section: 1,
        transcript:
          [
            'Das Substrate Framework ist eine Open-Source-Softwarebibliothek, die von Parity Technologies entwickelt wurde. Es ist ein wichtiger Bestandteil von Polkadot und bietet eine umfassende Infrastruktur für die Erstellung von Blockchains. Im Vergleich zur Ethereum Virtual Machine (EVM) ist Substrate schneller, skalierbarer und bietet eine höhere Flexibilität.',
            'Substrate ermöglicht es Entwicklern, ihre eigenen Blockchains mit minimalem Aufwand zu erstellen und bereitzustellen. Es bietet eine breite Palette von Funktionen, einschließlich verschiedener Konsensmechanismen und Transaktionstypen. Die modulare Architektur von Substrate erlaubt es, eine Vielzahl von Funktionen auszuwählen und zu kombinieren, um  spezifische Anforderungen zu erfüllen.',
            'Darüber hinaus ist Substrate so konzipiert, dass es nahtlos mit Polkadot zusammenarbeitet, was es zur perfekten Wahl für den Aufbau von Parachains macht.',
            'Zusammenfassend ist das Substrate Framework ein leistungsstarkes Werkzeug für Blockchain-Entwickler. Es bietet eine effiziente Möglichkeit, maßgeschneiderte Blockchains zu erstellen, die problemlos mit dem Polkadot-Netzwerk verbunden werden können.'
          ],
      },
      {
        id: "dot-9",
        title: 'Governance in dezentralen Netzwerken',
        slug: 'governance',
        youtubeUrl: 'https://youtu.be/QGmTMPfwI_I',
        youtubeThumbnail: "https://youtu.be/QGmTMPfwI_I/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 8,
        isLastQuest: true,
        section: 1,
        transcript:
          [
            'Governance bezieht sich auf den Prozess der Entscheidungsfindung und der Verwaltung von Systemen und Organisationen. In Abwesenheit einer zentralen Autorität setzen dezentrale Netzwerke zunehmend innovative Governance-Strukturen ein, um die Langlebigkeit und den allgemeinen realen Nutzen dieser Netzwerke zu gewährleisten. Die Blockchain-Governance setzt in der Regel Mechanismen ein, um Entscheidungen über die Ausrichtung des Projekts, laufende Updates zu treffen und sicherzustellen, dass das zugrunde liegende Protokoll und das Ökosystem reibungslos und effizient funktionieren. Governance-Mechanismen sind entweder off-chain, was öffentliche Diskussionen, Vorschläge und gemeinsam vereinbarte Updates umfasst, oder on-chain, wo Stakeholder mit Kryptowährungen abstimmen, um Änderungen direkt an der Blockchain vorzunehmen.',
            'Governance ist für Blockchains wichtig, da diese dezentralisiert sind und es keinen zentralen Entscheidungsträger gibt. Genau wie eine Einigung zwischen den Knotenpunkten innerhalb eines dezentralen Blockchain-Netzwerks erforderlich ist, um die Daten weiterhin zu validieren und zu sichern, ist auch eine Einigung unter Netzwerken von Stakeholdern erforderlich, um die Gesetze und Prozesse der Blockchain zu ändern.',
            'Wer entscheidet also ob z. B. eine Änderung an der Blockchain durchgeführt werden soll? Wie werden z. B. Upgrades bei Bitcoin und Ethereum entschieden?',
            'Bitcoin und Ethereum basieren auf off-chain Governance Modellen. Auf Bitcoin und Ethereum werden Protokoll-Upgrades durch einen "Bitcoin Improvement Proposal" (BIP) bzw. "Ethereum Improvement Proposal" (EIP) vorgeschlagen. Diese Vorschläge werden von Entwicklern eingereicht und unterliegen einer Diskussion und Überprüfung durch die Gemeinschaft, bevor sie implementiert werden.',
            'Bei Ethereum muss z. B. ein Vorschlag vom Kernentwicklungsteam akzeptiert werden, bevor er zur Diskussion und Überprüfung an die Gemeinschaft weitergeleitet wird. Sobald der Vorschlag ausreichende Unterstützung erhalten hat, wird er durch eine "Hard Fork" implementiert, die im Wesentlichen eine neue Version der Ethereum-Blockchain erstellt, die mit der alten Version nicht kompatibel ist. Teilnehmer im Netzwerk, die sogenannten Validatoren, müssen ihre Software aktualisieren, um die neue Version verwenden zu können.',
            'Sowohl Bitcoin als auch Ethereum haben allerdings Herausforderungen bei der Koordination und Implementierung von Protokoll-Upgrades erlebt, wobei einige Vorschläge Kontroversen auslösten und zu Spaltungen in der Gemeinschaft führten. ',
            'Wenn nämlich nicht alle Miner bzw. Validatoren den Hard Fork akzeptieren, führt das dazu, dass eine Kryptowährung in zwei separate Versionen aufgeteilt wird, die nicht mehr miteinander kompatibel sind. Es entsteht eine neue Blockchain, die die Regeländerungen enthält, während die alte Blockchain mit den alten Regeln bestehen bleibt. ',
            'Hard Forks können problematisch sein, da sie zur Fragmentierung der Community führen und die Sicherheit der Kryptowährung gefährden können. Wenn sich die Community in zwei oder mehrere Gruppen aufspaltet, kann dies zu einer Schwächung des Netzwerks führen, da die Ressourcen aufgeteilt werden. Außerdem kann es dazu führen, dass eine Währung an Wert verliert, da Investoren und Benutzer verunsichert sind, welche Version sie verwenden sollen.',
            'Das On-Chain Governance-System von Polkadot soll einige dieser Herausforderungen angehen, indem es der gesamten Community ermöglicht, demokratisch über Vorschläge abzustimmen und effizienter Konsens zu erzielen. Dazu mehr im nächsten Video.'
          ],
      },
      {
        id: "dot-10",
        title: 'Polkadots On-Chain Governance',
        slug: 'on-chain-governance',
        youtubeUrl: 'https://youtu.be/BIJmh5ieNXQ',
        youtubeThumbnail: "https://youtu.be/BIJmh5ieNXQ/hqdefault.jpg",
        // importantLinks: [],
        questNumber: 8,
        isLastQuest: true,
        section: 1,
        transcript:
          [
            'Polkadots On-Chain Governance-Modell basiert auf einem Referendumssystem, bei dem Netzwerkupgrades und Änderungen in der Protokollspezifikation von den DOT-Inhabern abgestimmt werden. Dieses System stellt sicher, dass wichtige Entscheidungen von der Community selbst getroffen werden und dass keine zentralisierte Autorität das Netzwerk kontrolliert. In diesem Modell sind Upgrades möglich ohne Hard Forks, die zeitaufwendig und komplex sind und die Community spalten.',
            'Man votet bei Polkadot auf der Chain, so wie man auch Transaktionen macht, transparent für oder gegen ein Referendum und wenn es eine Mehrheit erreicht, wird es automatisch ausgeführt. ',
            'Das Governance-Modell von Polkadot ermöglicht es der Community, schnell und effektiv Entscheidungen zu treffen, die das Netzwerk betreffen, wie z.B. Software-Upgrades, das Hinzufügen von neuen Parachains, das Ändern von Netzwerkparametern und das Ändern von Netzwerkrichtlinien.',
            'Jeder DOT-Inhaber kann auch selber Proposals bzw. Vorschläge einreichen. Derzeit gibt es noch ein sogenanntes Council, das aus 13 Personen besteht, welche von DOT-Inhabern gewählt werden. Das Council hat dabei gewisse, definierte Verantwortlichkeiten und Entscheidungsbefugnisse. Polkadot ist derzeit aber dabei das Governance-System zu aktualisieren und dezentraler zu machen, wobei unter anderem auch das Council aufgelöst wird, da es ein Zentralisierungsrisiko darstellen kann.',
            'Zusammenfassend lässt sich sagen, dass das On-Chain Governance Modell von Polkadot das wahrscheinlich ambitionierteste und innovativste Governance Experiment im gesamten Kryptomarkt ist. Wir betreten hier völliges Neuland was die dezentrale Entscheidungsfindung und Verwaltung von Systemen und Organisationen angeht. Die Erkenntnisse, die auf dieser Reise gesammelt werden, können durchaus allgemein weitreichende Implikationen für Governance-Modelle der Zukunft haben. Wie Du hier den ersten Schritt machst, votest und Teil dieser Reise wirst, lernst du später in unseren Quests!'
          ],
      },
    ]
  }

]
