import styles from "./Navbar.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"



export default function Navbar() {

  const [teachMeButton, toggleTeachMeButton] = useState(false)
  const [connectWalletBtn, toggleConnectWalletBtn] = useState(false)

  const connectWalletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        connectWalletRef.current &&
        !connectWalletRef.current.contains(event.target as Node)
      ) {
        toggleConnectWalletBtn(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [connectWalletRef]);



  return (
    <div   >
      <nav className=" absolute h-24 w-full flex justify-between items-center px-12 z-10 backdrop-blur-sm">
        <div>
          <Link href={"/"}  >
            <div className="h-40 w-80 relative" >
              <Image src={"/tdm_test_2.svg"} fill alt="teach me defi logo" priority sizes="320px" />
            </div>
          </Link>
        </div>
        <div className="space-x-14 flex" >

          <div
            className="relative"
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
        <button onClick={() => toggleConnectWalletBtn(true)} >CONNECT</button>
      </nav>
      {/* Wallet Connect Wiondow */}
      <div className={`fixed w-screen h-screen z-20 flex backdrop-blur-md justify-center items-center ${connectWalletBtn ? "" : "hidden"}`}
      >
        <div className={`relative w-72 h-64 bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 p-5  `}>
          <button className="absolute top-1 right-3 bg-bgDarkGray h-6 w-6 rounded-full flex justify-center items-center "
            onClick={() => toggleConnectWalletBtn(false)}
          >
            X
          </button>
          {/* <MetaMaskConnect /> */}
          <button className="bg-bgDarkGray rounded-md h-20 "
            onClick={()=> console.log("mea")}
          >
            Metamask
          </button>
          <button className="bg-bgDarkGray rounded-md h-20 "
            onClick={() => console.log("this is buttn")}
          >
            Talisman
          </button>
        </div>
      </div>
    </div>
  )
}