require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config()

const { API_URL_SEPOLIA, API_URL_ARBITRUM_TESTNET, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545"
        },
        hardhat: {
            chainId: 1337
        },
        sepolia: {     
            url: API_URL_SEPOLIA,      
            accounts: [`0x${PRIVATE_KEY}`],   
        },
        arbitrum: {
            url: API_URL_ARBITRUM_TESTNET,
            accounts: [`0x${PRIVATE_KEY}`],
        }
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
        url: API_URL
    },
    skipFiles: ['node_modules'],
    solidity: "0.8.7",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};