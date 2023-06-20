import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react'
const { Contract } = require('ethers')
import { useUserProgress, useTokenBalance } from '../../pages/api/ethereum-api'
import { ethQuests } from '@/data/eth';
import { dotQuests } from '@/data/dot';
import BN from 'bn.js';

import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';

type QuestNftContractAddresses = {
    [key: string]: string
}


export const QuestNftContractAddresses: QuestNftContractAddresses = {
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


/*
* Helper function to check wether a user has completed all videos of a certain questId
*/
export const checkQuestsForCompleteView = (questSectionId: string, hasProgress: Function): boolean => {
    let userHasAllProgress = true;
    let dataArray = questSectionId.indexOf('eth') > -1 ? ethQuests : dotQuests
    const sectionQuest = dataArray.filter((quest) => {
        return quest.questSectionId === questSectionId;
    })

    const lessons = sectionQuest[0].lessons;

    lessons?.forEach((lesson: any) => {
        if (!hasProgress(lesson.id)) {
            userHasAllProgress = false;
        }
    })

    return userHasAllProgress;
}



/*
* Checks whether a progress NFT is mintable depending on the requirements
*/
export const useIsProgressNftMintable = (questSectionId: string, token: string, balances: BN | undefined, polkaWalletConnected: boolean): boolean => {
    const [hasProgress] = useUserProgress();
    const { account } = useWeb3React();
    let tokenBalance = useTokenBalance(questSectionId);
    tokenBalance = !tokenBalance ? 0 : tokenBalance;
    let mintable = false;


    if (questSectionId === 'eth-quest-1') {
        console.log(account)
        mintable = account ? true : false
    } else if (questSectionId === 'dot-quest-1') {
        mintable = polkaWalletConnected ? true : false
    } else if (questSectionId == 'eth-quest-5' || questSectionId == 'eth-quest-6' || questSectionId == 'dot-quest-3' || questSectionId == 'dot-quest-5') {
        mintable = checkQuestsForCompleteView(questSectionId, hasProgress)
    } else if (questSectionId == 'dot-quest-2') {
        mintable = balances ? true : false;
    } else {
        mintable = tokenBalance > 0;
    }


    console.log('Quest NFT is mintable', mintable)

    return mintable;
}


/*
* Hook to mint the progress NFT and take care of Spinner etc.
*/
export const useMintProgressNFT =  (questSectionId: string): [showSpinner:  boolean, nftMinted: boolean, mintNft: (questSectionId: string) => void] => {
    const [showSpinner, setShowSpinner] = useState(false)
    const [nftMinted, setNftMinted] = useState(false);
    const { library } = useWeb3React();

    console.log('Starting to Mint for lesson:', questSectionId)

    useEffect(() => {

    }, [showSpinner, nftMinted])

    const mintNft = () => {

        try {
            const contractAddress = QuestNftContractAddresses[questSectionId];
            const contract = new Contract(contractAddress, QuestABI.abi, library.getSigner());
            (async() => {
                // Queries
                await contract.mint();
                setShowSpinner(true);
            })()

            let once = true;
            contract.on('Transfer', () => { 
                setShowSpinner(false);
                setNftMinted(true)
                once = false;
            })
        } catch (error) {
            console.error(error);
            setShowSpinner(false);
            setNftMinted(false)
        }

    }

    return [showSpinner, nftMinted, mintNft];
}
