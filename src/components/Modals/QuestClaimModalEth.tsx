// import { Spinner } from '@chakra-ui/react'
import Spinner from '../Spinner/Spinner';
import { useEffect, useState } from 'react'
import Link from "next/link"
import ReactPlayer from "react-player";
import { BN } from 'bn.js';
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useNFTBalance, switchNetworkIfNeeded, useConnectedToMetaMask, QuestNftContractAddresses } from '../../pages/api/ethereum-api'
import { useIsProgressNftMintable, useMintProgressNFT, questHints } from '../scripts/claim-modals-api'
import Confetti from '@/components/Confetti/Confetti'


type QuestClaimModalProps = {
  questSectionId: string;
  togglePopup: Function;
  onClose: Function;
  modalOpen: boolean
}

const QuestClaimModalEth = ({ questSectionId, togglePopup, modalOpen, onClose }: QuestClaimModalProps) => {
  const [showSpinner, nftMinted, accountError, mintNft] = useMintProgressNFT(questSectionId)
  const nftBalance = useNFTBalance(questSectionId);
  const nftMintable = useIsProgressNftMintable(questSectionId, false, new BN(0), false);
  const isConnected = useConnectedToMetaMask();
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (isConnected) {
      switchNetworkIfNeeded()
    }
    setTimeout(() => setIsLoading(false), 1000)

  }, [nftMinted, showSpinner, nftMintable, nftBalance, isConnected])


  useEffect(() => {
    if (modalOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
    };
}, [modalOpen]);


  const handleClose = () => {
    onClose(questSectionId)
  }

  const handleOutsideClick = (event: MouseEvent) => {
      const modalElement = document.querySelector('.lesson-page-modal');
      if (modalElement && !modalElement.contains(event.target as Node)) {
          handleClose();
      }
  };


  const handleMint = () => {
    try {
      mintNft(questSectionId);
    } catch (e) {
      console.log(e)
    }
  }

  if (!modalOpen) {
    return (<></>)
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
      <div className='relative w-[600px] max-w-screen bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16 max-md:m-5 lesson-page-modal' >
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
                <h3>Glückwunsch! Du hast deine Quest erfolgreich gemeistert! Als Belohnung erhältst du jetzt dein eigenes NFT (Non-fungible Token). Ein NFT ist ein einzigartiges, digitales Sammlerstück auf der Blockchain. Es ist wie eine digitale Trophäe für deinen Lernerfolg!</h3>
                <h3>Klicke unten auf NFT erhalten, um dein NFT zu erhalten und deiner Sammlung hinzuzufügen. Anbei findest du ein kurzes Video-Tutorial dazu.</h3>

                <div className=' w-full aspect-video overflow-hidden rounded-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url={'https://youtu.be/DGHg8D1FVmE'}
                    controls={true}
                    config={{
                      youtube: {
                        playerVars: { fs: 1 }
                      }
                    }}
                  />
                </div>
                <PrimaryButton onClick={() => handleMint()} customClassButton='w-max !py-2 !px-5'  customClassWrapper='w-min  mx-auto '>NFT&nbsp;erhalten</PrimaryButton>
              </>
            ) : null
          }

          {!showSpinner && nftMinted ? (<>
            <h3>Super, du hast dein NFT erhalten! Hier siehst du deinen Fortschritt.</h3>
            <Link data-linktarget="eth-section" href={"/myNfts"} className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent" >Mein Fortschritt</Link>
            <Confetti />
          </>) : null}

          {!nftMinted && !nftMintable && isConnected ? (
            <>
              <h3>Ein kleiner Schritt noch!</h3>
              <h3>Es scheint, dass du die Quest noch nicht vollständig abgeschlossen hast. Aber kein Grund zur Sorge, der Weg zum Erfolg ist manchmal holprig. Schau noch einmal genau hin und stelle sicher, dass du alle Anweisungen in den Videos befolgt hast.</h3>
              <h3>Bei Fragen oder Problemen sind wir gerne für dich da (nähere Infos findest du unten rechts auf der Webseite unter Support). Auf geh&apos;s, dein NFT wartet schon auf dich!</h3>
              <h3 className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent">{questHints[questSectionId]}</h3>
            </>) : null
          }

          <GeneralButton onClick={() => handleClose()} customClassButton='w-min !py-2 !px-5 mx-auto'>Schließen</GeneralButton>
        </div>
      </div>
    </div>
  )
}


export default QuestClaimModalEth;
