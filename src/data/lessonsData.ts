
export type Lesson = {
  id: number;
  title: string;
  slug: string;
  youtubeUrl: string;
  transcript: string;
  importantLinks?: string[];
}

/**
 *  ____________________ ETHEREUM LESSONS ___________________________
 */
export const ethLessons: Lesson[] = [
  {
    id: 1,
    title: 'What is Ethereum.',
    slug: 'what-is-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    transcript: 'This is the transcript for lesson 1.',
    importantLinks: ["www.google.com", "www.thisisLesson1.com"]
  },
  {
    id: 2,
    title: 'How to Ethereum.',
    slug: 'how-to-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    transcript: 'This is the transcript for lesson 2.',
    importantLinks: ["www.google.com", "www.thisisLesson2.com"]
  },
  {
    id: 3,
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"]
  },
]

/**
 *  ____________________ BITCOIN LESSONS ___________________________
 */
export const btcLessons: Lesson[] = [
  {
    id: 1,
    title: 'What is bitcoin.',
    slug: 'what-is-bitcoin',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    transcript: 'This is the transcript for lesson 1.',
    importantLinks: ["www.google.com", "www.thisisLesson1.com"]
  },
  {
    id: 2,
    title: 'How to bitcoin.',
    slug: 'how-to-bitcoin',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    transcript: 'This is the transcript for lesson 2.',
    importantLinks: ["www.google.com", "www.thisisLesson2.com"]
  },
  {
    id: 3,
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"]
  },
]

/**
 *  ____________________ POLKADOT LESSONS ___________________________
 */
export const dotLessons: Lesson[] = [
  {
    id: 1,
    title: 'What is polkadot.',
    slug: 'what-is-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    transcript: 'This is the transcript for lesson 1.',
    importantLinks: ["www.google.com", "www.thisisLesson1.com"]
  },
  {
    id: 2,
    title: 'How to polkadot.',
    slug: 'how-to-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    transcript: 'This is the transcript for lesson 2.',
    importantLinks: ["www.google.com", "www.thisisLesson2.com"]
  },
  {
    id: 3,
    title: 'How to use polkadot.',
    slug: 'how-to-use-polkadot',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    transcript: 'This is the transcript for lesson 3.',
    importantLinks: ["www.google.com", "www.thisisLesson3.com"]
  },
]