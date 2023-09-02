const { Contract } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react'
import BN from 'bn.js';
import { useUserProgress, useTokenBalance, QuestNftContractAddresses } from '../../pages/api/ethereum-api'
import { ethQuests } from '@/data/eth';
import { dotQuests } from '@/data/dot';
import { btcQuests } from '@/data/btc';


import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';

type QuestHints = {
    [key: string]: string
}

export const questHints: QuestHints = {
    "eth-quest-1": "Hinweis: Um diese Quest zu bestehen, musst du deine Wallet mit dieser Webseite verbinden.",
    "eth-quest-2": "Hinweis: Um diese Quest zu bestehen, musst du eine beliebige Menge an Sepolia ETH Coins in der Wallet halten, welche du mit dieser Webseite verbunden hast.",
    "eth-quest-3": "Hinweis: Um diese Quest zu bestehen, musst du eine beliebige Menge an WETH auf dem Mumbai Testnet in der Wallet halten, welche du mit dieser Webseite verbunden hast.",
    "eth-quest-4": "Hinweis: Um diese Quest zu bestehen, musst du eine beliebige Menge an ETH auf dem Arbitrium One Netzwerk in deiner Wallet halten, welche du mit dieser Webseite verbunden hast",
    "eth-quest-5": "Hinweis: Um diese Quest zu bestehen, musst du dir alle Videos zur Quest 5 anschauen",
    "eth-quest-6": "Hinweis: Um diese Quest zu bestehen, musst du dir alle Videos zur Quest 6 anschauen",

    "dot-quest-1": "Hinweis: Um diese Quest zu bestehen, musst du deine Wallet mit dieser Webseite verbinden.",
    "dot-quest-2": "Hinweis: Um diese Quest zu bestehen, musst du eine beliebige Menge an DOT Coins in der Polkadot Wallet halten, welche du mit dieser Webseite verbunden hast.",
    "dot-quest-3": "Hinweis: Um diese Quest zu bestehen, musst du eine beliebige Menge an DOT Coins wie im Tutorial mit der Polkadot Wallet staken, welche du mit dieser Webseite verbunden hast.",
    "dot-quest-4": "Hinweis: Um diese Quest zu bestehen, musst du eine beliebige Menge an xcDOT Coins auf dem Moonbeam-Netzwerk in deiner (Ethereum-kompatiblen) Wallet halten, welche du mit dieser Webseite verbunden hast.",
    "dot-quest-5": "Hinweis: Um diese Quest zu bestehen, wird geprüft ob du eine beliebige Menge an GLMR Coins in der (Ethereum-kompatiblen) Wallet übrig hast, welche mit dieser Webseite verbunden ist.",

    "btc-quest-1": "Hinweis: Um diese Quest zu bestehen, musst du dir alle Videos zur Quest 6 anschauen",
    "btc-quest-2": "Hinweis: Um diese Quest zu bestehen, musst du dir alle Videos zur Quest 6 anschauen",
    "btc-quest-3": "Hinweis: Um diese Quest zu bestehen, musst du dir alle Videos zur Quest 6 anschauen",
    "btc-quest-4": "Hinweis: Um diese Quest zu bestehen, musst du dir alle Videos zur Quest 6 anschauen"
}


/*
* Helper function to check wether a user has completed all videos of a certain questId
*/
export const checkQuestsForCompleteView = (questSectionId: string, hasProgress: Function, isBitcoinQuest: boolean): boolean => {
    let userHasAllProgress = true;
    let dataArray = dotQuests

    if (questSectionId.indexOf('eth') > -1) {
        dataArray = ethQuests;
    }

    if (isBitcoinQuest) {
        dataArray = btcQuests;
    }

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
export const useIsProgressNftMintable = (questSectionId: string, isBtcQuest: boolean, balances: BN | undefined, polkaWalletConnected: boolean): boolean => {
    const [hasProgress] = useUserProgress();
    const { account } = useWeb3React();
    let tokenBalance = useTokenBalance(questSectionId);
    tokenBalance = !tokenBalance ? 0 : tokenBalance;
    let mintable = false;


    if (questSectionId === 'eth-quest-1') {
        mintable = account ? true : false
    } else if (questSectionId === 'dot-quest-1') {
        mintable = polkaWalletConnected ? true : false
    } else if (questSectionId == 'eth-quest-5' || questSectionId == 'eth-quest-6' || isBtcQuest) {
        mintable = checkQuestsForCompleteView(questSectionId, hasProgress, isBtcQuest)
    } else if (questSectionId == 'dot-quest-2' || questSectionId == 'dot-quest-4' || questSectionId == 'dot-quest-5') {
        const stringNumber = balances?.toString();
        mintable = stringNumber && parseInt(stringNumber) > 0 ? true : false;
    }  else {
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


export const specialQuestMintable = async (args: string): Promise<boolean> => {
    let success = false;
    const url = `https://polkadot.subscan.io/extrinsic/${args}`

    try {
        const response = await fetch(url);
        success = response.status === 200;
    } catch (error) {
        success = false;
    }


    return success;
}
