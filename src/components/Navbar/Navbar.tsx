
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import MetaMaskButton from "../WalletConnectButtons/MetaMaskButton"
import TalismanButton from "../WalletConnectButtons/TalismanButton"
import { formatAddress } from '../../utils/helpers'
import { useTheme } from '@/context/ThemeContext';



export default function Navbar() {

  const { account, active, deactivate } = useWeb3React<Web3Provider>()
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [teachMeButton, toggleTeachMeButton] = useState(false)
  const [connectWalletBtn, toggleConnectWalletBtn] = useState(false)


  const onClickDisconnect = () => {
    deactivate()
    localStorage.removeItem('hasConnected');
  }

  return (
    <div   >
      <nav className=" absolute h-24 w-full font-bold flex justify-between items-center px-12 z-10 backdrop-blur-sm">
        <div>
          <Link href={"/"}  >
            <div className="h-40 w-80 relative" >
              <Image src={isDarkMode ? "/tdm_long_light.svg": "/tdm_long_dark.svg"} fill alt="teach me defi logo" priority sizes="320px" />
            </div>
          </Link>
        </div>
        <div className="space-x-14 flex" >
          <div
            className="relative  "
            onMouseEnter={() => toggleTeachMeButton(!teachMeButton)}
            onMouseLeave={() => toggleTeachMeButton(false)}
          >
            <button className={`pl-2 ${teachMeButton && "underline"}`} >TEACH ME</button>
            <div className={`absolute flex flex-col w-32 pl-2 gap-1  rounded-b-lg  ${teachMeButton ? "" : "hidden"} `} >
              <Link href={"/btc"} className="rainbow-text" >BTC Section</Link>
              <Link href={"/eth"} className="rainbow-text" >ETH Section</Link>
              <Link href={"/dot"} className="rainbow-text" >DOT Section</Link>
            </div>
          </div>
          <Link href={"/podcast"} className="hover:underline">PODCAST</Link>
          <Link href={"/newsletter"} className="hover:underline">NEWSLETTER</Link>
          {/* <Link href={"/merch"} className="hover:underline" >MERCH</Link> */}
          <Link href={"/subscribe"} className="hover:underline" >SUBSCRIBE</Link>
        </div>
        <div className="flex  gap-5" >
          <button onClick={toggleDarkMode} className="border-2 dark:border-white border-bgDarkGray w-8 h-8 rounded-xl flex items-center justify-center" >
            {isDarkMode ?
              <Image src={"/navbar/sun.svg"} width={20} height={20} alt="icon" />
              :
              <Image src={"/navbar/moon.svg"} width={15} height={15} alt="icon" />
            }
          </button>
          {
            active && typeof account === 'string' ?
              <button onClick={() => toggleConnectWalletBtn(true)} >
                {formatAddress(account, 4)}
              </button>
              :
              <button onClick={() => toggleConnectWalletBtn(true)}>CONNECT</button>
          }
        </div>

      </nav>
      {/* Wallet Connect Wiondow */}
      <div className={`fixed w-screen h-screen z-20 flex backdrop-blur-md justify-center items-center ${connectWalletBtn ? "" : "hidden"}`}
      >
        <div className={`relative w-72 bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-5 py-10 `}>
          <button className="absolute top-2 right-2 bg-gray-100 dark:bg-bgDarkGray h-6 w-6 rounded-full flex justify-center items-center "
            onClick={() => toggleConnectWalletBtn(false)}
          >
            X
          </button>
          {active && typeof account === 'string' ?
            <button className="bg-gray-100 dark:bg-bgDarkGray rounded-md h-20 w-full px-5  flex justify-between items-center"
              onClick={onClickDisconnect}
            >
              <p>{formatAddress(account)} <br /> Disconnect</p>
            </button>
            :
            <>
              <MetaMaskButton toggleConnectWalletBtn={toggleConnectWalletBtn} />
              <TalismanButton toggleConnectWalletBtn={toggleConnectWalletBtn} />
            </>
          }

        </div>
      </div>
    </div>
  )
}