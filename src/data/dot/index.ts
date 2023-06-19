
import { Quests } from "../generalLessons";
import { quest1 } from "./quest-1";
import { quest2 } from "./quest-2";
import { quest3 } from "./quest-3";
import { quest4 } from "./quest-4";
import { quest5 } from "./quest-5";

export const dotQuests:Quests[] = [
  {
    questTitle: "Quest Title 1",
    questSectionId: "dot-quest-1",
    lessons: [...quest1]
  },
  {
    questTitle: "Quest Title 2",
    questSectionId: "dot-quest-2",
    lessons: [...quest2]
  },
  {
    questTitle: "Quest Title 3",
    questSectionId: "dot-quest-3",
    lessons: [...quest3]
  },
  {
    questTitle: "Quest Title 4",
    questSectionId: "dot-quest-4",
    lessons: [...quest4]
  },
  {
    questTitle: "Quest Title 5",
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