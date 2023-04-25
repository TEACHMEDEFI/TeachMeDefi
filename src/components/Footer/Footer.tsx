
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="w-full py-16 flex justify-around items-center gap-14 " >
      <div className="flex flex-col gap-10 items-center " >
        <div className="relative h-14 w-44 " >
          <Image src={"/tdm_short_dark.svg"} fill alt="teach me defi logo" sizes="180px" />
        </div>
        <div className="flex gap-5 " >
          <Link href={"/"} target="_blank" >
            <div className="h-9 w-9 relative">
              <Image src="/icons/linkedIn.png" alt="linkedIn" fill sizes="40px" />
            </div>
          </Link>
          <Link href={"/"} target="_blank" >
            <div className="h-9 w-9 relative">
              <Image src="/icons/youtube.png" alt="youtube" fill sizes="40px" />
            </div>
          </Link>
          <Link href={"/"} target="_blank" >
            <div className="h-9 w-9 relative">
              <Image src="/icons/twitter.png" alt="twitter" fill sizes="40px" />
            </div>
          </Link>
          <Link href={"/"} target="_blank" >
            <div className="h-9 w-9 relative">
              <Image src="/icons/discord.png" alt="discord" fill sizes="40px" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col border-l-4 pl-5 py-3 rounded " >
        <Link href={"/"}>Datenschutzerklärung</Link>
        <Link href={"/"}>Haftungsausschluss</Link>
        <Link href={"/"}>Nutzungsbedingungen</Link>
        <Link href={"/"}>Impressum</Link>
        <Link href={"/"}>FAQ</Link>
      </div>
    </footer>
  )
}