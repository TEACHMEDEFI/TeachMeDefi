import { Spinner } from '@chakra-ui/react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react'
const { Contract } = require('ethers')
import { useBalance } from '../../pages/api/ethereum-api'

import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';


type QuestNftContractAddresses = {
    [key: string]: string
}


type QuestClaimModalProps = {
    questSectionId: string;
    togglePopup: Function
        
}

const QuestNftContractAddresses: QuestNftContractAddresses = {
    "eth-quest-1": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "eth-quest-2": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "eth-quest-3": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "eth-quest-4": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "eth-quest-5": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "eth-quest-6": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-1": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-2": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-3": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-4": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-5": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-6": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  };




export default function QuestClaimModal({questSectionId, togglePopup} : QuestClaimModalProps) {
    const { library } = useWeb3React();
    const [showSpinner, setShowSpinner] = useState(false)
    const [nftMinted, setNftMinted] = useState(false);
    const balance = useBalance(questSectionId, 'nft');

      const mintProgressNFT = async () => {
        console.log('Starting to Mint for lesson:', questSectionId)
        try {
          const contractAddress = QuestNftContractAddresses[questSectionId];
          console.log(QuestNftContractAddresses[questSectionId])
          console.log(library.getSigner())
          const contract = new Contract(contractAddress, QuestABI.abi, library.getSigner());
    
          const tx = await contract.mint();
          const hash = tx.hash;

          setShowSpinner(true);

          let once = true;

            contract.on('Transfer', (from, to) => {
                console.log(from, to)
                
                    setShowSpinner(false);
                    setNftMinted(true)
                    once = false;
                // }
            })
        } catch (error) {
          console.error(error);
        }
    };


    useEffect(() => {

    }, [nftMinted])


    console.log(balance)


    return (
        <div className='fixed backdrop-blur-md top-0 w-screen h-screen left-0 z-50 flex items-center justify-center ' >
            <div className='relative w-[600px] bg-gray-300 dark:bg-bgDarkerGray rounded-lg flex flex-col justify-center gap-5 px-8 py-16' >

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


                {!showSpinner && !nftMinted &&  balance === 0 ? (
                <>
                    <p>Claim your NFT to continue</p>
                    <PrimaryButton onClick={() => mintProgressNFT()} >Claim</PrimaryButton>
                    <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
                </>): (
                    <>
                        <h3>Herzlichen Glückwunsch, Sie haben das Progress NFT gemintet!</h3>
                        <GeneralButton onClick={() => togglePopup({questId: false})}>Modal Schließen</GeneralButton>
                    </>
                )}
            </div>
        </div>
    )
}

