
import Link from "next/link"
import Image from "next/image"


export default function Footer() {
  return (
    <footer className="w-full py-16 flex justify-around items-center gap-14 " >
      <div className="flex flex-col gap-10 items-center " >
        <Image src={"/tdm_Logo.svg"} height={50} width={180} alt="teach me defi logo" />
        <div className="flex gap-5 " >
          <Link href={"/"} target="_blank" >
            <Image src="/icons/linkedIn.png" height={30} width={25} alt="linkedIn" />
          </Link>
          <Link href={"/"} target="_blank" >
            <Image src="/icons/youtube.png" height={30} width={30} alt="youtube" />
          </Link>
          <Link href={"/"} target="_blank" >
            <Image src="/icons/twitter.png" height={30} width={30} alt="twitter" />
          </Link>
          <Link href={"/"} target="_blank" >
            <Image src="/icons/discord.png" height={30} width={30} alt="discord" />
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