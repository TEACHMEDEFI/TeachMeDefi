import styles from "./Navbar.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [teachMeButton, toggleTeachMeButton] = useState(false)

  return (
    <nav className=" absolute h-32 w-full flex justify-between items-center px-12 ">
      <div>
        <Link href={"/"}  >
          <Image src={"/tdm_test_2.svg"} height={50} width={300} alt="teach me defi logo" />
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
      </div>
      <Link href={"/subscribe"} className="" >SUBSCRIBE</Link>

    </nav>
  )
}