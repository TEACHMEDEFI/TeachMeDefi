import { Spinner } from '@chakra-ui/react'
import { PrimaryButton, GeneralButton } from '../Buttons/Buttons';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react'
const { Contract } = require('ethers')
import { useBalance, useUserProgress } from '../../pages/api/ethereum-api'
import { dotQuests } from '@/data/dot'
import { ethQuests } from '@/data/eth'

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
    "eth-quest-7": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-1": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-2": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-3": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-4": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-5": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
    "dot-quest-6": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string
};

const checkQuestsForCompleteView = (questSectionId: string, hasProgress: Function): boolean => {
    let userHasAllProgress = true;
    let dataArray = questSectionId.indexOf('eth') > -1 ? ethQuests : dotQuests
    const sectionQuest = dataArray.filter((quest) => {
        return quest.questSectionId === questSectionId;
    })

    const lessons = sectionQuest[0].lessons;

    lessons?.forEach((lesson) => {
        if (!hasProgress(lesson.id)) {
            userHasAllProgress = false;
        }
    })

    return userHasAllProgress;
}


const useIsProgressNftMintable = (questSectionId: string, token: string): boolean => {
    const [hasProgress] = useUserProgress();
    const { account } = useWeb3React();
    let tokenBalance = useBalance(questSectionId, token);
    tokenBalance = !tokenBalance ? 0 : tokenBalance;
    let mintable = false;

    console.log('Section Id', questSectionId)

    if (questSectionId === 'eth-quest-1') {
        console.log(account)
        mintable = account ? true : false
    } else if (questSectionId == 'eth-quest-5' || questSectionId == 'eth-quest-6') {
        mintable = checkQuestsForCompleteView(questSectionId, hasProgress)
    } else {
        mintable = tokenBalance > 0;
    }

    return mintable;
}


export default function QuestClaimModal({questSectionId, togglePopup} : QuestClaimModalProps) {
    const { library } = useWeb3React();
    const [showSpinner, setShowSpinner] = useState(false)
    const [nftMinted, setNftMinted] = useState(false);
    const nftBalance = useBalance(questSectionId, 'nft');
    const nftMintable = useIsProgressNftMintable(questSectionId, 'token');

    useEffect(() => {

    }, [nftMinted])

      const mintProgressNFT = async () => {
        console.log('Starting to Mint for lesson:', questSectionId)
        try {
            const contractAddress = QuestNftContractAddresses[questSectionId];
            const contract = new Contract(contractAddress, QuestABI.abi, library.getSigner());
    
            await contract.mint();
            setShowSpinner(true);

            let once = true;
            contract.on('Transfer', (from, to) => {
                setShowSpinner(false);
                setNftMinted(true)
                once = false;
            })
        } catch (error) {
            console.error(error);
        }
    };


    console.log(nftMintable)


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


                {!showSpinner && !nftMinted &&  nftBalance === 0 && nftMintable ? 
                (
                <>
                    <p>Claim your NFT to continue</p>
                    <PrimaryButton onClick={() => mintProgressNFT()} >Claim</PrimaryButton>
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

