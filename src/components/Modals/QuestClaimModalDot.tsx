import {WsProvider, ApiPromise} from '@polkadot/api'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import BN from 'bn.js';
import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useIsProgressNftMintable, useMintProgressNFT } from '../scripts/claim-modals-api'
import { useBalance } from '../../pages/api/ethereum-api'
import Image from 'next/image'


type QuestClaimModalProps = {
    questSectionId: string;
    togglePopup: Function;
    setSelectedPolkaAccount: Function,
    selectedPolkaAccount: InjectedAccountWithMeta | undefined;
}


const QuestClaimModalDot = ({questSectionId, togglePopup, setSelectedPolkaAccount, selectedPolkaAccount} : QuestClaimModalProps) => {
    // const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
    // const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
    const NAME = "Peter"
    const [showSpinner, nftMinted, mintNft] = useMintProgressNFT(questSectionId)
    const nftBalance = useBalance(questSectionId, 'nft');
    const [api, setApi] = useState<ApiPromise>();
    const [balances, setBalances] = useState<BN>();
    const hasSelectedAccount = selectedPolkaAccount ? true : false
    const nftMintable = useIsProgressNftMintable(questSectionId, 'token', balances, hasSelectedAccount);

    // Add the mintableConditions for polkdadot as nex step
    // wss://rpc.polkadot.io > polkadot
    // xcDOT?
    // GLMR?

    useEffect(() => {

        setup()

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

    const setup = async () => {
        // Connect to polka relay chain
        // The ULREndpoints differ from Chain to chain!
        // Provider will depend on the task
        const wsProvider = new WsProvider('wss://rpc.polkadot.io')

        const api = await ApiPromise.create({provider: wsProvider})

        setApi(api);

    }

    const handleConnection = async () => {
        if (typeof window !== 'undefined') {
            const extensions = await web3Enable(NAME)

            if (!extensions) {
                throw Error('No extension found')
            }
    
            const allAccounts = await web3Accounts();
    
            // setAccounts(allAccounts);

            if (allAccounts.length >=  1) {
                setSelectedPolkaAccount(allAccounts[0]);
                
            }

            console.log(allAccounts)
        }
       
    }

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
                {!selectedPolkaAccount ? 
                (<> <button
                    type="button"
                    className="bg-gray-100 dark:bg-bgDarkGray rounded-md h-20 w-full px-5  flex justify-between items-center"
                    onClick={handleConnection}>
                    <Image src={"/icons/talisman-red.svg"} width={60} height={60} alt='Talisman Wallet Brand' />
                    Bitte Clicke hier um deine Polka Wallet zu verbinden
                 </button></>) : 
                (<>Du Bist Verbunden mit dem Polkadot Netzwerk: {selectedPolkaAccount.address}</>)}


                {showSpinner ? (
                <>
                <p>Your NFT Is On Its Way</p>
                    <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /> 
                <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
                </>) : null}


                {!showSpinner && !nftMinted &&  nftBalance === 0 && nftMintable ? 
                (
                <>
                    <PrimaryButton onClick={() => handleMint()} >Minte Jetzt Dein Progress NFT</PrimaryButton>
                    <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
                </>
                ): 
                (
                    <>
                        <h3>{nftMintable ? 'Herzlichen Glückwunsch, Sie haben das Progress NFT gemintet!': 'Nicht Mintbar, bitte erfülle zunächst die Herausforderung'}</h3>
                        <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
                    </>
                )}
            
            </div>
        </div>
    )
}

export default QuestClaimModalDot;