const hre = require("hardhat");
require("dotenv").config()



const baseURIs = {
    "eth-1": "example-uri-1"
}


async function main() {

    const Quest = await hre.ethers.getContractFactory("TMDQuest");
    const baseURI = baseURIs['eth-1'];

    const quest = await Quest.deploy(baseURI);
    await quest.deployed();

    console.log('Quest Address is:', quest.address);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });