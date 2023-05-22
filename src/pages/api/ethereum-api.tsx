const { ethers, Contract } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';

import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';


const TokenAddresses = {
  "eth-2": process.env.NEXT_PUBLIC_SEPOLIA_ETH as string, //Sepolia Eth
  "eth-3": process.env.NEXT_PUBLIC_GOERLI_ETH as string, // Goerli Eth
  "eth-5": process.env.NEXT_PUBLIC_ARBI_ETH as string, // Arbi Eth
  "dot-2": process.env.NEXT_PUBLIC_DOT as string, // Dot
  "dot-5": process.env.NEXT_PUBLIC_XCDOT as string, // xcDot
};

// Special cases: GLMR on Moonbeam?!
// For BTC https://api.blockchain.com/v3/#/payments/getAccountByTypeAndCurrency
const QuestNftContractAddresses = {
  "eth-1": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "eth-2": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "eth-3": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "eth-4": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "eth-5": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "eth-6": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "eth-7": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "dot-1": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "dot-2": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "dot-3": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "dot-4": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "dot-5": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "dot-6": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
  "dot-7": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string
};

type Token = keyof typeof TokenAddresses | keyof typeof QuestNftContractAddresses;


/*
* Check if a user holds a certain coin or NFT
*/
export const useBalance = (token: Token, tokenType: string): string | null => {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    if (!account || !library || !token) return;

    const getTokenBalance = async (): Promise<void> => {
      const tokenAddress = tokenType === 'nft' ? QuestNftContractAddresses[token]: "TokenAddresses[token]"
      const tokenContract = new ethers.Contract(tokenAddress, ["function balanceOf(address) view returns (uint256)"], library);
      const balance = await tokenContract.balanceOf(account);
      setBalance(balance.toString());
    };

    getTokenBalance();
  }, [account, library, token, tokenType]);

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
* Hook to Mint a progress NFT
*/
export const useMintNFT = (questId: keyof typeof QuestNftContractAddresses): [handleMint: () => Promise<void>, txHash: string | null] => {
  const { library } = useWeb3React();
  const [txHash, setTxHash] = useState<string | null>(null);
  

  const handleMint = async (): Promise<void> => {
    console.log('Starting to Mint for lesson:', questId)
    try {
      const contractAddress = QuestNftContractAddresses[questId];
      const contract = new Contract(contractAddress, QuestABI.abi, library.getSigner());

      

      const tx = await contract.mint();
      setTxHash(tx.hash);
    } catch (error) {
      console.error(error);
    }
  };

  return [handleMint, txHash];
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



