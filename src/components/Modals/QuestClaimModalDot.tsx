import {WsProvider, ApiPromise} from '@polkadot/api'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import BN from 'bn.js';
import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useIsProgressNftMintable, useMintProgressNFT } from '../scripts/claim-modals-api'
import { useBalance } from '../../pages/api/ethereum-api'


type QuestClaimModalProps = {
    questSectionId: string;
    togglePopup: Function;
    setSelectedPolkaAccount: Function,
    selectedAccount: InjectedAccountWithMeta;
}


const QuestClaimModalDot = ({questSectionId, togglePopup, setSelectedPolkaAccount, selectedAccount} : QuestClaimModalProps) => {
    // const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
    // const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
    const NAME = "Peter"
    const [showSpinner, nftMinted, mintNft] = useMintProgressNFT(questSectionId)
    const nftBalance = useBalance(questSectionId, 'nft');
    const nftMintable = useIsProgressNftMintable(questSectionId, 'token');
    const [api, setApi] = useState<ApiPromise>();
    const [balances, setBalances] = useState<BN>();

    // Add the mintableConditions for polkdadot as nex step
    // wss://rpc.polkadot.io > polkadot
    // xcDOT?
    // GLMR?

    useEffect(() => {

        setup()

    }, [nftMinted, showSpinner])

    useEffect(() => {
        if (!selectedAccount || !api) return

        (async() => {
            // Queries
            await api.query.system.account(selectedAccount.address, ({data: {free}} : {data : {free: BN}}) => {
                setBalances(free)
            })
        })()

        console.log('Dot balances are', balances)
    }, [api, selectedAccount])

    const setup = async () => {
        // Connect to a meme Chain
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
                {!selectedAccount ? 
                (<><PrimaryButton onClick={handleConnection}>Bitte Clicke hier um deine Polka Wallet zu verbinden</PrimaryButton></>) : 
                (<>Du Bist Verbunden mit dem Polkadot Netzwerk: {selectedAccount.address}</>)}

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
                    <p>Claim your NFT to continue</p>
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