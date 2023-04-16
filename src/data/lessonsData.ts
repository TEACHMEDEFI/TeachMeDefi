
export type Lesson = {
  id: string;
  title: string;
  slug: string;
  youtubeUrl: string;
  youtubeThumbnail: string;
  transcript: string;
  importantLinks?: string[];
  section: number; // 0 = Allgemein, 1 = Theory, 2 = Praktisch
}

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails

/**
 *  ____________________ GENERAL LESSONS ___________________________
 */
export const generalLessons: Lesson[] = [
  {
    id:"b3bd96f0-d28a-4f6d-9a20-c4284e76a92e",
    title: 'Blockchaintechnologie - Der Ursprung.',
    slug: 'der-ursprung',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 1.',
    importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 0
  },
  {
    id:"a3a76f3d-2a51-43f6-84d3-8f3d2c61c1ab",
    title: 'How to Ethereum.',
    slug: 'how-to-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 2.',
    importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 0
  },
  {
    id:"7b9f8b4d-4e4e-4f7b-86dc-2670b1f20b71",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 0
  },
]

/**
 *  ____________________ ETHEREUM LESSONS ___________________________
 */
export const ethLessons: Lesson[] = [
  ...generalLessons,
  {
    id:"a2c9d8f1-20b7-4b14-a4fb-d47f4d8a1467",
    title: 'What is Ethereum.',
    slug: 'what-is-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 1.',
    importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 1
  },
  {
    id:"1c728798-3297-4d8f-98c3-3a3a68e33d27",
    title: 'How to Ethereum.',
    slug: 'how-to-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 2.',
    importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 1
  },
  {
    id:"fdb7a5f5-d5f7-4e5c-9d22-fc328f6b659e",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1
  },
  {
    id:"d1af7b2d-245c-4c67-b97e-86ddc905f96a",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1
  },
  {
    id:"c9f0a85d-35c5-475a-89d7-99ea0b1faa57",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 2
  },
  {
    id:"2b2e6ee9-2d8c-46c3-b68d-6b5c6f68e6c5",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 2
  },
]

/**
 *  ____________________ BITCOIN LESSONS ___________________________
 */
export const btcLessons: Lesson[] = [
  ...generalLessons,
  {
    id:"5a5f4649-2a8d-46e3-80ef-c6d5f01e8ea6",
    title: 'What is bitcoin.',
    slug: 'what-is-bitcoin',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 1.',
    importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 1
  },
  {
    id:"358c5de5-d92f-49aa-8b46-32c6a5a6c21e",
    title: 'How to bitcoin.',
    slug: 'how-to-bitcoin',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 2.',
    importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 1
  },
  {
    id:"e8a1feda-2df2-45a9-a179-8f2271b7fc2e",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1
  },
]

/**
 *  ____________________ POLKADOT LESSONS ___________________________
 */
export const dotLessons: Lesson[] = [
  ...generalLessons,
  {
    id:"9c1c7b61-0761-4447-8c12-44e24689c66b",
    title: 'What is polkadot.',
    slug: 'what-is-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 1.',
    importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 1
  },
  {
    id:"8736b787-3e08-45a3-b6d2-6a91a6bbf0cf",
    title: 'How to polkadot.',
    slug: 'how-to-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 2.',
    importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 1
  },
  {
    id:"ed5c5bb1-5da5-48f5-a5a5-086d5e0a0e62",
    title: 'How to use polkadot.',
    slug: 'how-to-use-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1
  },
]