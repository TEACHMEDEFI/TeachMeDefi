import styles from "./Navbar.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className=" absolute h-32 w-full flex justify-between items-center px-12 ">
      <div>
        <Image src={"/TestLogo.png"} height={80} width={400} alt="teach me defi logo" />
      </div>
      <div className="space-x-10" >
        <Link href={"/"} >TEACH ME</Link>
        <Link href={"/"} >PODCAST</Link>
        <Link href={"/"} >NEWSLETTER</Link>
        <Link href={"/"} >MERCH</Link>
      </div>
      <Link href={"/"} className="" >SUBSCRIBE</Link>

    </nav>
  )
}