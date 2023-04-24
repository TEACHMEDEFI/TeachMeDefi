import ERC721 from '../ERC721.json'
const { ethers } = require('ethers')
const provider = new ethers.providers.JsonRpcProvider('https://my-chainstack-node/123456')




// Example of how to check for certain NFT
const holdsToken = async (contractAddress) => {
    const ERC721 = require()
    const provider = await web3Modal.connect() /* This example uses the web3Modal package */
    const web3 = new Web3(provider)
    const accounts = await web3.eth.getAccounts()
    const currentWallet = Web3.utils.toChecksumAddress(accounts[0])
  
    const contract = new web3.eth.Contract(ERC721.abi, contractAddress)
  
    const result = await contract.methods.balanceOf(currentWallet).call()
  
    return parseInt(result) && parseInt(result) > 0
  }



/**
 * Gets current balance
 * @param {*} token object with address, name and symbol
 * @param {*} wallet address to query
 * @returns
 */
const getSingleTokenBalance = async (token, wallet) => {
  const contract = new ethers.Contract(token.address, 'ERC20_ABI', provider)
  const res = await contract.balanceOf(wallet)
  return res
}


const getUserProgressByWalletAddress = async (wallet) => {}


const setUserProgressByWalletAddress = async (wallet) => {}


const mintQuestNFT = async (questContractAddress) => {}