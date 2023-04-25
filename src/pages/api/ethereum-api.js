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
const QuestNftContractAddresses = {
  "eth1": "EXAMPLE CONTRACT ADDRESS"
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
