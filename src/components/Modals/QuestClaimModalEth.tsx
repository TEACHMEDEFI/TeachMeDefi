// import { Spinner } from '@chakra-ui/react'
import Spinner from '../Spinner/Spinner';
import { useEffect, useState } from 'react'
import Link from "next/link"
import ReactPlayer from "react-player";
import { BN } from 'bn.js';
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useNFTBalance, switchNetworkIfNeeded, useConnectedToMetaMask, QuestNftContractAddresses } from '../../pages/api/ethereum-api'
import { useIsProgressNftMintable, useMintProgressNFT, questHints } from '../scripts/claim-modals-api'


type QuestClaimModalProps = {
  questSectionId: string;
  togglePopup: Function
}

const QuestClaimModalEth = ({ questSectionId, togglePopup }: QuestClaimModalProps) => {
  const [showSpinner, nftMinted, accountError, mintNft] = useMintProgressNFT(questSectionId)
  const nftBalance = useNFTBalance(questSectionId);
  const nftMintable = useIsProgressNftMintable(questSectionId, 'token', new BN(0), false);
  const isConnected = useConnectedToMetaMask();
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (isConnected) {
      switchNetworkIfNeeded()
    }
    setTimeout(() => setIsLoading(false), 1000)

  }, [nftMinted, showSpinner, nftMintable, nftBalance, isConnected])


  const handleMint = () => {
    try {
      mintNft(questSectionId);
    } catch (e) {
      console.log(e)
    }
  }

  if (isLoading) {
    return (
      <>
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
          <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >
            <Spinner />
          </div>
        </div>
      </>)
  }


  return (
    <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
      <div className='relative w-[600px] max-w-screen bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16 max-md:m-5 ' >
        <div className=" !p-5 space-y-5 text-center max-h-[95vh]  lg:max-h-[50rem] overflow-y-auto ">
          {nftBalance > 0 && isConnected &&
            <>
              <h3>Du hast das NFT für diese Quest bereits erhalten! Du kannst dir dein Sammlerstück unter  <Link data-linktarget="eth-section" href={"/myNfts"} className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent" >Mein Fortschritt</Link> anschauen.</h3>
            </>
          }

          {!isConnected ? (
            <>
              <div className='w-full relative' >
                <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
                  <h3>Bitte verbinde deine Wallet zunächst mit der Webseite. Eine kurze Video-Anleitung dafür findest du anbei.</h3>
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url={'https://www.youtube.com/watch?v=WPjQoU4aXnU'}
                    controls={true}
                    config={{
                      youtube: {
                        playerVars: { fs: 1 }
                      }
                    }}
                  />
                </div>
              </div>
            </>)
            : null}

          {showSpinner ? (
            <>
              <p>Dein NFT Ist Auf Dem Weg!</p>
              <Spinner />
            </>) : null
          }


          {!showSpinner && !nftMinted && nftBalance === 0 && nftMintable && isConnected ?
            (
              <>
                <h3>Glückwunsch! Du hast deine Quest erfolgreich gemeistert! Als Belohnung erhältst du jetzt dein eigenes NFT (Non-fungible Token). Ein NFT ist ein einzigartiges, digitales Sammlerstück auf der Blockchain. Es ist wie eine digitale Trophäe für deinen Lernerfolg!
                  Klicke unten auf NFT erhalten, um dein NFT zu erhalten und deiner Sammlung hinzuzufügen.</h3>
                <h3>Und so gehts weiter:</h3>
                <ul>
                  <li>1. Klicke auf NFT erhalten, um den Minting-Prozess zu starten.</li>
                  <li>2. Es öffnet sich ein Fenster deiner Wallet, in dem du die Transaktion bestätigen musst. </li>
                </ul>
                <h3>Hinweis: Keine Sorge, es entstehen keine realen Kosten, da wir uns im Testnetz befinden. Für die Transaktionsgebühr brauchst du aber sogenanntes Testnet-ETH, welches kostenlos erhältlich ist. Falls dein Guthaben leer ist, siehst du hier wie du dir welches besorgst: </h3>

                <div className='space-y-2'>
                  <h3><a href="https://youtu.be/zx422X70950" className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'>Mit der Talisman Wallet</a></h3>
                  <h3><a href="https://youtu.be/lfd6o6NO4KM" className='bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent'>Mit der Metamask Wallet</a></h3>
                </div>

                <ul>
                  <li>3. Nach der Bestätigung wird dein NFT erstellt. Sobald dies erfolgreich war, erhältst du eine Benachrichtigung mit weiteren Hinweisen.</li>
                </ul>

                <h3>Los gehts!</h3>

                <PrimaryButton onClick={() => handleMint()} customClassButton='!py-2 !px-5' customClassWrapper='w-min  mx-auto '>NFT&nbsp;erhalten</PrimaryButton>
              </>
            ) : null
          }

          {!showSpinner && nftMinted ? (<>
            <h3>Super, du hast dein NFT erhalten! Hier siehst du deinen Fortschritt.</h3>
            <Link data-linktarget="eth-section" href={"/myNfts"} className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent" >Mein Fortschritt</Link>
          </>) : null}

          {!nftMinted && !nftMintable && isConnected ? (
            <>
              <h3>Ein kleiner Schritt noch!</h3>
              <h3>Es scheint, dass du die Quest noch nicht vollständig abgeschlossen hast. Aber kein Grund zur Sorge, der Weg zum Erfolg ist manchmal holprig. Schau noch einmal genau hin und stelle sicher, dass du alle Anweisungen in den Videos befolgt hast.</h3>
              <h3>Bei Fragen oder Problemen sind wir gerne für dich da (nähere Infos findest du unten rechts auf der Webseite). Auf geh&apos;s, dein NFT wartet schon auf dich!</h3>
              <h3 className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent">{questHints[questSectionId]}</h3>
            </>) : null
          }

          <GeneralButton onClick={() => togglePopup({ questId: questSectionId }, event)} customClassButton='w-min !py-2 !px-5 mx-auto'>Schließen</GeneralButton>
        </div>
      </div>
    </div>
  )
}


export default QuestClaimModalEth;
