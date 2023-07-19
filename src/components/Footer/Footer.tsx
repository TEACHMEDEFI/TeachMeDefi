
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <footer className="w-full border-t-4 flex justify-center" >
      <div className="w-full py-16 flex flex-col sm:flex-row justify-around items-center gap-14 max-w-[1600px] ">

        <div className="flex flex-col  items-center " >
          <div className="relative h-14 w-44 mb-10" >
            <Image src={isDarkMode ? "/tdm_short_light.svg" : "/tdm_short_dark.svg"} fill alt="teach me defi logo" sizes="180px" />
          </div>
          <div className="flex gap-5 mb-3" >
            <Link
              href={"https://www.youtube.com/@teachmedefi"}
              target="_blank"
            >
              <div className="h-9 w-9 relative">
                <Image src={isDarkMode ? "/icons/youtube.png" : "/icons/youtube_dark.png"} alt="youtube" fill sizes="60px" />
              </div>
            </Link>
            <Link
              href={"https://twitter.com/teachmedefi?lang=de"}
              target="_blank"
            >
              <div className="h-9 w-9 relative">
                <Image src={isDarkMode ? "/icons/twitter.png" : "/icons/twitter_dark.png"} alt="twitter" fill sizes="60px" />
              </div>
            </Link>
            {/* <Link
              href={"https://discord.io/teachmedefi"}
              target="_blank"
              >
              <div className="h-9 w-9 relative">
              <Image src={isDarkMode ? "/icons/discord.png" : "/icons/discord_dark.png"} alt="discord" fill sizes="60px" />
              </div>
            </Link> */}
            <Link href={"https://www.tiktok.com/@teachmedefi_official"} target="_blank" >
              <div className="h-9 w-9 relative">
                <Image src={isDarkMode ? "/icons/tiktok-light.svg" : "/icons/tiktok-dark.svg"}
                  alt="tiktok" fill sizes="60px"
                />
              </div>
            </Link>
          </div>
          <div className="flex gap-5 items-center" >
            <Link href={"https://www.instagram.com/teachmedefi/"} target="_blank" >
              <div className="h-9 w-9 relative">
                <Image src={isDarkMode ? "/icons/instagram.svg" : "/icons/instagram-dark.svg"}
                  alt="instagram" fill sizes="60px"
                />
              </div>
            </Link>
            <Link
              href={"https://podcasters.spotify.com/pod/show/teachmedefi"}
              target="_blank"
            >
              <div className="h-9 w-9 relative">
                <Image src={isDarkMode ? "/icons/podcast-light.svg" : "/icons/podcast-dark.svg"}
                  alt="podcast" fill sizes="60px"
                />
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/company/teachmedefi"}
              target="_blank"
            >
              <div className="h-9 w-9 relative">
                <Image src={isDarkMode ? "/icons/linkedIn.png" : "/icons/linkedIn_dark.svg"} alt="linkedIn" fill sizes="60px" />
              </div>
            </Link>

          </div>
        </div>
        <div className="flex flex-col sm:border-l-4 sm:pl-5 max-sm:text-center py-3 rounded " >
          <Link data-linktarget="liability-section" href={"/haftungsausschluss"} className="rainbow-text" >Haftungsausschluss</Link>
          <Link data-linktarget="privacy-section" href={"/privacy"} className="rainbow-text" >Datenschutzerklärung</Link>
          <Link data-linktarget="terms-section" href={"/termsAndConditions"} className="rainbow-text" >Nutzungsbedingungen</Link>
          <Link data-linktarget="impressum-section" href={"/impressum"} className="rainbow-text" >Impressum</Link>
          <Link data-linktarget="faq-section" href={"/privacy"} className="rainbow-text" >FAQ</Link>


        </div>
      </div>
    </footer>
  )
}
