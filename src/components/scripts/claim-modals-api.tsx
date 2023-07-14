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
export const useIsProgressNftMintable = (questSectionId: string, token: string, balances: BN | undefined, polkaWalletConnected: boolean): boolean => {
    const [hasProgress] = useUserProgress();
    const { account } = useWeb3React();
    let tokenBalance = useTokenBalance(questSectionId);
    tokenBalance = !tokenBalance ? 0 : tokenBalance;
    let mintable = false;


    if (questSectionId === 'eth-quest-1') {
        mintable = account ? true : false
    } else if (questSectionId === 'dot-quest-1') {
        mintable = polkaWalletConnected ? true : false
    } else if (questSectionId == 'eth-quest-5' || questSectionId == 'eth-quest-6') {
        mintable = checkQuestsForCompleteView(questSectionId, hasProgress)
    } else if (questSectionId == 'dot-quest-2') {
        const stringNumber = balances?.toString();
        mintable = stringNumber && parseInt(stringNumber) > 0 ? true : false;
    } else {
        mintable = tokenBalance > 0;
        console.log(tokenBalance)
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


export const specialQuestMintable = async (args: string): Promise<boolean> => {
    let success = false;
    const url = `https://polkadot.subscan.io/extrinsic/${args}`
    console.log(url)

    try {
        const response = await fetch(url);
        console.log('From Fetching', response)
        success = response.status === 200;
    } catch (error) {
        success = false;
    }


    return success;
}