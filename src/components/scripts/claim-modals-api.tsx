const { Contract } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react'
import BN from 'bn.js';
import { useUserProgress, useTokenBalance, QuestNftContractAddresses } from '../../pages/api/ethereum-api'
import { ethQuests } from '@/data/eth';
import { dotQuests } from '@/data/dot';
import { ethTheory } from '@/data/eth/ethTheory';
import { dotTheory } from '@/data/dot/dotTheory';
import { Quests } from '@/data/generalLessons'
import { Lesson } from '@/data/generalLessons'


import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';

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


    return mintable;
}


/*
* Hook to mint the progress NFT and take care of Spinner etc.
*/
export const useMintProgressNFT =  (questSectionId: string): [showSpinner:  boolean, nftMinted: boolean, accountError: boolean, mintNft: (questSectionId: string) => void] => {
    const [showSpinner, setShowSpinner] = useState(false)
    const [nftMinted, setNftMinted] = useState(false);
    const [accountError, setAccountError] = useState(false)
    const { library } = useWeb3React();

    useEffect(() => {

    }, [showSpinner, nftMinted, accountError])

    const mintNft = async () => {

        if (!library || !library.getSigner()) {
            setAccountError(true)
            return;
        }

        try {
            const contractAddress = QuestNftContractAddresses[questSectionId];
            const contract = new Contract(contractAddress, QuestABI.abi, library.getSigner());
            
            await contract.mint();
            setShowSpinner(true);


            contract.on('Transfer', () => { 
                setShowSpinner(false);
                setNftMinted(true)
            })
        } catch (error) {
            console.error('This is the caught error', error);
            setShowSpinner(false);
            setNftMinted(false)
        }

    }

    return [showSpinner, nftMinted, accountError, mintNft];
}




// type mintableOverview = {
//     [key: string]: boolean
// }


// type key = keyof Lesson

/*
* Checks whether a progress NFT is mintable depending on the requirements
*/
// export const useIsProgressNftMintableOverview = (quests: Lesson, chain: string, balances: BN | undefined, polkaWalletConnected: boolean): mintableOverview => {
//     const [hasProgress] = useUserProgress();
//     const { account } = useWeb3React();
//     let tokenBalance = useTokenBalance('');
//     tokenBalance = !tokenBalance ? 0 : tokenBalance;
//     const mintableOverview: mintableOverview = {}
//     let questSectionId


//     Object.keys(quests).forEach((key: key): mintableOverview  => {
//         const quest = quests[key];
//         questSectionId = quest.questSectionId;

//         if (questSectionId === 'eth-quest-1') {
//             mintableOverview[questSectionId] = account ? true : false
//         } else if (questSectionId === 'dot-quest-1') {
//             mintableOverview[questSectionId] = polkaWalletConnected ? true : false
//         } else if (questSectionId == 'eth-quest-5' || questSectionId == 'eth-quest-6' || questSectionId == 'dot-quest-3' || questSectionId == 'dot-quest-5') {
//             mintableOverview[questSectionId] = checkQuestsForCompleteView(questSectionId, hasProgress)
//         } else if (questSectionId == 'dot-quest-2') {
//             mintableOverview[questSectionId] = balances ? true : false;
//         } else {
//             mintableOverview[questSectionId] = tokenBalance > 0;
//         }


//         return mintableOverview;
//     })
// }