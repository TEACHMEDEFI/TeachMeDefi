
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../Buttons/Buttons";
import { useTheme } from '@/context/ThemeContext';

export default function HeroSection() {
  const { isDarkMode } = useTheme();
  return (
    <section className='landing flex flex-col lg:flex-row  items-center  lg:h-screen w-full gap-x-32 relative' >
      <div className='w-11/12 lg:w-5/12 xl:w-4/12 h-11/12 space-y-5 xl:ml-24 lg:ml-16 z-10 
      lg:mb-36  md:ml-10 mt-10 sm:mt-32 md:w-2/3 max-sm:w-full max-sm:px-5'
      >
        <h1 className='xl:text-5xl text-4xl font-bold' >
          Krypto leicht gemacht!
        </h1>
        <h2 className='xl:text-lg text-sm pb-10 backdrop-blur-lg rounded-3xl pr-3 ' >
          Egal, ob du ganz neu im Krypto-Bereich bist oder bereits ein erfahrener Nutzer -
          wir machen Kryptowährungen und Blockchain einfach und zugänglich für alle.
          Entdecke, lerne und verstehe die Welt der digitalen Währungen und nutze sie zu deinem Vorteil.
        </h2>
        <div >
          {/* <div className="w-40 mb-5">
            <PrimaryButton href='https://www.newsletter.teachmedefi.de/' target="_blank">
              JOIN NOW
            </PrimaryButton>
          </div> */}
          <div>

            <div className="flex gap-5 mb-5 items-center " >
              <Link href={"https://www.linkedin.com/company/teachmedefi"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"}
                    alt="linkedIn" fill sizes="60px"
                  />
                </div>
              </Link>
              <Link href={"https://www.youtube.com/@teachmedefi"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/youtube.png" : "/icons/youtube_dark.png"}
                    alt="youtube" fill sizes="60px"
                  />
                </div>
              </Link>
              <Link href={"https://twitter.com/teachmedefi?lang=de"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"}
                    alt="twitter" fill sizes="60px"
                  />
                </div>
              </Link>
              <Link href={"https://discord.io/teachmedefi"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/discord.png" : "/icons/discord_dark.png"}
                    alt="discord" fill sizes="60px"
                  />
                </div>
              </Link>
              <Link href={"https://www.tiktok.com/@teachmedefi_official"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/tiktok-light.svg" : "/icons/tiktok-dark.svg"}
                    alt="tiktok" fill sizes="60px"
                  />
                </div>
              </Link>
              <Link href={"https://www.instagram.com/teachmedefi/"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/instagram.svg" : "/icons/instagram-dark.svg"}
                    alt="instagram" fill sizes="60px"
                  />
                </div>
              </Link>
              <Link href={"https://podcasters.spotify.com/pod/show/teachmedefi"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/podcast-light.svg" : "/icons/podcast-dark.svg"}
                    alt="podcast" fill sizes="60px"
                  />
                </div>
              </Link>

            </div>
            {/* <div className="flex gap-5 items-center" >
              <Link href={"https://www.tiktok.com/@teachmedefi_official"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/tiktok.svg" : "/icons/tiktok-dark.svg"} 
                  alt="tiktok" fill sizes="60px" 
                  />
                </div>
              </Link>
              <Link href={"https://www.instagram.com/teachmedefi/"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/instagram.svg" : "/icons/instagram-dark.svg"} 
                  alt="instagram" fill sizes="60px" 
                  />
                </div>
              </Link>
              <Link href={"/"} target="_blank" >
                <div className="h-6 w-6 relative">
                  <Image src={isDarkMode ? "/icons/podcast.svg" : "/icons/podcast-dark.svg"} 
                  alt="podcast" fill sizes="60px" 
                  />
                </div>
              </Link>

            </div> */}
            <div className="w-64 mb-5">
              <PrimaryButton href='https://www.newsletter.teachmedefi.de/' target="_blank">
                Kostenlos anmelden
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className='landing-donut z-0' > </div>

      {/* <div className=' h-60 w-60 border-2' style={{background: "linear-gradient(to right, #0099ff 0%, #8a2be2 50%, #ff69b4 100%)"}}  ></div> */}
      {/* <div className='bg-gradient-conic from-primaryBlue via-secondaryPurple to-primaryPink rounded-full h-60 w-60 border-2'></div> */}
    </section>
  )
}
