import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { PrimaryButton, SecondaryButton, GeneralButton } from '@/components/Buttons/Buttons'
import { useTheme } from '@/context/ThemeContext'
import ReactPlayer from "react-player";
import FAQ from '@/components/FAQ/FAQ'
import AboutUs from '@/components/AboutUs/AboutUs'


export default function Home() {
  const { isDarkMode } = useTheme();
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="TeachMeDefi teach me defi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TDM_logo.png" />
      </Head>
      <section className='landing flex  items-center h-screen w-full gap-x-32 relative' >
        <div className=' w-4/12 h-11/12 space-y-5 xl:ml-24 lg:ml-16 z-10' >
          <h1 className='xl:text-6xl text-4xl font-bold' >
            We Teach You <br /> Decentralized <br /> Finance
          </h1>
          <h2 className='xl:text-lg text-sm mb-10' >
            Damit Du den Einstieg in die neue Denzentrale Finanzwelt nicht verpasst,
            unterstützen wir dich mit kostenfreien Inhalten und unserem Discord Forum.
          </h2>
          {/* JOIN NOW BUTTON SOLL ZUM NEWSLETTER FÜHREN */}
          <div className="flex gap-5 " >
            <PrimaryButton>
              JOIN NOW
            </PrimaryButton>
            <Link href={"/"} target="_blank" >
              <div className="h-6 w-6 relative">
                <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"} alt="linkedIn" fill sizes="60px" />
              </div>
            </Link>
            <Link href={"/"} target="_blank" >
              <div className="h-6 w-6 relative">
                <Image src={isDarkMode ? "/icons/youtube.png" : "/icons/youtube_dark.png"} alt="youtube" fill sizes="60px" />
              </div>
            </Link>
            <Link href={"/"} target="_blank" >
              <div className="h-6 w-6 relative">
                <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"} alt="twitter" fill sizes="60px" />
              </div>
            </Link>
            <Link href={"/"} target="_blank" >
              <div className="h-6 w-6 relative">
                <Image src={isDarkMode ? "/icons/discord.png" : "/icons/discord_dark.png"} alt="discord" fill sizes="60px" />
              </div>
            </Link>
          </div>
        </div>
        <div className='landing-donut ' > </div>

        {/* <div className=' h-60 w-60 border-2' style={{background: "linear-gradient(to right, #0099ff 0%, #8a2be2 50%, #ff69b4 100%)"}}  ></div> */}
        {/* <div className='bg-gradient-conic from-primaryBlue via-secondaryPurple to-primaryPink rounded-full h-60 w-60 border-2'></div> */}
      </section>
      {/* Our services  */}
      <section className='flex flex-col justify-center items-center w-full relative mt-20 mb-44' >
        <div className='z-10'>
          <h3 className='text-4xl font-bold mb-10' >Entdecke unsere Services!</h3>
          <div className='flex flex-wrap gap-10' >
            <div className='w-72 space-y-5 flex flex-col justify-between' >
              <div >
                <div className='relative w-72 h-72 mb-3'>
                  <Image src={"/home/Cryptocurrencies_overview.jpg"} fill className='object-cover rounded-xl' alt='Overview image over all cryptocurrencies Bitcoin Ethereum Polkadot' />
                </div>
                <h4 className='text-lg font-bold' >Lerne Krypto, verdiene NFTs</h4>
                <p className='mt-5 tracking-wider text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam assumenda error doloribus deleniti eos saepe libero explicabo esse facere? Voluptas mollitia minima expedita odio voluptate enim laboriosam! Vero, expedita?</p>
              </div>
              <Link href={"/"} className='rainbow-text font-bold text-lg' >Mehr erfahren</Link>
            </div>
            <div className='w-72 space-y-5 flex flex-col justify-between' >
              <div >
                <div className='relative w-72 h-72 mb-3'>
                  <Image src={"/home/Podcast_teaser.jpg"} fill className='object-cover rounded-xl' alt='Podcasst teaser Crypto Cryptocurrencie Krypto Kryptowährung Bitcoin Ethereum Polkadot' />
                </div>
                <h4 className='text-lg font-bold' >Krypto Chats: Höre unsere Podcast um unsere Meinung zur aktuellen lage des Kryptomarktes zu hören</h4>
                <p className='mt-5 tracking-wider text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam assumenda error doloribus deleniti eos saepe libero explicabo esse facere? Voluptas mollitia minima expedita odio voluptate enim laboriosam! Vero, expedita?</p>
              </div>
              <Link href={"/"} className='rainbow-text font-bold text-lg' >Mehr erfahren</Link>
            </div>
            <div className='w-72 space-y-5 flex flex-col justify-between' >
              <div >
                <div className='relative w-72 h-72 mb-3'>
                  <Image src={"/home/Newsletter.png"} fill className='object-cover rounded-xl' alt='GIVE THIS AN ALT' />
                </div>
                <h4 className='text-lg font-bold' >Insider Newsletter: Abonniere unseren Newsletter um auf dem aktuellen Stand zu bleiben</h4>
                <p className='mt-5 tracking-wider text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam assumenda error doloribus deleniti eos saepe libero explicabo esse facere? Voluptas mollitia minima expedita odio voluptate enim laboriosam! Vero, expedita?</p>
              </div>
              <Link href={"/"} className='rainbow-text font-bold text-lg' >Mehr erfahren</Link>
            </div>
          </div>
        </div>



        <div className='landing-bg-2 absolute h-screen w-full top-0 right-0' ></div>
        {/* <h1 className="text-3xl font-bold underline text-primary ">
          Hello world!
        </h1>
        <div className='bg-gradient-pink-to-blue from-secondaryBlue  to-secondaryPurple h-60 w-60 border-2'></div>
        <div className='bg-gradient-pink-to-baby-blue h-60 w-60 border-2'></div>
        <div className='bg-gradient-purple-to-pink h-60 w-60 border-2'></div> */}
      </section>
      {/* Landing page intro video */}
      {/* THIS FUCKER IS CAUSING RENDERING ERROR */}
      <section className='my-44 flex flex-col items-center ' >
        {/* <div className='h-[540px] w-[960px] ' >
          <ReactPlayer
            height="100%"
            width="100%"
            url="https://youtu.be/20xgeCs3aw4"
            controls={true}
            // onEnded={() => setProgress(currentLesson.lessonId)}
            config={{
              youtube: {
                playerVars: { fs: 1 }
              }
            }}
          />
        </div> */}
      </section>
      {/* List of each section that is offered */}
      <section className='my-44 flex flex-col items-center h-96 border mb-5' >
        auflistung der verschiedenen teach me sections
      </section>
      {/* Podcast section */}
      <section id='podcast' className=' bg-slate-100 dark:bg-gray-900 my-44 flex items-center justify-between rounded-lg mb-55' >
        {/* du must noch farben anpassen, zu sonnig drausen  */}
        <div className='flex flex-col grow items-center gap-8 '>
          <h3 className='text-4xl font-bold '> Hör dir unsere <span className='text-5xl'>Podcasts</span> an</h3>
          <PrimaryButton href='/' >Jetzt anhören </PrimaryButton>
        </div>
        <div className='relative h-96 w-96 ' >
          <Image src={"/home/podcast_microphone.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
        </div>
      </section>
      {/* Newsletter section */}
      <section id='newsletter' className=' bg-slate-100 dark:bg-gray-900 my-44 flex items-center justify-between rounded-lg mb-5' >
        {/* du must noch farben anpassen, zu sonnig drausen  */}
        <div className='relative h-96 w-96 ' >
          <Image src={"/home/newsletter_mailbox.png"} loading='lazy' className=' rounded-lg' fill alt='Newsletter' />
        </div>
        <div className='flex flex-col grow items-center gap-8 '>
          <h3 className='text-4xl font-bold '> <span className='text-5xl'>Abonniere</span> unseren  Newsletter</h3>
          <PrimaryButton href='/' >Starte jetzt </PrimaryButton>
        </div>
      </section>
      <section id='about-us' className='my-44 flex flex-col items-center mb-5' >
        <AboutUs />
      </section>
      <section id='faq' className='mt-44 mb-20 flex flex-col items-center ' >
        <FAQ />
      </section>
      {/* 
          - Our Services 1.TeachMe Section overview scroll to the sections futher down 2. Podcast with CTA 3. Newsletters with CTA
          - Landingpage Video
          - TeachMe Section => BTC Section ETH Section DOT Section
          - Podcast 
          - Newsletter
          - Our Team
          - FAQ
        */}
    </div>
  )
}
