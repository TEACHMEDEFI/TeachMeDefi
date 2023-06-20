const { ethers } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';
import { Alchemy, Network } from "alchemy-sdk";

import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';


type TokenAddresses = {
  [key: string]: string
}

const TokenAddresses: TokenAddresses = {
  "eth-quest-2": process.env.NEXT_PUBLIC_SEPOLIA_ETH as string, //Sepolia Eth
  "eth-quest-3": process.env.NEXT_PUBLIC_WETH as string, // WETH
  "eth-quest-4": process.env.NEXT_PUBLIC_ARBI_ETH as string, // Arbitrum Eth
  "dot-quest-5": process.env.NEXT_PUBLIC_XCDOT as string, // xcDot
};


type QuestNftContractAddresses = {
  [key: string]: string
}

export const QuestNftContractAddresses: QuestNftContractAddresses = {
  "eth-quest-1": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "eth-quest-2": process.env.NEXT_PUBLIC_QUEST_ETH_TWO as string,
  "eth-quest-3": process.env.NEXT_PUBLIC_QUEST_ETH_THREE as string,
  "eth-quest-4": process.env.NEXT_PUBLIC_QUEST_ETH_FOUR as string,
  "eth-quest-5": process.env.NEXT_PUBLIC_QUEST_ETH_FIVE as string,
  "eth-quest-6": process.env.NEXT_PUBLIC_QUEST_ETH_SIX as string,

  "dot-quest-1": process.env.NEXT_PUBLIC_QUEST_DOT_ONE as string,
  "dot-quest-2": process.env.NEXT_PUBLIC_QUEST_DOT_TWO as string,
  "dot-quest-3": process.env.NEXT_PUBLIC_QUEST_DOT_THREE as string,
  "dot-quest-4": process.env.NEXT_PUBLIC_QUEST_DOT_FOUR as string,
  "dot-quest-5": process.env.NEXT_PUBLIC_QUEST_DOT_FIVE as string,
};

type Token = keyof typeof TokenAddresses | keyof typeof QuestNftContractAddresses;

type ChainIdPerQuest = {
  [key: string]: string
}

const chainIdPerQuest: ChainIdPerQuest = {
  "eth-quest-2": Network.ETH_SEPOLIA, //Sepolia Eth
  "eth-quest-3": Network.ETH_MAINNET, // WETH
  "eth-quest-4": Network.ARB_MAINNET, // Arbitrum
  "dot-quest-5": Network.ETH_MAINNET, // xcDot
}

type config = {
  apiKey: string | undefined;
  network: string;
}


/*
* Check if a user holds a certain Coin on a blockchain
*/
export const useTokenBalance = (questSectionId: Token): number => {
  const { account } = useWeb3React();
  const [balance, setBalance] = useState<number>(0);

  const tokenAddress :string = TokenAddresses[questSectionId];
  const blockChainToUse = chainIdPerQuest[questSectionId];

  
  useEffect(() => {
    if (!account || !tokenAddress || !blockChainToUse) return;
    getTokenBalance()
  },[account])

    const config: config = {
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
      network: blockChainToUse,
    };

    const getTokenBalance = async (): Promise<void> => { 
      // @ts-ignore: Unreachable code error
      const alchemy = new Alchemy(config);

      // @ts-ignore: Unreachable code error
      const data = await alchemy.core.getTokenBalances(account, [tokenAddress]);

      let balance = data ? data.tokenBalances[0].tokenBalance : 0;
      // @ts-ignore: Unreachable code error
      balance = balance ? parseFloat(balance) : 0;

      setBalance(balance);
  };
  return balance;
};


/*
* Check if a user holds a progress NFT of this quest
*/
export const useNFTBalance = (questSectionId: Token): number => {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (!account || !library || !questSectionId) return;

    const getTokenBalance = async (): Promise<void> => {

      try {
        const tokenAddress = QuestNftContractAddresses[questSectionId]

        if (!tokenAddress) return;

        const tokenContract = new ethers.Contract(tokenAddress, QuestABI.abi, library);
        let balance = await tokenContract.balanceOf(account);
        balance = ethers.BigNumber.from(balance._hex).toNumber()
        setBalance(balance);
        console.log('Balances Are', balance)
      } catch (e) {
        console.log(e)
        setBalance(0);
      }
     
    };

    getTokenBalance();
  }, [account, library]);

  return balance;
};



/*
* Custom Hook to set and get the user's progress to and from local Strorage
*/
export const useUserProgress = (): [hasProgress: (challengeId: string) => boolean, setProgress: (challengeId: string, value: string) => void, numCompletedChallenges: number] => {
  console.log('Importing Progress Hook');
  const [userProgressObject, setUserProgressObject] = useState<{ [key: string]: string }>(() => {
    if (typeof window !== 'undefined') {
      const localStorageData = localStorage.getItem('userProgressObject');
      return localStorageData ? JSON.parse(localStorageData) : { };
    } else {
      return { };
    }
  });

  const [numCompletedChallenges, setNumCompletedChallenges] = useState<number>(() => {
    return Object.values(userProgressObject).filter(value => value === 'check').length;
  });

  useEffect(() => {
    setNumCompletedChallenges(Object.values(userProgressObject).filter(value => value === 'check').length);
  }, [userProgressObject]);

  const hasProgress = (challengeId: string): boolean => {
    return userProgressObject.hasOwnProperty(challengeId);
  };

  const setProgress = (challengeId: string, value: string): void => {
    if (typeof window !== 'undefined') {
      setUserProgressObject(prevState => {
        const newState = { ...prevState };
        if (!newState.hasOwnProperty(challengeId)) {
          newState[challengeId] = value;
          console.log('Setting Progress 2');
          localStorage.setItem('userProgressObject', JSON.stringify(newState));
          setNumCompletedChallenges(Object.values(newState).filter(value => value === 'check').length);
        }
        return newState;
      });
    }
  };

  return [hasProgress, setProgress, numCompletedChallenges];
};

/*
* Check if a transaction url which was provided by the user is a valid address
*/
export const useFetch = (url: string): boolean => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url);
        setIsSuccess(response.status === 200);
      } catch (error) {
        setIsSuccess(false);
      }
    };

    fetchData();
  }, [url]);

  return isSuccess;
};



