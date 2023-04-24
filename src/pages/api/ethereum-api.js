import ERC721 from '../ERC721.json'
const { ethers } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import Web3Modal from "web3modal";
import useSWR from 'swr';
import { Web3Provider } from '@ethersproject/providers';
import { fetcher } from "./fetcher";
import { useState, useEffect } from 'react';

import QuestABI from '../artifacts/contracts/OBYTransfer_V2.sol/OBYTransfer_V2.json';


export const normalFetcher = (url) => fetch(url).then((res) => res.json());


export const useTokensHeld = async (tokenId) => {
    const { account, active, library } = useWeb3React<Web3Provider>()
    // TokenId > Retrieve Contract Address from .env
    const { data, error } = useSWR(active ? [process.env[tokenId], 'balanceOf', account] : null, fetcher(library, QuestABI.abi),
        {
            revalidateOnFocus: true
        });

    const balance = data ? ethers.BigNumber.from(data._hex).toNumber() : 0;

    return balance > 0;
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


export const mintQuestNFT = async (questContractAddress) => {
  const web3Modal = new Web3Modal({
    // network: "mainnet",
      cacheProvider: true,
  });

  const connection = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()
  const questNFTContract = new ethers.Contract(process.env[questContractAddress], QuestABI.abi, signer);
  let success;
  let error;
  try {
      const tx = await questNFTContract.mint();
      success = tx;
      // toastMessage(
      //     <p className="text-xs text-gray-900">
      //         Your Illumina is on your way!
      //     </p>
      // )
  } catch (e) {
    error = e;
    if (e.code === 4001) {
        throw new Error('Rejected');
    }
    else throw new Error(e.data.message);
  }
  return {
      success,
      error
  }
}
