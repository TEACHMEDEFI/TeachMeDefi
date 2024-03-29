import { generalLessons, Lesson } from "./generalLessons";
import { ethTheory } from "./eth/ethTheory";
import { ethQuests } from "./eth";
import { questSicherheit } from "./eth/quest-sicherheit";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails

/**
 *  ____________________ ETHEREUM LESSONS ___________________________
 */
const spreadEthQuestsArray = ethQuests.reduce((lessonsArray: Lesson[], quest) => [...lessonsArray, ...quest.lessons], []);


export const ethLessons: Lesson[] = [
  ...generalLessons[0].lessons,
  ...ethTheory[0].lessons,
  ...spreadEthQuestsArray,
  ...questSicherheit
]