
import { ethLessons, Lesson } from "@/data/ethLessons";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactPlayer from "react-player";


type Params = {
  lesson: string
}

export default function LessonPage({ lesson }: { lesson: Lesson }) {
  // console.log(lesson)
  return (
    <main className='w-full flex flex-col  items-center ' >
      <section className='w-full' >
        <div className='w-full relative' >
          {/* <div className='aspect-video ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 150px)" }} ></div> */}
          <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
            <ReactPlayer url={lesson.youtubeUrl} height="100%" width="100%" />
          </div>
        </div>
        <div className='w-full  bg-bgDarkerGray rounded-b-xl p-10 flex flex-col space-y-5' >
          <h2 className='font-bold text-2xl ' > {lesson?.title} </h2>
          <h3 className='font-bold text-xl '>Transcript</h3>
          <p>
            {lesson.transcript}
          </p>
        </div>
      </section>
      <footer>

      </footer>
    </main>
  )
}


export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = ethLessons.map((lesson) => ({
    params: { lesson: lesson.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ lesson: Lesson }, Params> = async ({
  params,
}) => {
  const { lesson } = params!

  const currentLesson = ethLessons.find(
    (currentLesson) => currentLesson.slug === lesson
  )

  return {
    props: {
      lesson: currentLesson!,
    },
  }
}