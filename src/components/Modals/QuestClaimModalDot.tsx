import {WsProvider, ApiPromise} from '@polkadot/api'
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import ReactPlayer from "react-player";
import BN from 'bn.js';
import Image from 'next/image'
import Link from "next/link"
import Spinner from '../Spinner/Spinner';
import { useEffect, useState } from 'react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useIsProgressNftMintable, useMintProgressNFT } from '../scripts/claim-modals-api'
import { useNFTBalance, switchNetworkIfNeeded, useConnectedToMetaMask } from '../../pages/api/ethereum-api'


type QuestClaimModalProps = {
    questSectionId: string;
    togglePopup: Function;
    setSelectedPolkaAccount: Function,
    selectedPolkaAccount: InjectedAccountWithMeta | undefined;
}



const QuestClaimModalDot = ({questSectionId, togglePopup, setSelectedPolkaAccount, selectedPolkaAccount} : QuestClaimModalProps) => {
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
    const NAME = "Peter"


    useEffect(() => {
        // Quest 3 transactions ID eingeben
        // Quest 4 xcdot auf moonbeam balance größer 0
        const nodeURL = questSectionId === 'dot-quest-5' ? 'wss://1rpc.io/glmr' : 'wss://rpc.polkadot.io';
        setup(nodeURL)

        switchNetworkIfNeeded()

        setTimeout(() => setIsLoading(false), 1000)

    }, [nftMinted, showSpinner, isConnected, questSectionId, specialChallengeDone])

    useEffect(() => {
        if (!selectedPolkaAccount || !api) return

        (async() => {
            // Queries
            // @ts-ignore: Unreachable code error
            const { nonce, data: balance } = await api.query.system.account(selectedPolkaAccount.address);
            const now = await api.query.timestamp.now();

            setBalances(new BN(balance.free));

            console.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);
        })()

    }, [api, selectedPolkaAccount])



    const checkExtrinsic = async (): Promise<boolean> => {
        // no blockHash is specified, so we retrieve the latest

        if (!api || !blockId || !extrinsic) return false;

        // returns Hash
        const blockHash = await api.rpc.chain.getBlockHash(blockId);
        // returns SignedBlock
        const signedBlock = await api.rpc.chain.getBlock(blockHash);
        let userIsSigner = false

        // the hash for each extrinsic in the block
        signedBlock.block.extrinsics.forEach((ex: any) => {
            const humanReadableEx: any = ex.toHuman();
            const signer = humanReadableEx.signer;


            console.log(ex.toHuman())
            

            console.log('Signer is', signer?.Id);
            console.log('My Address is', selectedPolkaAccount)

            if (ex.hash.toHex() === extrinsic && signer.Id && selectedPolkaAccount) {
                
                //  && selectedPolkaAccount.address === signer.Id
                userIsSigner = true;
                console.log('Extrinsic Found!')
            }
            
        });


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
            console.log('Done')
            setSpecialChallengeFail(false)
            setSpecialChallengeDone(true)
        } else {
            setSpecialChallengeFail(true)
        }
    }


    /*
    * Sets up the RPC Connection to a certain Polka Network
    */
    const setup = async (nodeURL: string) => {
        const wsProvider = new WsProvider(nodeURL)

        const api = await ApiPromise.create({provider: wsProvider})

        setApi(api);
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

            if (allAccounts.length >=  1) {
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
            <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >

                {nftBalance > 0 && isConnected && 
                        <>
                            <h3>Super! Du hast das NFT für diese Quest bereits geminted. Auf der <Link data-linktarget="eth-section" href={"/myNfts"} className="bg-gradient-to-r from-primaryBlue via-secondaryPurple to-primaryPink bg-clip-text text-transparent" >Fortschritt Seite</Link> kannst du dir dein Sammlerstück anschauen..</h3>
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
                        <p>Du bist verbunden mit dem Polkadot Netzwerk. Die Addresse deiner verbundenen Wallet lautet: {selectedPolkaAccount ? selectedPolkaAccount.address : ''}</p>
                    }


                    {showSpinner ? (
                        <>
                            <p>Dein NFT Ist Auf Dem Weg!</p>
                                <Spinner /> 
                        </>
                        ) : null
                    }

                    {!showSpinner && !nftMinted &&  nftBalance === 0 && isConnected && selectedPolkaAccount &&  (specialChallengeDone || nftMintable) ? 
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

                            <h3><a href="https://youtu.be/zx422X70950" target="_blank">Mit der Talisman Wallet</a></h3>
                            <h3><a href="https://youtu.be/lfd6o6NO4KM" target="_blank">Mit der Metamask Wallet</a></h3>

                            <ul>
                                <li>3. Nach der Bestätigung wird dein NFT erstellt. Sobald dies erfolgreich war, erhältst du eine Benachrichtigung mit weiteren Hinweisen.</li>
                            </ul>

                            <h3>Los gehts!</h3>

                            <PrimaryButton onClick={() => handleMint()} >NFT erhalten</PrimaryButton>
                        </>
                        ):  null
                    }

                    {!showSpinner && nftMinted ? (<>
                        <h3>Super, du hast dein NFT erhalten! Auf der Fortschritt Seite kannst du dir dein Sammlerstück anschauen.</h3>
                    </>): null}


                    {!nftMinted && !nftMintable && isConnected && selectedPolkaAccount && !specialChallengeDone && questSectionId === 'dot-quest-3' ? (
                        <>
                            <h3>Ein kleiner Schritt noch!</h3>
                            <h3>Bitte kopiere die Transaktions Id deines Staking Calls in das Eingabefeld und bestätige. 
                                Anbei findest du eine kurze Video-Anleitung dazu, wie du die Transaktions Id abrufen kannst</h3>
                                {specialChallengeFail && <h3 className="red-text">Das Extrinsic konnte deiner Addresse nicht zugerechnet werden</h3>}
                            <div className="flex">
                                <input id="transaction-id" type="text" placeholder="Transaktions Id" value={extrinsic} onChange={() => handleUserInputForTransaction(event)}/>
                                <input id="block-id" type="text" placeholder="Block Id" value={blockId} onChange={() => handleUserInputForBlock(event)}/>
                            </div> 
                            
                            <PrimaryButton onClick={() => handleUserSubmit()} >Eingabe Bestätigen</PrimaryButton>
                        </>): null
                    }



                    {!nftMinted && !nftMintable && isConnected && selectedPolkaAccount && questSectionId !== 'dot-quest-3' ? (
                        <>
                            <h3>Ein kleiner Schritt noch!</h3>
                            <h3>Es scheint, dass du die Quest noch nicht vollständig abgeschlossen hast. Aber kein Grund zur Sorge, der Weg zum Erfolg ist manchmal holprig. Schau noch einmal genau hin und stelle sicher, dass du alle Anweisungen in den Videos befolgt hast.</h3>
                            <h3>Bei Fragen oder Problemen sind wir gerne für dich da (nähere Infos findest du unten rechts auf der Webseite). Auf geht&apos;s, dein NFT wartet schon auf dich!</h3>
                        </>): null
                    }

                    <GeneralButton onClick={() => togglePopup({questId: false}, event)}>Schließen</GeneralButton>
            </div>
        </div>
    )
}

export default QuestClaimModalDot;