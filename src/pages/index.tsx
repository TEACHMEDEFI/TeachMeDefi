import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { PrimaryButton } from '@/components/Buttons/Buttons'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TDM_logo.png" />
      </Head>
      <section className='landing flex justify-center items-center h-screen w-screen gap-x-32' >
        <div className='w-4/12 h-11/12 space-y-7' >
          <h1 className='text-7xl font-bold' >
            We Teach You <br /> Decentralized <br /> Finance
          </h1>
          <h3 className='text-lg mb-5' >
            Damit Du den Einstieg in die neue Denzentrale Finanzwelt nicht verpasst,
            unterstützen wir dich mit kostenfreien Inhalten und unserem Discord Forum.
          </h3>
          <PrimaryButton>
            JOIN NOW
          </PrimaryButton>
        </div>
        <div className='w-4/12 h-11/12'>
          {/* <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, modi nesciunt nobis corrupti magnam laudantium temporibus dolores cumque iure? Molestiae dolore illo unde possimus, expedita corrupti eius est perferendis minima.
            Dolorum nulla similique, possimus tenetur doloremque facilis nemo est eius iusto minima esse obcaecati sint cupiditate quaerat rem ad minus quod voluptatum optio libero accusamus! Pariatur ad vero earum nihil!
          </h3> */}
        </div>
        {/* <div className=' h-60 w-60 border-2' style={{background: "linear-gradient(to right, #0099ff 0%, #8a2be2 50%, #ff69b4 100%)"}}  ></div> */}
        {/* <div className='bg-gradient-conic from-primaryBlue via-secondaryPurple to-primaryPink rounded-full h-60 w-60 border-2'></div> */}
      </section>
      <section className=' section-2 flex justify-center items-center h-screen w-screen' >
        {/* <h1 className="text-3xl font-bold underline text-primary ">
          Hello world!
        </h1>
        <div className='bg-gradient-pink-to-blue from-secondaryBlue  to-secondaryPurple h-60 w-60 border-2'></div>
        <div className='bg-gradient-pink-to-baby-blue h-60 w-60 border-2'></div>
        <div className='bg-gradient-purple-to-pink h-60 w-60 border-2'></div> */}
      </section>
    </div>
  )
}
