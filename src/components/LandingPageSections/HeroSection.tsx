
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../Buttons/Buttons";
import { useTheme } from '@/context/ThemeContext';

export default function HeroSection() {
  const { isDarkMode } = useTheme();
  return (
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
        <div className="flex gap-5 items-center" >
          <PrimaryButton href='/'>
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
  )
}
