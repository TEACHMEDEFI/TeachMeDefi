
import { Quests } from "../generalLessons";
import { quest1 } from "./quest-1";
import { quest2 } from "./quest-2";
import { quest3 } from "./quest-3";
import { quest4 } from "./quest-4";
import { quest5 } from "./quest-5";
import { quest6 } from "./quest-6";
import { questSicherheit } from "./quest-sicherheit";

export const sicherheitsQuest: Quests[] = [
  {
    questTitle: "Quest Sicherheit",
    questSectionId: "eth-quest-7",
    lessons: [...questSicherheit]
  },
]


export const ethQuests: Quests[] = [
  {
    questTitle: "Quest 1: Wallet einrichten & nutzen ",
    questSectionId: "eth-quest-1",
    lessons: [...quest1]
  },
  {
    questTitle: "Quest 2: Eth kaufen & senden",
    questSectionId: "eth-quest-2",
    lessons: [...quest2]
  },
  {
    questTitle: "Quest 3: Krypto dezentral tauschen  ",
    questSectionId: "eth-quest-3",
    lessons: [...quest3]
  },
  {
    questTitle: "Quest 4: Layer 2 nutzen",
    questSectionId: "eth-quest-4",
    lessons: [...quest4]
  },
  {
    questTitle: "Quest 5: Yield Farming",
    questSectionId: "eth-quest-5",
    lessons: [...quest5]
  },
  {
    questTitle: "Quest 6: Dezentrale Autonome Organisationen",
    questSectionId: "eth-quest-6",
    lessons: [...quest6]
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