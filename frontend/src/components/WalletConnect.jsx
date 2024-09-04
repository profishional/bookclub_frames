import { useConnect, useAccount, useDisconnect } from 'wagmi';

export default function WalletConnect() {
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    if (isConnected) {
        return (
            <div>
                <p>Connected to {address}</p>
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>
        );
    }

    return (
        <div>
            {connectors.map((connector) => (
                <button
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    disabled={!connector.ready || isLoading && connector.id === pendingConnector?.id}
                >
                    Connect {connector.name}
                    {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
                </button>
            ))}
            {error && <div>{error.message}</div>}
        </div>
    );
}