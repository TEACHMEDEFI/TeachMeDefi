
import { generalLessons, Lesson } from "./generalLessons";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails


/**
 *  ____________________ BITCOIN LESSONS ___________________________
 */
export const btcLessons: Lesson[] = [
  ...generalLessons,
  {
    id: "5a5f4649-2a8d-46e3-80ef-c6d5f01e8ea6",
    title: 'What is bitcoin.',
    slug: 'what-is-bitcoin',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 1.'],
  },
  {
    id: "358c5de5-d92f-49aa-8b46-32c6a5a6c21e",
    title: 'How to bitcoin.',
    slug: 'how-to-bitcoin',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 2.'],
  },
  {
    id: "e8a1feda-2df2-45a9-a179-8f2271b7fc2e",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 3.'],
  },
]