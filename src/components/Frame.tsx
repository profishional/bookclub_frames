import React, { useState } from 'react';
import { fetchBookCover } from '../utils/bookApi';
import { mintNFT } from '../utils/nftMinting';

const Frame: React.FC = () => {
    const [bookInput, setBookInput] = useState('');
    const [coverUrl, setCoverUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const cover = await fetchBookCover(bookInput);
        setCoverUrl(cover);
        if (cover) {
            await mintNFT(cover);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bookInput}
                    onChange={(e) => setBookInput(e.target.value)}
                    placeholder="Enter book title or ISBN"
                />
                <button type="submit">Mint Book Cover</button>
            </form>
            {coverUrl && <img src={coverUrl} alt="Book Cover" />}
        </div>
    );
};

export default Frame;