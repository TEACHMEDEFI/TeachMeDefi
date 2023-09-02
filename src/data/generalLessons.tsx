
export type Lesson = {
  id: string;
  title: string;
  slug: string;
  youtubeUrl: string;
  youtubeThumbnail: string;
  importantLinks?: Links[];
  section?: number; // 0 = Allgemein, 1 = Theory, alles ab 2 = Praktisch
  popupHasInput?: boolean;
  nftCanBeClaimed?: boolean;
  questNumber?: number;
  transcript?: string[] | Transcript[]; // JSX ON getStaticProps doesnt work !
  isLastQuest?: boolean;
  videoTime: string;
}

export type Transcript = {
  title?: string;
  subline?: string;
  text?: string;
  links?: Links[]
}

export type Links = {
  linkText: string,
  href: string
}

export type Quests = {
  questTitle: string;
  lessons: Lesson[];
  questSectionId: string
}

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails

/**
 *  ____________________ GENERAL LESSONS ___________________________
 */
export const generalLessons: Quests[] = [
  {
    questTitle: "Was ist eine Blockchain",
    questSectionId: 'general-1',
    lessons: [
      // {
      //   id: "general-1",
      //   title: 'Die TeachMeDeFi Onboarding-Quests',
      //   slug: 'tdm-onboarding-quests',
      //   youtubeUrl: 'https://www.youtube.com/watch?v=oc2jLjw6904',
      //   youtubeThumbnail: "https://img.youtube.com/vi/oc2jLjw6904/hqdefault.jpg",
      //   // importantLinks: [],
      //   section: 0,
      //   nftCanBeClaimed: true,
      //   videoTime: '02:26',
      //   questNumber: 1,
      //   transcript:
      //     [
      //       "Cool, dass du dich entschieden hast, mit uns in die Krypto-Welt einzutauchen! Auf geht's!",
      //       "Unser Onboarding besteht aus zwei Teilen:",
      //       "1.  Im ersten Teil erwarten dich einige Videos, die dir Blockchain-Technologie und die verschiedenen Blockchain-Ökosysteme näherbringen – ganz theoretisch.",
      //       "2.  Im zweiten Teil geht's dann ans Eingemachte: Mit unseren Videotutorials löst du Quests, die dir praktisch zeigen, wie du in der Krypto-Welt durchstarten kannst. Nach jeder erfolgreich gemeisterten Quest schaltest du die nächste frei.",
      //       "Unsere Onboarding Quests sind so gestaltet, dass du dein Krypto- und DeFi-Wissen Schritt für Schritt ausbauen kannst. Du siehst immer, wie weit du schon gekommen bist, und wenn du Quests abschließt, gibt's auch Belohnungen – zum Beispiel in Form von NFTs.",
      //       "Nach und nach präsentieren wir dir ausgewählte Quests aus den Ethereum-, Polkadot- und Bitcoin-Onboarding-Programmen. Wir ermutigen dich, die Onboarding Quests durchzuarbeiten, um dein Wissen über DeFi und Kryptowährungen aufzubauen.",
      //       "Uns geht's dabei vor allem darum, dir praktisches Know-how zu vermitteln, das du wirklich anwenden kannst! Was ist eine Wallet? Wie richtest du eine ein? Wie besorgst du dir Kryptos? Wie bewahrst du sie sicher auf und was kannst du damit anstellen?",
      //       "Und wie immer der Hinweis: Bei Teach Me Defi gibt's keine Finanzberatung. Unser Ziel ist einfach, dir den Einstieg und die Nutzung der verschiedenen Tools in der Krypto-Welt leichter zu machen.",
      //       "Viel Erfolg und Spaß auf deiner abenteuerlichen Reise in die Welt der dezentralisierten Finanzen!",
      //     ],
    
      // },
      {
        id: "general-2",
        title: '1. Die Blockchaintechnologie - Der Ursprung',
        slug: 'blockchain-der-ursprung',
        youtubeUrl: 'https://www.youtube.com/watch?v=opVQuUnSDGw',
        youtubeThumbnail: "https://img.youtube.com/vi/opVQuUnSDGw/hqdefault.jpg",
        // importantLinks: [],
        section: 0,
        popupHasInput: true,
        nftCanBeClaimed: true,
        videoTime: '02:25',
        questNumber: 2,
        transcript:
          [
            "Um wirklich zu verstehen, was eine Blockchain ist und warum sie für dich wichtig ist, lass uns zunächst klären, wofür Banken eigentlich da sind.",
            "Banken haben die Aufgabe, dein Geld sicher aufzubewahren und dafür zu sorgen, dass Transaktionen zwischen dir und anderen Anlegern reibungslos ablaufen, ohne dass doppelte Transaktionen entstehen - also dass du denselben Euro oder Dollar zweimal ausgibst.",
            'Banken agieren also als zentrale Institution und vertrauenswürdige Buchhalter und Verwalter, die deine Einlagen "sicher aufbewahren" und Transaktionen zwischen verschiedenen Akteuren sauber dokumentieren sollen.',
            "Wir reden hier also von einem System, das alle Infos an einem zentralen Ort - dem Server der Bank - speichert und darauf vertraut, dass dieses System nicht gehackt oder manipuliert wird.",
            "Leider hat die Bankenkrise von 2008 das Vertrauen in traditionelle Finanzinstitutionen ziemlich erschüttert und gezeigt, dass sie ihrer Aufgabe, dein Geld sicher zu verwahren und Transaktionen korrekt abzuwickeln, nicht gerecht werden.",
            "Bitcoin und Blockchain-Technologie sind direkt aus diesem Misstrauen entstanden. Sie bieten dir eine dezentrale, transparente und fälschungssichere Alternative zu zentralisierten Banken. Die Blockchain verändert das Verhältnis zwischen dir und Finanzinstitutionen grundlegend, indem sie die zentrale Vertrauensinstanz wegnimmt.",
            "Die Blockchain-Technologie gibt dir, als Benutzer, immer mehr Kontrolle über deine finanziellen Entscheidungen und Transaktionen. Diese dezentrale Infrastruktur baut auf Transparenz, Sicherheit und Unveränderlichkeit und behebt so die Schwächen der zentralisierten Banken, während das Vertrauen ins Finanzsystem gestärkt wird.",
            "Dank der Dezentralisierung und Transparenz der Blockchain kannst du als Benutzer deine Transaktionen selbst managen, kontrollieren und sicherstellen, dass dein Geld nicht missbraucht oder schlecht verwaltet wird. Dies fördert eine stärkere Verantwortlichkeit und Selbstregulierung im Finanzsystem, was letztendlich dazu beiträgt, das Vertrauen in die Sicherheit und Integrität deiner finanziellen Infrastruktur wiederherzustellen.",
          ],
    
      },
      {
        id: "general-3",
        title: '2. Blockchain - Einfach erklärt',
        slug: 'blockchain-einfach-erklaert',
        youtubeUrl: 'https://www.youtube.com/watch?v=Sp2PFQRlj7w',
        youtubeThumbnail: "https://img.youtube.com/vi/Sp2PFQRlj7w/hqdefault.jpg",
        // importantLinks: [],
        section: 0,
        popupHasInput: true,
        nftCanBeClaimed: true,
        videoTime: '02:39',
        questNumber: 3,
        transcript: [
          'Eine Blockchain ist wie eine dezentrale Buchhaltung oder Datenbank, die auf einem Netzwerk von vielen Benutzern, sogenannten Nodes, basiert. Statt alle Transaktionen und Daten zentral bei Banken zu speichern, verteilt sich die Speicherung aller Informationen in einer Blockchain auf viele Teilnehmer, also Nodes. Jede Node besitzt eine Kopie aller Transaktionen, die auf einer Blockchain stattfinden, und sorgt so für ein transparentes und sicheres System.',
          'Wie der Name "Block & Chain" schon sagt, besteht eine Blockchain aus einer Kette von Informationsblöcken. Bei Bitcoin, Ethereum und anderen Kryptowährungen handelt es sich bei den gespeicherten Informationen um Transaktionen zwischen dir und anderen Nutzern.',
          'Jeder Block kann jedoch nur eine gewisse Menge an Daten speichern. Ist der Speicher des jeweiligen Blocks voll, wird er in chronologischer Reihenfolge in die Kette gesetzt. An diese Kette kann immer nur ein Block nach dem anderen hinzugefügt werden.',
          'Aber was macht eine Blockchain so sicher?',
          'Die Manipulationssicherheit der Blockchain entsteht dadurch, dass die einzelnen Blöcke per Hashs miteinander verkettet sind. Ein Hash ist eine kryptographische Verschlüsselung und dient dazu, beliebig große Datensätze in einer festen Länge anzugeben, also zu verschlüsseln. Die Hash-Funktion, die bei Bitcoin zum Einsatz kommt, ist der SHA-256.',
          'Doch wie werden nun die einzelnen Blöcke manipulationssicher miteinander verkettet?',
          'Das geschieht dadurch, dass der Hash eines jeden Blocks aus den im Block gespeicherten Transaktionen und aus dem Hash des vorherigen Blocks besteht. Dadurch lässt sich die Kette bis zum ersten Block zurückverfolgen.',
          'Das bedeutet, dass alle in der Vergangenheit getätigten Transaktionen einen Einfluss auf alle folgenden Hashs haben. Verändert jemand eine vergangene Transaktion zu seinen Gunsten, ändert das den Hash des jeweiligen Blocks und somit auch den Hash aller darauffolgenden Blöcke bis zum aktuellen Block. Das würde dir und allen Teilnehmern sofort auffallen und im Konsens zur Ablehnung des geänderten Blocks führen.',
          'Genau das ist es, was die Blockchain so sicher macht: Die Datenbank überprüft sich durch mathematische Verfahren selbst, und es ist kein zentraler Akteur wie eine Bank notwendig.',
        ],
    
      },
      {
        id: "general-4",
        title: '3. Dezentralisierung - Die Vorteile',
        slug: 'dezentralisierung-die-vorteile',
        youtubeUrl: 'https://www.youtube.com/watch?v=v9xNMZ-3xZk',
        youtubeThumbnail: "https://img.youtube.com/vi/v9xNMZ-3xZk/hqdefault.jpg",
        // importantLinks: [],
        section: 0,
        nftCanBeClaimed: true,
        videoTime: '01:44',
        questNumber: 4,
        transcript:
          [
            'Die Blockchain-Technologie bietet dir eine Vielzahl von Vorteilen, insbesondere aufgrund ihrer dezentralen Natur. Wenn du ein dezentrales Blockchain-System nutzt, kannst du auf denselben Stand der Informationen zugreifen wie alle anderen Benutzer, ohne dabei auf eine zentrale Autorität vertrauen zu müssen.',
            'Dank der dezentralen Natur der Blockchain profitierst du von erhöhter Sicherheit, da die Daten öffentlich und unveränderbar sind. Du hast die Möglichkeit, jede Transaktion in der Blockchain selbst zu überprüfen und zu verifizieren, wodurch das Risiko von Manipulationen und Betrug minimiert wird.',
            'Die Blockchain-Technologie ermöglicht dir ein höheres Maß an Transparenz als herkömmliche Systeme, da alle Transaktionen öffentlich und unveränderbar sind. Du kannst jede Transaktion in der Blockchain überprüfen und verifizieren, was zu mehr Vertrauen zwischen dir und anderen Benutzern führt.',
            'Durch die dezentrale Natur der Blockchain kannst du Kosten sparen, da Zwischenakteure nicht mehr nötig sind. Du interagierst direkt mit anderen Benutzern, ohne dass eine zentrale Stelle als Vermittler dazwischen geschaltet ist.',
            'Da keine zentrale Autorität vorhanden ist, können dezentrale Blockchain-Transaktionen schnell abgeschlossen werden, ohne dass eine Genehmigung von Dritten erforderlich ist.',
            'Vor allem profitierst du von der Widerstandsfähigkeit einer Blockchain gegenüber Angriffen und Ausfällen, da die Daten auf mehrere Nodes verteilt sind. Selbst wenn ein Node ausfällt oder angegriffen wird, bleibt die Integrität der gesamten Blockchain unbeeinträchtigt.',
          ],
    
      },
      {
        id: "general-5",
        title: '4. Der Konsensmechanismus einer Blockchain',
        slug: 'konsensmechanismen-einer-blockchain',
        youtubeUrl: 'https://www.youtube.com/watch?v=bckodtNLxhw',
        youtubeThumbnail: "https://img.youtube.com/vi/bckodtNLxhw/hqdefault.jpg",
        // importantLinks: [],
        section: 0,
        nftCanBeClaimed: true,
        videoTime: '02:45',
        questNumber: 5,
        transcript: [
          'In diesem Video wollen wir uns den Konsensmechanismus, das Herzstück einer Blockchain, genauer ansehen. Der Konsensmechanismus stellt sicher, dass alle Teilnehmer im Netzwerk übereinstimmen und eine gemeinsame Wahrheit teilen, ohne auf eine zentrale Autorität angewiesen zu sein. Du wirst erfahren, wie Transaktionen in einem dezentralen Netzwerk verifiziert und abgeschlossen werden.',
          'Sogenannte Nodes im Netzwerk überprüfen jeden neuen Block, um sicherzustellen, dass er den Konsensregeln entspricht. Nodes sind Computer, die eine vollständige Kopie der Blockchain speichern und die Transaktionshistorie überprüfen. Sie tragen zur Dezentralisierung und Sicherheit des Netzwerks bei, indem sie Transaktionen validieren und weiterleiten. Dieser Prozess stellt sicher, dass alle Nodes im Netzwerk übereinstimmen und die Blockchain einheitlich und konsistent bleibt.',
          'Es gibt zwei Haupttypen von Konsensmechanismen: Proof of Work (PoW) und Proof of Stake (PoS). Bitcoin verwendet Proof of Work, während Ethereum von Proof of Work zu Proof of Stake gewechselt ist.',
          'In einem Proof of Work-Mechanismus konkurrieren Miner, um ein mathematisches Rätsel zu lösen, das für den aktuellen Block gestellt wurde. Sobald ein Miner das Rätsel löst, darf er seinen Block der Blockchain hinzufügen. Andere Nodes im System überprüfen die Richtigkeit des Blocks und aktualisieren ihre Kopie der Blockchain entsprechend. Dies stellt sicher, dass die Blockchain im Proof of Work-Mechanismus transparent, sicher und manipulationssicher bleibt.',
          'Im Proof of Stake-System gibt es keine Miner, sondern sogenannte Validatoren. Diese Validatoren setzen (oder "staken") einen Teil ihrer eigenen Kryptowährung, um am Konsensmechanismus teilzunehmen. Anstatt dass alle Validatoren um die Lösung eines mathematischen Rätsels konkurrieren, wird ein Validator zufällig ausgewählt, um den nächsten Block zu erstellen. Andere Validatoren im Netzwerk überprüfen die Richtigkeit des Blocks und aktualisieren ihre Kopie der Blockchain entsprechend. Der Proof of Stake-Mechanismus ist energieeffizienter als der Proof of Work, da er keine rechenintensiven Prozesse erfordert.',
          'Insgesamt sorgt der Konsensmechanismus dafür, dass alle Teilnehmer im Blockchain-Netzwerk zusammenarbeiten, um Transaktionen zu validieren und eine gemeinsame Wahrheit zu schaffen. PoW und PoS sind zwei unterschiedliche Ansätze, um diesen Konsens zu erreichen, wobei PoS als energieeffizientere Alternative zu PoW betrachtet wird.',
        ],
    
      },
      {
        id: "general-6",
        title: '5. Wallets - dein Zugang zur Blockchain',
        slug: 'wallets-zugang-zur-blockchain',
        youtubeUrl: 'https://www.youtube.com/watch?v=nrAf41GyCyM',
        youtubeThumbnail: "https://img.youtube.com/vi/nrAf41GyCyM/hqdefault.jpg",
        // importantLinks: [],
        section: 0,
        isLastQuest: true,
        questNumber: 6,
        videoTime: '02:20',
        transcript: [
          'In diesem Video zeigen wir dir, wie du als Nutzer Transaktionen auf der Blockchain einleiten kannst. Dabei spielt das Kryptowährungs-Wallet eine entscheidende Rolle.',
          'Ein Kryptowährungs-Wallet ist deine digitale Geldbörse, mit der du Kryptowährungen verwalten, speichern, senden und empfangen kannst. Wallets bieten dir Zugang zur Blockchain und ermöglichen es dir, Transaktionen mit Kryptowährungen durchzuführen. Dabei gibt es verschiedene Formen von Wallets, wie Software-Wallets, Hardware-Wallets oder sogar als Papier-Wallets.',
          'Dein Wallet besteht aus einem privaten und einem öffentlichen Schlüssel, auch bekannt als private und public Key. Der private Schlüssel ist ein geheimer Code, den du unbedingt geheim halten musst, während der öffentliche Schlüssel dazu dient, die Empfangsadresse für Kryptowährungen zu erstellen, die du an andere Benutzer weitergeben kannst.',
          'Aber wie genau läuft der Transaktionsprozess in einer Blockchain mit deinem Wallet ab? Hier sind die Schritte:',
          '1.  Du erstellst eine Transaktion, um Kryptowährung von deiner Adresse an eine andere Adresse zu senden.',
          '2.  Dein Wallet signiert diese Transaktion mit deinem private Key, um sicherzustellen, dass nur du die Transaktion autorisieren kannst.',
          '3.  Die signierte Transaktion wird an das Blockchain-Netzwerk gesendet und in der Warteschlange für die Aufnahme in einen neuen Block eingereiht.',
          '4.  Die Miner oder Validatoren überprüfen die Gültigkeit der Transaktion und nehmen sie in den nächsten Block auf, wenn sie alle Kriterien erfüllt. Sobald die Transaktion bestätigt ist, gilt sie als abgeschlossen.',
          '5.  Der Empfänger erhält die Kryptowährung in seinem Wallet und kann die Transaktionsdaten über seinen öffentlichen Schlüssel einsehen. Das Wallet des Empfängers aktualisiert das Guthaben automatisch.',
          'Wichtig ist, dass du deine private Keys sorgfältig schützen musst, da der Verlust oder Diebstahl dieser den Zugriff auf die Kryptowährung dauerhaft verhindert. Bewahre sie niemals digital auf, sondern notiere sie auf Papier und verwahre sie sicher. So stellst du sicher, dass niemand ungehindert auf deine Gelder zugreifen kann.',
        ],
    
      },
    ]
  }
]

