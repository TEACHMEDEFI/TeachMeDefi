const { ethers, utils } = require('ethers')
import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';
import { Alchemy, Network } from "alchemy-sdk";


import QuestABI from '../../../artifacts/contracts/TMDQuest.sol/TMDQuest.json';


type TokenAddresses = {
  [key: string]: string
}

const TokenAddresses: TokenAddresses = {
  "eth-quest-2": process.env.NEXT_PUBLIC_SEPOLIA_ETH as string, //Sepolia Eth
  "eth-quest-3": process.env.NEXT_PUBLIC_WETH as string, // WETH on Mumbai
  "eth-quest-4": process.env.NEXT_PUBLIC_ARBI_ETH as string, // Arbitrum Eth on Arbi Mainnet
  "dot-quest-5": process.env.NEXT_PUBLIC_XCDOT as string, // xcDot auf Eth Mainnet
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

  "btc-quest-1": process.env.NEXT_PUBLIC_QUEST_BTC_ONE as string,
  "btc-quest-2": process.env.NEXT_PUBLIC_QUEST_BTC_TWO as string,
  "btc-quest-3": process.env.NEXT_PUBLIC_QUEST_BTC_THREE as string,
  "btc-quest-4": process.env.NEXT_PUBLIC_QUEST_BTC_FOUR as string
};

type Token = keyof typeof TokenAddresses | keyof typeof QuestNftContractAddresses;

type ChainIdPerQuest = {
  [key: string]: string
}

const chainIdPerQuest: ChainIdPerQuest = {
  "eth-quest-2": Network.ETH_SEPOLIA, //Sepolia Eth
  "eth-quest-3": Network.MATIC_MUMBAI, // WETH
  "eth-quest-4": Network.ARB_MAINNET, // Arbitrum
  "dot-quest-4": Network.ETH_MAINNET, // xcDot
  "dot-quest-5": Network.ETH_MAINNET, // GLMR
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

  
  const config: config = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: blockChainToUse,
  };
  // @ts-ignore: Unreachable code error
  const alchemy = new Alchemy(config);

  
  useEffect(() => {
    if (!account || !tokenAddress || !blockChainToUse) return;
    getTokenBalance()
  },[account])


  const getTokenBalance = async (): Promise<void> => { 

      // const latestBlock = await alchemy.core.getBlockNumber();
      // console.log("The latest block number is", latestBlock);
      let balances;


      // Get balance and format in terms of ETH
      if (questSectionId === 'eth-quest-2' || questSectionId === 'eth-quest-4') {
        
        balances = await alchemy.core.getBalance(account as string, 'latest');
        balances = utils.formatEther(balances);
        // console.log(`Eth Balance of ${account as string}: ${balances} ETH`);

      // Get Balances for any other Token
      } else {
        const data = await alchemy.core.getTokenBalances(account as string, [tokenAddress]);

        balances = data ? data.tokenBalances[0].tokenBalance : 0;

        // @ts-ignore: Unreachable code error
        balances = Number(balances) // ? parseFloat(balances) : 0;

        // console.log(`Any Other Token Balance of ${account as string}: ${balances}`)
      }

      setBalance(balances);
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


export const useConnectedToMetaMask = (): boolean => {
  const { account } = useWeb3React();

  return account ? true : false;
}

/*
* Helper Function to force user to switch to sepolia on pageLoad and on opening a modal
*/
export const switchNetworkIfNeeded = async (): Promise<void> => {
  const chainId = Number(process.env.NEXT_PUBLIC_BLOCKCHAIN_ID)
  if (typeof window !== 'undefined' && window.ethereum.networkVersion !== chainId) {

    // window.ethereum.request({
    //   method: 'wallet_addEthereumChain',
    //   params: [
    //     {
    //       chainName: 'Sepolia',
    //       chainId: '11155111',
    //       nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
    //       rpcUrls: ['https://rpc2.sepolia.org']
    //     }
    //   ]
    // });
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xaa36a7' }],
    });
  }
}


// export const useGetItemsForProgressBar = (currentLessonId: string, chain: string): [items: Quests, isQuestSection: boolean] => {
//   const [items, setItems] = useState<Quests>()
//   const [isQuestSection, setIsQuestSection] = useState<boolean>(true)

//   const questsToUse = chain === 'eth' ? ethQuests : dotQuests;
//   const theoryToUse = chain === 'eth' ? ethTheory : dotTheory


//   let questForProgressBar = questsToUse.find((quest: Quests) => quest.lessons.some(lesson => lesson.id === currentLessonId));

//   let safetyLessons: any = [];

//   if (!questForProgressBar) {
//     questForProgressBar = theoryToUse.find((quest: Quests)  => quest.lessons.some(lesson => lesson.id === currentLessonId));
//     setIsQuestSection(false)
//   }

//   if (!questForProgressBar) {
//     questForProgressBar = generalLessons.find((quest: Quests)  => quest.lessons.some(lesson => lesson.id === currentLessonId));
//     setIsQuestSection(false)
//   }

//   if (!questForProgressBar) {
//     questSicherheit.forEach((sicherheit) => {
//       safetyLessons.push(sicherheit)
//     })
//     questForProgressBar = {
//         questTitle: 'safety',
//         lessons: safetyLessons,
//         questSectionId: 'safety'

//     }
//     setIsQuestSection(false)
//   }

//   setItems(questForProgressBar)


//   return {
//     items,
//     isQuestSection
//   }
// }
