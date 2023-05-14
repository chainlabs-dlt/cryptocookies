import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DAppProvider, Config, Chain } from '@usedapp/core'

export const Chainlabs: Chain = {
  chainId: 2001,
  chainName: 'Chainlabs',
  isTestChain: false,
  isLocalChain: false,
  getExplorerAddressLink: () => '',
  getExplorerTransactionLink: () => '',
  multicall2Address: '0x2E710B9fAEbf0a86F40bCe9BF4931cC1A371895F', 
  multicallAddress: '0x85905BD5B26755e524FB871c25Dfc632C187E5eF', 
  nativeCurrency: {
    name: 'Chainlabs Ether',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrl: 'https://eth.cryptocookies.wtf'
}

const config: Config = {
  networks: [Chainlabs],
  readOnlyChainId: Chainlabs.chainId,
  readOnlyUrls: {
    [Chainlabs.chainId]: 'https://eth.cryptocookies.wtf'
  },
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
