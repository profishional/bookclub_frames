import React, { useEffect, useState } from 'react';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const BookshelfDisplay: React.FC = () => {
    const [nfts, setNfts] = useState<any[]>([]);

    useEffect(() => {
        const fetchNFTs = async () => {
            try {
                const sdk = new ThirdwebSDK("ethereum");
                const contract = await sdk.getContract("YOUR_CONTRACT_ADDRESS");
                const ownedNFTs = await contract.erc721.getOwned();
                setNfts(ownedNFTs);
            } catch (error) {
                console.error("Error fetching NFTs:", error);
            }
        };

        fetchNFTs();
    }, []);

    return (
        <div>
            <h2>Your Bookshelf</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {nfts.map((nft) => (
                    <div key={nft.metadata.id} style={{ margin: '10px' }}>
                        <img src={nft.metadata.image} alt={nft.metadata.name} style={{ width: '150px' }} />
                        <p>{nft.metadata.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookshelfDisplay;