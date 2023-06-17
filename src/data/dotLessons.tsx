
import { generalLessons, Lesson } from "./generalLessons";
import { dotQuests } from "./dot/index";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails


/**
 *  ____________________ POLKADOT LESSONS ___________________________
 */
const spreadDotQuestsArray = dotQuests.reduce((lessonsArray: Lesson[], quest) => [...lessonsArray, ...quest.lessons], []);
export const dotLessons: Lesson[] = [
  ...generalLessons[0].lessons,
  
  ...spreadDotQuestsArray
]