const { ethers, Contract } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';

import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';


type TokenAddresses = {
  [key: string]: string
}

const TokenAddresses: TokenAddresses = {
  "eth-quest-2": process.env.NEXT_PUBLIC_SEPOLIA_ETH as string, //Sepolia Eth
  "eth-quest-3": process.env.NEXT_PUBLIC_GOERLI_ETH as string, // Goerli Eth
  "eth-quest-5": process.env.NEXT_PUBLIC_ARBI_ETH as string, // Arbi Eth
  "dot-quest-2": process.env.NEXT_PUBLIC_DOT as string, // Dot
  "dot-quest-5": process.env.NEXT_PUBLIC_XCDOT as string, // xcDot
};

// Special cases: GLMR on Moonbeam?!
// For BTC https://api.blockchain.com/v3/#/payments/getAccountByTypeAndCurrency
type QuestNftContractAddresses = {
  [key: string]: string
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
  "dot-quest-6": process.env.NEXT_PUBLIC_QUEST_ETH_ONE as string,
};

type Token = keyof typeof TokenAddresses | keyof typeof QuestNftContractAddresses;


/*
* Check if a user holds a certain coin or NFT
*/
export const useBalance = (token: Token, tokenType: string): number => {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState<number>(null);

  useEffect(() => {
    if (!account || !library || !token) return;

    const getTokenBalance = async (): Promise<void> => {

      try {
        const tokenAddress = tokenType === 'nft' ? QuestNftContractAddresses[token]: TokenAddresses[token]

        console.log('token address is', tokenAddress)
        console.log('token is', token)
        const tokenContract = new ethers.Contract(tokenAddress, ["function balanceOf(address) view returns (uint256)"], library);
        let balance = await tokenContract.balanceOf(account);
        balance = ethers.BigNumber.from(balance._hex).toNumber()
        setBalance(balance);
      } catch (e) {
        console.log(e)
        setBalance(0);
      }
     
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



