
import { generalLessons, Lesson } from "./generalLessons";
import { dotQuests } from "./dot/index";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails


/**
 *  ____________________ POLKADOT LESSONS ___________________________
 */
export const dotLessons: Lesson[] = [
  ...generalLessons,
  {
    id: "dot-1",
    title: 'What is polkadot.',
    slug: 'what-is-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    // importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 1.'],
  },
  {
    id: "dot-2",
    title: 'How to polkadot.',
    slug: 'how-to-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    // importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 2.'],
  },
  {
    id: "dot-3",
    title: 'How to use polkadot.',
    slug: 'how-to-use-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    // importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 3.'],
  },
  ...dotQuests
]