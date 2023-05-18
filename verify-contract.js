const hre = require("hardhat");
require("dotenv").config()

const {  QUEST_ETH_ONE } = process.env;



const baseURIs = {
    "eth-1": "example-uri-1"
}


const baseURI = baseURIs['eth-1'];



// npx hardhat verify 0x82Cbb7E5838cb4851Ca6D5B6809B15B4A5a51997 --network sepolia --constructor-args ./verify-contract.js 

module.exports = [baseURI]