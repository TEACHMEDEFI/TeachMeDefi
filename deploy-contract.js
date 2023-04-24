const hre = require("hardhat");
require("dotenv").config()


async function main() {

    const QuestFactory = await hre.ethers.getContractFactory("TMDQuestFactory");

    const questFactory = QuestFactory.deploy();
    await questFactory.deployed();

    console.log('QuestFactory Address is:', questFactory.address);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });