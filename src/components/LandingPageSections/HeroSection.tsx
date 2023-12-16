
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../Buttons/Buttons";
import { useTheme } from '@/context/ThemeContext';


export default function HeroSection() {
  const { isDarkMode } = useTheme();
  return (
    <section className='landing flex -mt-8 mb-24 flex-col items-center w-full relative' >
      <div className=' relative z-0 flex -space-x-2' >
        {/* <div className="landing-donut " /> */}

        <div className="relative w-[125px] sm:w-[210px] md:w-[250px] h-[197.5px] sm:h-[332px] md:h-[395px] " >
          <div className="absolute bg-gradient-to-b
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-full w-[125px] sm:w-[210px] md:w-[250px] h-[125px] sm:h-[210px] md:h-[250px] bottom-0
              "
          >
            <div className="absolute w-[125px] sm:w-[210px] md:w-[250px] h-[197.5px] sm:h-[332px] md:h-[396px] bottom-0 md:-bottom-1 rounded-b-full" >
              <Image
                src={"/home/aboutUs/sohejl.png"}
                className="rounded-3xl"
                fill
                loading='lazy'
                alt="Profil picture Sohejl"
              />
            </div>
          </div>
        </div>

        <div className="relative w-[125px] sm:w-[210px] md:w-[250px] h-[197.5px] sm:h-[332px] md:h-[395px] " >
          <div className="absolute bg-gradient-to-b
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-full w-[125px] sm:w-[210px] md:w-[250px] h-[125px] sm:h-[210px] md:h-[250px] bottom-0
              "
          >
            <div className="absolute w-[125px] sm:w-[210px] md:w-[250px] h-[197.5px] sm:h-[332px] md:h-[395px] bottom-0 md:-bottom-1 rounded-b-full" >
              <Image
                src={"/home/aboutUs/rustam.png"}
                className="rounded-3xl"
                fill
                loading='lazy'
                alt="Profil picture Rustam"
              />
            </div>
          </div>
        </div>

        <div className="relative w-[125px] sm:w-[210px] md:w-[250px] h-[197.5px] sm:h-[332px] md:h-[395px] " >
          <div className="absolute bg-gradient-to-b
              from-primaryBlue via-secondaryPurple to-primaryPink
              rounded-full w-[125px] sm:w-[210px] md:w-[250px] h-[125px] sm:h-[210px] md:h-[250px] bottom-0
              "
          >
            <div className="absolute w-[125px] sm:w-[210px] md:w-[250px] h-[197.5px] sm:h-[332px] md:h-[396px] bottom-0 md:-bottom-1 rounded-b-full" >
              <Image
                src={"/home/aboutUs/jan.png"}
                className="rounded-3xl"
                fill
                loading='lazy'
                alt="Profil picture Jan"
              />
            </div>
          </div>
        </div>

        

      </div>
      <div className='w-full  space-y-5 xl:ml-16 md:ml-16 md:pr-16 lg:pr-0 z-10 
     mt-10 sm:mt-12 max-md:px-5 text-center '
      >
        <h1 className='xl:text-5xl text-4xl font-bold ' >
          Optimaler Einstieg in die  <span className="whitespace-nowrap">Krypto-Welt!</span>
        </h1>
        <h2 className='xl:text-lg text-sm backdrop-blur-lg pb-1 lg:pb-5rounded-3xl pr-3 max-w-[900px] mx-auto' >
          Wir haben unsere umfassende Erfahrung in Blockchain und Kryptowährungen in erstklassige
          Kurse zu Ethereum, Polkadot und Bitcoin transformiert. Überzeug dich selbst: Derzeit gibt
          es wohl keinen besseren Weg, um in die Krypto-Welt einzusteigen und fundiertes Wissen zu erlangen.
          <br />
          <br />
          Registriere dich jetzt und starte mit unseren Kursen, die dich zum Krypto-Experten machen!
        </h2>
        <div className="w-fit mx-auto space-y-3">
            <PrimaryButton href='/kurse' >
              Krypto Kurs starten
            </PrimaryButton>
          <div className="flex gap-5 mb-5 items-center " >
            <Link href={"https://www.youtube.com/@teachmedefi"} target="_blank" >
              <div className="h-8 w-8 relative">
                <Image src={isDarkMode ? "/icons/youtube.png" : "/icons/youtube_dark.png"}
                  alt="youtube" fill sizes="60px"
                />
              </div>
            </Link>
            <Link href={"https://twitter.com/teachmedefi?lang=de"} target="_blank" >
              <div className="h-6 w-6 relative">
                <Image src={isDarkMode ? "/icons/twitter-x-icon.svg" : "/icons/twitter-x-icon-dark.svg"}
                  alt="twitter" fill sizes="60px"
                />
              </div>
            </Link>
            {/* <Link href={"https://discord.io/teachmedefi"} target="_blank" >
                <div className="h-6 w-6 relative">
                <Image src={isDarkMode ? "/icons/discord.png" : "/icons/discord_dark.png"}
                alt="discord" fill sizes="60px"
                />
                </div>
              </Link> */}
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
            <Link href={"https://www.linkedin.com/company/teachmedefi"} target="_blank" >
              <div className="h-6 w-6 relative">
                <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"}
                  alt="linkedIn" fill sizes="60px"
                />
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* <div className=' h-60 w-60 border-2' style={{background: "linear-gradient(to right, #0099ff 0%, #8a2be2 50%, #ff69b4 100%)"}}  ></div> */}
      {/* <div className='bg-gradient-conic from-primaryBlue via-secondaryPurple to-primaryPink rounded-full h-60 w-60 border-2'></div> */}
    </section>
    // <section className='landing flex flex-col lg:flex-row  items-center w-full relative' >
    //   <div className='w-full lg:w-5/12 xl:w-4/12 space-y-5 xl:ml-16 md:ml-16 md:pr-16 lg:pr-0 z-10 
    //   lg:mb-64  mt-10 sm:mt-24 max-sm:w-full max-md:px-5  '
    //   >
    //     <h1 className='xl:text-5xl text-4xl font-bold ' >
    //       Optimaler Einstieg in die Krypto-Welt!
    //     </h1>
    //     <h2 className='xl:text-lg text-sm backdrop-blur-lg pb-1 lg:pb-5rounded-3xl pr-3 ' >
    //       Wir haben unsere umfassende Erfahrung in Blockchain und Kryptowährungen in erstklassige
    //       Kurse zu Ethereum, Polkadot und Bitcoin transformiert. Überzeug dich selbst: Derzeit gibt
    //       es wohl keinen besseren Weg, um in die Krypto-Welt einzusteigen und fundiertes Wissen zu erlangen.
    //       <br />
    //       <br />
    //       Registriere dich jetzt und starte mit unseren Kursen, die dich zum Krypto-Experten machen!
    //     </h2>

    //     <div >
    //       {/* <div className="w-40 mb-5">
    //         <PrimaryButton href='https://www.newsletter.teachmedefi.de/' target="_blank">
    //           JOIN NOW
    //         </PrimaryButton>
    //       </div> */}

    //       <div>
    //         <div className="w-max mb-5">
    //           <PrimaryButton href='/kurse' >
    //             Krypto Kurs starten
    //           </PrimaryButton>
    //         </div>
    //         <div className="flex gap-5 mb-5 items-center " >
    //           <Link href={"https://www.youtube.com/@teachmedefi"} target="_blank" >
    //             <div className="h-8 w-8 relative">
    //               <Image src={isDarkMode ? "/icons/youtube.png" : "/icons/youtube_dark.png"}
    //                 alt="youtube" fill sizes="60px"
    //               />
    //             </div>
    //           </Link>
    //           <Link href={"https://twitter.com/teachmedefi?lang=de"} target="_blank" >
    //             <div className="h-6 w-6 relative">
    //               <Image src={isDarkMode ? "/icons/twitter-x-icon.svg" : "/icons/twitter-x-icon-dark.svg"}
    //                 alt="twitter" fill sizes="60px"
    //               />
    //             </div>
    //           </Link>
    //           {/* <Link href={"https://discord.io/teachmedefi"} target="_blank" >
    //             <div className="h-6 w-6 relative">
    //             <Image src={isDarkMode ? "/icons/discord.png" : "/icons/discord_dark.png"}
    //             alt="discord" fill sizes="60px"
    //             />
    //             </div>
    //           </Link> */}
    //           <Link href={"https://www.tiktok.com/@teachmedefi_official"} target="_blank" >
    //             <div className="h-6 w-6 relative">
    //               <Image src={isDarkMode ? "/icons/tiktok-light.svg" : "/icons/tiktok-dark.svg"}
    //                 alt="tiktok" fill sizes="60px"
    //               />
    //             </div>
    //           </Link>
    //           <Link href={"https://www.instagram.com/teachmedefi/"} target="_blank" >
    //             <div className="h-6 w-6 relative">
    //               <Image src={isDarkMode ? "/icons/instagram.svg" : "/icons/instagram-dark.svg"}
    //                 alt="instagram" fill sizes="60px"
    //               />
    //             </div>
    //           </Link>
    //           <Link href={"https://podcasters.spotify.com/pod/show/teachmedefi"} target="_blank" >
    //             <div className="h-6 w-6 relative">
    //               <Image src={isDarkMode ? "/icons/podcast-light.svg" : "/icons/podcast-dark.svg"}
    //                 alt="podcast" fill sizes="60px"
    //               />
    //             </div>
    //           </Link>
    //           <Link href={"https://www.linkedin.com/company/teachmedefi"} target="_blank" >
    //             <div className="h-6 w-6 relative">
    //               <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"}
    //                 alt="linkedIn" fill sizes="60px"
    //               />
    //             </div>
    //           </Link>

    //         </div>
    //         {/* <div className="flex gap-5 items-center" >
    //           <Link href={"https://www.tiktok.com/@teachmedefi_official"} target="_blank" >
    //           <div className="h-6 w-6 relative">
    //           <Image src={isDarkMode ? "/icons/tiktok.svg" : "/icons/tiktok-dark.svg"} 
    //           alt="tiktok" fill sizes="60px" 
    //           />
    //           </div>
    //           </Link>
    //           <Link href={"https://www.instagram.com/teachmedefi/"} target="_blank" >
    //             <div className="h-6 w-6 relative">
    //               <Image src={isDarkMode ? "/icons/instagram.svg" : "/icons/instagram-dark.svg"} 
    //               alt="instagram" fill sizes="60px" 
    //               />
    //             </div>
    //           </Link>
    //           <Link href={"/"} target="_blank" >
    //             <div className="h-6 w-6 relative">
    //               <Image src={isDarkMode ? "/icons/podcast.svg" : "/icons/podcast-dark.svg"} 
    //               alt="podcast" fill sizes="60px" 
    //               />
    //             </div>
    //           </Link>

    //         </div> */}

    //       </div>
    //     </div>
    //   </div>
    //   <div className=' relative z-0 self-start' >
    //     <div className="landing-donut " />

    //     <div className="absolute w-[250px] h-[395px] left-[48px]  top-24" >
    //       <div className="absolute bg-gradient-to-b
    //           from-primaryBlue via-secondaryPurple to-primaryPink
    //           rounded-full w-[250px] h-[250px] bottom-0
    //           "
    //       >
    //         <div className="absolute w-[250px] h-[395px] -bottom-1 rounded-b-full" >
    //           <Image
    //             src={"/home/aboutUs/rustam.png"}
    //             className="rounded-3xl"
    //             fill
    //             loading='lazy'
    //             alt="Profil picture Rustam"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="absolute w-[250px] h-[395px] left-[284px] top-24" >
    //       <div className="absolute bg-gradient-to-b
    //           from-primaryBlue via-secondaryPurple to-primaryPink
    //           rounded-full w-[250px] h-[250px] bottom-0
    //           "
    //       >
    //         <div className="absolute w-[250px] h-[396px] -bottom-1 rounded-b-full" >
    //           <Image
    //             src={"/home/aboutUs/jan.png"}
    //             className="rounded-3xl"
    //             fill
    //             loading='lazy'
    //             alt="Profil picture Jan"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="absolute w-[250px] h-[395px] left-[524px] top-24" >
    //       <div className="absolute bg-gradient-to-b
    //           from-primaryBlue via-secondaryPurple to-primaryPink
    //           rounded-full w-[250px] h-[250px] bottom-0
    //           "
    //       >
    //         <div className="absolute w-[250px] h-[396px] -bottom-1 rounded-b-full" >
    //           <Image
    //             src={"/home/aboutUs/sohejl.png"}
    //             className="rounded-3xl"
    //             fill
    //             loading='lazy'
    //             alt="Profil picture Sohejl"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //   </div>

    //   {/* <div className=' h-60 w-60 border-2' style={{background: "linear-gradient(to right, #0099ff 0%, #8a2be2 50%, #ff69b4 100%)"}}  ></div> */}
    //   {/* <div className='bg-gradient-conic from-primaryBlue via-secondaryPurple to-primaryPink rounded-full h-60 w-60 border-2'></div> */}
    // </section>
  )
}
