import React, { useState } from 'react';
import './App.css';
import { connectWallet } from './zkSyncConnection';

function App() {
    const [walletConnected, setWalletConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');

    const handleConnectWallet = async () => {
        const walletInfo = await connectWallet();
        if (walletInfo) {
            setWalletConnected(true);
            setWalletAddress(walletInfo.address);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to SACCO on zkSync</h1>
                {!walletConnected ? (
                    <button onClick={handleConnectWallet}>Connect Wallet</button>
                ) : (
                    <div>
                        <p>Wallet Connected: {walletAddress}</p>
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
