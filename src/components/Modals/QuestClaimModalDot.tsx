import {WsProvider, ApiPromise} from '@polkadot/api'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import BN from 'bn.js';
import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { QuestNftContractAddresses, useIsProgressNftMintable, useMintProgressNFT } from '../scripts/claim-modals-api'
import { useBalance, useUserProgress } from '../../pages/api/ethereum-api'


type QuestClaimModalProps = {
    questSectionId: string;
    togglePopup: Function;
    setSelectedPolkaAccount: Function,
    selectedAccount: InjectedAccountWithMeta;
}


const QuestClaimModalDot = ({questSectionId, togglePopup, setSelectedPolkaAccount, selectedAccount} : QuestClaimModalProps) => {
    // const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
    // const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
    const NAME = "GMorDie"
    const [showSpinner, nftMinted, mintNft] = useMintProgressNFT(questSectionId)
    const nftBalance = useBalance(questSectionId, 'nft');
    const nftMintable = useIsProgressNftMintable(questSectionId, 'token');

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

                <PrimaryButton onClick={() => handleMint()} >Minte Jetzt Dein Progress NFT</PrimaryButton>
            
                <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
            
            </div>
        </div>
    )
}

export default QuestClaimModalDot;