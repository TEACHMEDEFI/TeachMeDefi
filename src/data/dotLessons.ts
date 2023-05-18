
import { generalLessons, Lesson } from "./generalLessons";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails


/**
 *  ____________________ POLKADOT LESSONS ___________________________
 */
export const dotLessons: Lesson[] = [
  ...generalLessons,
  {
    id: "9c1c7b61-0761-4447-8c12-44e24689c66b",
    title: 'What is polkadot.',
    slug: 'what-is-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 1,
    lessonId: 'dot-1',
    transcript: ['This is the transcript for lesson 1.'],
  },
  {
    id: "8736b787-3e08-45a3-b6d2-6a91a6bbf0cf",
    title: 'How to polkadot.',
    slug: 'how-to-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 1,
    lessonId: 'dot-2',
    transcript: ['This is the transcript for lesson 2.'],
  },
  {
    id: "ed5c5bb1-5da5-48f5-a5a5-086d5e0a0e62",
    title: 'How to use polkadot.',
    slug: 'how-to-use-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1,
    lessonId: 'dot-3',
    transcript: ['This is the transcript for lesson 3.'],
  },
]