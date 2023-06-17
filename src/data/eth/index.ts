
import { Quests } from "../generalLessons";
import { quest1 } from "./quest-1";
import { quest2 } from "./quest-2";
import { quest3 } from "./quest-3";
import { quest4 } from "./quest-4";
import { quest5 } from "./quest-5";
import { quest6 } from "./quest-6";
import { questSicherheit } from "./quest-sicherheit";


export const ethQuests: Quests[] = [
  {
    questTitle: "Quest Title 1",
    lessons: [...quest1]
  },
  {
    questTitle: "Quest Title 2",
    lessons: [...quest2]
  },
  {
    questTitle: "Quest Title 3",
    lessons: [...quest3]
  },
  {
    questTitle: "Quest Title 4",
    lessons: [...quest4]
  },
  {
    questTitle: "Quest Title 5",
    lessons: [...quest5]
  },
  {
    questTitle: "Quest Title 6",
    lessons: [...quest6]
  },
  {
    questTitle: "Quest Sicherheit",
    lessons: [...questSicherheit]
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