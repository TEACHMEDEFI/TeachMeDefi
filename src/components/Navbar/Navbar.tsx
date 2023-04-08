import styles from "./Navbar.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [teachMeButton, toggleTeachMeButton] = useState(false)

  return (
    <nav className=" absolute h-24 w-full flex justify-between items-center px-12 z-10 ">
      <div>
        <Link href={"/"}  >
          <div className="h-40 w-80 relative" >
            <Image src={"/tdm_test_2.svg"} fill alt="teach me defi logo" priority sizes="320px" />
          </div>
        </Link>
      </div>
      <div className="space-x-14 flex" >

        <div
          className="relative  "
          onMouseEnter={() => toggleTeachMeButton(!teachMeButton)}
          onMouseLeave={() => toggleTeachMeButton(false)}
        >
          <button >TEACH ME</button>
          <div className={`absolute flex flex-col w-28 ${teachMeButton ? "" : "hidden"} `} >
            <Link href={"/btc"} >BTC Section</Link>
            <Link href={"/eth"} >ETH Section</Link>
            <Link href={"/dot"} >DOT Section</Link>
          </div>
        </div>
        <Link href={"/podcast"} >PODCAST</Link>
        <Link href={"/newsletter"} >NEWSLETTER</Link>
        <Link href={"/merch"} >MERCH</Link>
        <Link href={"/subscribe"} className="" >SUBSCRIBE</Link>
      </div>
      <button>CONNECT</button>

    </nav>
  )
}