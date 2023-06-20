const hre = require("hardhat");
require("dotenv").config()



const baseURIs = {
    "eth-1": "https://ipfs.io/ipfs/QmNtxsuguPZm7oagPxqK3j8cWXjeXxR9e42T7vrR4PssDr",
    "eth-2": "https://ipfs.io/ipfs/Qma28WbkwLh2coQJe3uEkKJNNqjdBDCryFv22RcDxnEf7J",
    "eth-3": "https://ipfs.io/ipfs/QmWvcDFxPDze6nY4y16TmVUxErSWoR2fdN7bvQiQahCzwC",
    "eth-4": "https://ipfs.io/ipfs/QmetZoVEqWW69YdjpkWXt2sAsHwMGneBM31vY36LXCRqhM",
    "eth-5": "https://ipfs.io/ipfs/QmYaEk4aSPLzMjBjJx8KxhdtmgC4fwanNGnFHuCyCcAGJq",
    "eth-6": "https://ipfs.io/ipfs/QmQVL99uVTkwXSzpKo3xmzb9GQgjvt49Z8YDMnnD8jQhpZ",

    "dot-1": "https://ipfs.io/ipfs/QmeKbmmgm4vnWPd3KaZNVfLg3mrAkzKUVfcCWbQRQkovbE",
    "dot-2": "https://ipfs.io/ipfs/QmUUjQwLkjFJnfbRpKNZTX6w55nTrUSkVNFLmiYjjbwmBG",
    "dot-3": "https://ipfs.io/ipfs/QmcCNWc9kdUKNzWqQfdvktADDjZAggVGK6AM6kF4HZCKsA",
    "dot-4": "https://ipfs.io/ipfs/QmNshFoUSx3mS39XVMvU4sz4cxgZ6nqZBGKsBRc1J2eF6M",
    "dot-5": "https://ipfs.io/ipfs/QmXhSYdeq4mzjy6GzBC5RzyBxtQomD2nEDJbANbGFmPDbS"
}


async function main() {

    let Quest = await hre.ethers.getContractFactory("TMDQuest");
    const collectionNameEth = "Ethereum Quest";
    const collectionNameDot = "Polkadot Quest"

    const tokenCounterEth = "EthQuest"
    const tokenCounterDOT = "DotQuest"

    const baseURI1 = baseURIs['eth-1'];
    const baseURI2 = baseURIs['eth-2'];
    const baseURI3 = baseURIs['eth-3'];
    const baseURI4 = baseURIs['eth-4'];
    const baseURI5 = baseURIs['eth-5'];
    const baseURI6 = baseURIs['eth-6'];

    const baseURI7 = baseURIs['dot-1'];
    const baseURI8 = baseURIs['dot-2'];
    const baseURI9 = baseURIs['dot-3'];
    const baseURI10 = baseURIs['dot-4'];
    const baseURI11 = baseURIs['dot-5'];

    // Next Quest
    const Ethquest1 = await Quest.deploy(baseURI1, collectionNameEth, tokenCounterEth);
    await Ethquest1.deployed();
    console.log('Ethquest1 Address is:', Ethquest1.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Ethquest2 = await Quest.deploy(baseURI2, collectionNameEth, tokenCounterEth);
    await Ethquest2.deployed();
    console.log('Ethquest2 Address is:', Ethquest2.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Ethquest3 = await Quest.deploy(baseURI3, collectionNameEth, tokenCounterEth);
    await Ethquest3.deployed();
    console.log('Ethquest3 Address is:', Ethquest3.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Ethquest4 = await Quest.deploy(baseURI4, collectionNameEth, tokenCounterEth);
    await Ethquest4.deployed();
    console.log('Ethquest4 Address is:', Ethquest4.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Ethquest5 = await Quest.deploy(baseURI5, collectionNameEth, tokenCounterEth);
    await Ethquest5.deployed();
    console.log('Ethquest5 Address is:', Ethquest5.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Ethquest6 = await Quest.deploy(baseURI6, collectionNameEth, tokenCounterEth);
    await Ethquest6.deployed();
    console.log('Ethquest6 Address is:', Ethquest6.address);


    // Polka Quests
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Dotquest1 = await Quest.deploy(baseURI7, collectionNameDot, tokenCounterDOT);
    await Dotquest1.deployed();
    console.log('Dotquest1 Address is:', Dotquest1.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Dotquest2 = await Quest.deploy(baseURI8, collectionNameDot, tokenCounterDOT);
    await Dotquest2.deployed();
    console.log('Dotquest2 Address is:', Dotquest2.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Dotquest3 = await Quest.deploy(baseURI9, collectionNameDot, tokenCounterDOT);
    await Dotquest3.deployed();
    console.log('Dotquest3 Address is:', Dotquest3.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Dotquest4 = await Quest.deploy(baseURI10, collectionNameDot, tokenCounterDOT);
    await Dotquest4.deployed();
    console.log('Dotquest4 Address is:', Dotquest4.address);
    // Next Quest
    Quest = await hre.ethers.getContractFactory("TMDQuest");
    const Dotquest5 = await Quest.deploy(baseURI11, collectionNameDot, tokenCounterDOT);
    await Dotquest5.deployed();
    console.log('Dotquest6 Address is:', Dotquest5.address);


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });