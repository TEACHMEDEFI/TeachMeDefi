
import { Quests } from "../generalLessons";
import { quest1 } from "./quest-1";
import { quest2 } from "./quest-2";
import { quest3 } from "./quest-3";
import { quest4 } from "./quest-4";

// import { questSicherheit } from "./quest-sicherheit";

// export const sicherheitsQuest: Quests[] = [
//   {
//     questTitle: "Quest Sicherheit",
//     questSectionId: "eth-quest-7",
//     lessons: [...questSicherheit]
//   },
// ]

export const btcQuests: Quests[] = [
  {
    questTitle: "Quest 1: Selbstverwahrung: Sicher in Kryptos einsteigen! ",
    questSectionId: "btc-quest-1",
    lessons: [...quest1]
  },
  {
    questTitle: "Quest 2: Bitcoin richtig kaufen (Ledger, Software-Wallet und CEX)",
    questSectionId: "btc-quest-2",
    lessons: [...quest2]
  },
  {
    questTitle: "Quest 3: Bitcoin Wallets und Aufbewahrung ",
    questSectionId: "btc-quest-3",
    lessons: [...quest3]
  },
  {
    questTitle: "Quest 4: Bitcoin-Transaktionen: Versenden, Verfolgen und UTXOs Verstehen",
    questSectionId: "btc-quest-4",
    lessons: [...quest4]
  },
]


const skelet = {
  id: "",
  title: '',
  slug: '',
  youtubeUrl: '',
  youtubeThumbnail: "https://img.youtube.com/vi/lfd6o6NO4KM/hqdefault.jpg",
  importantLinks: [
    {
      linkText: "",
      href: ""
    },

  ],
  section: 2,
  questNumber: 1,
  videoTime: "",
  transcript: [
    {
      title: "Anleitung zum Video",
      text: ''
    },
    {
      subline: '',
      text: '',
      links: [
        {
          linkText: "",
          href: ""
        },
      ]
    },
  ]
}