import { generalLessons, Lesson } from "./generalLessons";
import { ethTheory } from "./eth/ethTheory";
import { ethQuests } from "./eth";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails

/**
 *  ____________________ ETHEREUM LESSONS ___________________________
 */
export const ethLessons: Lesson[] = [
  ...generalLessons,
  ...ethTheory,
  ...ethQuests,
]