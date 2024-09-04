const hre = require("hardhat");

async function main() {
    const BookCoverNFT = await hre.ethers.getContractFactory("BookCoverNFT");
    const bookCoverNFT = await BookCoverNFT.deploy();

    await bookCoverNFT.deployed();

    console.log("BookCoverNFT deployed to:", bookCoverNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });