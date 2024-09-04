import { useState } from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';
import Bookshelf from './components/Bookshelf';
import WalletConnect from './components/WalletConnect';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()]
);

const config = createConfig({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    publicClient,
    webSocketPublicClient,
});

function App() {
    return (
        <WagmiConfig config={config}>
            <div className="App">
                <h1>BookClub NFT Bookshelf</h1>
                <WalletConnect />
                <Bookshelf />
            </div>
        </WagmiConfig>
    );
}

export default App;