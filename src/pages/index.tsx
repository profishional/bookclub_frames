import React from 'react';
import Frame from '../components/Frame';
import BookshelfDisplay from '../components/BookshelfDisplay';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Book Cover NFT Minter</h1>
            <Frame />
            <BookshelfDisplay />
        </div>
    );
};

export default Home;