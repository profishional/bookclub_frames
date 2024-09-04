import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from 'ethers';

export async function mintNFT(imageUrl: string) {
    try {
        const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
        const signer = new ethers.Wallet("PRIVATE_KEY_FROM_HARDHAT", provider);
        const sdk = ThirdwebSDK.fromSigner(signer);

        const contract = await sdk.getContract("YOUR_DEPLOYED_CONTRACT_ADDRESS");

        const metadata = {
            name: "Book Cover NFT",
            description: "A minted book cover NFT",
            image: imageUrl,
        };

        const tx = await contract.erc721.mint(metadata);
        const receipt = tx.receipt;
        const tokenId = tx.id;
        console.log("Successfully minted NFT with ID:", tokenId);
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
}