
import { quest1 } from "./quest-1";
import { quest2 } from "./quest-2";
import { quest3 } from "./quest-3";
import { quest4 } from "./quest-4";
import { quest5 } from "./quest-5";
import { quest6 } from "./quest-6";
import { questSicherheit } from "./quest-sicherheit";
import { Lesson } from "../generalLessons";

export type Quests = {
  questTitle: string;
  quests: Lesson[];
}

export const ethQuestsTEST = [
  { 
    questTitle: "Quest Title 1",
    quests: [...quest1] 
  },
  { 
    questTitle: "Quest Title 2",
    quests: [...quest2] 
  },
  { 
    questTitle: "Quest Title 3",
    quests: [...quest3] 
  },
  { 
    questTitle: "Quest Title 4",
    quests: [...quest4] 
  },
  { 
    questTitle: "Quest Title 5",
    quests: [...quest5] 
  },
  { 
    questTitle: "Quest Title 6",
    quests: [...quest6] 
  },
  {
    questTitle: "Quest Sicherheit",
    quests: [...questSicherheit]
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