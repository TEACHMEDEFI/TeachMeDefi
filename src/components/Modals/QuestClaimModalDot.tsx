import {WsProvider, ApiPromise} from '@polkadot/api'
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import ReactPlayer from "react-player";
import BN from 'bn.js';
import Image from 'next/image'
import Spinner from '../Spinner/Spinner';
import { useEffect, useState } from 'react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useIsProgressNftMintable, useMintProgressNFT } from '../scripts/claim-modals-api'
import { useNFTBalance, switchNetworkIfNeeded, useConnectedToMetaMask, QuestNftContractAddresses } from '../../pages/api/ethereum-api'


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
    const nftMintable = useIsProgressNftMintable(questSectionId, 'token', balances, hasSelectedAccount);
    const nftBalance = useNFTBalance(questSectionId);
    const isConnected = useConnectedToMetaMask();
    const NAME = "Peter"


    useEffect(() => {

        const nodeURL = questSectionId === 'dot-quest-6' ? 'https://1rpc.io/glmr' : 'wss://rpc.polkadot.io';
        setup(nodeURL)

        switchNetworkIfNeeded()

    }, [nftMinted, showSpinner, isConnected])

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

    return (
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
            <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >

            {!isConnected ? (
                    <>
                        <div className='w-full relative' >
                            <div className=' w-full aspect-video overflow-hidden rounded-t-xl ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
                                <h3>Bitte verbinde zunächst deine Wallet mit der Seite. Im Video erfährst du wie das gemacht wird</h3>
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


                {isConnected && !selectedPolkaAccount && 
                    <button
                    type="button"
                    className="bg-gray-100 dark:bg-bgDarkGray rounded-md h-20 w-full px-5  flex justify-between items-center"
                    onClick={handleConnection}>
                        <Image src={"/icons/talisman-red.svg"} width={60} height={60} alt='Talisman Wallet Brand' />
                        Bitte Clicke hier um deine Polka Wallet zu verbinden
                    </button>
                }

                {isConnected && selectedPolkaAccount && !showSpinner &&
                    <p>Du Bist Verbunden mit dem Polkadot Netzwerk: {selectedPolkaAccount ? selectedPolkaAccount.address : ''}</p>
                }


                {showSpinner ? (
                    <>
                        <p>Dein NFT Ist Auf Dem Weg!</p>
                            <Spinner /> 
                    </>
                    ) : null
                }

                {!showSpinner && !nftMinted &&  nftBalance === 0 && nftMintable && isConnected ? 
                    (
                    <>
                        <h3>Glückwunsch! Du hast deine Quest erfolgreich gemeistert! Als Belohnung erhältst du jetzt dein eigenes NFT (Non-fungible Token). Ein NFT ist ein einzigartiges, digitales Sammlerstück auf der Blockchain. Es ist wie eine digitale Trophäe für deinen Lernerfolg! 
                            Klicke unten auf NFT erhalten, um dein NFT zu erhalten und deiner Sammlung hinzuzufügen.</h3>
                        <h3>Und so geht's weiter:</h3>
                        <ul>
                            <li>1. Klicke auf NFT erhalten, um den Minting-Prozess zu starten.</li>
                            <li>2. Es öffnet sich ein Fenster deiner Wallet, in dem du die Transaktion bestätigen musst. </li>
                        </ul>
                        <h3>Hinweis: Keine Sorge, es entstehen keine realen Kosten, da wir uns im Testnetz befinden. Für die Transaktionsgebühr brauchst du aber sogenanntes Testnet-ETH, welches kostenlos erhältlich ist. Falls dein Guthaben leer ist, siehst du hier wie du dir welches besorgst: </h3>

                        <h3><a href="https://youtu.be/zx422X70950">Mit der Talisman Wallet</a></h3>
                        <h3><a href="https://youtu.be/lfd6o6NO4KM">Mit der Metamask Wallet</a></h3>

                        <ul>
                            <li>3. Nach der Bestätigung wird dein NFT erstellt. Sobald dies erfolgreich war, erhältst du eine Benachrichtigung mit weiteren Hinweisen.</li>
                        </ul>

                        <h3>Los geht's!</h3>

                        <PrimaryButton onClick={() => handleMint()} >NFT erhalten</PrimaryButton>
                    </>
                    ):  null
                }

                {!showSpinner && nftMinted ? (<>
                    <h3>Super! Du hast das Progress NFT für diese Quest gemintet!</h3>
                    <p>Die Contract Adresse, die du benötigst um das NFT deiner Wallet hinzuzufügen lautet: {QuestNftContractAddresses[questSectionId]}</p>
                </>): null}


                {!nftMinted && !nftMintable && isConnected && selectedPolkaAccount ? (
                    <>
                        <h3>Das Progress NFT ist im Moment nicht Mintbar, bitte erfülle zunächst die Herausforderungen - Diese werden dir in den Videos erklärt</h3>
                    </>): null
                }

                <GeneralButton onClick={() => togglePopup({questId: false}, event)}>Schließen</GeneralButton>
            </div>
        </div>
    )
}

export default QuestClaimModalDot;