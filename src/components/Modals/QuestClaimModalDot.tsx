import {WsProvider, ApiPromise} from '@polkadot/api'
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import BN from 'bn.js';
import Image from 'next/image'
import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useIsProgressNftMintable, useMintProgressNFT } from '../scripts/claim-modals-api'
import { useNFTBalance, switchNetworkIfNeeded } from '../../pages/api/ethereum-api'


type QuestClaimModalProps = {
    questSectionId: string;
    togglePopup: Function;
    setSelectedPolkaAccount: Function,
    selectedPolkaAccount: InjectedAccountWithMeta | undefined;
}


const QuestClaimModalDot = ({questSectionId, togglePopup, setSelectedPolkaAccount, selectedPolkaAccount} : QuestClaimModalProps) => {
    const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
    const [showSpinner, nftMinted, mintNft] = useMintProgressNFT(questSectionId)
    const [api, setApi] = useState<ApiPromise>();
    const [balances, setBalances] = useState<BN>();
    const hasSelectedAccount = selectedPolkaAccount ? true : false
    const nftMintable = useIsProgressNftMintable(questSectionId, 'token', balances, hasSelectedAccount);
    const nftBalance = useNFTBalance(questSectionId);
    const NAME = "Peter"


    useEffect(() => {

        const nodeURL = questSectionId === 'dot-quest-6' ? 'https://1rpc.io/glmr' : 'wss://rpc.polkadot.io';
        setup(nodeURL)
        switchNetworkIfNeeded()

    }, [nftMinted, showSpinner])

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

    const handleMint = () => {
        try {
            mintNft(questSectionId);
        } catch (e) {
            console.log(e)
        }
    }


    const displayMessage = (): string => {
        const notMintableMessage = 'Das Progress NFT ist im Moment nicht Mintbar, bitte erfülle zunächst die Herausforderungen - Diese werden dir in den Videos erklärt'
        const alreadyMintedMessage = 'Super! Du hast das Progress NFT für diese Quest gemintet!'

        if (!hasSelectedAccount) {
            return '';
        }

        if (!showSpinner && nftBalance ) {
            return alreadyMintedMessage;
        }

        if (!nftMinted && !nftMintable && !showSpinner ) {
            return notMintableMessage
        }

        return '';
    }

    return (
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
            <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >
                {!selectedPolkaAccount ? 
                    (<> 
                        <button
                        type="button"
                        className="bg-gray-100 dark:bg-bgDarkGray rounded-md h-20 w-full px-5  flex justify-between items-center"
                        onClick={handleConnection}>
                            <Image src={"/icons/talisman-red.svg"} width={60} height={60} alt='Talisman Wallet Brand' />
                            Bitte Clicke hier um deine Polka Wallet zu verbinden
                        </button>
                    </>) : 
                    (<>Du Bist Verbunden mit dem Polkadot Netzwerk: {selectedPolkaAccount.address}</>)
                }


                {showSpinner ? (
                    <>
                        <p>Your NFT Is On Its Way</p>
                            <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl' /> 
                    </>
                    ) : null
                }

                {!showSpinner && !nftMinted &&  nftBalance === 0 && nftMintable ? 
                    (
                    <>
                        <PrimaryButton onClick={() => handleMint()} >Minte Jetzt Dein Progress NFT</PrimaryButton>
                    </>
                    ):  null
                }

                <h3>{displayMessage()}</h3>

                <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
            </div>
        </div>
    )
}

export default QuestClaimModalDot;