
import { generalLessons, Lesson } from "./generalLessons";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails

/**
 *  ____________________ ETHEREUM LESSONS ___________________________
 */
export const ethLessons: Lesson[] = [
  ...generalLessons,
  {
    id: "a2c9d8f1-20b7-4b14-a4fb-d47f4d8a1467",
    title: 'What is Ethereum.',
    slug: 'what-is-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 1.'],
  },
  {
    id: "1c728798-3297-4d8f-98c3-3a3a68e33d27",
    title: 'How to Ethereum.',
    slug: 'how-to-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 2.'],
  },
  {
    id: "fdb7a5f5-d5f7-4e5c-9d22-fc328f6b659e",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 3.'],
  },
]