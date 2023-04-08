
export type Lesson = {
  id: number;
  title: string;
  slug: string;
  youtubeUrl: string;
  transcript: string;
}

export const ethLessons: Lesson[] = [
  {
    id: 1,
    title: 'What is Ethereum.',
    slug: 'what-is-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    transcript: 'This is the transcript for lesson 1.',
  },
  {
    id: 2,
    title: 'How to Ethereum.',
    slug: 'how-to-ethereum',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    transcript: 'This is the transcript for lesson 2.',
  },
  {
    id: 3,
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    transcript: 'This is the transcript for lesson 3.',
  },
]