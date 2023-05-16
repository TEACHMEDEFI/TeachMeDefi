require("dotenv").config()
    // const Tx = require("ethereumjs-tx");
const ethers = require("ethers");
const {QUEST_ETH_ONE, INFURA_API_KEY, PRIVATE_KEY } = process.env;

var infuraProvider = new ethers.providers.InfuraProvider('sepolia', INFURA_API_KEY);

const QuestABI = require("./artifacts/contracts/TMDQuest.sol/TMDQuest.json")
const baseURI = "https://ipfs.io/ipfs/QmPSya9xYL7aSfo1pQkwVZVQEiKshFNJSM3CPTPigaYvnd?filename=quest_one.json"

const setbaseURI = async() => {

    const wallet = new ethers.Wallet(PRIVATE_KEY, infuraProvider);
    const questContract = new ethers.Contract(QUEST_ETH_ONE, QuestABI.abi, wallet);


    const tokenURI = await questContract.tokenURI(1);
    console.log(tokenURI);

    let tx2 = await questContract.setBaseURI(baseURI);
    console.log(tx2.hash)

   
};

setbaseURI();