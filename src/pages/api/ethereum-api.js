const { ethers } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';

import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';


export const normalFetcher = (url) => fetch(url).then((res) => res.json());


const TokenAddresses = {
  "eth": "Eth Contract Address"
}


export const useBalance = async (token) => {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!account || !library || !tokenAddress) return;

    const tokenContract = new ethers.Contract(TokenAddresses[token], ["function balanceOf(address) view returns (uint256)"], library);
    tokenContract.balanceOf(account).then((balance) => {
      setBalance(balance.toString());
    });
  }, [account, library, token]);

  return balance;
}


export const useUserProgress = () => {
  const [userProgressObject, setUserProgressObject] = useState(() => {
    const localStorageData = localStorage.getItem('userProgressObject');
    return localStorageData ? JSON.parse(localStorageData) : { 'ethereum-quest-one': 'check' };
  });

  const [numCompletedChallenges, setNumCompletedChallenges] = useState(() => {
    return Object.values(userProgressObject).filter(value => value === 'check').length;
  });

  useEffect(() => {
    setNumCompletedChallenges(Object.values(userProgressObject).filter(value => value === 'check').length);
  }, [userProgressObject]);

  const hasProgress = (challengeId) => {
    return userProgressObject.hasOwnProperty(challengeId);
  }

  const setProgress = (challengeId, value) => {
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

  return [hasProgress, setProgress, numCompletedChallenges];
}



// Move to .env or store here in File?
// Special cases: GLMR on Moonbeam?!
// For BTC https://api.blockchain.com/v3/#/payments/getAccountByTypeAndCurrency
const QuestNftContractAddresses = {
  "eth2": "0xd38e5c25935291ffd51c9d66c3b7384494bb099a", //Sepolia Eth
  "eth3": "0xdd69db25f6d620a7bad3023c5d32761d353d3de9", // Goerli Eth
  "eth5": "0x912CE59144191C1204E64559FE8253a0e49E6548", // Arbi Eth
  "polka2": "0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3", // Dot
  "polka5": "0xffffffff1fcacbd218edc0eba20fc2308c778080", // xcDot

}


export const useMintNFT = async (questId) => {
  const { library } = useWeb3React();
  const [txHash, setTxHash] = useState(null);

  const handleMint = async () => {
    try {
      const contractAddress = QuestNftContractAddresses[questId];
      const contract = new Contract(contractAddress, QuestABI.abi, library.getSigner());

      const tx = await contract.mint();
      setTxHash(tx.hash);
    } catch (error) {
      console.error(error);
    }
  }

  return [handleMint, txHash];
}



// Polka 4 and 5 + Eth 4 and 6
export const useFetch = (url) => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
     const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsSuccess(response.status === 200);
      } catch (error) {
        setIsSuccess(false);
      }
    }

    fetchData();
  }, [url]);

  return isSuccess;
}



