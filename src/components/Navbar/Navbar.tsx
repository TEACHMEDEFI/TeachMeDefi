
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import MetaMaskButton from "../WalletConnectButtons/MetaMaskButton"
import { formatAddress } from '../../utils/helpers'
import { useTheme } from '@/context/ThemeContext';
import { reportLinkClick } from "../scripts/tagmanager-events"


export default function Navbar() {

  const { account, active, deactivate } = useWeb3React<Web3Provider>()
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [ethereumIsThere, setEthereumIsThere] = useState<boolean>(false)
  const [teachMeButton, toggleTeachMeButton] = useState<boolean>(false)
  const [connectWalletBtn, toggleConnectWalletBtn] = useState<boolean>(false)
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setEthereumIsThere(true)
    }
  }, [])

  const onClickDisconnect = () => {
    deactivate()
    localStorage.removeItem('hasConnected');
  }

  const toggleBurgerMenu = () => {
    setOpenBurgerMenu(!openBurgerMenu)
  }

  const handleTagManagerEventsRedirect = (event: any) => {
    event.preventDefault();
    reportLinkClick(event.target);
    const href = event.target.href
    const { linktarget } = event.target.dataset;

    if (linktarget === 'podcast' || linktarget === 'newsletter') {
      window.open(href, '_blank');
    } else {
      window.location = href;
    }


  }

  const handleTagManagerClickEvents = (event: any) => {
    reportLinkClick(event.target);
  }

  // const toggleBurgerTeachMe = () => {
  //   toggleTeachMeButton(!openBurgerMenu)
  // }

  const handleMobileNavClick = (e: any) => {
    handleTagManagerEventsRedirect(e)
    setOpenBurgerMenu(false)
  }

  return (
    <div className="flex justify-center"  >
      <nav className=" absolute h-24 w-full max-w-[1600px] font-bold flex justify-between items-center px-10 sm:px-12 z-10 backdrop-blur-sm">
        <div>
          <Link href={"/"}  >
            <div className="xl:h-40 xl:w-80 sm:h-28 sm:w-56 h-20 w-40 relative" >
              <Image src={isDarkMode ? "/tdm_long_light.svg" : "/tdm_long_dark.svg"} fill alt="teach me defi logo" priority sizes="320px" />
            </div>
          </Link>
        </div>

        {/* _____ NAV ROUTES, HIDDEN IF SCREEN IS UNDER 1280PX  _______ */}
        <div className="space-x-14 hidden xl:flex " >
          <div
            className="relative  "
            onMouseEnter={() => toggleTeachMeButton(!teachMeButton)}
            onMouseLeave={() => toggleTeachMeButton(false)}
          >
            <button className={`pl-2 ${teachMeButton && "underline"}`} >TEACH ME</button>
            <div className={`absolute flex flex-col w-32 pl-2 gap-1 bg-white dark:bg-bgDarkBlue py-2 rounded-b-lg  ${teachMeButton ? "" : "hidden"} `} >
              {/* <Link href={"/btc"} className="rainbow-text" >BTC Section</Link> */}
              <Link data-linktarget="eth-section" onClick={handleTagManagerClickEvents} href={"/eth"} className="rainbow-text" >ETH Section</Link>
              <Link data-linktarget="dot-section" onClick={handleTagManagerClickEvents} href={"/dot"} className="rainbow-text" >DOT Section</Link>
            </div>
          </div>
          <Link
            target="_blank"
            data-linktarget="podcast"
            onClick={handleTagManagerEventsRedirect}
            href={"https://podcasters.spotify.com/pod/show/teachmedefi"}
            className="hover:underline"
          >
            PODCAST
          </Link>
          <Link
            target="_blank"
            data-linktarget="newsletter"
            onClick={handleTagManagerEventsRedirect}
            href={"https://www.newsletter.teachmedefi.de/"}
            className="hover:underline"
          >
            NEWSLETTER
          </Link>
          {/* <Link href={"/merch"} className="hover:underline" >MERCH</Link> */}
          <Link
            target="_blank"
            data-linktarget="subscribe"
            onClick={handleTagManagerEventsRedirect}
            href={"https://www.newsletter.teachmedefi.de/"}
            className="hover:underline"
          >
            SUBSCRIBE
          </Link>
        </div>
        <div className="flex gap-5 items-center " >
          <button onClick={toggleDarkMode} className="border-2 hidden dark:border-white border-bgDarkGray w-8 h-8 rounded-xl sm:flex items-center justify-center" >
            {isDarkMode ?
              <Image src={"/navbar/sun.svg"} width={20} height={20} alt="icon" />
              :
              <Image src={"/navbar/moon.svg"} width={15} height={15} alt="icon" />
            }
          </button>
          {
            ethereumIsThere &&
            <div className="hidden sm:block" >
              {
                active && typeof account === 'string' ?
                  <button onClick={() => toggleConnectWalletBtn(true)} >
                    {formatAddress(account, 4)}
                  </button>
                  :
                  <button onClick={() => toggleConnectWalletBtn(true)}>CONNECT</button>
              }
            </div>
          }

          {/**
             * 
             * ________ HAMBRUGER BUTTON WHEN SCREEN UNDER 1280PX _______ 
             * 
            */}
          <div className="flex xl:hidden" >
            <button
              className="  w-12 h-12 flex flex-col items-center justify-evenly py-1.5"
              onClick={toggleBurgerMenu}
            >
              <div className=" bg-bgDarkGray dark:bg-primaryWhite h-1 w-7 rounded-md "></div>
              <div className=" bg-bgDarkGray dark:bg-primaryWhite h-1 w-7 rounded-md "></div>
              <div className=" bg-bgDarkGray dark:bg-primaryWhite h-1 w-7 rounded-md "></div>
            </button>
          </div>
        </div>

      </nav>

      {/* ______ HAMBRUGER MENU WHEN SCREEN UNDER 1280PX _______ */}
      {openBurgerMenu &&
        <div className="absolute right-0 top-0 flex flex-col gap-5 h-screen w-52 xl:hidden  backdrop-blur-3xl z-50 pt-16 pl-3 font-bold " >
          <button className="absolute top-4 right-4 font-bold bg-gray-100 dark:bg-bgDarkGray h-8 w-8 rounded-full flex justify-center items-center "
            onClick={toggleBurgerMenu}
          >
            X
          </button>
          <button onClick={toggleDarkMode} className="border-2 absolute top-4 left-4 dark:border-white border-bgDarkGray w-8 h-8 rounded-xl sm:hidden flex items-center justify-center" >
            {isDarkMode ?
              <Image src={"/navbar/sun.svg"} width={20} height={20} alt="icon" />
              :
              <Image src={"/navbar/moon.svg"} width={15} height={15} alt="icon" />
            }
          </button>
          {/* _______ HAMBURGER CONNECT / WALLET BUTTON ______________ */}
          {ethereumIsThere &&
            <div className="sm:hidden block" >
              {
                active && typeof account === 'string' ?
                  <button className="mb-5 bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent " onClick={() => toggleConnectWalletBtn(true)} >
                    {formatAddress(account, 4)}
                  </button>
                  :
                  <button className="mb-5 bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent " onClick={() => toggleConnectWalletBtn(true)}>CONNECT</button>
              }
            </div>
          }
          <div
            className="relative "
          >
            <button onClick={() => toggleTeachMeButton(!teachMeButton)} >TEACH ME  </button>
            <div className={`flex flex-col w-32 pl-2 gap-1 py-2 rounded-b-lg  ${teachMeButton ? "" : "hidden"} `} >
              {/* <Link href={"/btc"} onClick={() => setOpenBurgerMenu(false)} className="rainbow-text" >BTC Section</Link> */}
              <Link href={"/eth"} onClick={() => setOpenBurgerMenu(false)} className="rainbow-text" >ETH Section</Link>
              <Link href={"/dot"} onClick={() => setOpenBurgerMenu(false)} className="rainbow-text" >DOT Section</Link>
            </div>
          </div>
          <Link
            target="_blank"
            data-linktarget="podcast"
            onClick={e => handleMobileNavClick(e)}
            href={"https://podcasters.spotify.com/pod/show/teachmedefi"}
          >
            PODCAST
          </Link>
          <Link
            target="_blank"
            data-linktarget="newsletter"
            onClick={e => handleMobileNavClick(e)}
            href={"https://www.newsletter.teachmedefi.de/"}
          >
            NEWSLETTER
          </Link>
          {/* <Link 
          href={"/merch"} 
          onClick={()=>setOpenBurgerMenu(false)}   
          >
          MERCH
        </Link> */}
          <Link
            target="_blank"
            data-linktarget="subscribe"
            onClick={e => handleMobileNavClick(e)}
            href={"https://www.newsletter.teachmedefi.de/"}
          >
            SUBSCRIBE
          </Link>
        </div>
      }


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
              <MetaMaskButton data-linktarget="metamask-connect" onClick={handleTagManagerClickEvents} toggleConnectWalletBtn={toggleConnectWalletBtn} />
              {/* <TalismanButton toggleConnectWalletBtn={toggleConnectWalletBtn} /> */}
            </>
          }

        </div>
      </div>
    </div>
  )
}