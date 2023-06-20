const hre = require("hardhat");
require("dotenv").config()


const collectionNameEth = "Ethereum Quest";
const collectionNameDot = "Polkadot Quest"

const tokenCounterEth = "EthQuest"
const tokenCounterDOT = "DotQuest"



const baseURIs = {
    "dot-1": "https://ipfs.io/ipfs/QmeKbmmgm4vnWPd3KaZNVfLg3mrAkzKUVfcCWbQRQkovbE?filename=dot-quest-1.json",
    "dot-2": "https://ipfs.io/ipfs/QmUUjQwLkjFJnfbRpKNZTX6w55nTrUSkVNFLmiYjjbwmBG?filename=dot-quest-2.json",
    "dot-3": "https://ipfs.io/ipfs/QmcCNWc9kdUKNzWqQfdvktADDjZAggVGK6AM6kF4HZCKsA?filename=dot-quest-3.json",
    "dot-4": "https://ipfs.io/ipfs/QmNshFoUSx3mS39XVMvU4sz4cxgZ6nqZBGKsBRc1J2eF6M?filename=dot-quest-4.json",
    "dot-5": "https://ipfs.io/ipfs/QmXhSYdeq4mzjy6GzBC5RzyBxtQomD2nEDJbANbGFmPDbS?filename=dot-quest-5.json",
    "eth-1": "https://ipfs.io/ipfs/QmNtxsuguPZm7oagPxqK3j8cWXjeXxR9e42T7vrR4PssDr?filename=eth-quest-1.json",
    "eth-2": "https://ipfs.io/ipfs/Qma28WbkwLh2coQJe3uEkKJNNqjdBDCryFv22RcDxnEf7J?filename=eth-quest-2.json",
    "eth-3": "https://ipfs.io/ipfs/QmWvcDFxPDze6nY4y16TmVUxErSWoR2fdN7bvQiQahCzwC?filename=eth-quest-3.json",
    "eth-4": "https://ipfs.io/ipfs/QmetZoVEqWW69YdjpkWXt2sAsHwMGneBM31vY36LXCRqhM?filename=eth-quest-4.json",
    "eth-5": "https://ipfs.io/ipfs/QmYaEk4aSPLzMjBjJx8KxhdtmgC4fwanNGnFHuCyCcAGJq?filename=eth-quest-5.json",
    "eth-6": "https://ipfs.io/ipfs/QmQVL99uVTkwXSzpKo3xmzb9GQgjvt49Z8YDMnnD8jQhpZ?filename=eth-quest-6.json"
}

const contractAddresses = {
    Ethquest1: 0x0017dbCF88C96c9214559b9776Ac5428C1632023,
    Ethquest2: 0xA643987D9aC2F41ba3F3506943694282aB540EaC,
    Ethquest3: 0xF825f423d5d68d6328eaDa188365e16A6378bb00,
    Ethquest4: 0x9094A4f5e0F0173A0C281e93f12243dce495EA0B,
    Ethquest5: 0x5493b3704eFb16087A42dE882d2ab0ec7Dd1B7Ed,
    Ethquest6: 0x35fd8C62E7CFeEf59A539dFD8E22b0f690190E02,
    Dotquest1: 0x990F5F4B37beb1e54170B0b86A87A9C6aa5186c7,
    Dotquest2: 0x635ddD3E77E2A771b37547F1C00770068bCAE068,
    Dotquest3: 0x2e4F22031Ab57c8783C25fce9F701C24399A774f,
    Dotquest4: 0x961854759682A7B073D5F5A63cF6B5F8F9721e43,
    Dotquest6: 0xAf1903203B3F1ab49e59499710E673c888789ac6
}


module.exports = [baseURIs['eth-2'], collectionNameEth, tokenCounterEth]




