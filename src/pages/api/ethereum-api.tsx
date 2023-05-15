const { ethers, Contract } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';

import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';


export const normalFetcher = (url) => fetch(url).then((res) => res.json());


type Token = keyof typeof TokenAddresses;

const TokenAddresses = {
  "eth-2": "0xd38e5c25935291ffd51c9d66c3b7384494bb099a", //Sepolia Eth
  "eth-3": "0xdd69db25f6d620a7bad3023c5d32761d353d3de9", // Goerli Eth
  "eth-5": "0x912CE59144191C1204E64559FE8253a0e49E6548", // Arbi Eth
  "dot-2": "0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3", // Dot
  "dot-5": "0xffffffff1fcacbd218edc0eba20fc2308c778080", // xcDot
};

export const useBalance = (token: Token): string | null => {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    if (!account || !library || !token) return;

    const getTokenBalance = async (): Promise<void> => {
      const tokenContract = new ethers.Contract(TokenAddresses[token], ["function balanceOf(address) view returns (uint256)"], library);
      const balance = await tokenContract.balanceOf(account);
      setBalance(balance.toString());
    };

    getTokenBalance();
  }, [account, library, token]);

  return balance;
};


export const useUserProgress = (): [hasProgress: (challengeId: string) => boolean, setProgress: (challengeId: string, value: string) => void, numCompletedChallenges: number] => {
  console.log('Importing Progress Hook');
  const [userProgressObject, setUserProgressObject] = useState<{ [key: string]: string }>(() => {
    if (typeof window !== 'undefined') {
      const localStorageData = localStorage.getItem('userProgressObject');
      return localStorageData ? JSON.parse(localStorageData) : { };
    } else {
      return { 'eth-1': 'check' };
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
    console.log('Setting Progress');
    if (typeof window !== 'undefined') {
      setUserProgressObject(prevState => {
        const newState = { ...prevState };
        if (!newState.hasOwnProperty(challengeId)) {
          newState[challengeId] = value;
          localStorage.setItem('userProgressObject', JSON.stringify(newState));
          setNumCompletedChallenges(Object.values(newState).filter(value => value === 'check').length);
        }
        return newState;
      });
    }
  };

  return [hasProgress, setProgress, numCompletedChallenges];
};



// Move to .env or store here in File?
// Special cases: GLMR on Moonbeam?!
// For BTC https://api.blockchain.com/v3/#/payments/getAccountByTypeAndCurrency
const QuestNftContractAddresses = {
  "eth-1": process.env.QUEST_ETH_ONE as string
};

export const useMintNFT = (questId: keyof typeof QuestNftContractAddresses): [handleMint: () => Promise<void>, txHash: string | null] => {
  const { library } = useWeb3React();
  const [txHash, setTxHash] = useState<string | null>(null);

  const handleMint = async (): Promise<void> => {
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



// Polka 4 and 5 + Eth 4 and 6
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



