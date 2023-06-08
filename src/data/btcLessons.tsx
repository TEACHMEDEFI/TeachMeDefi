
import { generalLessons, Lesson } from "./generalLessons";

// https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg   <--- Youtubes URL build for thumnails


const onFormToggle = (e) => {
  const forms = document.querySelectorAll('.js-formToggle');
  const hiddenClass = 'd-none';

  forms.forEach((form) => {
    if (!form.classList.contains(hiddenClass)) {
      form.classList.add(hiddenClass);
    }
  });

  e.target.classList.remove(hiddenClass);
}


/**
 *  ____________________ BITCOIN LESSONS ___________________________
 */
export const btcLessons: Lesson[] = [
  ...generalLessons,
  {
    id: "btc-1",
    title: 'What is bitcoin.',
    slug: 'what-is-bitcoin',
    youtubeUrl: 'https://www.youtube.com/watch?v=GrZi2pHnoQg',
    youtubeThumbnail: "https://img.youtube.com/vi/GrZi2pHnoQg/hqdefault.jpg",
    // importantLinks: ["www.google.com", "www.thisisLesson1.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 1.'],
  },
  {
    id: "btc-2",
    title: 'How to bitcoin.',
    slug: 'how-to-bitcoin',
    youtubeUrl: 'https://www.youtube.com/watch?v=N-ZicxKesDE',
    youtubeThumbnail: "https://img.youtube.com/vi/N-ZicxKesDE/hqdefault.jpg",
    // importantLinks: ["www.google.com", "www.thisisLesson2.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 2.'],
  },
  {
    id: "btc-3",
    title: 'How to use MetaMask.',
    slug: 'how-to-use-MetaMask',
    youtubeUrl: 'https://www.youtube.com/watch?v=XLG-qtZwxIw',
    youtubeThumbnail: "https://img.youtube.com/vi/XLG-qtZwxIw/hqdefault.jpg",
    // importantLinks: ["www.google.com", "www.thisisLesson3.com"],
    section: 1,
    transcript: ['This is the transcript for lesson 3.'],
  },
]
