import styles from "./Navbar.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [teachMeButton, toggleTeachMeButton] = useState(false)

  return (
    <nav className=" absolute h-32 w-full flex justify-between items-center px-12 ">
      <div>
        <Image src={"/TestLogo.png"} height={80} width={400} alt="teach me defi logo" />
      </div>
      <div className="space-x-14 flex" >

        <div
          className="relative  "
          onMouseEnter={() => toggleTeachMeButton(!teachMeButton)}
          onMouseLeave={() => toggleTeachMeButton(false)}
        >
          <button >TEACH ME</button>
          <div className={`absolute flex flex-col w-28 ${teachMeButton ? "" : "hidden"} `} >
            <Link href={"/"} >BTC Section</Link>
            <Link href={"/"} >ETH Section</Link>
            <Link href={"/"} >DOT Section</Link>
          </div>
        </div>
        <Link href={"/"} >PODCAST</Link>
        <Link href={"/"} >NEWSLETTER</Link>
        <Link href={"/"} >MERCH</Link>
      </div>
      <Link href={"/"} className="" >SUBSCRIBE</Link>

    </nav>
  )
}