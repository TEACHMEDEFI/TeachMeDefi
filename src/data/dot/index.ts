
import { Quests } from "../generalLessons";
import { quest1 } from "./quest-1";
import { quest2 } from "./quest-2";
import { quest3 } from "./quest-3";
import { quest4 } from "./quest-4";
import { quest5 } from "./quest-5";
import { questSicherheit } from "../eth/quest-sicherheit";


export const sicherheitsQuestDot: Quests[] = [
  {
    questTitle: "Quest Sicherheit",
    questSectionId: "dot-quest-6",
    lessons: [questSicherheit[0], questSicherheit[2]]
  },
]

export const dotQuests:Quests[] = [
  {
    questTitle: "Quest 1: Wallet Einrichten",
    questSectionId: "dot-quest-1",
    lessons: [...quest1]
  },
  {
    questTitle: "Quest 2: DOT kaufen & senden",
    questSectionId: "dot-quest-2",
    lessons: [...quest2]
  },
  {
    questTitle: "Quest 3: Staking",
    questSectionId: "dot-quest-3",
    lessons: [...quest3]
  },
  {
    questTitle: "Quest 4: Kryptowährungen “bridgen”",
    questSectionId: "dot-quest-4",
    lessons: [...quest4]
  },
  {
    questTitle: "Quest 5: Dezentrale Handelsbörsen (DEX) nutzen",
    questSectionId: "dot-quest-5",
    lessons: [...quest5]
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