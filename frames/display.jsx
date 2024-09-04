import { Frame, Button, Image } from 'farcaster-frames';

export default function DisplayFrame({ bookCover, onMint, onRetry }) {
    return (
        <Frame>
            <Image src={bookCover.imageUrl} alt={bookCover.title} />
            <p>{bookCover.title} by {bookCover.author}</p>
            <Button onClick={onMint}>Mint NFT</Button>
            <Button onClick={onRetry}>Retry Search</Button>
        </Frame>
    );
}