import { WsProvider, ApiPromise } from '@polkadot/api'
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { useWeb3React } from '@web3-react/core';
import ReactPlayer from "react-player";
import BN from 'bn.js';
import Image from 'next/image'
import Link from "next/link"
import Spinner from '../Spinner/Spinner';
import { useEffect, useState } from 'react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useIsProgressNftMintable, useMintProgressNFT, questHints } from '../scripts/claim-modals-api'
import { useNFTBalance, switchNetworkIfNeeded, useConnectedToMetaMask } from '../../pages/api/ethereum-api'
import { encodeAddress } from '@polkadot/util-crypto';
import Confetti from '@/components/Confetti/Confetti'


type QuestClaimModalProps = {
  questSectionId: string;
  togglePopup: Function;
  setSelectedPolkaAccount: Function,
  selectedPolkaAccount: InjectedAccountWithMeta | undefined;
  onClose: Function;
  modalOpen: boolean
}

type TokenBalance = {
    result: string;
}



const QuestClaimModalDot = ({ questSectionId, togglePopup, setSelectedPolkaAccount, selectedPolkaAccount, modalOpen, onClose }: QuestClaimModalProps) => {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
  const [showSpinner, nftMinted, accountError, mintNft] = useMintProgressNFT(questSectionId)
  const [api, setApi] = useState<ApiPromise>();
  const [balances, setBalances] = useState<BN>();
  const hasSelectedAccount = selectedPolkaAccount ? true : false
  const nftBalance = useNFTBalance(questSectionId);
  const isConnected = useConnectedToMetaMask();
  const [extrinsic, setExtrinsic] = useState<string>('');
  const [blockId, setBlockId] = useState<string>('');
  const nftMintable = useIsProgressNftMintable(questSectionId, 'token', balances, hasSelectedAccount);
  const [specialChallengeDone, setSpecialChallengeDone] = useState<boolean>(false);
  const [specialChallengeFail, setSpecialChallengeFail] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { account } = useWeb3React();
  const NAME = "Peter"

  useEffect(() => {
    const nodeURL = questSectionId === 'dot-quest-5' ? 'wss://1rpc.io/glmr' : 'wss://rpc.polkadot.io';
    setup(nodeURL)

    switchNetworkIfNeeded()


    setTimeout(() => setIsLoading(false), 1000)

    console.log('Quest claim modal rerender')

  }, [nftMinted, showSpinner, isConnected, questSectionId, specialChallengeDone])


  useEffect(() => {
    if (!selectedPolkaAccount || !api) return

    (async() => {

        if (questSectionId === 'dot-quest-2') {
            // @ts-ignore: Unreachable code error
            const { nonce, data: balance } = await api.query.system.account(selectedPolkaAccount.address);

            const now = await api.query.timestamp.now();

            setBalances(new BN(balance.free));

            console.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);
        }

        if (questSectionId === 'dot-quest-4' || questSectionId === 'dot-quest-5') {

            const query = questSectionId === 'dot-quest-4' 
            ? `https://api-moonbeam.moonscan.io/api?module=account&action=tokenbalance&contractaddress=0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080&address=${account as string}&tag=latest&apikey=${process.env.NEXT_PUBLIC_MOONMBEAM_API_KEY}`
            : `https://api-moonbeam.moonscan.io/api?module=account&action=balance&address=${account as string}&tag=latest&apikey=${process.env.NEXT_PUBLIC_MOONMBEAM_API_KEY}` 

            let erc20BalanceRequest: Response = await fetch(query)

            
            const tokenBalanceRequestJson: TokenBalance = await erc20BalanceRequest.json();

            const balance = tokenBalanceRequestJson ? tokenBalanceRequestJson.result : 0;

            console.log(balance);

            const now = await api.query.timestamp.now();

            const newBalance = new BN(balance);

            setBalances(newBalance);

            console.log(`Token ${now}: balance of ${new BN(balance)}`);

        }
        
    })()

  }, [api, selectedPolkaAccount])



  useEffect(() => {
    if (modalOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
        console.log('click listener added')
    }
    console.log('Special Challenge done', specialChallengeDone)

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
          console.log('Clicked')
          handleClose();
      }
  };


  /*
 * Sets up the RPC Connection to a certain Polka Network
 */
  const setup = async (nodeURL: string) => {
    const wsProvider = new WsProvider(nodeURL)

    const api = await ApiPromise.create({ provider: wsProvider })

    setApi(api);
  }


  const getDotAddress = (accountAddress:string ) => {
    // Specify the prefix for the Dot address (Check the appropriate prefix for your network)
    const prefix = 0;
    const dotAddress = encodeAddress(accountAddress, prefix);
  
    console.log('The Dot address is:', dotAddress);
  
    return dotAddress;
  }
  

  const checkExtrinsic = async (): Promise<boolean> => {
    if (!api || !blockId || !extrinsic || !selectedPolkaAccount) return false;

    let userIsSigner = false;
    const dotAddress = getDotAddress(selectedPolkaAccount.address)
    console.log('dot Address', dotAddress)

    try {
        const blockHash = await api.rpc.chain.getBlockHash(blockId);
        const signedBlock = await api.rpc.chain.getBlock(blockHash);
        

        // the hash for each extrinsic in the block
        signedBlock.block.extrinsics.forEach((ex: any) => {
          const humanReadableEx: any = ex.toHuman();
          const signer = humanReadableEx.signer;


          console.log('Signer is', signer?.Id);

          if (ex.hash.toHex() === extrinsic && signer.Id && selectedPolkaAccount && dotAddress === signer?.Id) {

              userIsSigner = true;
          }
        });
    } catch (e) {
        userIsSigner = false
    }

    setSpecialChallengeDone(userIsSigner);

    return userIsSigner;
  }


  /*
  * Check transaction Id for Staking Call
  */
  const handleUserInputForTransaction = (event: any) => {
    setExtrinsic(event.target.value)
  }


  /*
 * Check transaction Id for Staking Call
 */
  const handleUserInputForBlock = (event: any) => {
    setBlockId(event.target.value)
  }


  const handleUserSubmit = async () => {
    const inputValid = await checkExtrinsic()

    if (inputValid) {
      setSpecialChallengeFail(false)
      setSpecialChallengeDone(true)
    } else {
      setSpecialChallengeFail(true)
    }
  }


  /*
  * handles connecting Talisman Wallet to the Site    
  */
  const handleConnection = async () => {
    if (typeof window !== 'undefined') {
      const extensions = await web3Enable(NAME)

      if (!extensions) {
        throw Error('No extension found')
      }

      const allAccounts = await web3Accounts();

      setAccounts(allAccounts);

      if (allAccounts.length >= 1) {
        setSelectedPolkaAccount(allAccounts[0]);

      }
    }

  }

  /*
  * handles minting of the Progress NFT  
  */
  const handleMint = () => {
    try {
      mintNft(questSectionId);
    } catch (e) {
      console.log(e)
    }
  }

  // if (!modalOpen) {
  //   return (<></>)
  // }

  if (isLoading) {
    return (
      <>
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
          <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16 lesson-page-modal' >
            <Spinner />
          </div>
        </div>
      </>)
  }



  return (
    <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
      <div className='relative w-[600px] max-w-screen bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16 max-md:m-5 lesson-page-modal' >
        <div className="!p-5 space-y-5 text-center max-h-[95vh]  lg:max-h-[50rem] overflow-y-auto">
          {nftBalance > 0 && isConnected &&
            <>
              <h3>Du hast das NFT für diese Quest bereits erhalten! Du kannst dir dein Sammlerstück unter <Link data-linktarget="eth-section" href={"/myNfts"} className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent" >Mein Fortschritt</Link> anschauen.</h3>
            </>
          }

          {!isConnected || !selectedPolkaAccount && nftBalance === 0 ? (
            <>
              <div className='w-full relative' >
                <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
                  <h3>Bitte verbinde deine Wallet zunächst mit der Webseite. Eine kurze Video-Anleitung dafür findest du anbei.</h3>
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url={'https://youtu.be/EfqgG7yga-E'}
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


          {isConnected && !selectedPolkaAccount && nftBalance === 0 &&
            <button
              type="button"
              className="bg-gray-100 dark:bg-bgDarkGray rounded-md h-20 w-full px-5  flex justify-between items-center"
              onClick={handleConnection}>
              <Image src={"/icons/talisman-red.svg"} width={60} height={60} alt='Talisman Wallet Brand' />
              Bitte klicke hier, um deine Polkadot Wallet zu verbinden.
            </button>
          }

          {isConnected && selectedPolkaAccount && !showSpinner &&
            <p >Du bist verbunden mit dem Polkadot Netzwerk. Die Addresse deiner verbundenen Wallet lautet: <br /> <span className='break-all'>{selectedPolkaAccount ? selectedPolkaAccount.address : ''}</span></p>
          }


          {showSpinner ? (
            <>
              <p>Dein NFT Ist Auf Dem Weg!</p>
              <Spinner />
            </>
          ) : null
          }

          {!showSpinner && !nftMinted && nftBalance === 0 && isConnected && selectedPolkaAccount && (specialChallengeDone || nftMintable) ?
            (
              <>
                <h3>Glückwunsch! Du hast deine Quest erfolgreich gemeistert! Als Belohnung erhältst du jetzt dein eigenes NFT (Non-fungible Token). Ein NFT ist ein einzigartiges, digitales Sammlerstück auf der Blockchain. Es ist wie eine digitale Trophäe für deinen Lernerfolg!</h3>
                <h3>Und so gehts weiter:</h3>

                {/* <ul>
                  <li>1. Klicke auf NFT erhalten, um den Minting-Prozess zu starten.</li>
                  <li>2. Es öffnet sich ein Fenster deiner Wallet, in dem du die Transaktion bestätigen musst. </li>
                </ul>
                <h3>Hinweis: Keine Sorge, es entstehen keine realen Kosten, da wir uns im Testnetz befinden. Für die Transaktionsgebühr brauchst du aber sogenanntes Testnet-ETH, welches kostenlos erhältlich ist. Falls dein Guthaben leer ist, siehst du hier wie du dir welches besorgst: </h3>

                <h3><a href="https://youtu.be/zx422X70950" target="_blank">Mit der Talisman Wallet</a></h3>
                <h3><a href="https://youtu.be/lfd6o6NO4KM" target="_blank">Mit der Metamask Wallet</a></h3>

                <ul>
                  <li>3. Nach der Bestätigung wird dein NFT erstellt. Sobald dies erfolgreich war, erhältst du eine Benachrichtigung mit weiteren Hinweisen.</li>
                </ul>

                <h3>Los gehts!</h3> */}

                <h3>Klicke unten auf NFT erhalten, um dein NFT zu erhalten und deiner Sammlung hinzuzufügen. Anbei findest du ein kurzes Video-Tutorial dazu.</h3>
                <div className=' w-full aspect-video overflow-hidden rounded-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >

                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url={'https://youtu.be/JuguZtA91O4'}
                    controls={true}
                    config={{
                      youtube: {
                        playerVars: { fs: 1 }
                      }
                    }}
                  />
                </div>


                <PrimaryButton onClick={() => handleMint()} customClassWrapper='w-min mx-auto' customClassButton='w-max !py-2 !px-5' >NFT erhalten</PrimaryButton>
              </>
            ) : null
          }

          {!showSpinner && nftMinted ? (<>
            <h3>Super, du hast dein NFT erhalten! Hier siehst du deinen Fortschritt.</h3>
            <Link data-linktarget="eth-section" href={"/myNfts"} className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent" >Mein Fortschritt</Link>
            <Confetti />
          </>) : null}


          {!nftMinted && !nftMintable && isConnected && selectedPolkaAccount && !specialChallengeDone && questSectionId === 'dot-quest-3' ? (
            <>
              <h3>Ein kleiner Schritt noch!</h3>
              <h3>Bitte kopiere die Extrinsic Hash deines Staking Calls in das Eingabefeld und bestätige.
                Anbei findest du eine kurze Video-Anleitung dazu</h3>
              <div className='w-full relative' >
                <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >

                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url={'https://youtu.be/U5PFqIq-x3o'}
                    controls={true}
                    config={{
                      youtube: {
                        playerVars: { fs: 1 }
                      }
                    }}
                  />
                </div>
              </div>
              {specialChallengeFail && <h3 className="red-text">Das Extrinsic konnte deiner Addresse nicht zugerechnet werden</h3>}
              <div className="flex input-container-modal">
                <input className="input-field-dot" id="transaction-id" type="text" placeholder="Extrinsic Hash" value={extrinsic} onChange={() => handleUserInputForTransaction(event)} />
                <input className="input-field-dot" id="block-id" type="text" placeholder="Block ID" value={blockId} onChange={() => handleUserInputForBlock(event)} />
              </div>

              <PrimaryButton onClick={() => handleUserSubmit()} customClassButton='w-min !py-2 !px-5 mx-auto' customClassWrapper='w-min  mx-auto ' >Eingabe&nbsp;Bestätigen</PrimaryButton>
              <h3 className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent">{questHints[questSectionId]}</h3>
            </>) : null
          }



          {!nftMinted && !nftMintable && isConnected && selectedPolkaAccount && questSectionId !== 'dot-quest-3' ? (
            <>
              <h3>Ein kleiner Schritt noch!</h3>
              <h3>Es scheint, dass du die Quest noch nicht vollständig abgeschlossen hast. Aber kein Grund zur Sorge, der Weg zum Erfolg ist manchmal holprig. Schau noch einmal genau hin und stelle sicher, dass du alle Anweisungen in den Videos befolgt hast.</h3>
              <h3>Bei Fragen oder Problemen sind wir gerne für dich da (nähere Infos findest du unten rechts auf der Webseite unter Support). Auf geht&apos;s, dein NFT wartet schon auf dich!</h3>
              <h3 className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent">{questHints[questSectionId]}</h3>
            </>) : null
          }

          <GeneralButton onClick={() => handleClose()} customClassButton='w-min !py-2 !px-5 mx-auto' >Schließen</GeneralButton>
        </div>
      </div>
    </div>
  )
}

export default QuestClaimModalDot;