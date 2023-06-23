
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <footer className="w-full max-w-[2000px] py-16 flex justify-around items-center gap-14 border-t-4 " >
      <div className="flex flex-col gap-10 items-center " >
        <div className="relative h-14 w-44 " >
          <Image src={isDarkMode ? "/tdm_short_light.svg" : "/tdm_short_dark.svg"} fill alt="teach me defi logo" sizes="180px" />
        </div>
        <div className="flex gap-5 " >
          <Link href={"/"} target="_blank" >
            <div className="h-9 w-9 relative">
              <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"} alt="linkedIn" fill sizes="60px" />
            </div>
          </Link>
          <Link href={"/"} target="_blank" >
            <div className="h-9 w-9 relative">
              <Image src={isDarkMode ? "/icons/youtube.png" : "/icons/youtube_dark.png"} alt="youtube" fill sizes="60px" />
            </div>
          </Link>
          <Link href={"/"} target="_blank" >
            <div className="h-9 w-9 relative">
              <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"} alt="twitter" fill sizes="60px" />
            </div>
          </Link>
          <Link href={"/"} target="_blank" >
            <div className="h-9 w-9 relative">
              <Image src={isDarkMode ? "/icons/discord.png" : "/icons/discord_dark.png"} alt="discord" fill sizes="60px" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col border-l-4 pl-5 py-3 rounded " >
      <Link data-linktarget="liability-section" href={"/haftungsausschluss"} className="rainbow-text" >Haftungsausschluss</Link>
        <Link data-linktarget="privacy-section" href={"/privacy"} className="rainbow-text" >Datenschutzerklärung</Link>
        <Link data-linktarget="terms-section" href={"/termsAndConditions"} className="rainbow-text" >Nutzungsbedingungen</Link>
        <Link data-linktarget="impressum-section" href={"/impressum"} className="rainbow-text" >Impressum</Link>
        <Link data-linktarget="faq-section" href={"/privacy"} className="rainbow-text" >FAQ</Link>
      </div>
    </footer>
  )
}
